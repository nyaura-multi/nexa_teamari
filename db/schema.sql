<<<<<<< HEAD
-- NEXA database schema (v2: real curriculum content)
-- Run with: psql -d nexa -f db/schema.sql
--
-- WARNING: this DROPS and recreates every NEXA table, including user accounts.
-- Stop the server before running it, and restart the server afterwards.

DROP TABLE IF EXISTS chat_messages, study_plan_items, exam_answers, exam_attempts,
  practice_answers, practice_attempts, questions, user_topic_progress,
  user_subject_progress, lessons, topics, subjects, users CASCADE;
DROP TABLE IF EXISTS "session";

CREATE TABLE users (
=======
-- NEXA database schema
-- Run with: psql -d nexa -f db/schema.sql

CREATE TABLE IF NOT EXISTS users (
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  initials      TEXT NOT NULL,
  grade         INT NOT NULL DEFAULT 11 CHECK (grade BETWEEN 9 AND 12),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

<<<<<<< HEAD
CREATE TABLE subjects (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  short      TEXT NOT NULL,
=======
CREATE TABLE IF NOT EXISTS subjects (
  id         TEXT PRIMARY KEY,        -- e.g. 'math'
  name       TEXT NOT NULL,
  short      TEXT NOT NULL,           -- 3-letter badge, e.g. 'Mth'
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  color      TEXT NOT NULL,
  tint       TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

<<<<<<< HEAD
-- One row per textbook section. A subject only appears for a grade once it
-- has topics for that grade.
CREATE TABLE topics (
  id          SERIAL PRIMARY KEY,
  subject_id  TEXT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  grade       INT NOT NULL CHECK (grade BETWEEN 9 AND 12),
  unit_no     INT NOT NULL,
  unit_title  TEXT NOT NULL,
  section_no  TEXT NOT NULL,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order  INT NOT NULL DEFAULT 0,
  UNIQUE (subject_id, grade, section_no)
);

CREATE TABLE lessons (
  topic_id    INT PRIMARY KEY REFERENCES topics(id) ON DELETE CASCADE,
  objectives  JSONB NOT NULL,
  sections    JSONB NOT NULL,
  example     JSONB NOT NULL,
  key_concept TEXT NOT NULL
);

CREATE TABLE questions (
  id            SERIAL PRIMARY KEY,
  topic_id      INT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  difficulty    TEXT NOT NULL CHECK (difficulty IN ('Easy','Medium','Hard')),
  prompt        TEXT NOT NULL,
  options       JSONB NOT NULL,
  correct_index INT NOT NULL,
  explanation   TEXT NOT NULL,
  UNIQUE (topic_id, prompt)
);

-- Progress is stored per topic only. Subject and overall progress are
-- computed from it, so nothing is ever seeded or faked.
CREATE TABLE user_topic_progress (
=======
-- Per-user, per-subject progress (created at signup for every subject)
CREATE TABLE IF NOT EXISTS user_subject_progress (
  user_id       INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject_id    TEXT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  progress      INT NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  topics_count  INT NOT NULL DEFAULT 0,
  current_topic TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (user_id, subject_id)
);

-- Static topic catalog (demo content lives under the 'math' subject and is
-- reused for subject-detail pages of any subject, same as the front-end-only prototype)
CREATE TABLE IF NOT EXISTS topics (
  id          SERIAL PRIMARY KEY,
  subject_id  TEXT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order  INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS user_topic_progress (
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  user_id  INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_id INT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  status   TEXT NOT NULL DEFAULT 'todo' CHECK (status IN ('todo','progress','done')),
  progress INT NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  PRIMARY KEY (user_id, topic_id)
);

<<<<<<< HEAD
CREATE TABLE practice_attempts (
  id           SERIAL PRIMARY KEY,
  user_id      INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject_id   TEXT REFERENCES subjects(id),
  topic_id     INT REFERENCES topics(id),
=======
-- Question bank. Correct answer and explanation are never sent to the client
-- until an answer has been submitted for that question in a given attempt.
CREATE TABLE IF NOT EXISTS questions (
  id            SERIAL PRIMARY KEY,
  topic_name    TEXT NOT NULL,
  difficulty    TEXT NOT NULL CHECK (difficulty IN ('Easy','Medium','Hard')),
  prompt        TEXT NOT NULL,
  options       JSONB NOT NULL,   -- array of option strings
  correct_index INT NOT NULL,
  explanation   TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS practice_attempts (
  id           SERIAL PRIMARY KEY,
  user_id      INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_name   TEXT NOT NULL,
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  difficulty   TEXT NOT NULL DEFAULT 'Mixed',
  total        INT NOT NULL,
  correct      INT NOT NULL DEFAULT 0,
  started_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

<<<<<<< HEAD
CREATE TABLE practice_answers (
  id             SERIAL PRIMARY KEY,
  attempt_id     INT NOT NULL REFERENCES practice_attempts(id) ON DELETE CASCADE,
  question_id    INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_index INT NOT NULL,
  is_correct     BOOLEAN NOT NULL,
  answered_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE exam_attempts (
  id             SERIAL PRIMARY KEY,
  user_id        INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject_id     TEXT REFERENCES subjects(id),
  title          TEXT NOT NULL,
  total          INT NOT NULL,
  correct        INT NOT NULL DEFAULT 0,
  time_limit_sec INT NOT NULL,
  started_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at   TIMESTAMPTZ
);

CREATE TABLE exam_answers (
  id             SERIAL PRIMARY KEY,
  attempt_id     INT NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id    INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_index INT NOT NULL,
  is_correct     BOOLEAN NOT NULL,
  UNIQUE (attempt_id, question_id)
);

CREATE TABLE study_plan_items (
=======
CREATE TABLE IF NOT EXISTS practice_answers (
  id          SERIAL PRIMARY KEY,
  attempt_id  INT NOT NULL REFERENCES practice_attempts(id) ON DELETE CASCADE,
  question_id INT NOT NULL REFERENCES questions(id),
  selected_index INT NOT NULL,
  is_correct  BOOLEAN NOT NULL,
  answered_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS exam_attempts (
  id            SERIAL PRIMARY KEY,
  user_id       INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title         TEXT NOT NULL,
  total         INT NOT NULL,
  correct       INT NOT NULL DEFAULT 0,
  time_limit_sec INT NOT NULL,
  started_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at  TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS exam_answers (
  id          SERIAL PRIMARY KEY,
  attempt_id  INT NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id INT NOT NULL REFERENCES questions(id),
  selected_index INT NOT NULL,
  is_correct  BOOLEAN NOT NULL,
  UNIQUE (attempt_id, question_id)
);

CREATE TABLE IF NOT EXISTS study_plan_items (
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  id         SERIAL PRIMARY KEY,
  user_id    INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  text       TEXT NOT NULL,
  done       BOOLEAN NOT NULL DEFAULT false,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

<<<<<<< HEAD
CREATE TABLE chat_messages (
=======
CREATE TABLE IF NOT EXISTS chat_messages (
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
  id         SERIAL PRIMARY KEY,
  user_id    INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role       TEXT NOT NULL CHECK (role IN ('user','bot')),
  text       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

<<<<<<< HEAD
-- connect-pg-simple recreates the "session" table on server start.
=======
-- connect-pg-simple creates its own "session" table automatically
-- (createTableIfMissing: true in server/index.js), no need to define it here.
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
