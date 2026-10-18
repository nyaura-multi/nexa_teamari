<<<<<<< HEAD
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
=======
// Seeds the static catalog data: subjects, topics, questions.
// Per-user data (progress, study plan, chat) is created at signup instead.
// Run with: npm run seed
require('dotenv').config();
const pool = require('../server/db');

const SUBJECTS = [
  { id: 'math',      name: 'Mathematics',          short: 'Mth', color: '#3646D6', tint: '#EEF0FD', sort_order: 1 },
  { id: 'physics',   name: 'Physics',               short: 'Phy', color: '#1F9D6B', tint: '#E7F6EF', sort_order: 2 },
  { id: 'chemistry', name: 'Chemistry',              short: 'Chm', color: '#C6811C', tint: '#FBF1E1', sort_order: 3 },
  { id: 'biology',   name: 'Biology',                short: 'Bio', color: '#B23A8C', tint: '#F9E8F3', sort_order: 4 },
  { id: 'english',   name: 'English',                short: 'Eng', color: '#2A7DBE', tint: '#E6F1FA', sort_order: 5 },
  { id: 'civics',    name: 'Civic & Ethical Ed.',    short: 'Civ', color: '#6B5FC7', tint: '#EEECFA', sort_order: 6 },
];

// Demo topic set (used under 'math' and reused for any subject's detail page,
// matching the original prototype's behavior).
const TOPICS = [
  { name: 'Sets and Relations',   description: 'Operations on sets, relations and mapping between sets.', sort_order: 1 },
  { name: 'Functions',            description: 'Domain, range, composition and inverse of functions.', sort_order: 2 },
  { name: 'Quadratic Equations',  description: 'Solving, factoring and graphing quadratic equations.', sort_order: 3 },
  { name: 'Sequences and Series', description: 'Arithmetic and geometric progressions and their sums.', sort_order: 4 },
  { name: 'Coordinate Geometry',  description: 'Lines, distance, and the equation of a circle.', sort_order: 5 },
  { name: 'Trigonometric Ratios', description: 'Sine, cosine, tangent and their real-world applications.', sort_order: 6 },
];

const QUESTIONS = [
  { topic_name: 'Functions', difficulty: 'Medium', prompt: 'If f(x) = 3x \u2212 5, what is f(4)?',
    options: ['7','9','12','17'], correct_index: 0, explanation: 'f(4) = 3(4) \u2212 5 = 12 \u2212 5 = 7.' },
  { topic_name: 'Functions', difficulty: 'Easy', prompt: 'Which of the following relations is a function?',
    options: ['{(1,2),(1,3)}','{(1,2),(2,2)}','{(1,2),(1,4)}','{(2,1),(2,5)}'], correct_index: 1,
    explanation: 'Each input appears only once in {(1,2),(2,2)}, so every input has exactly one output.' },
  { topic_name: 'Functions', difficulty: 'Hard', prompt: 'If f(x) = x\u00b2 and g(x) = x+1, what is f(g(2))?',
    options: ['5','9','4','6'], correct_index: 1, explanation: 'g(2) = 3, then f(3) = 3\u00b2 = 9.' },
  { topic_name: 'Quadratic Equations', difficulty: 'Medium', prompt: 'What are the roots of x\u00b2 \u2212 5x + 6 = 0?',
    options: ['x = 1, 6','x = 2, 3','x = -2, -3','x = 2, -3'], correct_index: 1,
    explanation: 'Factoring gives (x\u22122)(x\u22123) = 0, so x = 2 or x = 3.' },
  { topic_name: 'Quadratic Equations', difficulty: 'Hard', prompt: 'For ax\u00b2+bx+c=0, the discriminant is negative. What does this mean?',
    options: ['Two equal real roots','Two distinct real roots','No real roots','Infinite roots'], correct_index: 2,
    explanation: 'A negative discriminant means the roots are complex, so there are no real solutions.' },
  { topic_name: 'Sequences and Series', difficulty: 'Easy', prompt: 'What is the 5th term of the sequence 2, 5, 8, 11, \u2026?',
    options: ['13','14','17','20'], correct_index: 1, explanation: 'Common difference is 3, so the 5th term is 2 + 4(3) = 14.' },
  { topic_name: 'Coordinate Geometry', difficulty: 'Medium', prompt: 'What is the distance between (0,0) and (3,4)?',
    options: ['5','6','7','12'], correct_index: 0, explanation: 'Distance = \u221a(3\u00b2+4\u00b2) = \u221a25 = 5.' },
  { topic_name: 'Trigonometric Ratios', difficulty: 'Easy', prompt: 'What is sin(90\u00b0)?',
    options: ['0','0.5','1','undefined'], correct_index: 2, explanation: 'sin(90\u00b0) = 1 on the unit circle.' },
];
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    for (const s of SUBJECTS) {
      await client.query(
<<<<<<< HEAD
        `INSERT INTO subjects (id, name, short, color, tint, sort_order) VALUES ($1,$2,$3,$4,$5,$6)
=======
        `INSERT INTO subjects (id, name, short, color, tint, sort_order)
         VALUES ($1,$2,$3,$4,$5,$6)
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
         ON CONFLICT (id) DO UPDATE SET name=$2, short=$3, color=$4, tint=$5, sort_order=$6`,
        [s.id, s.name, s.short, s.color, s.tint, s.sort_order]
      );
    }

<<<<<<< HEAD
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
=======
    const { rows: existingTopics } = await client.query('SELECT id FROM topics LIMIT 1');
    if (existingTopics.length === 0) {
      for (const t of TOPICS) {
        await client.query(
          `INSERT INTO topics (subject_id, name, description, sort_order) VALUES ('math',$1,$2,$3)`,
          [t.name, t.description, t.sort_order]
        );
      }
    }

    const { rows: existingQ } = await client.query('SELECT id FROM questions LIMIT 1');
    if (existingQ.length === 0) {
      for (const q of QUESTIONS) {
        await client.query(
          `INSERT INTO questions (topic_name, difficulty, prompt, options, correct_index, explanation)
           VALUES ($1,$2,$3,$4,$5,$6)`,
          [q.topic_name, q.difficulty, q.prompt, JSON.stringify(q.options), q.correct_index, q.explanation]
        );
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
      }
    }

    await client.query('COMMIT');
<<<<<<< HEAD
    console.log(`Seed complete: ${SUBJECTS.length} subjects, ${skeletonTopics} textbook topics, ${lessons} written lessons, ${questions} practice questions.`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Seed failed:', err.message);
=======
    console.log('Seed complete: subjects, topics, questions.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Seed failed:', err);
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
