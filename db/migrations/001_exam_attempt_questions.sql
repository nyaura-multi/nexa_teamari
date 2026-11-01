-- Additive migration for persisted mock-exam question sets.
-- Safe to run repeatedly; it does not change existing student or attempt data.
CREATE TABLE IF NOT EXISTS exam_attempt_questions (
  attempt_id  INT NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  question_order INT NOT NULL,
  PRIMARY KEY (attempt_id, question_id),
  UNIQUE (attempt_id, question_order)
);

