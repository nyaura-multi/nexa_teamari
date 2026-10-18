<<<<<<< HEAD
// AI Study Coach.
// - If ANTHROPIC_API_KEY is set, replies come from a real Claude model, grounded in the
//   lesson the student is viewing (and it can answer in Amharic).
// - Otherwise a built-in fallback answers from the lesson content itself.

function lessonContext(topic) {
  if (!topic) return '';
  let out = `The student is studying: ${topic.subject_name}, Grade ${topic.grade}, Unit ${topic.unit_no} (${topic.unit_title}), section ${topic.section_no} "${topic.name}".`;
  if (topic.lesson) {
    const L = topic.lesson;
    out += `\n\nLesson material:\nObjectives: ${L.objectives.join(' | ')}\n`;
    out += L.sections.map(s => `${s.heading}: ${s.body.join(' ')}`).join('\n');
    out += `\nWorked example (${L.example.title}): ${L.example.steps.join(' ')}\nKey concept: ${L.key_concept}`;
  }
  return out;
}

async function callClaude({ prompt, topic, grade, history }) {
  const system =
    `You are NEXA's AI Study Coach for Ethiopian high-school students (Grades 9-12). ` +
    `The student is in Grade ${grade}. Explain step by step in clear, simple English. ` +
    `If asked to explain in Amharic, reply fully in Amharic. Keep answers under 200 words unless asked for more. ` +
    `When asked to quiz the student, ask ONE multiple-choice question and wait for their answer. ` +
    `Guide the student to understand rather than just handing over answers. ` +
    `Base your help on the lesson material below when it is provided.\n\n${lessonContext(topic)}`;

  // Anthropic requires alternating roles starting with "user".
  const msgs = [];
  for (const h of [...history, { role: 'user', text: prompt }]) {
    const role = h.role === 'user' ? 'user' : 'assistant';
    if (!msgs.length && role !== 'user') continue;
    if (msgs.length && msgs[msgs.length - 1].role === role) msgs[msgs.length - 1].content += '\n' + h.text;
    else msgs.push({ role, content: h.text });
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-haiku-5-5', max_tokens: 700, system, messages: msgs }),
  });
  if (!res.ok) throw new Error(`Anthropic API ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = await res.json();
  return data.content.filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
}

function fallback(prompt, topic, questions) {
  const p = prompt.toLowerCase();
  if (!topic || !topic.lesson) {
    return topic
      ? `The lesson for "${topic.name}" isn't written yet, so I can't walk you through it. Try a topic that has a lesson, then tap "Ask AI" from there.`
      : 'Open a lesson and tap "Ask AI" so I know which topic you\'re on. I can then explain it simply, give an example, or quiz you.';
  }
  const L = topic.lesson;
  const first = L.sections[0].body[0];
  if (p.includes('amharic')) {
    return `I can't explain in Amharic yet. Here is the key idea in English: ${L.key_concept}`;
  }
  if (p.includes('example')) {
    return `${L.example.title}\n\n` + L.example.steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
  }
  if (p.includes('quiz') || p.includes('similar question') || p.includes('question')) {
    if (!questions.length) return 'There are no practice questions for this topic yet. Try re-reading the key concept: ' + L.key_concept;
    const q = questions[Math.floor(Math.random() * questions.length)];
    const opts = q.options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join('\n');
    return `${q.prompt}\n\n${opts}\n\nThink it through first. The answer is ${String.fromCharCode(65 + q.correct_index)}: ${q.explanation}`;
  }
  if (p.includes('simply') || p.includes('simple') || p.includes('explain')) {
    return `In short: ${L.key_concept}\n\nA bit more detail: ${first}`;
  }
  return `Here is the key idea for "${topic.name}": ${L.key_concept}\n\nTell me which part is unclear and I'll go deeper, or ask for an example or a quiz question.`;
}

async function generateReply(args) {
  if (process.env.ANTHROPIC_API_KEY) {
    try { return await callClaude(args); }
    catch (err) { console.error('Coach API error, using fallback:', err.message); }
  }
  return fallback(args.prompt, args.topic, args.questions || []);
=======
// This first version uses scripted, rule-based replies rather than a real
// model call, matching the brief's "realistic mock data" instruction for v1.
// Swap generateReply() for a real LLM call later without touching the route.
function generateReply(prompt) {
  const p = prompt.toLowerCase();
  if (p.includes('amharic')) {
    return '\u1260\u1240\u1208\u1209 \u1290\u1308\u1229\u1361 \u1349\u1295\u12ad\u123a\u1295 \u121b\u1208\u1275 \u121b\u1208\u1275 \u12a5\u1263\u12dd\u1235\u12cd \u1208\u12a5\u12ad\u1240\u12f5 \u12a0\u1295\u12f5 \u12a5\u1245\u12f5 \u120a\u1290\u130b\u1308\u122d\u12cb\u127d \u12a0\u120d\u1235\u1275 (function) \u12a0\u1295\u12f5 \u1218\u1270\u12ca (input) \u12a5\u1245\u12f5 \u12cd\u1324\u1275 (output) \u1265\u1273 \u12a5\u1295\u12f2\u1234\u1325 \u12cd\u1233\u129d \u1290\u12cd\u1362 f(x) = 2x + 3 \u1265\u1208\u1295 \u12a5\u1295\u12f0\u1218\u1235\u1230\u120d: \u120b\u1275\u1278\u1295 x \u1260\u1218\u12ce\u1245 x = 4 \u1263\u1208\u12cd \u12cd\u1324\u1275 11 \u12ed\u1206\u1293\u120d\u1362';
  }
  if (p.includes('example')) {
    return 'Sure \u2014 here\u2019s another example: if f(x) = 2x + 3, then f(5) = 2(5) + 3 = 13. Try plugging in x = 6 yourself and see what you get.';
  }
  if (p.includes('similar question')) {
    return 'Here\u2019s one to try: If g(x) = 4x \u2212 1, what is g(3)? Work through it the same way we just did, then check your answer against the practice set.';
  }
  if (p.includes('quiz')) {
    return 'Quick question: If f(x) = x + 7, what is f(2)? Reply with your answer and I\u2019ll tell you if you\u2019re right.';
  }
  if (p.includes('simply') || p.includes('simple')) {
    return 'Think of a function like a vending machine: you put in a coin (the input), and it always gives you the same specific snack (the output) for that coin. Put in a different coin, get a different snack \u2014 but the same coin always gives the same snack.';
  }
  return 'Good question. A function takes an input, applies a consistent rule to it, and always produces exactly one output. If you tell me which part is unclear \u2014 the definition, evaluating f(x), or composing functions \u2014 I can go deeper on just that.';
>>>>>>> fab5013f4c64ff09ef4ff62869e22506812c6d00
}

module.exports = { generateReply };
