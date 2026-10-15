const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

async function computeStreak(userId) {
  const { rows } = await pool.query(
    `SELECT DISTINCT activity_date FROM (
       SELECT date(answered_at) AS activity_date FROM practice_answers pa
         JOIN practice_attempts at ON at.id = pa.attempt_id WHERE at.user_id = $1
       UNION
       SELECT date(completed_at) AS activity_date FROM exam_attempts WHERE user_id = $1 AND completed_at IS NOT NULL
       UNION
       SELECT date(created_at) AS activity_date FROM chat_messages WHERE user_id = $1 AND role = 'user'
     ) days ORDER BY activity_date DESC`,
    [userId]
  );
  if (rows.length === 0) return 0;
  let streak = 0;
  let cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  const dates = new Set(rows.map(r => new Date(r.activity_date).toDateString()));
  // allow streak to count today OR "as of yesterday" if nothing logged yet today
  if (!dates.has(cursor.toDateString())) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (dates.has(cursor.toDateString())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

router.get('/dashboard', requireAuth, async (req, res) => {
  const userId = req.session.userId;
  try {
    const { rows: userRows } = await pool.query('SELECT id, name, email, initials, grade FROM users WHERE id=$1', [userId]);
    const user = userRows[0];

    const { rows: subjectRows } = await pool.query(
      `SELECT s.id, s.name, s.short, s.color, s.tint, usp.progress, usp.topics_count, usp.current_topic
       FROM user_subject_progress usp JOIN subjects s ON s.id = usp.subject_id
       WHERE usp.user_id = $1 ORDER BY s.sort_order`,
      [userId]
    );

    const { rows: avgRows } = await pool.query(
      `SELECT COALESCE(ROUND(AVG(progress)),0)::int AS avg_progress FROM user_subject_progress WHERE user_id=$1`,
      [userId]
    );

    const { rows: qCountRows } = await pool.query(
      `SELECT
         (SELECT COUNT(*) FROM practice_answers pa JOIN practice_attempts at ON at.id=pa.attempt_id WHERE at.user_id=$1)
       + (SELECT COUNT(*) FROM exam_answers ea JOIN exam_attempts at2 ON at2.id=ea.attempt_id WHERE at2.user_id=$1)
         AS total`,
      [userId]
    );

    const { rows: testCountRows } = await pool.query(
      `SELECT COUNT(*)::int AS total FROM exam_attempts WHERE user_id=$1 AND completed_at IS NOT NULL`,
      [userId]
    );

    const { rows: planRows } = await pool.query(
      `SELECT id, text, done FROM study_plan_items WHERE user_id=$1 ORDER BY sort_order`,
      [userId]
    );

    const { rows: weakTopics } = await pool.query(
      `SELECT t.name, utp.progress FROM user_topic_progress utp
       JOIN topics t ON t.id = utp.topic_id
       WHERE utp.user_id=$1 AND utp.status != 'done'
       ORDER BY utp.progress ASC LIMIT 2`,
      [userId]
    );

    const streak = await computeStreak(userId);

    res.json({
      user,
      stats: {
        progress: avgRows[0].avg_progress,
        streak,
        questionsCompleted: Number(qCountRows[0].total),
        testsCompleted: testCountRows[0].total,
      },
      subjects: subjectRows,
      studyPlan: planRows,
      recommendations: weakTopics,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load dashboard.' });
  }
});

router.patch('/study-plan/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { done } = req.body;
  try {
    const { rows } = await pool.query(
      `UPDATE study_plan_items SET done=$1 WHERE id=$2 AND user_id=$3 RETURNING id, text, done`,
      [!!done, id, req.session.userId]
    );
    if (!rows.length) return res.status(404).json({ error: 'Not found.' });
    res.json({ item: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update study plan item.' });
  }
});

router.patch('/user/grade', requireAuth, async (req, res) => {
  const { grade } = req.body;
  if (![9, 10, 11, 12].includes(Number(grade))) return res.status(400).json({ error: 'Invalid grade.' });
  try {
    await pool.query('UPDATE users SET grade=$1 WHERE id=$2', [grade, req.session.userId]);
    res.json({ grade: Number(grade) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update grade.' });
  }
});

module.exports = router;
