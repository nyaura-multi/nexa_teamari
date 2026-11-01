const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');
const { getSubjectsForUser, getTopicAccuracy } = require('../lib/curriculum');

const router = express.Router();

router.get('/progress', requireAuth, async (req, res) => {
  const userId = req.session.userId;
  try {
    const { rows: u } = await pool.query('SELECT grade FROM users WHERE id=$1', [userId]);
    const grade = u[0].grade;
    const subjects = await getSubjectsForUser(userId, grade);
    const withContent = subjects.filter(s => s.available_count > 0);
    const overall = withContent.length ? Math.round(withContent.reduce((a, s) => a + s.progress, 0) / withContent.length) : 0;

    const { rows: weekly } = await pool.query(
      `SELECT gs.day::date AS day, COUNT(a.act_day)::int AS count
       FROM generate_series(current_date - interval '6 days', current_date, interval '1 day') AS gs(day)
       LEFT JOIN (
         SELECT date(pa.answered_at) AS act_day FROM practice_answers pa
           JOIN practice_attempts at ON at.id = pa.attempt_id WHERE at.user_id = $1
         UNION ALL
         SELECT date(completed_at) AS act_day FROM exam_attempts WHERE user_id = $1 AND completed_at IS NOT NULL
       ) a ON a.act_day = gs.day::date
       GROUP BY gs.day ORDER BY gs.day`,
      [userId]
    );

    const { rows: recent } = await pool.query(
      `SELECT * FROM (
         SELECT e.title AS name, COALESCE(s.name, 'Mixed') AS subject, e.completed_at,
                CASE WHEN e.total > 0 THEN ROUND(100.0 * e.correct / e.total) ELSE 0 END::int AS score, 'exam' AS kind
         FROM exam_attempts e LEFT JOIN subjects s ON s.id = e.subject_id WHERE e.user_id = $1 AND e.completed_at IS NOT NULL
         UNION ALL
         SELECT COALESCE(t.name, s.name || ' \u2014 mixed topics') || ' \u2014 practice', COALESCE(s.name, 'Mixed'), p.completed_at,
                CASE WHEN p.total > 0 THEN ROUND(100.0 * p.correct / p.total) ELSE 0 END::int, 'practice'
         FROM practice_attempts p LEFT JOIN topics t ON t.id = p.topic_id LEFT JOIN subjects s ON s.id = p.subject_id
         WHERE p.user_id = $1 AND p.completed_at IS NOT NULL
       ) x ORDER BY completed_at DESC LIMIT 6`,
      [userId]
    );

    // Strengths and weak spots come from real answer history, and need at least 3 answers per topic.
    const accuracy = (await getTopicAccuracy(userId, grade)).filter(t => t.total >= 3);
    res.json({
      overallProgress: overall,
      subjectPerformance: subjects.map(s => ({ name: s.name, progress: s.progress, available: s.available_count, total: s.topics_count })),
      weeklyActivity: weekly,
      recentTests: recent.map(t => ({ name: t.name, subject: t.subject, date: t.completed_at, score: t.score, kind: t.kind })),
      strengths: accuracy.filter(t => t.accuracy >= 75).sort((a, b) => b.accuracy - a.accuracy).slice(0, 3),
      areasToImprove: accuracy.filter(t => t.accuracy < 60).slice(0, 3),
      topicPerformance: accuracy.slice(0, 8),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load progress.' });
  }
});

module.exports = router;
