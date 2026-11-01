const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');
const { generateReply } = require('../lib/coach');

const router = express.Router();

router.get('/chat', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, role, text, created_at FROM chat_messages WHERE user_id=$1 ORDER BY created_at ASC, id ASC', [req.session.userId]
    );
    res.json({ messages: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load chat history.' });
  }
});

router.post('/chat', requireAuth, async (req, res) => {
  const text = (req.body.text || '').trim().slice(0, 2000);
  if (!text) return res.status(400).json({ error: 'Message text is required.' });
  const userId = req.session.userId;
  try {
    const { rows: u } = await pool.query('SELECT grade FROM users WHERE id=$1', [userId]);
    const { rows: hist } = await pool.query(
      'SELECT role, text FROM chat_messages WHERE user_id=$1 ORDER BY id DESC LIMIT 8', [userId]
    );
    await pool.query("INSERT INTO chat_messages (user_id, role, text) VALUES ($1,'user',$2)", [userId, text]);

    let topic = null, questions = [];
    if (req.body.topicId) {
      const { rows } = await pool.query(
        `SELECT t.id, t.name, t.section_no, t.unit_no, t.unit_title, t.grade, s.name AS subject_name,
                l.objectives, l.sections, l.example, l.key_concept
         FROM topics t JOIN subjects s ON s.id = t.subject_id LEFT JOIN lessons l ON l.topic_id = t.id WHERE t.id=$1`,
        [req.body.topicId]
      );
      if (rows.length) {
        const r = rows[0];
        topic = { ...r, lesson: r.objectives ? { objectives: r.objectives, sections: r.sections, example: r.example, key_concept: r.key_concept } : null };
        questions = (await pool.query('SELECT prompt, options, correct_index, explanation FROM questions WHERE topic_id=$1', [r.id])).rows;
      }
    }

    const reply = await generateReply({ prompt: text, topic, questions, grade: u[0].grade, history: hist.reverse() });
    const { rows } = await pool.query(
      "INSERT INTO chat_messages (user_id, role, text) VALUES ($1,'bot',$2) RETURNING id, role, text, created_at", [userId, reply]
    );
    res.json({ reply: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not send message.' });
  }
});

module.exports = router;
