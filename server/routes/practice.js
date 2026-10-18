const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.post('/practice/start', requireAuth, async (req, res) => {
  const { subjectId, topicId, difficulty } = req.body;
  const n = Math.min(Math.max(Number(req.body.count) || 8, 1), 30);
  try {
    const { rows: u } = await pool.query('SELECT grade FROM users WHERE id=$1', [req.session.userId]);
    const params = [u[0].grade];
    let where = 't.grade = $1';
    if (topicId) { params.push(topicId); where += ` AND t.id = $${params.length}`; }
    else if (subjectId) { params.push(subjectId); where += ` AND t.subject_id = $${params.length}`; }
    if (difficulty && difficulty !== 'Mixed') { params.push(difficulty); where += ` AND q.difficulty = $${params.length}`; }
    params.push(n);

    const { rows: questions } = await pool.query(
      `SELECT q.id, q.difficulty, q.prompt, q.options, t.id AS topic_id, t.name AS topic_name, t.subject_id
       FROM questions q JOIN topics t ON t.id = q.topic_id
       WHERE ${where} ORDER BY random() LIMIT $${params.length}`,
      params
    );
    if (!questions.length) {
      return res.status(404).json({ error: 'No practice questions are available for that choice yet.' });
    }
    const { rows: attempt } = await pool.query(
      `INSERT INTO practice_attempts (user_id, subject_id, topic_id, difficulty, total) VALUES ($1,$2,$3,$4,$5) RETURNING id`,
      [req.session.userId, questions[0].subject_id, topicId || null, difficulty || 'Mixed', questions.length]
    );
    res.json({ attemptId: attempt[0].id, questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not start practice session.' });
  }
});

router.post('/practice/:attemptId/answer', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  const { questionId, selectedIndex } = req.body;
  try {
    const { rows: att } = await pool.query(
      'SELECT id FROM practice_attempts WHERE id=$1 AND user_id=$2', [attemptId, req.session.userId]
    );
    if (!att.length) return res.status(404).json({ error: 'Attempt not found.' });

    const { rows: qRows } = await pool.query('SELECT correct_index, explanation FROM questions WHERE id=$1', [questionId]);
    if (!qRows.length) return res.status(404).json({ error: 'Question not found.' });
    const q = qRows[0];
    const isCorrect = Number(selectedIndex) === q.correct_index;

    // A question can only be scored once per attempt.
    const { rows: already } = await pool.query(
      'SELECT 1 FROM practice_answers WHERE attempt_id=$1 AND question_id=$2', [attemptId, questionId]
    );
    if (!already.length) {
      await pool.query(
        'INSERT INTO practice_answers (attempt_id, question_id, selected_index, is_correct) VALUES ($1,$2,$3,$4)',
        [attemptId, questionId, selectedIndex, isCorrect]
      );
      if (isCorrect) await pool.query('UPDATE practice_attempts SET correct = correct + 1 WHERE id=$1', [attemptId]);
    }
    res.json({ isCorrect, correctIndex: q.correct_index, explanation: q.explanation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not record answer.' });
  }
});

router.post('/practice/:attemptId/complete', requireAuth, async (req, res) => {
  const { attemptId } = req.params;
  try {
    const { rows: updated } = await pool.query(
      'UPDATE practice_attempts SET completed_at = now() WHERE id=$1 AND user_id=$2 RETURNING *',
      [attemptId, req.session.userId]
    );
    if (!updated.length) return res.status(404).json({ error: 'Attempt not found.' });
    const attempt = updated[0];

    const { rows: breakdown } = await pool.query(
      `SELECT t.id AS topic_id, t.name AS topic, COUNT(*)::int AS total, SUM(pa.is_correct::int)::int AS correct
       FROM practice_answers pa JOIN questions q ON q.id = pa.question_id JOIN topics t ON t.id = q.topic_id
       WHERE pa.attempt_id = $1 GROUP BY t.id, t.name ORDER BY t.id`,
      [attemptId]
    );

    // Practice raises topic progress by up to 30 points, scaled by accuracy.
    // (Reading the lesson gives the first 40, so a topic is mastered with a read plus good practice.)
    for (const b of breakdown) {
      const bump = Math.round((b.correct / b.total) * 30);
      await pool.query(
        `INSERT INTO user_topic_progress (user_id, topic_id, status, progress) VALUES ($1,$2,$3,$4)
         ON CONFLICT (user_id, topic_id) DO UPDATE SET
           progress = LEAST(100, user_topic_progress.progress + $4),
           status = CASE WHEN LEAST(100, user_topic_progress.progress + $4) >= 90 THEN 'done'
                         WHEN LEAST(100, user_topic_progress.progress + $4) > 0 THEN 'progress'
                         ELSE user_topic_progress.status END`,
        [req.session.userId, b.topic_id, bump > 0 ? 'progress' : 'todo', bump]
      );
    }

    res.json({
      total: attempt.total, correct: attempt.correct,
      accuracy: attempt.total ? Math.round((attempt.correct / attempt.total) * 100) : 0,
      topicBreakdown: breakdown.map(b => ({ topic: b.topic, correct: b.correct, total: b.total, accuracy: Math.round((b.correct / b.total) * 100) })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not complete practice session.' });
  }
});

module.exports = router;
