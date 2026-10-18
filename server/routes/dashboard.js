const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');
const { getSubjectsForUser, getRecommendations } = require('../lib/curriculum');

const router = express.Router();

async function computeStreak(userId) {
  const { rows } = await pool.query(
    `SELECT DISTINCT activity_date FROM (
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
  return streak;
}

router.get('/dashboard', requireAuth, async (req, res) => {
  const userId = req.session.userId;
  try {
    const { rows: userRows } = await pool.query('SELECT id, name, email, initials, grade FROM users WHERE id=$1', [userId]);
    const user = userRows[0];
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
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load dashboard.' });
  }
});

router.patch('/study-plan/:id', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      'UPDATE study_plan_items SET done=$1 WHERE id=$2 AND user_id=$3 RETURNING id, text, done',
      [!!req.body.done, req.params.id, req.session.userId]
    );
    if (!rows.length) return res.status(404).json({ error: 'Not found.' });
    res.json({ item: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update study plan item.' });
  }
});

router.patch('/user/grade', requireAuth, async (req, res) => {
  const grade = Number(req.body.grade);
  if (![9, 10, 11, 12].includes(grade)) return res.status(400).json({ error: 'Invalid grade.' });
  try {
    await pool.query('UPDATE users SET grade=$1 WHERE id=$2', [grade, req.session.userId]);
    res.json({ grade });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update grade.' });
  }
});

module.exports = router;
