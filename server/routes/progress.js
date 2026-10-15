const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.get('/progress', requireAuth, async (req, res) => {
  const userId = req.session.userId;
  try {
    const { rows: overall } = await pool.query(
      `SELECT COALESCE(ROUND(AVG(progress)),0)::int AS avg_progress FROM user_subject_progress WHERE user_id=$1`,
      [userId]
    );

    const { rows: subjectPerf } = await pool.query(
      `SELECT s.name, usp.progress FROM user_subject_progress usp
       JOIN subjects s ON s.id = usp.subject_id WHERE usp.user_id=$1 ORDER BY s.sort_order`,
      [userId]
    );

    const { rows: weekly } = await pool.query(
      `SELECT day::date AS day, COUNT(activity.*)::int AS count FROM
         generate_series(current_date - interval '6 days', current_date, interval '1 day') AS day
         LEFT JOIN (
           SELECT date(answered_at) AS d FROM practice_answers pa
             JOIN practice_attempts at ON at.id = pa.attempt_id WHERE at.user_id=$1
           UNION ALL
           SELECT date(completed_at) AS d FROM exam_attempts WHERE user_id=$1 AND completed_at IS NOT NULL
         ) activity ON activity.d = day::date
       GROUP BY day ORDER BY day`,
      [userId]
    );

    const { rows: recentTests } = await pool.query(
      `SELECT title AS name, 'Mixed' AS subject, completed_at,
              CASE WHEN total>0 THEN ROUND(100.0*correct/total) ELSE 0 END::int AS score
       FROM exam_attempts WHERE user_id=$1 AND completed_at IS NOT NULL
       UNION ALL
       SELECT (topic_name || ' \u2014 Practice Set') AS name, topic_name AS subject, completed_at,
              CASE WHEN total>0 THEN ROUND(100.0*correct/total) ELSE 0 END::int AS score
       FROM practice_attempts WHERE user_id=$1 AND completed_at IS NOT NULL
       ORDER BY completed_at DESC LIMIT 5`,
      [userId]
    );

    const { rows: strengths } = await pool.query(
      `SELECT s.name, usp.progress FROM user_subject_progress usp JOIN subjects s ON s.id=usp.subject_id
       WHERE usp.user_id=$1 ORDER BY usp.progress DESC LIMIT 1`, [userId]
    );
    const { rows: weaknesses } = await pool.query(
      `SELECT s.name, usp.progress FROM user_subject_progress usp JOIN subjects s ON s.id=usp.subject_id
       WHERE usp.user_id=$1 ORDER BY usp.progress ASC LIMIT 1`, [userId]
    );

    res.json({
      overallProgress: overall[0].avg_progress,
      subjectPerformance: subjectPerf,
      weeklyActivity: weekly.map(w => ({ day: w.day, count: w.count })),
      recentTests: recentTests.map(t => ({ name: t.name, subject: t.subject, date: t.completed_at, score: t.score })),
      strength: strengths[0] || null,
      areaToImprove: weaknesses[0] || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load progress.' });
  }
});

module.exports = router;
