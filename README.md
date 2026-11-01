# NEXA — Full-Stack (Node/Express + PostgreSQL)

Academic companion for Ethiopian high-school students (Grades 9–12).
Learn. Practice. Understand. Improve.

This is the full-stack version: a real Express API backed by PostgreSQL,
with signup/login and session auth. The front end is plain HTML/CSS/JS
(no build step) that talks to the API. Grades 9–12 curriculum outlines for the
core subjects are seeded from local files; written lessons and
questions are currently available only where authored content files exist (see
**Current content and rollout limits**).

## Stack

- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **Auth:** bcrypt password hashing + `express-session`, sessions stored in
  Postgres via `connect-pg-simple` (so logins survive a server restart)
- **Frontend:** static HTML/CSS/JS served by Express, calling `/api/*`

## Project layout

```
nexa-fullstack/
  db/
    schema.sql       — all tables (run once)
    seed.js           — seeds the static catalog: subjects, topics, questions
  server/
    index.js          — Express app entry point
    db.js              — pg connection pool
    middleware/requireAuth.js
    lib/coach.js       — AI Study Coach with a lesson-based fallback
    routes/
      auth.js          — signup / login / logout / me
      dashboard.js      — dashboard stats, study plan toggle, grade update
      subjects.js        — subjects list + subject detail/topics
      practice.js         — practice session start/answer/complete
      exam.js               — mock exam start/answer/submit
      progress.js            — aggregated progress stats
      chat.js                 — AI coach chat history + send
  public/
    index.html          — the app shell (loads app.js)
    login.html            — login page
    signup.html             — signup page (collects name/email/password/grade)
    style.css                — all styling (design tokens + components)
    app.js                     — client-side router + API calls
```

## Setup

### 1. Install PostgreSQL and create a database

```bash
createdb nexa
```

(If you don't have the `createdb` CLI, open `psql` and run `CREATE DATABASE nexa;`)

### 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your local Postgres credentials. Defaults assume a local
Postgres on `localhost:5432` with user `postgres` / password `postgres` — change
these to match your setup.

### 3. Install dependencies

```bash
npm install
```

### 4. Create the schema and seed the catalog data

```bash
psql -d nexa -f db/schema.sql
npm run seed
```

`db/schema.sql` creates missing tables for a new database. Existing installations must apply reviewed additive migrations from `db/migrations/` before deploying code that uses them. `npm run seed`
upserts the current subject catalog, Grade 12 curriculum topics, and authored
lessons/questions. It does not create or modify student accounts.

### 5. Run the server

```bash
npm run dev    # with auto-restart (nodemon)
# or
npm start
```

Then open **http://localhost:3000** — you'll land on the login page. Click
"Create an account" to sign up (this is what seeds your personal dashboard,
subject progress, study plan, and welcome chat message).

## How auth works

- Passwords are hashed with `bcrypt` (12 rounds) — never stored in plain text.
- On login, a session is created and stored server-side in Postgres
  (`connect-pg-simple` auto-creates its own `session` table on first run).
- The browser only holds an `httpOnly` session cookie — the front end never
  sees a password or token it could leak.
- Every `/api/*` route except `/api/auth/*` requires an active session
  (`server/middleware/requireAuth.js`); the front end redirects to
  `login.html` on a 401.

## What's actually dynamic now

Compared to the static prototype, these are now real, per-user, and persisted
in Postgres:

- **Accounts** — signup/login, one row per student
- **Grade** — stored on the user, changeable from the grade-selection screen
- **Subject & topic progress** — starts at a seeded baseline per account and
  moves as you complete practice sessions (a session nudges the matching
  topic's progress up based on how well you did)
- **Practice sessions** — questions are served *without* the correct answer;
  the correct answer only comes back from the server after you submit
  — the browser can't just read it out of the page source
- **Mock exams** — same server-side-graded pattern, with a real countdown
  that auto-submits on the backend when time runs out
- **Study plan** — checkbox state persists per user
- **Progress page** — weekly activity, subject performance, recent scores,
  and strengths/areas-to-improve are all computed live from your attempt
  history, not hardcoded
- **AI Study Coach** — chat history persists per user across sessions

## Current content and rollout limits

The curriculum catalog lists Mathematics, Physics, Chemistry, and Biology for
Grades 9–12. Authored lesson/question modules are available for Grade 12
Mathematics Units 1–5, Physics Unit 2 (Two-dimensional Motion), Chemistry Unit 1
(Acid-Base Equilibria), and Biology Unit 3 (Energy Transformation). Other topics
must remain clearly marked as coming soon; they must not show generic filler as
if it were curriculum-aligned material.

The written Mathematics units (1–5) have 12–15 questions per section. The new
Physics, Chemistry, and Biology units have 8 questions per section, including
Easy, Medium, and Hard practice. These questions and explanations are newly
written around the textbook topic outline; textbook passages are not copied.
Question-count choices are limited to the selected topic bank, and a session
explains when difficulty filters leave fewer items than requested. After practice or a mock exam, students can review wrong
and unanswered questions with explanations and direct links to the lesson and
a targeted retry. This is a broader starter bank, not yet enough repetition for
mastery or a complete national-exam question bank. Grade 12 coverage is still
partial outside Mathematics, and Grades 9–11 currently have curriculum outlines
but no authored lessons/questions. Questions still need review against the
current Ethiopian Grade 12 curriculum, exam blueprints, and teacher-approved
solutions before they are treated as official exam preparation. The current
mock exam samples available questions and is not yet calibrated to the official
matric blueprint. Existing databases must apply
`db/migrations/001_exam_attempt_questions.sql` before deploying the saved-exam-review flow.

Lesson page views do not change learner progress. Students can explicitly mark
a lesson as read after studying it; practice and exam results continue to update
progress through their own routes.

The Study Coach uses the configured Anthropic API when `ANTHROPIC_API_KEY` is
available and a limited lesson-grounded fallback otherwise. Do not present the
fallback as a full AI tutor or as Amharic-capable.

## Database safety

`db/schema.sql` creates missing tables without dropping user data. It is for a
new database; an existing database from an earlier schema needs a reviewed,
versioned migration before upgrading. Never use the seed script or schema file
against a production database until the deployment and data migration have been
reviewed and backed up.

## Deployment checklist

- Verify the Netlify deployment is built from the intended repository branch and
  commit. The repository has previously contained unresolved merge markers, so
  check the deployed commit rather than assuming the live site matches `main`.
- Configure the API host's PostgreSQL URL, session secret, and optional coach
  API key in its secret manager. Never commit `.env` files or credentials.
- Deploy backend/API and static front end together only after confirming their
  API base URL, cookie/session settings, CORS policy, and database schema match.
- Expand and review each subject’s lessons and question bank before advertising
  that subject as ready for exam practice.

