require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const pool = require('./db');

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const subjectsRoutes = require('./routes/subjects');
const practiceRoutes = require('./routes/practice');
const examRoutes = require('./routes/exam');
const progressRoutes = require('./routes/progress');
const chatRoutes = require('./routes/chat');

const app = express();
app.set('trust proxy', 1);
app.use(express.json());

// Netlify rewrites /api/* to this function and strips the /api prefix.
// Restore it before Express route matching; direct /api requests remain unchanged.
app.use((req, res, next) => {
  if (req.path !== '/api' && !req.path.startsWith('/api/')) {
    req.url = '/api' + req.url;
  }
  next();
});

app.use(session({
  store: new pgSession({ pool, createTableIfMissing: true }),
  secret: process.env.SESSION_SECRET || (process.env.NODE_ENV === 'production' ? (() => { throw new Error('SESSION_SECRET must be set in production.'); })() : 'dev-secret-change-me'),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  },
}));

app.use('/api/auth', authRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', subjectsRoutes);
app.use('/api', practiceRoutes);
app.use('/api', examRoutes);
app.use('/api', progressRoutes);
app.use('/api', chatRoutes);

app.use(express.static(path.join(__dirname, '..', 'public')));

// Any non-API route falls back to index.html; the front end's own router
// (hash-based) decides which screen to show, and index.html itself
// redirects to /login.html if there's no active session.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`NEXA server running at http://localhost:${PORT}`));
}
module.exports = app;
