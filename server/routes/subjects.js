const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');
const { getSubjectsForUser } = require('../lib/curriculum');

const router = express.Router();

async function userGrade(userId) {
  const { rows } = await pool.query('SELECT grade FROM users WHERE id=$1', [userId]);
  return rows[0].grade;
}

router.get('/subjects', requireAuth, async (req, res) => {
  try {
    const grade = await userGrade(req.session.userId);
    res.json({ grade, subjects: await getSubjectsForUser(req.session.userId, grade) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load subjects.' });
  }
});

router.get('/subjects/:id/topics', requireAuth, async (req, res) => {
  try {
    const grade = await userGrade(req.session.userId);
    const { rows: subj } = await pool.query('SELECT id, name, short, color, tint FROM subjects WHERE id=$1', [req.params.id]);
    if (!subj.length) return res.status(404).json({ error: 'Subject not found.' });

    const { rows: topics } = await pool.query(
      `SELECT t.id, t.unit_no, t.unit_title, t.section_no, t.name, t.description,
              (l.topic_id IS NOT NULL) AS has_lesson,
              (SELECT COUNT(*) FROM questions q WHERE q.topic_id = t.id)::int AS question_count,
              COALESCE(utp.status, 'todo') AS status, COALESCE(utp.progress, 0) AS progress
       FROM topics t
       LEFT JOIN lessons l ON l.topic_id = t.id
       LEFT JOIN user_topic_progress utp ON utp.topic_id = t.id AND utp.user_id = $1
       WHERE t.subject_id = $2 AND t.grade = $3 ORDER BY t.sort_order`,
      [req.session.userId, req.params.id, grade]
    );
    const avail = topics.filter(t => t.has_lesson);
    const progress = avail.length ? Math.round(avail.reduce((a, t) => a + t.progress, 0) / avail.length) : 0;
    res.json({ grade, subject: { ...subj[0], progress }, topics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load topics.' });
  }
});

// A lesson (or just the topic, if its lesson has not been written yet).
router.get('/lessons/:topicId', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT t.id, t.name, t.section_no, t.unit_no, t.unit_title, t.grade,
              s.id AS subject_id, s.name AS subject_name,
              l.objectives, l.sections, l.example, l.key_concept,
              (SELECT COUNT(*) FROM questions q WHERE q.topic_id = t.id)::int AS question_count
       FROM topics t JOIN subjects s ON s.id = t.subject_id
       LEFT JOIN lessons l ON l.topic_id = t.id WHERE t.id = $1`,
      [req.params.topicId]
    );
    if (!rows.length) return res.status(404).json({ error: 'Topic not found.' });
    const r = rows[0];
    res.json({
      topic: { id: r.id, name: r.name, section_no: r.section_no, unit_no: r.unit_no, unit_title: r.unit_title, grade: r.grade,
               subject_id: r.subject_id, subject_name: r.subject_name, question_count: r.question_count },
      lesson: r.objectives ? { objectives: r.objectives, sections: r.sections, example: r.example, key_concept: r.key_concept } : null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load lesson.' });
  }
});

// Opening a lesson counts as reading it: topic progress rises to at least 40%.
router.post('/topics/:topicId/lesson-read', requireAuth, async (req, res) => {
  try {
    const { rows: has } = await pool.query('SELECT 1 FROM lessons WHERE topic_id=$1', [req.params.topicId]);
    if (!has.length) return res.json({ ok: false });
    await pool.query(
      `INSERT INTO user_topic_progress (user_id, topic_id, status, progress) VALUES ($1,$2,'progress',40)
       ON CONFLICT (user_id, topic_id) DO UPDATE SET
         progress = GREATEST(user_topic_progress.progress, 40),
         status = CASE WHEN GREATEST(user_topic_progress.progress, 40) >= 90 THEN 'done' ELSE 'progress' END`,
      [req.session.userId, req.params.topicId]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not record lesson.' });
  }
});

module.exports = router;
