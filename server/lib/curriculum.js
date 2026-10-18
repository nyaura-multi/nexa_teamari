const pool = require('../db');

// Subjects available at the student's grade, with progress computed live.
// Progress = average progress over topics that actually have a lesson, so a
// subject whose lessons are not written yet shows 0% instead of fake numbers.
async function getSubjectsForUser(userId, grade) {
  const { rows } = await pool.query(
    `SELECT s.id AS subject_id, s.name AS subject_name, s.short, s.color, s.tint,
            t.id AS topic_id, t.name AS topic_name,
            (l.topic_id IS NOT NULL) AS has_lesson,
            (SELECT COUNT(*) FROM questions q WHERE q.topic_id = t.id)::int AS question_count,
            COALESCE(utp.status, 'todo') AS status, COALESCE(utp.progress, 0) AS progress
     FROM subjects s
     JOIN topics t ON t.subject_id = s.id AND t.grade = $2
     LEFT JOIN lessons l ON l.topic_id = t.id
     LEFT JOIN user_topic_progress utp ON utp.topic_id = t.id AND utp.user_id = $1
     ORDER BY s.sort_order, t.sort_order`,
    [userId, grade]
  );
  const map = new Map();
  for (const r of rows) {
    if (!map.has(r.subject_id)) {
      map.set(r.subject_id, { id: r.subject_id, name: r.subject_name, short: r.short, color: r.color, tint: r.tint, topics: [] });
    }
    map.get(r.subject_id).topics.push(r);
  }
  return [...map.values()].map(s => {
    const avail = s.topics.filter(t => t.has_lesson);
    const progress = avail.length ? Math.round(avail.reduce((a, t) => a + t.progress, 0) / avail.length) : 0;
    const current =
      s.topics.find(t => t.status === 'progress') ||
      avail.find(t => t.status !== 'done') ||
      s.topics.find(t => t.status !== 'done') ||
      s.topics[s.topics.length - 1];
    return {
      id: s.id, name: s.name, short: s.short, color: s.color, tint: s.tint,
      topics_count: s.topics.length,
      available_count: avail.length,
      question_count: s.topics.reduce((a, t) => a + t.question_count, 0),
      progress,
      current_topic: current.topic_name,
      current_topic_id: current.topic_id,
      current_has_lesson: current.has_lesson,
    };
  });
}

// Per-topic answer accuracy from practice sessions and exams.
const ACCURACY_CTE = `
  acc AS (
    SELECT q.topic_id, COUNT(*)::int AS total, SUM(x.is_correct::int)::int AS correct FROM (
      SELECT pa.question_id, pa.is_correct FROM practice_answers pa
        JOIN practice_attempts a ON a.id = pa.attempt_id WHERE a.user_id = $1
      UNION ALL
      SELECT ea.question_id, ea.is_correct FROM exam_answers ea
        JOIN exam_attempts e ON e.id = ea.attempt_id WHERE e.user_id = $1
    ) x JOIN questions q ON q.id = x.question_id GROUP BY q.topic_id
  )`;

async function getTopicAccuracy(userId, grade) {
  const { rows } = await pool.query(
    `WITH ${ACCURACY_CTE}
     SELECT t.id AS topic_id, t.name, t.section_no, s.id AS subject_id, s.name AS subject_name,
            acc.total, acc.correct, ROUND(100.0 * acc.correct / acc.total)::int AS accuracy
     FROM acc JOIN topics t ON t.id = acc.topic_id JOIN subjects s ON s.id = t.subject_id
     WHERE t.grade = $2 ORDER BY accuracy ASC, acc.total DESC`,
    [userId, grade]
  );
  return rows;
}

// Up to two recommendations: weak topics first, then topics in progress, then the next unstarted lesson.
async function getRecommendations(userId, grade) {
  const { rows } = await pool.query(
    `WITH ${ACCURACY_CTE}
     SELECT t.id, t.name, s.id AS subject_id, s.name AS subject_name,
            COALESCE(utp.status, 'todo') AS status, COALESCE(utp.progress, 0) AS progress,
            COALESCE(acc.total, 0) AS total, COALESCE(acc.correct, 0) AS correct
     FROM topics t
     JOIN subjects s ON s.id = t.subject_id
     JOIN lessons l ON l.topic_id = t.id
     LEFT JOIN user_topic_progress utp ON utp.topic_id = t.id AND utp.user_id = $1
     LEFT JOIN acc ON acc.topic_id = t.id
     WHERE t.grade = $2
     ORDER BY s.sort_order, t.sort_order`,
    [userId, grade]
  );
  const recs = [];
  const push = (t, kind) => { if (recs.length < 2 && !recs.find(r => r.topic_id === t.id)) {
    recs.push({ topic_id: t.id, name: t.name, subject_id: t.subject_id, subject_name: t.subject_name, kind, progress: t.progress });
  } };
  rows.filter(t => t.total >= 3 && t.correct / t.total < 0.7)
      .sort((a, b) => a.correct / a.total - b.correct / b.total).forEach(t => push(t, 'weak'));
  rows.filter(t => t.status === 'progress').forEach(t => push(t, 'continue'));
  rows.filter(t => t.status === 'todo').forEach(t => push(t, 'start'));
  return recs;
}

module.exports = { getSubjectsForUser, getTopicAccuracy, getRecommendations };
