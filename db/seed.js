// Loads the curriculum into Postgres.
//   db/curriculum/*.js  - the full topic structure for each subject and grade (no lessons needed)
//   db/content/*.js     - written lessons and practice questions, one file per unit
// Safe to re-run: rows are upserted, so topic ids (and student progress) stay stable.
// Run with: npm run seed
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../server/db');

// Colours are chosen to keep text readable (WCAG AA) on their tints.
const SUBJECTS = [
  { id: 'math',      name: 'Mathematics', short: 'Mth', color: '#3646D6', tint: '#EEF0FD', sort_order: 1 },
  { id: 'physics',   name: 'Physics',     short: 'Phy', color: '#157A54', tint: '#E7F6EF', sort_order: 2 },
  { id: 'chemistry', name: 'Chemistry',   short: 'Chm', color: '#8C5A14', tint: '#FBF1E1', sort_order: 3 },
  { id: 'biology',   name: 'Biology',     short: 'Bio', color: '#B23A8C', tint: '#F9E8F3', sort_order: 4 },
];
// Social sciences are parked for now. Economics (Grade 12, Units 1-6) is written and saved in
// db/parked/economics-g12/. To bring it back: add { id: 'economics', name: 'Economics', short: 'Eco',
// color: '#6B5FC7', tint: '#EEECFA', sort_order: 5 } above and move those files into db/content/.

const UPSERT_TOPIC = `
  INSERT INTO topics (subject_id, grade, unit_no, unit_title, section_no, name, description, sort_order)
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
  ON CONFLICT (subject_id, grade, section_no)
  DO UPDATE SET unit_no=$3, unit_title=$4, name=$6, description=$7, sort_order=$8
  RETURNING id`;

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    for (const s of SUBJECTS) {
      await client.query(
        `INSERT INTO subjects (id, name, short, color, tint, sort_order) VALUES ($1,$2,$3,$4,$5,$6)
         ON CONFLICT (id) DO UPDATE SET name=$2, short=$3, color=$4, tint=$5, sort_order=$6`,
        [s.id, s.name, s.short, s.color, s.tint, s.sort_order]
      );
    }

    // 1) Topic structure from the textbook contents pages.
    let skeletonTopics = 0;
    const curDir = path.join(__dirname, 'curriculum');
    for (const file of fs.readdirSync(curDir).filter(f => f.endsWith('.js')).sort()) {
      const c = require(path.join(curDir, file));
      for (const grade of Object.keys(c.grades)) {
        for (let u = 0; u < c.grades[grade].length; u++) {
          const [unitTitle, sections] = c.grades[grade][u];
          for (let i = 0; i < sections.length; i++) {
            const [name, subs] = sections[i].split('|');
            const desc = subs ? `Covers: ${subs.split(';').join('; ')}.` : `Section ${u + 1}.${i + 1} of Unit ${u + 1}: ${unitTitle}.`;
            await client.query(UPSERT_TOPIC, [c.subject, Number(grade), u + 1, unitTitle, `${u + 1}.${i + 1}`, name, desc, (u + 1) * 100 + i + 1]);
            skeletonTopics++;
          }
        }
      }
    }

    // 2) Written lessons and questions.
    let lessons = 0, questions = 0;
    const conDir = path.join(__dirname, 'content');
    for (const file of fs.readdirSync(conDir).filter(f => f.endsWith('.js')).sort()) {
      const unit = require(path.join(conDir, file));
      for (const t of unit.topics) {
        // Same ordering rule as the curriculum skeleton: unit * 100 + section number.
        const order = unit.unitNo * 100 + Number(t.section.split('.')[1]);
        const { rows } = await client.query(UPSERT_TOPIC,
          [unit.subject, unit.grade, unit.unitNo, unit.unitTitle, t.section, t.name, t.description, order]);
        const topicId = rows[0].id;
        const L = t.lesson;
        await client.query(
          `INSERT INTO lessons (topic_id, objectives, sections, example, key_concept) VALUES ($1,$2,$3,$4,$5)
           ON CONFLICT (topic_id) DO UPDATE SET objectives=$2, sections=$3, example=$4, key_concept=$5`,
          [topicId, JSON.stringify(L.objectives), JSON.stringify(L.sections), JSON.stringify(L.example), L.key]
        );
        lessons++;
        for (const q of t.questions) {
          if (!Array.isArray(q.o) || q.o.length !== 4 || q.a < 0 || q.a > 3) {
            throw new Error(`Bad question in ${file} / ${t.section}: ${q.q}`);
          }
          await client.query(
            `INSERT INTO questions (topic_id, difficulty, prompt, options, correct_index, explanation)
             VALUES ($1,$2,$3,$4,$5,$6)
             ON CONFLICT (topic_id, prompt) DO UPDATE SET difficulty=$2, options=$4, correct_index=$5, explanation=$6`,
            [topicId, q.d, q.q, JSON.stringify(q.o), q.a, q.e]
          );
          questions++;
        }
      }
    }

    await client.query('COMMIT');
    console.log(`Seed complete: ${SUBJECTS.length} subjects, ${skeletonTopics} textbook topics, ${lessons} written lessons, ${questions} practice questions.`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Seed failed:', err.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
