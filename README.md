# NEXA — Full-Stack (Node/Express + PostgreSQL)

Academic companion for Ethiopian high-school students (Grades 9–12).
Learn. Practice. Understand. Improve.

This is the full-stack version: a real Express API backed by PostgreSQL,
with signup/login and session auth. The front end is plain HTML/CSS/JS
(no build step) that talks to the API — nothing runs from mock arrays
anymore except the lesson reading content (see **Known simplifications** below).

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
    lib/coach.js       — AI Study Coach reply logic (rule-based for v1)
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

`db/schema.sql` creates all tables. `npm run seed` populates the static
catalog (6 subjects, the demo topic list, and the question bank) — it's
separate from user data, which is created automatically when someone signs up.

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

## Known simplifications (v1)

- **Lesson content** (`public/app.js` → `LESSON` object) is still static
  demo content for "Mathematics → Functions" — the brief asked for mock
  data here, and full curriculum content wasn't in scope. Swapping it for a
  `lessons` table + `/api/lesson/:topicId` route would follow the same
  pattern as `subjects.js`.
- **Subject detail topics** all reuse the same demo topic set (seeded under
  `subject_id = 'math'`) regardless of which subject you open — matching the
  original prototype's behavior. Give each subject its own topics by seeding
  more rows in `db/seed.js` with different `subject_id` values.
- **AI Study Coach** replies are rule-based (`server/lib/coach.js`), not a
  real model call, per the brief's "mock data" instruction for v1. It's
  isolated behind one function so swapping in a real LLM call later doesn't
  touch the route or the front end.
- **No marketing landing page** in this version — the app goes straight to
  login/signup, since the previous static build already covered that page
  and it doesn't need a backend.

## Next steps if you keep building this

- Add password reset (email-based token flow)
- Real lesson content table + admin/teacher content authoring
- Expand the question bank significantly (8 seed questions is enough to
  demo the mechanics, not a real curriculum)
- Rate-limit `/api/auth/login` against brute-force attempts
- Move `SESSION_SECRET` and DB credentials to a real secrets manager for
  production deployment
