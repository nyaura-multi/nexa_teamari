const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');
<<<<<<< HEAD
const { getSubjectsForUser, getRecommendations } = require('../lib/curriculum');
=======
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00

const router = express.Router();

async function computeStreak(userId) {
  const { rows } = await pool.query(
    `SELECT DISTINCT activity_date FROM (
<<<<<<< HEAD
       SELECT date(pa.answered_at) AS activity_date FROM practice_answers pa
         JOIN practice_attempts at ON at.id = pa.attempt_id WHERE at.user_id = $1
       UNION
       SELECT date(completed_at) FROM exam_attempts WHERE user_id = $1 AND completed_at IS NOT NULL
       UNION
       SELECT date(created_at) FROM chat_messages WHERE user_id = $1 AND role = 'user'
       UNION
       SELECT date(started_at) FROM practice_attempts WHERE user_id = $1
     ) days`,
    [userId]
  );
  if (!rows.length) return 0;
  const dates = new Set(rows.map(r => new Date(r.activity_date).toDateString()));
  let cursor = new Date(); cursor.setHours(0, 0, 0, 0);
  if (!dates.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (dates.has(cursor.toDateString())) { streak++; cursor.setDate(cursor.getDate() - 1); }
=======
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
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  return streak;
}

router.get('/dashboard', requireAuth, async (req, res) => {
  const userId = req.session.userId;
  try {
    const { rows: userRows } = await pool.query('SELECT id, name, email, initials, grade FROM users WHERE id=$1', [userId]);
    const user = userRows[0];
<<<<<<< HEAD
    const subjects = await getSubjectsForUser(userId, user.grade);
    const withContent = subjects.filter(s => s.available_count > 0);
    const progress = withContent.length ? Math.round(withContent.reduce((a, s) => a + s.progress, 0) / withContent.length) : 0;

    const { rows: q } = await pool.query(
      `SELECT (SELECT COUNT(*) FROM practice_answers pa JOIN practice_attempts a ON a.id=pa.attempt_id WHERE a.user_id=$1)
            + (SELECT COUNT(*) FROM exam_answers ea JOIN exam_attempts e ON e.id=ea.attempt_id WHERE e.user_id=$1) AS total,
              (SELECT COUNT(*) FROM exam_attempts WHERE user_id=$1 AND completed_at IS NOT NULL) AS tests`,
      [userId]
    );
    const { rows: plan } = await pool.query(
      'SELECT id, text, done FROM study_plan_items WHERE user_id=$1 ORDER BY sort_order', [userId]
    );

    res.json({
      user,
      stats: { progress, streak: await computeStreak(userId), questionsCompleted: Number(q[0].total), testsCompleted: Number(q[0].tests) },
      subjects,
      studyPlan: plan,
      recommendations: await getRecommendations(userId, user.grade),
=======

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
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load dashboard.' });
  }
});

router.patch('/study-plan/:id', requireAuth, async (req, res) => {
<<<<<<< HEAD
  try {
    const { rows } = await pool.query(
      'UPDATE study_plan_items SET done=$1 WHERE id=$2 AND user_id=$3 RETURNING id, text, done',
      [!!req.body.done, req.params.id, req.session.userId]
=======
  const { id } = req.params;
  const { done } = req.body;
  try {
    const { rows } = await pool.query(
      `UPDATE study_plan_items SET done=$1 WHERE id=$2 AND user_id=$3 RETURNING id, text, done`,
      [!!done, id, req.session.userId]
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
    );
    if (!rows.length) return res.status(404).json({ error: 'Not found.' });
    res.json({ item: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update study plan item.' });
  }
});

router.patch('/user/grade', requireAuth, async (req, res) => {
<<<<<<< HEAD
  const grade = Number(req.body.grade);
  if (![9, 10, 11, 12].includes(grade)) return res.status(400).json({ error: 'Invalid grade.' });
  try {
    await pool.query('UPDATE users SET grade=$1 WHERE id=$2', [grade, req.session.userId]);
    res.json({ grade });
=======
  const { grade } = req.body;
  if (![9, 10, 11, 12].includes(Number(grade))) return res.status(400).json({ error: 'Invalid grade.' });
  try {
    await pool.query('UPDATE users SET grade=$1 WHERE id=$2', [grade, req.session.userId]);
    res.json({ grade: Number(grade) });
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update grade.' });
  }
});

module.exports = router;
