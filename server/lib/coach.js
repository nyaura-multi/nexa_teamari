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

function fallback(prompt, topic, questions, history = []) {
  const p = prompt.toLowerCase();
  if (!topic || !topic.lesson) {
    return topic
      ? `The lesson for "${topic.name}" isn't written yet, so I can't walk you through it. Try a topic that has a lesson, then tap "Ask Coach" from there.`
      : 'Open a lesson and tap "Ask Coach" so I know which topic you\'re on. I can then explain it simply, give an example, or quiz you.';
  }
  const L = topic.lesson;
  const first = L.sections[0].body[0];
  if (p.includes('amharic')) {
    return `I can't explain in Amharic yet. Here is the key idea in English: ${L.key_concept}`;
  }
  if (p.includes('example')) {
    return `${L.example.title}\n\n` + L.example.steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
  }
  const answer = p.trim().match(/^(?:(?:my answer|answer|i choose|i think)\s*(?:is)?\s*)?([a-d])(?:[\s.,!]|$)/i);
  if (answer) {
    const lastQuiz = [...history].reverse().find(m => m.role === 'bot' && m.text.startsWith('Quick quiz:'));
    const asked = lastQuiz && questions.find(q => lastQuiz.text.includes(q.prompt));
    if (asked) {
      const picked = answer[1].toUpperCase().charCodeAt(0) - 65;
      if (picked === asked.correct_index) return `Correct — ${answer[1].toUpperCase()}. ${asked.explanation}\n\nWould you like another question on ${topic.name}?`;
      return `Not quite. The correct answer is ${String.fromCharCode(65 + asked.correct_index)}. ${asked.explanation}\n\nTry explaining which step led you to your choice, or ask for another example.`;
    }
  }
  if (p.includes('quiz') || p.includes('similar question') || p.includes('question')) {
    if (!questions.length) return 'There are no practice questions for this topic yet. Try re-reading the key concept: ' + L.key_concept;
    const q = questions[Math.floor(Math.random() * questions.length)];
    const opts = q.options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join('\n');
    return `Quick quiz: ${q.prompt}\n\n${opts}\n\nReply with A, B, C, or D. I’ll check your answer and explain the reasoning.`;
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
  return fallback(args.prompt, args.topic, args.questions || [], args.history || []);
}

module.exports = { generateReply };

