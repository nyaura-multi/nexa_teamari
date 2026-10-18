const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.post('/exam/start', requireAuth, async (req, res) => {
<<<<<<< HEAD
  const { subjectId } = req.body;
  const count = Math.min(Math.max(Number(req.body.count) || 20, 1), 50);
  const timeLimitSec = Math.min(Math.max(Number(req.body.timeLimitSec) || 30 * 60, 60), 3 * 60 * 60);
  try {
    const { rows: u } = await pool.query('SELECT grade FROM users WHERE id=$1', [req.session.userId]);
    const { rows: subj } = await pool.query('SELECT name FROM subjects WHERE id=$1', [subjectId]);
    if (!subj.length) return res.status(404).json({ error: 'Subject not found.' });

    const { rows: questions } = await pool.query(
      `SELECT q.id, q.difficulty, q.prompt, q.options, t.id AS topic_id, t.name AS topic_name
       FROM questions q JOIN topics t ON t.id = q.topic_id
       WHERE t.subject_id = $1 AND t.grade = $2 ORDER BY random() LIMIT $3`,
      [subjectId, u[0].grade, count]
    );
    if (!questions.length) return res.status(404).json({ error: 'No exam questions are available for this subject yet.' });

    const title = `Grade ${u[0].grade} ${subj[0].name} Mock Exam`;
    const { rows: attempt } = await pool.query(
      `INSERT INTO exam_attempts (user_id, subject_id, title, total, time_limit_sec) VALUES ($1,$2,$3,$4,$5) RETURNING id`,
      [req.session.userId, subjectId, title, questions.length, timeLimitSec]
    );
    res.json({ attemptId: attempt[0].id, title, timeLimitSec, questions });
=======
  const title = req.body.title || 'Mock Exam';
  const count = Math.min(Math.max(Number(req.body.count) || 10, 1), 30);
  const timeLimitSec = Math.min(Math.max(Number(req.body.timeLimitSec) || 45 * 60, 60), 3 * 60 * 60);
  try {
    const { rows: questions } = await pool.query(
      `SELECT id, topic_name, difficulty, prompt, options FROM questions ORDER BY random() LIMIT $1`,
      [count]
    );
    const { rows: attemptRows } = await pool.query(
      `INSERT INTO exam_attempts (user_id, title, total, time_limit_sec) VALUES ($1,$2,$3,$4) RETURNING id`,
      [req.session.userId, title, questions.length, timeLimitSec]
    );
    res.json({ attemptId: attemptRows[0].id, timeLimitSec, questions });
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not start exam.' });
  }
});

<<<<<<< HEAD
// Exam mode: answers are recorded but nothing is revealed until submission.
=======
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
router.post('/exam/:attemptId/answer', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  const { questionId, selectedIndex } = req.body;
  try {
<<<<<<< HEAD
    const { rows: att } = await pool.query(
      'SELECT id FROM exam_attempts WHERE id=$1 AND user_id=$2 AND completed_at IS NULL', [attemptId, req.session.userId]
    );
    if (!att.length) return res.status(404).json({ error: 'Exam attempt not found or already submitted.' });
    const { rows: q } = await pool.query('SELECT correct_index FROM questions WHERE id=$1', [questionId]);
    if (!q.length) return res.status(404).json({ error: 'Question not found.' });
    await pool.query(
      `INSERT INTO exam_answers (attempt_id, question_id, selected_index, is_correct) VALUES ($1,$2,$3,$4)
       ON CONFLICT (attempt_id, question_id) DO UPDATE SET selected_index=$3, is_correct=$4`,
      [attemptId, questionId, selectedIndex, Number(selectedIndex) === q[0].correct_index]
    );
=======
    const { rows: attemptRows } = await pool.query(
      `SELECT id FROM exam_attempts WHERE id=$1 AND user_id=$2 AND completed_at IS NULL`,
      [attemptId, req.session.userId]
    );
    if (!attemptRows.length) return res.status(404).json({ error: 'Exam attempt not found or already submitted.' });

    const { rows: qRows } = await pool.query('SELECT correct_index FROM questions WHERE id=$1', [questionId]);
    if (!qRows.length) return res.status(404).json({ error: 'Question not found.' });
    const isCorrect = Number(selectedIndex) === qRows[0].correct_index;

    await pool.query(
      `INSERT INTO exam_answers (attempt_id, question_id, selected_index, is_correct)
       VALUES ($1,$2,$3,$4)
       ON CONFLICT (attempt_id, question_id) DO UPDATE SET selected_index=$3, is_correct=$4`,
      [attemptId, questionId, selectedIndex, isCorrect]
    );
    // Exam mode: acknowledge only, no feedback revealed until submission.
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save answer.' });
  }
});

router.post('/exam/:attemptId/submit', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  try {
<<<<<<< HEAD
    const { rows: c } = await pool.query('SELECT COUNT(*)::int AS c FROM exam_answers WHERE attempt_id=$1 AND is_correct', [attemptId]);
    const { rows: updated } = await pool.query(
      'UPDATE exam_attempts SET completed_at = COALESCE(completed_at, now()), correct=$1 WHERE id=$2 AND user_id=$3 RETURNING *',
      [c[0].c, attemptId, req.session.userId]
    );
    if (!updated.length) return res.status(404).json({ error: 'Exam attempt not found.' });
    const a = updated[0];

    const { rows: breakdown } = await pool.query(
      `SELECT t.name AS topic, COUNT(*)::int AS total, SUM(ea.is_correct::int)::int AS correct
       FROM exam_answers ea JOIN questions q ON q.id = ea.question_id JOIN topics t ON t.id = q.topic_id
       WHERE ea.attempt_id = $1 GROUP BY t.id, t.name ORDER BY t.id`,
      [attemptId]
    );
    res.json({
      total: a.total, correct: a.correct,
      accuracy: a.total ? Math.round((a.correct / a.total) * 100) : 0,
      topicBreakdown: breakdown.map(b => ({ topic: b.topic, correct: b.correct, total: b.total, accuracy: Math.round((b.correct / b.total) * 100) })),
=======
    const { rows: correctRows } = await pool.query(
      `SELECT COUNT(*)::int AS c FROM exam_answers WHERE attempt_id=$1 AND is_correct = true`,
      [attemptId]
    );
    const { rows: updated } = await pool.query(
      `UPDATE exam_attempts SET completed_at = now(), correct=$1 WHERE id=$2 AND user_id=$3 RETURNING *`,
      [correctRows[0].c, attemptId, req.session.userId]
    );
    if (!updated.length) return res.status(404).json({ error: 'Exam attempt not found.' });
    const attempt = updated[0];
    res.json({
      total: attempt.total,
      correct: attempt.correct,
      accuracy: attempt.total ? Math.round((attempt.correct / attempt.total) * 100) : 0,
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not submit exam.' });
  }
});

module.exports = router;
