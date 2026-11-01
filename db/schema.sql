-- NEXA database schema for a new database.
-- This file never deletes user data. Existing v1 databases need an explicit migration;
-- do not point this schema at production until that migration has been reviewed.

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  initials      TEXT NOT NULL,
  grade         INT NOT NULL DEFAULT 11 CHECK (grade BETWEEN 9 AND 12),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS subjects (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  short      TEXT NOT NULL,
  color      TEXT NOT NULL,
  tint       TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

-- One row per textbook section. A subject only appears for a grade once it
-- has topics for that grade.
CREATE TABLE IF NOT EXISTS topics (
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

CREATE TABLE IF NOT EXISTS lessons (
  topic_id    INT PRIMARY KEY REFERENCES topics(id) ON DELETE CASCADE,
  objectives  JSONB NOT NULL,
  sections    JSONB NOT NULL,
  example     JSONB NOT NULL,
  key_concept TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
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
CREATE TABLE IF NOT EXISTS user_topic_progress (
  user_id  INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_id INT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  status   TEXT NOT NULL DEFAULT 'todo' CHECK (status IN ('todo','progress','done')),
  progress INT NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  PRIMARY KEY (user_id, topic_id)
);

CREATE TABLE IF NOT EXISTS practice_attempts (
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

CREATE TABLE IF NOT EXISTS practice_answers (
  id             SERIAL PRIMARY KEY,
  attempt_id     INT NOT NULL REFERENCES practice_attempts(id) ON DELETE CASCADE,
  question_id    INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_index INT NOT NULL,
  is_correct     BOOLEAN NOT NULL,
  answered_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS exam_attempts (
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

CREATE TABLE IF NOT EXISTS exam_answers (
  id             SERIAL PRIMARY KEY,
  attempt_id     INT NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id    INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_index INT NOT NULL,
  is_correct     BOOLEAN NOT NULL,
  UNIQUE (attempt_id, question_id)
);

-- Persist the exact question set so exams can be reviewed and submissions
-- cannot score questions that were not presented in that attempt.
CREATE TABLE IF NOT EXISTS exam_attempt_questions (
  attempt_id  INT NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  question_order INT NOT NULL,
  PRIMARY KEY (attempt_id, question_id),
  UNIQUE (attempt_id, question_order)
);

CREATE TABLE IF NOT EXISTS study_plan_items (
  id         SERIAL PRIMARY KEY,
  user_id    INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  text       TEXT NOT NULL,
  done       BOOLEAN NOT NULL DEFAULT false,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS chat_messages (
  id         SERIAL PRIMARY KEY,
  user_id    INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role       TEXT NOT NULL CHECK (role IN ('user','bot')),
  text       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- connect-pg-simple recreates the "session" table on server start.

