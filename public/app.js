/* ======================================================================
   NEXA front end. All data comes from the API (server/routes/*).
   Login and signup are separate pages (login.html, signup.html).
   ====================================================================== */
const ICONS = {
  home:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/>',
  book:'<path d="M5 4.8A2.3 2.3 0 0 1 7.3 3H20v16H7.3A2.3 2.3 0 0 0 5 21.3V4.8Z"/><path d="M5 19.3A2.3 2.3 0 0 1 7.3 17H20"/>',
  target:'<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/>',
  chart:'<path d="M4 20V11"/><path d="M10.5 20V6.5"/><path d="M17 20v-8"/><path d="M3 20h18"/>',
  flag:'<path d="M6 3v18"/><path d="M6 4.2h11l-2.6 3.6L17 11.4H6"/>',
  clock:'<circle cx="12" cy="12" r="8.3"/><path d="M12 7.6V12l3 2"/>',
  check:'<path d="M4.5 12.3 9 16.8 19.5 6.3"/>',
  x:'<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  chevR:'<path d="M9 5l7 7-7 7"/>',
  chevL:'<path d="M15 5l-7 7 7 7"/>',
  award:'<circle cx="12" cy="9" r="5.3"/><path d="M8.5 13.6 7 21l5-2.6 5 2.6-1.5-7.4"/>',
  brain:'<path d="M9.5 4.5a2.8 2.8 0 0 0-2.8 2.8 2.6 2.6 0 0 0-1.8 4.4 2.8 2.8 0 0 0 1.8 4.9 2.8 2.8 0 0 0 2.8 2.9V4.5Z"/><path d="M14.5 4.5a2.8 2.8 0 0 1 2.8 2.8 2.6 2.6 0 0 1 1.8 4.4 2.8 2.8 0 0 1-1.8 4.9 2.8 2.8 0 0 1-2.8 2.9V4.5Z"/>',
  sparkle:'<path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="M19 19l-4-4"/>',
  bell:'<path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10Z"/><path d="M10 18.5a2 2 0 0 0 4 0"/>',
  send:'<path d="M4.5 4.5 20 12 4.5 19.5 7 12Z"/>',
  fire:'<path d="M12 3s-1 3-3.5 5.2C6.5 10.3 6 12 6 13.7a6 6 0 0 0 12 0c0-2-.9-3.2-1.6-4.4-.4.9-1 1.6-1.8 1.9C15.2 8.4 14 6 12 3Z"/>',
  logout:'<path d="M9 5H6a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 6 19h3"/><path d="M14 15l4-3-4-3"/><path d="M18 12H9"/>',
  lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
};
function icon(name, size=20, sw=1.7){
  return `<span class="icon" style="width:${size}px;height:${size}px;color:inherit"><svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg></span>`;
}
// Everything that comes from the database or the user is escaped before going into innerHTML.
const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

/* ======================================================================
   State
   ====================================================================== */
const Data = { user:null, dashboard:null, subjects:null, subjectDetail:{}, lesson:null, progress:null, chat:null, coachTopic:null };
const freshPractice = () => ({ attemptId:null, questions:[], idx:0, selected:null, revealed:false, feedback:null, correctCount:0, startTime:null, lastResult:null });
const State = {
  practice: freshPractice(),
  setup: { subjectId:null, topics:[] },
  examSubjectId: null,
  exam: { attemptId:null, title:'', limitSec:0, questions:[], idx:0, answers:{}, timeLeft:0, timerId:null, lastResult:null },
};

