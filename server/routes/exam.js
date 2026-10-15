const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.post('/exam/start', requireAuth, async (req, res) => {
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not start exam.' });
  }
});

router.post('/exam/:attemptId/answer', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  const { questionId, selectedIndex } = req.body;
  try {
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
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save answer.' });
  }
});

router.post('/exam/:attemptId/submit', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  try {
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
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not submit exam.' });
  }
});

module.exports = router;
