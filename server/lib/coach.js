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
}

module.exports = { generateReply };