async function api(path, opts={}){
  const res = await fetch('/api'+path, {
    method: opts.method||'GET',
    headers: {'Content-Type':'application/json'},
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if(res.status===401){ location.href = 'login.html'; throw new Error('Not authenticated'); }
  const data = await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

/* ======================================================================
   Router
   ====================================================================== */
function go(hash){ location.hash = hash; }
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', boot);

async function boot(){
  try{
    const { user } = await api('/auth/me');
    if(!user){ location.href = 'login.html'; return; }
    Data.user = user;
    render();
  }catch(e){ location.href = 'login.html'; }
}

function parseHash(){
  const h = location.hash.replace(/^#\/?/, '');
  const [path, qs] = h.split('?');
  return { route: path || 'dashboard', params: new URLSearchParams(qs || '') };
}

let renderToken = 0;
async function render(){
  const my = ++renderToken;
  const { route, params } = parseHash();
  const app = document.getElementById('app');
  app.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;color:var(--slate);">Loading\u2026</div>`;
  try{ await loadForRoute(route, params); }
  catch(e){
    if(my!==renderToken) return;
    app.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;color:var(--red);">${esc(e.message)}</div>`;
    return;
  }
  if(my!==renderToken) return;

  let html = '';
  if(route==='grades') html = pageGrades();
  else if(route==='subjects') html = shell('subjects', pageSubjects());
  else if(route.startsWith('subject/')) html = shell('subjects', pageSubjectDetail(route.split('/')[1]));
  else if(route.startsWith('lesson/')) html = shell('subjects', pageLesson());
  else if(route==='practice') html = shell('practice', pagePractice());
  else if(route==='results') html = shell('practice', pageResults());
  else if(route==='exam') html = shell('exam', pageExamIntro());
  else if(route==='exam-live') html = pageExamLive();
  else if(route==='progress') html = shell('progress', pageProgress());
  else if(route==='coach') html = shellCoach();
  else html = shell('dashboard', pageDashboard());

  app.innerHTML = html;
  window.scrollTo(0,0);
  attachHandlers(route);
}

async function loadForRoute(route, params){
  if(route==='dashboard' || route==='grades'){
    Data.dashboard = await api('/dashboard');
    Data.user.grade = Data.dashboard.user.grade;
  }
  if(route==='subjects' || route==='practice' || route==='exam'){
    const r = await api('/subjects');
    Data.subjects = r.subjects; Data.user.grade = r.grade;
  }
  if(route.startsWith('subject/')){
    const id = route.split('/')[1];
    Data.subjectDetail[id] = await api(`/subjects/${id}/topics`);
  }
  if(route.startsWith('lesson/')){
    const id = route.split('/')[1];
    Data.lesson = await api(`/lessons/${id}`);
    if(Data.lesson.lesson) api(`/topics/${id}/lesson-read`, {method:'POST'}).catch(()=>{});
  }
  if(route==='practice' && !State.practice.attemptId){
    const subjects = Data.subjects;
    State.setup.subjectId = params.get('subject') || (subjects.find(s=>s.question_count>0) || subjects[0] || {}).id || null;
    State.setup.topics = State.setup.subjectId ? (await api(`/subjects/${State.setup.subjectId}/topics`)).topics : [];
    State.setup.topicId = params.get('topic') || '';
  }
  if(route==='exam'){
    State.examSubjectId = params.get('subject') || (Data.subjects.find(s=>s.question_count>0) || {}).id || null;
    Data.progress = await api('/progress');
  }
  if(route==='progress') Data.progress = await api('/progress');
  if(route==='coach'){
    Data.chat = (await api('/chat')).messages;
    const t = params.get('topic');
    Data.coachTopic = t ? (({topic}) => topic)(await api(`/lessons/${t}`)) : null;
  }
}

/* ======================================================================
   App shell
   ====================================================================== */
const NAV_ITEMS = [
  {key:'dashboard', label:'Dashboard', icon:'home', href:'#/dashboard'},
  {key:'subjects', label:'Subjects', icon:'book', href:'#/subjects'},
  {key:'practice', label:'Practice', icon:'target', href:'#/practice'},
  {key:'exam', label:'Mock Exams', icon:'flag', href:'#/exam'},
  {key:'progress', label:'Progress', icon:'chart', href:'#/progress'},
  {key:'coach', label:'AI Coach', icon:'brain', href:'#/coach'},
];
const sidebarHtml = (activeKey) => `
  <aside class="sidebar">
    <a href="#/dashboard" class="brand"><span class="mark">N</span>NEXA</a>
    <nav>${NAV_ITEMS.map(i=>`<a class="side-link ${i.key===activeKey?'active':''}" href="${i.href}">${icon(i.icon,18)}<span>${i.label}</span></a>`).join('')}</nav>
    <div class="side-foot">
      <div class="student-mini">
        <div class="avatar">${esc(Data.user.initials)}</div>
        <div><div style="font-size:13px;font-weight:600;">${esc(Data.user.name.split(' ')[0])}</div><div class="tiny muted">Grade ${Data.user.grade}</div></div>
      </div>
      <a href="#" class="side-link logout" data-logout style="margin-top:4px;">${icon('logout',18)}<span>Log out</span></a>
    </div>
  </aside>`;
const tabsHtml = (activeKey) => `<nav class="bottom-tabs">${NAV_ITEMS.map(i=>`<a class="tab-link ${i.key===activeKey?'active':''}" href="${i.href}">${icon(i.icon,19)}<span>${i.label.split(' ')[0]}</span></a>`).join('')}</nav>`;

function shell(activeKey, bodyHtml){
  return `
  <div class="app-shell">
    ${sidebarHtml(activeKey)}
    <div class="main-col">
      <div class="topbar"><div class="topbar-row">
        <a href="#/dashboard" class="brand hide-desktop"><span class="mark">N</span>NEXA</a>
        <div class="hide-mobile" style="font-size:13px;color:var(--slate);font-weight:500;">${greeting()}, ready to continue learning?</div>
        <div class="flex gap12">
          <button class="btn btn-icon btn-ghost" aria-label="Search">${icon('search',18)}</button>
          <button class="btn btn-icon btn-ghost" aria-label="Notifications">${icon('bell',18)}</button>
          <div class="avatar hide-desktop" style="width:32px;height:32px;font-size:12px;">${esc(Data.user.initials)}</div>
        </div>
      </div></div>
      <div class="page-body">${bodyHtml}</div>
    </div>
  </div>${tabsHtml(activeKey)}`;
}
function greeting(){
  const h = new Date().getHours();
  return h<12 ? 'Good morning' : h<17 ? 'Good afternoon' : 'Good evening';
}
const emblem = (s, size=46, fs=15) => `<div class="subject-emblem" style="background:${esc(s.tint)};color:${esc(s.color)};width:${size}px;height:${size}px;font-size:${fs}px;">${esc(s.short)}</div>`;
const soonChip = `<span class="chip chip-neutral">Lesson coming soon</span>`;

/* ======================================================================
   Grade selection
   ====================================================================== */
const GRADE_DESC = {
  9:'Build your academic foundation across all core subjects.',
  10:'Strengthen key concepts before choosing your stream.',
  11:'Go deeper into your stream subjects and start exam prep.',
  12:'Focused revision and mock exams for your national exam.',
};
function pageGrades(){
  return `
  <div class="grade-page">
    <div class="landing-nav"><div class="wrap row"><a href="#/dashboard" class="brand"><span class="mark">N</span>NEXA</a></div></div>
    <div class="wrap grade-hero"><h1>Let\u2019s personalize your learning.</h1><p>Choose your grade to get started.</p></div>
    <div class="wrap grade-cards"><div class="grid g4">
      ${[9,10,11,12].map(g=>`
        <button class="card card-hover grade-card" data-select-grade="${g}">
          <div class="grade-num">GRADE ${g}</div><h3>Grade ${g}</h3><p>${GRADE_DESC[g]}</p>
          <span class="flex gap8 small" style="font-weight:600;color:var(--indigo);">Continue ${icon('chevR',15,2)}</span>
        </button>`).join('')}
    </div></div>
  </div>`;
}

/* ======================================================================
   Dashboard
   ====================================================================== */
function pageDashboard(){
  const d = Data.dashboard;
  const subjects = d.subjects.slice(0,4);
  const recText = {
    weak:     r => ({ t:`Practice ${r.name}`, b:'Your recent results suggest you could use more practice.', href:`#/practice?subject=${r.subject_id}&topic=${r.topic_id}`, ic:'target' }),
    continue: r => ({ t:`Continue ${r.name}`, b:`You\u2019ve started this topic in ${r.subject_name}. Pick up where you left off.`, href:`#/lesson/${r.topic_id}`, ic:'book' }),
    start:    r => ({ t:`Start ${r.name}`, b:`Your next lesson in ${r.subject_name}.`, href:`#/lesson/${r.topic_id}`, ic:'book' }),
  };
  return `
  <div class="page-title-row">
    <div><h1>${greeting()} ${esc(Data.user.name.split(' ')[0])}</h1><div class="sub">Ready to continue learning?</div></div>
    <a href="#/practice" class="btn btn-primary hide-mobile">Start a practice set</a>
  </div>

  <div class="grid g4" style="margin-bottom:30px;">
    ${statCard('chart','Overall progress', d.stats.progress+'%', 'var(--indigo)','var(--indigo-tint)')}
    ${statCard('fire','Study streak', d.stats.streak+(d.stats.streak===1?' day':' days'), 'var(--amber)','var(--amber-tint)')}
    ${statCard('target','Questions completed', d.stats.questionsCompleted.toLocaleString(), 'var(--success)','var(--success-tint)')}
    ${statCard('flag','Tests completed', d.stats.testsCompleted, '#B23A8C','#F9E8F3')}
  </div>

  <div class="section-label">Continue Learning</div>
  ${subjects.length ? `<div class="grid g2" style="margin-bottom:32px;">
    ${subjects.map(s=>`
      <div class="card subject-row-card">
        ${emblem(s)}
        <div class="subject-body">
          <div class="top">
            <div><h4>${esc(s.name)}</h4><div class="topic-name">${esc(s.current_topic)}</div></div>
            <span class="chip chip-indigo" style="flex-shrink:0;">${s.progress}%</span>
          </div>
          <div class="pbar" style="margin-bottom:10px;"><span style="width:${s.progress}%;background:${esc(s.color)};"></span></div>
          <div class="flex between" style="gap:8px;flex-wrap:wrap;">
            <a href="${s.current_has_lesson ? '#/lesson/'+s.current_topic_id : '#/subject/'+s.id}" class="btn btn-soft btn-sm">Continue</a>
            <span class="tiny muted">${s.available_count} of ${s.topics_count} lessons ready</span>
          </div>
        </div>
      </div>`).join('')}
  </div>` : `<div class="card card-pad small muted" style="margin-bottom:32px;">No subjects are set up for Grade ${Data.user.grade} yet.</div>`}

  <div class="grid" style="grid-template-columns:1fr; gap:24px;" data-desktop-2col>
    <div>
      <div class="section-label">Recommended for You</div>
      ${d.recommendations.length ? d.recommendations.map(r=>{ const c = recText[r.kind](r); return recoCard(c.ic, c.t, c.b, c.href); }).join('')
        : `<div class="card card-pad small muted">Lessons for your grade are still being added. Check back soon.</div>`}
    </div>
    <div>
      <div class="section-label">Today\u2019s Study Plan</div>
      <div class="card card-pad"><ul>${d.studyPlan.map(studyPlanItem).join('')}</ul></div>
    </div>
  </div>
  <style>@media(min-width:860px){ [data-desktop-2col]{ grid-template-columns: 1.3fr 1fr !important; } }</style>`;
}
function statCard(iconName,label,val,color,tint){
  return `<div class="card stat-card"><div class="stat-icon" style="background:${tint};color:${color};">${icon(iconName,17)}</div><div class="val">${val}</div><div class="lbl">${label}</div></div>`;
}
function recoCard(iconName,title,body,href){
  return `<a href="${href}" class="card card-hover reco-card" style="margin-bottom:14px;display:flex;">
    <div class="reco-icon">${icon(iconName,18)}</div>
    <div><h4 style="font-size:14.5px;margin-bottom:4px;">${esc(title)}</h4><p class="small muted">${esc(body)}</p></div></a>`;
}
function studyPlanItem(item){
  return `<li class="plan-item ${item.done?'done':''}" data-plan-toggle="${item.id}" data-plan-done="${item.done}">
    <button class="check-box ${item.done?'done':''}" aria-label="Toggle done">${item.done?icon('check',13,2.4):''}</button>
    <span class="plan-title small">${esc(item.text)}</span></li>`;
}

/* ======================================================================
   Subjects
   ====================================================================== */
function pageSubjects(){
  const subjects = Data.subjects;
  return `
  <div class="page-title-row"><div><h1>Your Subjects</h1><div class="sub">Grade ${Data.user.grade} \u00b7 ${subjects.length} subject${subjects.length===1?'':'s'}</div></div></div>
  <div class="filter-row">
    <select class="select-pill" id="grade-filter" aria-label="Grade">${[9,10,11,12].map(g=>`<option value="${g}" ${g===Data.user.grade?'selected':''}>Grade ${g}</option>`).join('')}</select>
    <select class="select-pill" id="subject-filter" aria-label="Subject"><option value="">All subjects</option>${subjects.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select>
  </div>
  ${subjects.length ? `<div class="grid g3" id="subject-grid">
    ${subjects.map(s=>`
      <a href="#/subject/${s.id}" class="card card-hover" data-subject-card="${s.id}" style="padding:20px;display:block;">
        <div style="margin-bottom:14px;">${emblem(s)}</div>
        <h4 style="margin-bottom:4px;">${esc(s.name)}</h4>
        <div class="small muted" style="margin-bottom:14px;">${s.topics_count} topics \u00b7 ${s.available_count} lessons ready</div>
        <div class="pbar" style="margin-bottom:8px;"><span style="width:${s.progress}%;background:${esc(s.color)};"></span></div>
        <div class="flex between"><span class="tiny muted">${s.progress}% complete</span><span class="btn btn-soft btn-sm" style="pointer-events:none;">Open</span></div>
      </a>`).join('')}
  </div>` : `<div class="card card-pad muted">No subjects are set up for Grade ${Data.user.grade} yet.</div>`}`;
}

/* ======================================================================
   Subject detail (topics grouped by textbook unit)
   ====================================================================== */
function pageSubjectDetail(id){
  const { subject, topics } = Data.subjectDetail[id];
  const done = topics.filter(t=>t.status==='done').length;
  const inprog = topics.filter(t=>t.status==='progress').length;
  const ready = topics.filter(t=>t.has_lesson).length;
  const units = [];
  topics.forEach(t=>{ let u = units.find(x=>x.no===t.unit_no); if(!u){ u={no:t.unit_no,title:t.unit_title,topics:[]}; units.push(u);} u.topics.push(t); });
  return `
  <a href="#/subjects" class="flex gap8 small muted" style="margin-bottom:16px;width:max-content;">${icon('chevL',15,2)} All subjects</a>
  <div class="page-title-row"><div class="flex gap16">
    ${emblem(subject,52,17)}
    <div><h1>${esc(subject.name)}</h1><div class="sub">Grade ${Data.user.grade} \u00b7 ${topics.length} topics \u00b7 ${ready} lessons ready</div></div>
  </div></div>
  <div class="grid g3" style="margin-bottom:10px;">
    ${statCard('chart','Subject progress', subject.progress+'%','var(--indigo)','var(--indigo-tint)')}
    ${statCard('check','Completed topics', done,'var(--success)','var(--success-tint)')}
    ${statCard('clock','Topics in progress', inprog,'var(--amber)','var(--amber-tint)')}
  </div>
  ${units.map(u=>`
    <div class="unit-head"><span class="chip chip-indigo">Unit ${u.no}</span><h3>${esc(u.title)}</h3></div>
    <div class="grid g3">
      ${u.topics.map(t=>`
        <div class="card topic-card">
          <div class="flex between" style="gap:8px;align-items:flex-start;">
            <span class="flex gap8 small" style="font-weight:600;"><span class="status-dot ${t.status}"></span><span><span class="muted">${esc(t.section_no)}</span> ${esc(t.name)}</span></span>
          </div>
          <p class="small muted">${esc(t.description)}</p>
          ${t.has_lesson ? `<div class="pbar"><span style="width:${t.progress}%;background:${esc(subject.color)};"></span></div>
            <div class="flex gap8">
              <a href="#/lesson/${t.id}" class="btn btn-ghost btn-sm" style="flex:1;">Learn</a>
              ${t.question_count>0 ? `<a href="#/practice?subject=${subject.id}&topic=${t.id}" class="btn btn-soft btn-sm" style="flex:1;">Practice</a>` : `<span class="btn btn-soft btn-sm is-off" style="flex:1;">Practice</span>`}
            </div>` : `<div class="flex between"><span class="chip chip-neutral">${icon('lock',13)} Lesson coming soon</span><a href="#/lesson/${t.id}" class="small" style="color:var(--indigo);font-weight:600;">Details</a></div>`}
        </div>`).join('')}
    </div>`).join('')}`;
}

/* ======================================================================
   Lesson
   ====================================================================== */
function pageLesson(){
  const { topic, lesson } = Data.lesson;
  const head = `
    <a href="#/subject/${topic.subject_id}" class="flex gap8 small muted" style="margin-bottom:16px;width:max-content;">${icon('chevL',15,2)} ${esc(topic.subject_name)}</a>
    <div class="page-title-row"><div>
      <div class="tiny muted" style="font-weight:600;margin-bottom:6px;">Unit ${topic.unit_no}: ${esc(topic.unit_title)} \u00b7 Section ${esc(topic.section_no)}</div>
      <h1>${esc(topic.name)}</h1></div></div>`;
  if(!lesson){
    return head + `
    <div class="card card-pad" style="max-width:620px;">
      <div class="flex gap12" style="margin-bottom:12px;color:var(--slate);">${icon('lock',20)}<h3 style="font-size:18px;">Lesson coming soon</h3></div>
      <p class="small muted" style="margin-bottom:18px;">This section is part of your Grade ${topic.grade} ${esc(topic.subject_name)} textbook, but its lesson and practice questions haven\u2019t been added yet. Other sections in this subject may already be available.</p>
      <div class="flex gap12" style="flex-wrap:wrap;">
        <a href="#/subject/${topic.subject_id}" class="btn btn-primary">Back to topics</a>
        <a href="#/coach?topic=${topic.id}" class="btn btn-ghost">${icon('brain',17)} Ask AI</a>
      </div>
    </div>`;
  }
  const L = lesson;
  const toc = [...L.sections.map((s,i)=>({id:`sec-${i}`,t:s.heading})), {id:'sec-example',t:L.example.title.replace(/^Worked example:\s*/i,'Worked example')}, {id:'sec-key',t:'Key concept'}];
  return head + `
  <div class="lesson-layout">
    <div class="toc hide-mobile">
      <div class="toc-item" data-scroll="sec-obj">Learning objectives</div>
      ${toc.map(i=>`<div class="toc-item" data-scroll="${i.id}">${esc(i.t)}</div>`).join('')}
    </div>
    <div>
      <div class="card card-pad" id="sec-obj" style="margin-bottom:20px;">
        <div class="section-label">Learning objectives</div>
        ${L.objectives.map((o,i)=>`<div class="objective-item"><span class="num">${i+1}</span><span>${esc(o)}</span></div>`).join('')}
      </div>
      ${L.sections.map((s,i)=>`
        <div class="card card-pad" id="sec-${i}" style="margin-bottom:20px;">
          <div class="section-label">${esc(s.heading)}</div>
          ${s.body.map(p=>`<p style="font-size:14.5px;color:var(--ink);margin-bottom:10px;">${esc(p)}</p>`).join('')}
        </div>`).join('')}
      <div class="worked-example" id="sec-example" style="margin-bottom:20px;">
        <div class="section-label" style="margin-bottom:10px;">${esc(L.example.title)}</div>
        ${L.example.steps.map(s=>`<div class="step">${esc(s)}</div>`).join('')}
      </div>
      <div class="key-box" id="sec-key" style="margin-bottom:26px;">
        <div class="flex gap8" style="margin-bottom:6px;font-weight:600;color:var(--indigo-deep);font-size:13.5px;">${icon('sparkle',16)} Key concept</div>
        <p class="small" style="color:var(--indigo-deep);">${esc(L.key_concept)}</p>
      </div>
      <div class="flex gap12" style="flex-wrap:wrap;">
        ${topic.question_count>0 ? `<a href="#/practice?subject=${topic.subject_id}&topic=${topic.id}" class="btn btn-primary">Practice this topic</a>` : ''}
        <a href="#/coach?topic=${topic.id}" class="btn btn-ghost">${icon('brain',17)} Ask AI</a>
      </div>
    </div>
  </div>`;
}

/* ======================================================================
   Practice
   ====================================================================== */
function pagePractice(){
  const P = State.practice;
  if(!P.attemptId) return practiceSetup();
  const total = P.questions.length;
  const item = P.questions[P.idx];
  return `
  <div class="page-title-row"><div><h1>Practice</h1><div class="sub">${esc(item.topic_name)} \u00b7 ${esc(item.difficulty)}</div></div>
    <button class="btn btn-ghost btn-sm" data-exit-practice>Exit</button></div>
  <div class="q-progress-row">
    <span class="small muted" style="flex-shrink:0;font-weight:600;">Question ${P.idx+1} of ${total}</span>
    <div class="pbar"><span style="width:${((P.idx+1)/total)*100}%;"></span></div>
  </div>
  <div class="card card-pad" style="max-width:640px;">
    <h3 style="font-size:18px;margin-bottom:20px;line-height:1.4;">${esc(item.prompt)}</h3>
    <div style="display:flex;flex-direction:column;gap:10px;">${item.options.map((opt,i)=>optionButton(opt,i,P)).join('')}</div>
    ${P.revealed ? feedbackBlock(item,P) : ''}
    <div class="flex gap12" style="margin-top:22px;">
      ${!P.revealed ? `<button class="btn btn-primary btn-block" data-submit-answer ${P.selected===null?'disabled':''}>Submit answer</button>`
        : `<button class="btn btn-primary btn-block" data-next-question>${P.idx+1<total?'Next question':'See results'}</button>`}
    </div>
  </div>`;
}
function practiceSetup(){
  const subjects = Data.subjects;
  if(!subjects.length) return `<div class="page-title-row"><div><h1>Practice</h1></div></div><div class="card card-pad muted">No subjects are set up for Grade ${Data.user.grade} yet.</div>`;
  const topics = State.setup.topics.filter(t=>t.question_count>0);
  const ready = topics.length>0;
  const lbl = t => `<label class="tiny muted" style="display:block;margin-bottom:6px;font-weight:600;">${t}</label>`;
  return `
  <div class="page-title-row"><div><h1>Practice</h1><div class="sub">Set up a focused practice session.</div></div></div>
  <div class="card card-pad" style="max-width:520px;">
    <div class="grid g2" style="margin-bottom:16px;">
      <div>${lbl('SUBJECT')}<select class="select-pill" id="practice-subject" style="width:100%;">${subjects.map(s=>`<option value="${s.id}" ${s.id===State.setup.subjectId?'selected':''}>${esc(s.name)}</option>`).join('')}</select></div>
      <div>${lbl('TOPIC')}<select class="select-pill" id="practice-topic" style="width:100%;"><option value="">All topics</option>${topics.map(t=>`<option value="${t.id}" ${String(t.id)===String(State.setup.topicId)?'selected':''}>${esc(t.section_no)} ${esc(t.name)}</option>`).join('')}</select></div>
      <div>${lbl('DIFFICULTY')}<select class="select-pill" id="practice-difficulty" style="width:100%;"><option>Mixed</option><option>Easy</option><option>Medium</option><option>Hard</option></select></div>
      <div>${lbl('NUMBER OF QUESTIONS')}<select class="select-pill" id="practice-count" style="width:100%;"><option>5</option><option selected>8</option><option>10</option><option>15</option></select></div>
    </div>
    ${ready ? '' : `<p class="small muted" style="margin-bottom:14px;">Practice questions for this subject aren\u2019t ready for Grade ${Data.user.grade} yet. Try another subject.</p>`}
    <button class="btn btn-primary btn-block" data-start-practice ${ready?'':'disabled'}>Start practice</button>
  </div>`;
}
function optionButton(opt,i,P){
  let cls='option-btn';
  if(P.revealed){ if(i===P.feedback.correctIndex) cls+=' correct'; else if(i===P.selected) cls+=' incorrect'; }
  else if(i===P.selected) cls+=' selected';
  return `<button class="${cls}" data-option="${i}" ${P.revealed?'disabled':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(opt)}</span></button>`;
}
function feedbackBlock(item,P){
  const ok = P.feedback.isCorrect;
  return `<div class="feedback-box ${ok?'correct':'incorrect'}">
    <div class="flex gap8" style="font-weight:700;margin-bottom:6px;color:${ok?'var(--success)':'var(--red)'};">${icon(ok?'check':'x',16,2.4)} ${ok?'Correct!':'Not quite'}</div>
    ${!ok?`<div class="small" style="margin-bottom:6px;"><strong>Correct answer:</strong> ${esc(item.options[P.feedback.correctIndex])}</div>`:''}
    <div class="small muted">${esc(P.feedback.explanation)}</div></div>`;
}

/* ======================================================================
   Results (practice and exam)
   ====================================================================== */
function pageResults(){
  const r = State.practice.lastResult || State.exam.lastResult;
  if(!r) return `<div class="empty-state">No results yet. <a href="#/practice" style="color:var(--indigo);font-weight:600;">Start a practice session</a>.</div>`;
  const secs = r.durationSec || 0;
  const weak = (r.topicBreakdown||[]).filter(t=>t.accuracy<60);
  return `
  <div class="page-title-row"><div><h1>${r.kind==='exam'?'Exam Complete':'Practice Complete'}</h1><div class="sub">${r.total} question${r.total===1?'':'s'}</div></div></div>
  <div class="card card-pad score-hero" style="max-width:420px;margin:0 auto 28px;">${ring(r.accuracy,132,11)}<div class="muted small" style="margin-top:14px;">Accuracy</div></div>
  <div class="grid g4" style="margin-bottom:30px;">
    ${statCard('check','Correct', r.correct,'var(--success)','var(--success-tint)')}
    ${statCard('x','Incorrect', r.total-r.correct,'var(--red)','var(--red-tint)')}
    ${statCard('target','Accuracy', r.accuracy+'%','var(--indigo)','var(--indigo-tint)')}
    ${statCard('clock','Time spent', `${Math.floor(secs/60)}m ${secs%60}s`,'var(--amber)','var(--amber-tint)')}
  </div>
  <div class="grid g2" style="align-items:start;">
    <div class="card card-pad">
      <div class="section-label">Topic performance</div>
      ${(r.topicBreakdown||[]).map(t=>perfRow(t.topic,t.accuracy)).join('') || '<p class="small muted">No breakdown available.</p>'}
      <div class="section-label" style="margin-top:22px;">Areas to Improve</div>
      <p class="small muted">${weak.length ? weak.map(t=>esc(t.topic)).join(', ')+' \u2014 review these lessons and try another practice set.' : 'Nothing flagged in this session. Nice work.'}</p>
    </div>
    <div class="card card-pad">
      <div class="section-label">Recommended Next Step</div>
      <div class="reco-card" style="padding:0;">
        <div class="reco-icon">${icon('target',18)}</div>
        <div><h4 style="font-size:14.5px;margin-bottom:4px;">${weak.length ? 'Revisit your weaker topics' : 'Keep the momentum going'}</h4><p class="small muted">${weak.length ? 'Read the lesson again, then practise it.' : 'Move on to your next lesson from the dashboard.'}</p></div>
      </div>
      <a href="#/practice" class="btn btn-primary btn-block" style="margin-top:18px;" data-restart-practice>Practice again</a>
      <a href="#/dashboard" class="btn btn-ghost btn-block" style="margin-top:10px;">Back to dashboard</a>
    </div>
  </div>`;
}
function perfRow(name,pct){
  const color = pct>=70?'var(--success)':pct>=45?'var(--amber)':'var(--red)';
  return `<div class="perf-row"><span class="name">${esc(name)}</span><div class="pbar"><span style="width:${pct}%;background:${color};"></span></div><span class="pct">${pct}%</span></div>`;
}
function ring(pct, size=64, stroke=6){
  const r=(size-stroke)/2, c=2*Math.PI*r, off=c*(1-pct/100);
  return `<span class="ring-wrap" style="width:${size}px;height:${size}px;"><svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--line-2)" stroke-width="${stroke}"/>
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--indigo)" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 ${size/2} ${size/2})"/>
  </svg><span class="ring-label"><span class="ring-num" style="font-size:${size*0.24}px;">${pct}%</span></span></span>`;
}

/* ======================================================================
   Mock exam
   ====================================================================== */
function examPlan(subject){
  const count = Math.min(20, subject.question_count);
  return { count, minutes: Math.max(5, Math.ceil(count*1.5)) };
}
function pageExamIntro(){
  const subjects = Data.subjects.filter(s=>s.question_count>0);
  if(!subjects.length) return `<div class="page-title-row"><div><h1>Mock Exams</h1></div></div><div class="card card-pad muted">Mock exams will appear here once practice questions are available for Grade ${Data.user.grade}.</div>`;
  const subject = subjects.find(s=>s.id===State.examSubjectId) || subjects[0];
  const plan = examPlan(subject);
  const past = (Data.progress?.recentTests||[]).filter(t=>t.kind==='exam').slice(0,3);
  return `
  <div class="page-title-row"><div><h1>Grade ${Data.user.grade} ${esc(subject.name)} Mock Exam</h1><div class="sub">Timed, exam-style practice under real conditions.</div></div>
    <select class="select-pill" id="exam-subject" aria-label="Subject">${subjects.map(s=>`<option value="${s.id}" ${s.id===subject.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select></div>
  <div class="grid g2" style="align-items:start;">
    <div class="card card-pad">
      <div class="grid g2" style="margin-bottom:20px;">
        <div><div class="tiny muted" style="font-weight:600;">QUESTIONS</div><div style="font-family:'Space Grotesk';font-weight:700;font-size:22px;">${plan.count}</div></div>
        <div><div class="tiny muted" style="font-weight:600;">TIME LIMIT</div><div style="font-family:'Space Grotesk';font-weight:700;font-size:22px;">${plan.minutes} min</div></div>
      </div>
      <div class="section-label">Instructions</div>
      <ul style="display:flex;flex-direction:column;gap:9px;">
        ${[`You have ${plan.minutes} minutes to answer ${plan.count} questions drawn from across the whole subject.`,'Each question has exactly one correct answer.','You can move between questions using the navigator.','The exam submits automatically when time runs out.']
          .map(i=>`<li class="flex gap8 small"><span class="status-dot done" style="margin-top:6px;"></span>${esc(i)}</li>`).join('')}
      </ul>
      <button class="btn btn-primary btn-block" style="margin-top:24px;" data-start-exam="${subject.id}" data-count="${plan.count}" data-minutes="${plan.minutes}">Start Exam</button>
    </div>
    <div class="card card-pad">
      <div class="section-label">Past attempts</div>
      ${past.length ? past.map(t=>perfRow(t.name,t.score)).join('') : '<p class="small muted">No completed mock exams yet. This will be your first.</p>'}
    </div>
  </div>`;
}
function pageExamLive(){
  const E = State.exam;
  if(!E.attemptId) return `<div class="exam-shell"><div class="wrap" style="padding:60px 20px;text-align:center;">No exam in progress. <a href="#/exam" style="color:var(--indigo);font-weight:600;">Go to Mock Exams</a></div></div>`;
  const total = E.questions.length, item = E.questions[E.idx], answered = E.answers[E.idx];
  const mins = Math.floor(E.timeLeft/60), secs = E.timeLeft%60;
  return `
  <div class="exam-shell">
    <div class="exam-topbar"><div class="wrap" style="padding:14px 20px;"><div class="flex between">
      <div style="font-weight:700;font-family:'Space Grotesk';font-size:14px;">${esc(E.title)}</div>
      <div class="exam-timer ${E.timeLeft<120?'low':''}">${icon('clock',16,2)} ${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}</div>
    </div></div></div>
    <div class="wrap" style="padding:28px 20px 60px;max-width:760px;">
      <div class="q-progress-row"><span class="small muted" style="flex-shrink:0;font-weight:600;">Question ${E.idx+1} of ${total}</span><div class="pbar"><span style="width:${((E.idx+1)/total)*100}%;"></span></div></div>
      <div class="card card-pad" style="margin-bottom:22px;">
        <h3 style="font-size:18px;margin-bottom:20px;line-height:1.4;">${esc(item.prompt)}</h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${item.options.map((opt,i)=>`<button class="option-btn ${answered===i?'selected':''}" data-exam-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(opt)}</span></button>`).join('')}
        </div>
      </div>
      <div class="flex between" style="margin-bottom:26px;">
        <button class="btn btn-ghost" data-exam-prev ${E.idx===0?'disabled':''}>${icon('chevL',16,2)} Previous</button>
        ${E.idx+1<total ? `<button class="btn btn-primary" data-exam-next>Next ${icon('chevR',16,2)}</button>` : `<button class="btn btn-primary" data-submit-exam>Submit exam</button>`}
      </div>
      <div class="card card-pad"><div class="section-label">Question navigator</div>
        <div class="qnav-grid">${Array.from({length:total}).map((_,i)=>`<button class="qnav-btn ${i===E.idx?'current':''} ${E.answers[i]!==undefined?'answered':''}" data-exam-goto="${i}">${i+1}</button>`).join('')}</div>
      </div>
      <button class="btn btn-ghost btn-sm" style="margin-top:20px;" data-submit-exam>Submit exam now</button>
    </div>
  </div>`;
}

/* ======================================================================
   Progress
   ====================================================================== */
function pageProgress(){
  const p = Data.progress;
  const maxV = Math.max(1, ...p.weeklyActivity.map(d=>d.count));
  const dayLabel = iso => new Date(iso).toLocaleDateString(undefined,{weekday:'short'});
  const list = (arr, empty) => arr.length ? arr.map(t=>`<div class="small" style="margin-bottom:6px;"><strong>${esc(t.name)}</strong> <span class="muted">${esc(t.subject_name)} \u00b7 ${t.accuracy}% correct</span></div>`).join('') : `<p class="small muted">${empty}</p>`;
  return `
  <div class="page-title-row"><div><h1>Your Progress</h1><div class="sub">Grade ${Data.user.grade}</div></div></div>
  <div class="grid g2" style="margin-bottom:24px;align-items:start;">
    <div class="card card-pad flex" style="gap:24px;">
      ${ring(p.overallProgress,108,10)}
      <div><div class="section-label" style="margin-bottom:6px;">Overall progress</div>
        <p class="small muted">Across the lessons available for Grade ${Data.user.grade}. Read a lesson and practise it to move this up.</p></div>
    </div>
    <div class="card card-pad"><div class="section-label">Weekly activity</div>
      <div class="bars-chart">${p.weeklyActivity.map((d,i)=>`
        <div class="bar-col"><div class="bar ${i===p.weeklyActivity.length-1?'today':''}" style="height:${d.count?Math.max(6,(d.count/maxV)*100):3}%;" title="${d.count} answered"></div><span class="lbl">${dayLabel(d.day)}</span></div>`).join('')}</div>
    </div>
  </div>
  <div class="grid g2" style="align-items:start;">
    <div class="card card-pad"><div class="section-label">Subject performance</div>
      ${p.subjectPerformance.length ? p.subjectPerformance.map(s=>perfRow(s.name,s.progress)).join('') : '<p class="small muted">No subjects yet.</p>'}
    </div>
    <div class="card card-pad"><div class="section-label">Recent test scores</div>
      ${p.recentTests.length ? `<table class="score-table"><thead><tr><th>Test</th><th>Score</th></tr></thead><tbody>
        ${p.recentTests.map(t=>`<tr><td><div style="font-weight:500;">${esc(t.name)}</div><div class="tiny muted">${esc(t.subject)} \u00b7 ${new Date(t.date).toLocaleDateString()}</div></td><td style="text-align:right;font-weight:700;color:${t.score>=75?'var(--success)':t.score>=55?'var(--amber)':'var(--red)'};">${t.score}%</td></tr>`).join('')}
      </tbody></table>` : `<p class="small muted">No practice sets or exams completed yet.</p>`}
    </div>
  </div>
  <div class="grid g2" style="margin-top:24px;align-items:start;">
    <div class="card card-pad"><div class="flex gap8" style="margin-bottom:12px;color:var(--success);font-weight:700;font-size:13.5px;">${icon('award',17)} Strengths</div>
      ${list(p.strengths,'Answer at least 3 questions in a topic to see your strengths.')}</div>
    <div class="card card-pad"><div class="flex gap8" style="margin-bottom:12px;color:var(--amber);font-weight:700;font-size:13.5px;">${icon('target',17)} Areas to improve</div>
      ${list(p.areasToImprove,'Nothing flagged yet.')}</div>
  </div>
  ${p.topicPerformance.length ? `<div class="card card-pad" style="margin-top:24px;"><div class="section-label">Topic performance</div>${p.topicPerformance.map(t=>perfRow(t.name,t.accuracy)).join('')}</div>` : ''}`;
}

/* ======================================================================
   AI Study Coach
   ====================================================================== */
const SUGGESTED_ACTIONS = [
  {label:'Explain simply', prompt:'Can you explain this more simply?'},
  {label:'Give an example', prompt:'Can you give me an example?'},
  {label:'Give me a similar question', prompt:'Give me a similar question to practice.'},
  {label:'Quiz me', prompt:'Quiz me on this topic.'},
  {label:'Explain in Amharic', prompt:'Can you explain this in Amharic?'},
];
function shellCoach(){
  const t = Data.coachTopic;
  return `
  <div class="app-shell">
    ${sidebarHtml('coach')}
    <div class="main-col" style="padding-bottom:0;">
      <div class="topbar"><div class="topbar-row">
        <a href="#/dashboard" class="brand hide-desktop"><span class="mark">N</span>NEXA</a>
        <div><div style="font-weight:600;font-size:14.5px;">AI Study Coach</div><div class="tiny muted">Understand difficult topics, step by step.</div></div>
        <div style="width:32px;"></div>
      </div></div>
      <div class="coach-shell">
        ${t ? `<div class="coach-topic">${icon('book',15)} Studying: <strong>${esc(t.name)}</strong> <a href="#/coach" style="margin-left:auto;color:var(--indigo);font-weight:600;">Clear</a></div>` : ''}
        <div class="chat-scroll" id="chat-scroll">${Data.chat.map(chatBubble).join('')}</div>
        <div class="suggested-row">${SUGGESTED_ACTIONS.map(a=>`<button class="suggest-chip" data-suggest="${encodeURIComponent(a.prompt)}">${a.label}</button>`).join('')}</div>
        <div class="chat-input-row">
          <input type="text" id="chat-input" placeholder="${t ? 'Ask about '+esc(t.name)+'\u2026' : 'Ask a question, or open a lesson and tap Ask AI\u2026'}" />
          <button class="btn btn-primary btn-icon" data-send-chat aria-label="Send">${icon('send',17)}</button>
        </div>
      </div>
    </div>
  </div>${tabsHtml('coach')}`;
}
function chatBubble(m){
  if(m.role==='typing') return `<div class="msg bot"><div class="msg-avatar">${icon('brain',15)}</div><div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div></div>`;
  return `<div class="msg ${m.role==='user'?'user':'bot'}"><div class="msg-avatar">${m.role==='user'?esc(Data.user.initials):icon('brain',15)}</div><div class="msg-bubble">${esc(m.text)}</div></div>`;
}

/* ======================================================================
   Event handling
   ====================================================================== */
const resetExam = () => { stopExamTimer(); State.exam = { attemptId:null, title:'', limitSec:0, questions:[], idx:0, answers:{}, timeLeft:0, timerId:null, lastResult:null }; };

function attachHandlers(route){
  const app = document.getElementById('app');
  const on = (sel, evt, fn) => app.querySelectorAll(sel).forEach(el => el.addEventListener(evt, e => fn(el, e)));

  on('[data-logout]','click', async (el,e)=>{ e.preventDefault(); await api('/auth/logout',{method:'POST'}); location.href='login.html'; });

  on('[data-select-grade]','click', async el=>{
    Data.user.grade = parseInt(el.dataset.selectGrade,10);
    await api('/user/grade',{method:'PATCH',body:{grade:Data.user.grade}});
    go('#/dashboard');
  });
  on('#grade-filter','change', async el=>{
    Data.user.grade = parseInt(el.value,10);
    await api('/user/grade',{method:'PATCH',body:{grade:Data.user.grade}});
    State.practice = freshPractice();
    render();
  });
  on('#subject-filter','change', el=>{
    app.querySelectorAll('[data-subject-card]').forEach(c => { c.style.display = (!el.value || c.dataset.subjectCard===el.value) ? '' : 'none'; });
  });

  on('[data-plan-toggle]','click', async el=>{
    await api(`/study-plan/${el.dataset.planToggle}`,{method:'PATCH',body:{done: el.dataset.planDone!=='true'}});
    render();
  });

  // ---- Practice
  on('#practice-subject','change', el=>{ State.practice = freshPractice(); go(`#/practice?subject=${el.value}`); });
  on('[data-start-practice]','click', async ()=>{
    const subjectId = app.querySelector('#practice-subject').value;
    const topicId = app.querySelector('#practice-topic').value;
    const difficulty = app.querySelector('#practice-difficulty').value;
    const count = app.querySelector('#practice-count').value;
    try{
      const { attemptId, questions } = await api('/practice/start',{method:'POST',body:{subjectId, topicId: topicId||null, difficulty, count}});
      State.practice = { ...freshPractice(), attemptId, questions, startTime:Date.now() };
      render();
    }catch(e){ alert(e.message); }
  });
  on('[data-exit-practice]','click', ()=>{ State.practice = freshPractice(); go('#/dashboard'); });
  on('[data-option]','click', el=>{
    if(State.practice.revealed) return;
    State.practice.selected = parseInt(el.dataset.option,10);
    render();
  });
  on('[data-submit-answer]','click', async ()=>{
    const P = State.practice;
    if(P.selected===null) return;
    P.feedback = await api(`/practice/${P.attemptId}/answer`,{method:'POST',body:{questionId:P.questions[P.idx].id, selectedIndex:P.selected}});
    if(P.feedback.isCorrect) P.correctCount++;
    P.revealed = true;
    render();
  });
  on('[data-next-question]','click', async ()=>{
    const P = State.practice;
    if(P.idx+1>=P.questions.length){
      const summary = await api(`/practice/${P.attemptId}/complete`,{method:'POST'});
      summary.kind='practice'; summary.durationSec=Math.round((Date.now()-P.startTime)/1000);
      State.exam.lastResult = null;
      State.practice = { ...freshPractice(), lastResult: summary };
      go('#/results');
    } else { P.idx++; P.selected=null; P.revealed=false; render(); }
  });
  on('[data-restart-practice]','click', ()=>{ State.practice = freshPractice(); });

  // ---- Exam
  on('#exam-subject','change', el=>go(`#/exam?subject=${el.value}`));
  on('[data-start-exam]','click', async el=>{
    try{
      const r = await api('/exam/start',{method:'POST',body:{subjectId:el.dataset.startExam, count:+el.dataset.count, timeLimitSec:+el.dataset.minutes*60}});
      resetExam();
      State.exam = { attemptId:r.attemptId, title:r.title, limitSec:r.timeLimitSec, questions:r.questions, idx:0, answers:{}, timeLeft:r.timeLimitSec, timerId:null, lastResult:null };
      go('#/exam-live');
    }catch(e){ alert(e.message); }
  });
  on('[data-exam-option]','click', el=>{
    const E = State.exam, i = parseInt(el.dataset.examOption,10);
    E.answers[E.idx] = i;
    api(`/exam/${E.attemptId}/answer`,{method:'POST',body:{questionId:E.questions[E.idx].id, selectedIndex:i}}).catch(()=>{});
    render();
  });
  on('[data-exam-prev]','click', ()=>{ if(State.exam.idx>0){ State.exam.idx--; render(); } });
  on('[data-exam-next]','click', ()=>{ if(State.exam.idx+1<State.exam.questions.length){ State.exam.idx++; render(); } });
  on('[data-exam-goto]','click', el=>{ State.exam.idx = parseInt(el.dataset.examGoto,10); render(); });
  on('[data-submit-exam]','click', ()=>submitExam());
  if(route==='exam-live' && State.exam.attemptId) startExamTimer(); else stopExamTimer();

  // ---- Lesson table of contents
  on('[data-scroll]','click', el=>{ const t = document.getElementById(el.dataset.scroll); if(t) t.scrollIntoView({behavior:'smooth', block:'start'}); });

  // ---- Coach
  const input = app.querySelector('#chat-input');
  const send = (text) => {
    if(!text || !text.trim()) return;
    Data.chat.push({role:'user', text}); Data.chat.push({role:'typing'});
    refreshChat();
    api('/chat',{method:'POST',body:{text, topicId: Data.coachTopic ? Data.coachTopic.id : null}})
      .then(({reply})=>{ Data.chat.pop(); Data.chat.push(reply); })
      .catch(e=>{ Data.chat.pop(); Data.chat.push({role:'bot', text:'Sorry, I couldn\u2019t answer that just now. '+e.message}); })
      .finally(()=>{ if(parseHash().route==='coach') refreshChat(); });
  };
  on('[data-send-chat]','click', ()=>{ send(input.value); input.value=''; });
  if(input) input.addEventListener('keydown', e=>{ if(e.key==='Enter'){ send(input.value); input.value=''; } });
  on('[data-suggest]','click', el=>send(decodeURIComponent(el.dataset.suggest)));
  const sc = document.getElementById('chat-scroll'); if(sc) sc.scrollTop = sc.scrollHeight;
}

// Re-draw only the chat so typing indicators don't reload the whole page.
function refreshChat(){
  const sc = document.getElementById('chat-scroll');
  if(!sc) return;
  sc.innerHTML = Data.chat.map(chatBubble).join('');
  sc.scrollTop = sc.scrollHeight;
}

async function submitExam(){
  stopExamTimer();
  const E = State.exam;
  const summary = await api(`/exam/${E.attemptId}/submit`,{method:'POST'});
  summary.kind='exam'; summary.durationSec = E.limitSec - Math.max(0,E.timeLeft);
  State.practice = freshPractice();
  const keep = summary;
  resetExam(); State.exam.lastResult = keep;
  go('#/results');
}
function startExamTimer(){
  stopExamTimer();
  State.exam.timerId = setInterval(()=>{
    State.exam.timeLeft--;
    if(State.exam.timeLeft<=0){ submitExam(); return; }
    const el = document.querySelector('.exam-timer');
    if(el){
      const m = Math.floor(State.exam.timeLeft/60), s = State.exam.timeLeft%60;
      el.innerHTML = `${icon('clock',16,2)} ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
      if(State.exam.timeLeft<120) el.classList.add('low');
    }
  }, 1000);
}
function stopExamTimer(){ if(State.exam && State.exam.timerId){ clearInterval(State.exam.timerId); State.exam.timerId=null; } }
