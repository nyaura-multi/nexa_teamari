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
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  initials      TEXT NOT NULL,
  grade         INT NOT NULL DEFAULT 11 CHECK (grade BETWEEN 9 AND 12),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE subjects (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  short      TEXT NOT NULL,
  color      TEXT NOT NULL,
  tint       TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

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
  user_id  INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_id INT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  status   TEXT NOT NULL DEFAULT 'todo' CHECK (status IN ('todo','progress','done')),
  progress INT NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  PRIMARY KEY (user_id, topic_id)
);

CREATE TABLE practice_attempts (
  id           SERIAL PRIMARY KEY,
  user_id      INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject_id   TEXT REFERENCES subjects(id),
  topic_id     INT REFERENCES topics(id),
  difficulty   TEXT NOT NULL DEFAULT 'Mixed',
  total        INT NOT NULL,
  correct      INT NOT NULL DEFAULT 0,
  started_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

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
  id         SERIAL PRIMARY KEY,
  user_id    INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  text       TEXT NOT NULL,
  done       BOOLEAN NOT NULL DEFAULT false,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE chat_messages (
  id         SERIAL PRIMARY KEY,
  user_id    INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role       TEXT NOT NULL CHECK (role IN ('user','bot')),
  text       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- connect-pg-simple recreates the "session" table on server start.
