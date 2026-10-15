const express = require('express');
const pool = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.get('/subjects', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT s.id, s.name, s.short, s.color, s.tint, usp.progress, usp.topics_count, usp.current_topic
       FROM user_subject_progress usp JOIN subjects s ON s.id = usp.subject_id
       WHERE usp.user_id=$1 ORDER BY s.sort_order`,
      [req.session.userId]
    );
    res.json({ subjects: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load subjects.' });
  }
});

router.get('/subjects/:id/topics', requireAuth, async (req, res) => {
  try {
    const { rows: subjectRows } = await pool.query(
      `SELECT s.*, usp.progress AS subject_progress FROM subjects s
       JOIN user_subject_progress usp ON usp.subject_id = s.id AND usp.user_id=$1
       WHERE s.id=$2`,
      [req.session.userId, req.params.id]
    );
    if (!subjectRows.length) return res.status(404).json({ error: 'Subject not found.' });

    const { rows: topics } = await pool.query(
      `SELECT t.id, t.name, t.description, utp.status, utp.progress
       FROM topics t
       JOIN user_topic_progress utp ON utp.topic_id = t.id AND utp.user_id=$1
       WHERE t.subject_id = 'math'
       ORDER BY t.sort_order`,
      [req.session.userId]
    );
    res.json({ subject: subjectRows[0], topics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load topics.' });
  }
});

module.exports = router;
