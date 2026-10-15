const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');
const { generateReply } = require('../lib/coach');

const router = express.Router();

router.get('/chat', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, role, text, created_at FROM chat_messages WHERE user_id=$1 ORDER BY created_at ASC`,
      [req.session.userId]
    );
    res.json({ messages: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load chat history.' });
  }
});

router.post('/chat', requireAuth, async (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ error: 'Message text is required.' });
  try {
    await pool.query(`INSERT INTO chat_messages (user_id, role, text) VALUES ($1,'user',$2)`, [req.session.userId, text.trim()]);
    const reply = generateReply(text);
    const { rows } = await pool.query(
      `INSERT INTO chat_messages (user_id, role, text) VALUES ($1,'bot',$2) RETURNING id, role, text, created_at`,
      [req.session.userId, reply]
    );
    res.json({ reply: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not send message.' });
  }
});

module.exports = router;
