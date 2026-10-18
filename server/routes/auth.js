const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db');

const router = express.Router();

const DEFAULT_STUDY_PLAN = [
<<<<<<< HEAD
  'Read your next lesson',
  'Practice 5 questions on a topic you studied',
  'Review the questions you got wrong',
  'Ask the AI Study Coach about one thing you found hard',
=======
  'Finish today\u2019s recommended lesson',
  'Practice 10 questions in your weakest topic',
  'Review yesterday\u2019s incorrect answers',
  'Take a short quiz before you log off',
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
];

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

router.post('/signup', async (req, res) => {
  const { name, email, password, grade } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required.' });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters.' });
  }
  const gradeNum = [9, 10, 11, 12].includes(Number(grade)) ? Number(grade) : 11;

  const client = await pool.connect();
  try {
    const { rows: existing } = await client.query('SELECT id FROM users WHERE email = $1', [email.toLowerCase()]);
    if (existing.length) {
      return res.status(409).json({ error: 'An account with that email already exists.' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await client.query('BEGIN');

    const { rows: userRows } = await client.query(
      `INSERT INTO users (name, email, password_hash, initials, grade)
       VALUES ($1,$2,$3,$4,$5) RETURNING id, name, email, initials, grade`,
      [name.trim(), email.toLowerCase(), passwordHash, initials(name), gradeNum]
    );
    const user = userRows[0];

<<<<<<< HEAD
    // Nothing about progress is seeded: every topic starts untouched and
    // progress only appears as the student reads lessons and answers questions.
    for (let i = 0; i < DEFAULT_STUDY_PLAN.length; i++) {
      await client.query(
        `INSERT INTO study_plan_items (user_id, text, done, sort_order) VALUES ($1,$2,false,$3)`,
        [user.id, DEFAULT_STUDY_PLAN[i], i]
      );
    }
    await client.query(
      `INSERT INTO chat_messages (user_id, role, text) VALUES ($1,'bot',$2)`,
      [user.id, `Hi ${user.name.split(' ')[0]}! I'm your AI Study Coach. Open any lesson and tap "Ask AI" and I'll help with that topic, or ask me a question below.`]
    );

    await client.query('COMMIT');
    req.session.userId = user.id;
    res.json({ user });
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {});
    console.error('Signup failed:', err);
=======
    // Every subject starts at 0% — progress only moves when the student
    // actually completes practice sessions (see practice.js /complete route).
    const { rows: subjects } = await client.query('SELECT id FROM subjects');
    const { rows: topics } = await client.query('SELECT id, name FROM topics ORDER BY sort_order');
    for (const subj of subjects) {
      await client.query(
        `INSERT INTO user_subject_progress (user_id, subject_id, progress, topics_count, current_topic)
         VALUES ($1,$2,0,$3,$4)`,
        [user.id, subj.id, topics.length, topics[0] ? topics[0].name : '']
      );
    }

    // Every topic starts untouched — status/progress update as attempts come in.
    for (const topic of topics) {
      await client.query(
        `INSERT INTO user_topic_progress (user_id, topic_id, status, progress) VALUES ($1,$2,'todo',0)`,
        [user.id, topic.id]
      );
    }

    // Default study plan
    for (let i = 0; i < DEFAULT_STUDY_PLAN.length; i++) {
      await client.query(
        `INSERT INTO study_plan_items (user_id, text, done, sort_order) VALUES ($1,$2,$3,$4)`,
        [user.id, DEFAULT_STUDY_PLAN[i], false, i]
      );
    }

    // Welcome message from the AI coach
    await client.query(
      `INSERT INTO chat_messages (user_id, role, text) VALUES ($1,'bot',$2)`,
      [user.id, `Hi ${user.name.split(' ')[0]} \ud83d\udc4b I\u2019m your AI Study Coach. Ask me about anything you\u2019re stuck on \u2014 or tap one of the suggestions below to get started.`]
    );

    await client.query('COMMIT');

    req.session.userId = user.id;
    res.json({ user });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
    res.status(500).json({ error: 'Could not create account.' });
  } finally {
    client.release();
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()]);
    const user = rows[0];
    if (!user) return res.status(401).json({ error: 'Incorrect email or password.' });
<<<<<<< HEAD
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Incorrect email or password.' });
=======

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Incorrect email or password.' });

>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
    req.session.userId = user.id;
    res.json({ user: { id: user.id, name: user.name, email: user.email, initials: user.initials, grade: user.grade } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not sign in.' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ ok: true });
  });
});

router.get('/me', async (req, res) => {
  if (!req.session.userId) return res.json({ user: null });
  const { rows } = await pool.query('SELECT id, name, email, initials, grade FROM users WHERE id = $1', [req.session.userId]);
  res.json({ user: rows[0] || null });
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
