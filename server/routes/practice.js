const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.post('/practice/start', requireAuth, async (req, res) => {
  const { topic, difficulty, count } = req.body;
  const n = Math.min(Math.max(Number(count) || 8, 1), 20);
  try {
    const params = [];
    let where = '1=1';
    if (topic && topic !== 'Mixed') { params.push(topic); where += ` AND topic_name = $${params.length}`; }
    if (difficulty && difficulty !== 'Mixed') { params.push(difficulty); where += ` AND difficulty = $${params.length}`; }
    params.push(n);

    const { rows: questions } = await pool.query(
      `SELECT id, topic_name, difficulty, prompt, options FROM questions WHERE ${where} ORDER BY random() LIMIT $${params.length}`,
      params
    );
    if (!questions.length) return res.status(404).json({ error: 'No questions match those filters yet.' });

    const { rows: attemptRows } = await pool.query(
      `INSERT INTO practice_attempts (user_id, topic_name, difficulty, total) VALUES ($1,$2,$3,$4) RETURNING id`,
      [req.session.userId, topic || 'Mixed', difficulty || 'Mixed', questions.length]
    );

    res.json({ attemptId: attemptRows[0].id, questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not start practice session.' });
  }
});

router.post('/practice/:attemptId/answer', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  const { questionId, selectedIndex } = req.body;
  try {
    const { rows: attemptRows } = await pool.query(
      `SELECT * FROM practice_attempts WHERE id=$1 AND user_id=$2`, [attemptId, req.session.userId]
    );
    if (!attemptRows.length) return res.status(404).json({ error: 'Attempt not found.' });

    const { rows: qRows } = await pool.query('SELECT * FROM questions WHERE id=$1', [questionId]);
    if (!qRows.length) return res.status(404).json({ error: 'Question not found.' });
    const question = qRows[0];
    const isCorrect = Number(selectedIndex) === question.correct_index;

    await pool.query(
      `INSERT INTO practice_answers (attempt_id, question_id, selected_index, is_correct) VALUES ($1,$2,$3,$4)`,
      [attemptId, questionId, selectedIndex, isCorrect]
    );
    if (isCorrect) {
      await pool.query(`UPDATE practice_attempts SET correct = correct + 1 WHERE id=$1`, [attemptId]);
    }

    res.json({ isCorrect, correctIndex: question.correct_index, explanation: question.explanation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not record answer.' });
  }
});

router.post('/practice/:attemptId/complete', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  try {
    const { rows: updated } = await pool.query(
      `UPDATE practice_attempts SET completed_at = now() WHERE id=$1 AND user_id=$2 RETURNING *`,
      [attemptId, req.session.userId]
    );
    if (!updated.length) return res.status(404).json({ error: 'Attempt not found.' });
    const attempt = updated[0];

    const { rows: breakdown } = await pool.query(
      `SELECT q.topic_name, COUNT(*)::int AS total, SUM(pa.is_correct::int)::int AS correct
       FROM practice_answers pa JOIN questions q ON q.id = pa.question_id
       WHERE pa.attempt_id=$1 GROUP BY q.topic_name`,
      [attemptId]
    );

    // Nudge topic progress up based on how the student did this session.
    for (const row of breakdown) {
      const accuracy = row.total ? row.correct / row.total : 0;
      const bump = Math.round(accuracy * 15);
      await pool.query(
        `UPDATE user_topic_progress utp SET
           progress = LEAST(100, utp.progress + $1),
           status = CASE WHEN LEAST(100, utp.progress + $1) >= 95 THEN 'done'
                         WHEN LEAST(100, utp.progress + $1) > 0 THEN 'progress'
                         ELSE utp.status END
         FROM topics t
         WHERE utp.topic_id = t.id AND t.name = $2 AND utp.user_id = $3`,
        [bump, row.topic_name, req.session.userId]
      );
    }

    res.json({
      total: attempt.total,
      correct: attempt.correct,
      accuracy: attempt.total ? Math.round((attempt.correct / attempt.total) * 100) : 0,
      topicBreakdown: breakdown.map(b => ({ topic: b.topic_name, correct: b.correct, total: b.total, accuracy: Math.round((b.correct / b.total) * 100) })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not complete practice session.' });
  }
});

module.exports = router;
