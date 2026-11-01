const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.post('/exam/start', requireAuth, async (req, res) => {
  const { subjectId } = req.body;
  const count = Math.min(Math.max(Number(req.body.count) || 20, 1), 50);
  const timeLimitSec = Math.min(Math.max(Number(req.body.timeLimitSec) || 30 * 60, 60), 3 * 60 * 60);
  try {
    const { rows: u } = await pool.query('SELECT grade FROM users WHERE id=$1', [req.session.userId]);
    const { rows: subj } = await pool.query('SELECT name FROM subjects WHERE id=$1', [subjectId]);
    if (!subj.length) return res.status(404).json({ error: 'Subject not found.' });

    const { rows: questions } = await pool.query(
      `WITH ranked AS (
         SELECT q.id, q.difficulty, q.prompt, q.options, t.id AS topic_id, t.name AS topic_name,
                ROW_NUMBER() OVER (PARTITION BY t.id ORDER BY random()) AS topic_rank
         FROM questions q JOIN topics t ON t.id = q.topic_id
         WHERE t.subject_id = $1 AND t.grade = $2
       )
       SELECT id, difficulty, prompt, options, topic_id, topic_name
       FROM ranked ORDER BY topic_rank, random() LIMIT $3`,
      [subjectId, u[0].grade, count]
    );
    if (!questions.length) return res.status(404).json({ error: 'No exam questions are available for this subject yet.' });

    const title = `Grade ${u[0].grade} ${subj[0].name} Mock Exam`;
    const client = await pool.connect();
    let attemptId;
    try {
      await client.query('BEGIN');
      const { rows: attempt } = await client.query(
        `INSERT INTO exam_attempts (user_id, subject_id, title, total, time_limit_sec) VALUES ($1,$2,$3,$4,$5) RETURNING id`,
        [req.session.userId, subjectId, title, questions.length, timeLimitSec]
      );
      attemptId = attempt[0].id;
      await client.query(
        `INSERT INTO exam_attempt_questions (attempt_id, question_id, question_order)
         SELECT $1, question_id, question_order::int
         FROM unnest($2::int[]) WITH ORDINALITY AS selected(question_id, question_order)`,
        [attemptId, questions.map(q => q.id)]
      );
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
    res.json({ attemptId, title, timeLimitSec, questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not start exam.' });
  }
});

// Exam mode: answers are recorded but nothing is revealed until submission.
router.post('/exam/:attemptId/answer', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  const { questionId, selectedIndex } = req.body;
  try {
    const { rows: att } = await pool.query(
      'SELECT id FROM exam_attempts WHERE id=$1 AND user_id=$2 AND completed_at IS NULL', [attemptId, req.session.userId]
    );
    if (!att.length) return res.status(404).json({ error: 'Exam attempt not found or already submitted.' });
    const { rows: q } = await pool.query(
      `SELECT q.correct_index FROM exam_attempt_questions selected
       JOIN questions q ON q.id = selected.question_id
       WHERE selected.attempt_id=$1 AND selected.question_id=$2`, [attemptId, questionId]
    );
    if (!q.length) return res.status(404).json({ error: 'Question is not part of this exam.' });
    await pool.query(
      `INSERT INTO exam_answers (attempt_id, question_id, selected_index, is_correct) VALUES ($1,$2,$3,$4)
       ON CONFLICT (attempt_id, question_id) DO UPDATE SET selected_index=$3, is_correct=$4`,
      [attemptId, questionId, selectedIndex, Number(selectedIndex) === q[0].correct_index]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save answer.' });
  }
});

router.post('/exam/:attemptId/submit', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  try {
    const { rows: c } = await pool.query(
      `SELECT COUNT(*)::int AS c FROM exam_answers ea
       JOIN exam_attempt_questions selected ON selected.attempt_id=ea.attempt_id AND selected.question_id=ea.question_id
       WHERE ea.attempt_id=$1 AND ea.is_correct`, [attemptId]
    );
    const { rows: updated } = await pool.query(
      'UPDATE exam_attempts SET completed_at = COALESCE(completed_at, now()), correct=$1 WHERE id=$2 AND user_id=$3 RETURNING *',
      [c[0].c, attemptId, req.session.userId]
    );
    if (!updated.length) return res.status(404).json({ error: 'Exam attempt not found.' });
    const a = updated[0];

    const { rows: breakdown } = await pool.query(
      `SELECT t.id AS topic_id, t.name AS topic, COUNT(*)::int AS total,
              COUNT(ea.question_id)::int AS answered,
              COALESCE(SUM(ea.is_correct::int), 0)::int AS correct
       FROM exam_attempt_questions selected
       JOIN questions q ON q.id = selected.question_id
       JOIN topics t ON t.id = q.topic_id
       LEFT JOIN exam_answers ea ON ea.attempt_id=selected.attempt_id AND ea.question_id=selected.question_id
       WHERE selected.attempt_id = $1
       GROUP BY t.id, t.name ORDER BY t.id`,
      [attemptId]
    );
    const { rows: reviewRows } = await pool.query(
      `SELECT q.prompt, q.options, q.correct_index, ea.selected_index,
              q.explanation, t.id AS topic_id, t.name AS topic, t.section_no, s.id AS subject_id
       FROM exam_attempt_questions selected
       JOIN questions q ON q.id = selected.question_id
       JOIN topics t ON t.id = q.topic_id
       JOIN subjects s ON s.id = t.subject_id
       LEFT JOIN exam_answers ea ON ea.attempt_id=selected.attempt_id AND ea.question_id=selected.question_id
       WHERE selected.attempt_id = $1 AND ea.is_correct IS DISTINCT FROM TRUE
       ORDER BY t.sort_order, selected.question_order`,
      [attemptId]
    );
    res.json({
      total: a.total, correct: a.correct,
      accuracy: a.total ? Math.round((a.correct / a.total) * 100) : 0,
      topicBreakdown: breakdown.map(b => ({ topicId: b.topic_id, topic: b.topic, correct: b.correct, total: b.total, accuracy: Math.round((b.correct / b.total) * 100) })),
      reviewQuestions: reviewRows.map(q => ({ prompt: q.prompt, options: q.options, correctIndex: q.correct_index,
        selectedIndex: q.selected_index, explanation: q.explanation, topicId: q.topic_id, topic: q.topic,
        section: q.section_no, subjectId: q.subject_id })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not submit exam.' });
  }
});

module.exports = router;

