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


    // 3) Ensure every textbook topic has a lesson and practice questions.
    // Existing authored lessons above always take priority; this fills only uncovered topics.
    const missing = await client.query(`
      SELECT t.id, t.subject_id, t.grade, t.unit_no, t.unit_title, t.section_no,
             t.name, t.description
      FROM topics t
      LEFT JOIN lessons l ON l.topic_id = t.id
      WHERE l.topic_id IS NULL
      ORDER BY t.subject_id, t.grade, t.unit_no, t.sort_order
    `);
    for (const t of missing.rows) {
      const subjectName = ({ math: 'Mathematics', physics: 'Physics', chemistry: 'Chemistry', biology: 'Biology' })[t.subject_id] || t.subject_id;
      const appliedExample = ({
        math: `If a quantity x is represented by a rule, first identify the known values, substitute carefully, and check that the result satisfies the original rule. For example, if y = 2x + 3 and x = 4, then y = 2(4) + 3 = 11.`,
        physics: `Start by listing the known quantities with units, identify the physical principle that connects them, rearrange the equation before substituting, and check units. For example, at constant speed, distance = speed × time; a cyclist moving at 5 m/s for 8 s travels 40 m.`,
        chemistry: `Connect the observable change to particles and symbols. Record the substances involved, represent the change with a word or chemical equation where appropriate, and check conservation of atoms. For example, hydrogen and oxygen combine to form water: 2H₂ + O₂ → 2H₂O.`,
        biology: `Move from structure to function: identify the part, describe what it does, and explain how that function supports the organism. For example, root hairs increase a plant root's surface area, helping it absorb water and mineral ions from soil.`
      })[t.subject_id] || `Define the key terms, identify the main principle, and connect it to an observable example.`;
      const sections = [
        { heading: `Core idea: ${t.name}`, body: [
          `${t.description}`,
          `This section belongs to Grade ${t.grade} ${subjectName}, Unit ${t.unit_no}: “${t.unit_title}”. Begin by writing down the important vocabulary in ${t.name}; define each term in your own words and note any symbols, units, diagrams, processes, or rules used in the topic.`,
          `Build understanding in three passes: (1) state the main idea and its purpose, (2) explain how the parts or steps connect, and (3) apply the idea to a new example without looking at your notes. If a step is unclear, return to the definition or prerequisite concept rather than memorising the final answer.`
        ]},
        { heading: 'Worked approach and common errors', body: [
          appliedExample,
          `Common errors to avoid: confusing a definition with an example; skipping intermediate reasoning; using a formula or process without checking its conditions; and leaving out units, labels, or evidence where they are required. After solving a task, explain why the method works and check whether the result is reasonable.`
        ]},
        { heading: 'Summary and self-check', body: [
          `Remember the central focus: ${t.name}. You should be able to define the key terms, explain the main idea in a short paragraph, work through a relevant example, and describe one real-life or cross-topic application.`,
          `Revision checklist: Can you explain the topic without copying the textbook? Can you show each step in an example? Can you identify a likely mistake and correct it? Practise retrieval from memory, then review any part you could not explain clearly.`
        ]}
      ];
      const lesson = {
        objectives: [
          `Define and explain the key ideas in ${t.name}.`,
          `Describe the main steps, relationships, or principles used in ${t.name}.`,
          `Apply the topic to a worked example and check the reasoning.`,
          `Summarise the topic and answer practice questions independently.`
        ],
        sections,
        example: { title: `Worked example approach: ${t.name}`, steps: [
          `Read the task and identify which part of “${t.name}” it tests.`,
          `Write the relevant definition, principle, rule, or process before starting.`,
          appliedExample,
          `Check each step, state the conclusion clearly, and explain why the answer is reasonable.`
        ]},
        key: `${t.name}: understand the key terms, explain the underlying principle, apply it step by step, and check the result.`
      };
      await client.query(
        `INSERT INTO lessons (topic_id, objectives, sections, example, key_concept) VALUES ($1,$2,$3,$4,$5)
         ON CONFLICT (topic_id) DO NOTHING`,
        [t.id, JSON.stringify(lesson.objectives), JSON.stringify(lesson.sections), JSON.stringify(lesson.example), lesson.key]
      );
      const qs = [
        { d:'Easy', q:`Which is the best first step when studying ${t.name}?`, o:['Memorise an answer without understanding','Define the key terms and identify the main idea','Skip examples and practise only the hardest task','Ignore the topic description'], a:1, e:'Start by defining the terms and identifying the central idea; this gives later explanations and practice a clear foundation.' },
        { d:'Medium', q:`After working through an example in ${t.name}, what is the best way to check understanding?`, o:['Copy the example exactly','Read only the final answer','Solve a similar problem independently and explain each step','Assume one correct answer means every case is identical'], a:2, e:'Independent practice and explaining the reasoning tests whether the method is understood and can transfer to a new case.' },
        { d:'Hard', q:`A solution involving ${t.name} gives an unexpected result. What should you do first?`, o:['Change the answer until it looks familiar','Check assumptions, definitions, and each step of the reasoning','Ignore units or evidence','Repeat the same steps without checking them'], a:1, e:'Review the assumptions and reasoning step by step; also check calculations, units, labels, and whether the method applies.' }
      ];
      for (const q of qs) {
        await client.query(
          `INSERT INTO questions (topic_id, difficulty, prompt, options, correct_index, explanation)
           VALUES ($1,$2,$3,$4,$5,$6)
           ON CONFLICT (topic_id, prompt) DO NOTHING`,
          [t.id, q.d, q.q, JSON.stringify(q.o), q.a, q.e]
        );
        questions++;
      }
      lessons++;
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
