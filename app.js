const STORAGE_KEY = 'ai-quest-progress-v2';

const ROLE_META = {
  'ai-app': {
    name: 'AI App Engineer',
    emoji: '🚀',
    pathSummary: 'Heavy on <strong>LLMs, RAG & agents</strong>. Phase 3 is your main boss fight — ship a production AI assistant.',
  },
  'ml-eng': {
    name: 'ML Engineer',
    emoji: '⚙️',
    pathSummary: 'Deep dive into <strong>training, PyTorch & MLOps</strong>. Phase 2 is your main grind — models before apps.',
  },
  'fullstack-ai': {
    name: 'Full-Stack + AI',
    emoji: '🛠️',
    pathSummary: 'Blend <strong>React + Express + AI APIs</strong>. Fastest path — add smart features to apps you already build.',
  },
};

const FOCUS_LABELS = { core: '★ Core path', bonus: '★ Bonus', light: 'Lighter focus' };

const skills = [
  { id: 'python', name: 'Python', color: '#00f5d4' },
  { id: 'ml', name: 'Machine Learning', color: '#7b61ff' },
  { id: 'dl', name: 'Deep Learning', color: '#ff6bcb' },
  { id: 'llm', name: 'LLMs & RAG', color: '#ffd166' },
  { id: 'deploy', name: 'Deploy & Ops', color: '#06d6a0' },
];

const quotes = [
  'The best way to predict the future is to build it.',
  'You already ship APIs. Now teach them to think.',
  'Every expert was once a beginner who didn\'t quit.',
  'RAG beats memorizing — for models and for you.',
  'Your nginx skills + LLMs = unfair advantage.',
  'Portfolio > certificate. Ship something this week.',
  'Gradient descent: small steps downhill. Same as learning.',
  'The model is only as good as your evaluation.',
];

const SCIENCE_TIPS = [
  '<strong>Micro-learning:</strong> 2–10 min steps beat vague goals. Small wins build momentum.',
  '<strong>Active recall:</strong> Close the tutorial, then rebuild from memory. 2× retention.',
  '<strong>Spaced repetition:</strong> Review yesterday\'s topic for 5 min before learning new material.',
  '<strong>Feynman technique:</strong> Explain embeddings to a rubber duck in plain English.',
  '<strong>Interleaving:</strong> Mix Python + ML + LLM days — don\'t block 2 weeks on one topic only.',
  '<strong>Pomodoro:</strong> 25 min focus, 5 min break. Phones in another room.',
  '<strong>Implementation intentions:</strong> "After coffee, I will complete 3 micro-steps" — doubles follow-through.',
];

const quizzes = [
  { id: 'q0', q: 'What does RAG stand for?', opts: ['Random AI Generation', 'Retrieval-Augmented Generation', 'Recursive Agent Graph', 'Real-time API Gateway'], ans: 1, explain: 'RAG retrieves relevant docs, then the LLM generates an answer grounded in them.' },
  { id: 'q1', q: 'Your unfair advantage as a full-stack dev is…', opts: ['Knowing more math than PhDs', 'Shipping production features end-to-end', 'Training GPT from scratch', 'Winning Kaggle competitions'], ans: 1, explain: 'Companies need people who deploy AI in real apps — that\'s you.' },
  { id: 'q2', q: 'Embeddings are best described as…', opts: ['Compressed images', 'Vectors that capture meaning', 'Database indexes', 'GPU drivers'], ans: 1, explain: 'Similar text → similar vectors → semantic search works.' },
  { id: 'q3', q: 'When should you fine-tune vs use RAG?', opts: ['Always fine-tune', 'RAG for knowledge; fine-tune for style/behavior', 'Never fine-tune', 'RAG replaces all training'], ans: 1, explain: 'RAG for up-to-date docs; fine-tuning when you need consistent tone or task-specific behavior.' },
  { id: 'q4', q: 'Best way to learn (according to research)?', opts: ['Re-read notes 5 times', 'Active recall + practice', 'Highlight everything', 'Watch at 2× speed only'], ans: 1, explain: 'Testing yourself beats passive review. That\'s why we use micro-steps + quizzes.' },
];

let state = loadState();
let quizIndex = 0;
let quizAnswered = false;
let pomoInterval = null;
let pomoSeconds = 25 * 60;

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    // Migrate v1
    const old = localStorage.getItem('ai-quest-progress-v1');
    if (old) {
      const parsed = JSON.parse(old);
      parsed._fromV1 = true;
      return parsed;
    }
  } catch (_) {}
      return {
        completedTasks: {},
        role: 'ai-app',
        skills: Object.fromEntries(skills.map(s => [s.id, 10])),
        quizDone: [],
        stepNotes: {},
        openPhase: 'p1',
        openQuest: null,
        streak: 0,
        lastActiveDate: null,
      };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateHUD();
}

function getPhases() {
  return phasesByRole[state.role] || phasesByRole['ai-app'];
}

function taskKey(stepId) {
  return `${state.role}::${stepId}`;
}

function isStepDone(stepId) {
  return !!state.completedTasks[taskKey(stepId)];
}

function getAllSteps() {
  return getPhases().flatMap(p =>
    p.tasks.flatMap(q => q.steps.map(s => ({ ...s, phaseId: p.id, questId: q.id })))
  );
}

function getPhaseSteps(phase) {
  return phase.tasks.flatMap(q => q.steps);
}

function getPhaseProgress(phase) {
  const steps = getPhaseSteps(phase);
  const done = steps.filter(s => isStepDone(s.id)).length;
  return { done, total: steps.length };
}

function getQuestProgress(quest) {
  const done = quest.steps.filter(s => isStepDone(s.id)).length;
  return { done, total: quest.steps.length };
}

function getTotalXP() {
  let xp = 0;
  getAllSteps().forEach(s => {
    if (isStepDone(s.id)) xp += s.xp;
  });
  (state.quizDone || []).forEach(id => {
    const q = quizzes.find(x => x.id === id);
    if (q) xp += 25;
  });
  return xp;
}

function getLevel(xp) { return Math.floor(xp / 100) + 1; }
function getLevelProgress(xp) { return xp % 100; }

function updateHUD() {
  const xp = getTotalXP();
  document.getElementById('level').textContent = getLevel(xp);
  document.getElementById('xp').textContent = xp;
  document.getElementById('xpFill').style.width = getLevelProgress(xp) + '%';
  document.getElementById('streak').textContent = (state.streak || 0) + '🔥';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function openLearnPanel(stepId, questId) {
  const content = getLearnContentMerged(stepId, questId, state.role);
  const noteKey = taskKey(stepId);
  const notionPage = INTEGRATIONS.notionStepPages?.[stepId];

  document.getElementById('learnTitle').textContent = content.title || 'Learn';
  document.getElementById('learnStepId').textContent = stepId;

  let html = '';

  if (notionPage || (INTEGRATIONS.notion?.enabled && INTEGRATIONS.notion.hubUrl)) {
    html += `<div class="learn-block"><h4>📓 Notion</h4><ul class="learn-links">`;
    if (notionPage) {
      html += `<li><a href="${notionPage}" target="_blank" rel="noopener">Open step notes in Notion ↗</a></li>`;
    }
    if (INTEGRATIONS.notion?.hubUrl) {
      html += `<li><a href="${INTEGRATIONS.notion.hubUrl}" target="_blank" rel="noopener">Learning HQ (Notion) ↗</a></li>`;
    }
    html += `</ul></div>`;
  }

  if (content.intro) {
    html += `<div class="learn-block"><h4>📋 Quest overview</h4><p>${content.intro}</p></div>`;
  }
  if (content.why) {
    html += `<div class="learn-block"><h4>❓ Why this matters</h4><p>${content.why}</p></div>`;
  }
  if (content.analogy) {
    html += `<div class="learn-block"><h4>🔗 Analogy (for devs)</h4><p>${content.analogy}</p></div>`;
  }
  if (content.how) {
    html += `<div class="learn-block"><h4>⚡ How to do it</h4><div>${content.how}</div></div>`;
  }
  if (content.links && content.links.length) {
    html += `<div class="learn-block"><h4>📚 Read more</h4><ul class="learn-links">`;
    content.links.forEach(l => {
      html += `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a></li>`;
    });
    html += `</ul></div>`;
  }

  html += `
    <div class="learn-block learn-notes">
      <h4>📝 Your notes</h4>
      <textarea id="learnNotesInput" placeholder="Add your own explanation, links, or aha moments...">${(state.stepNotes && state.stepNotes[noteKey]) || ''}</textarea>
      <p class="learn-notes-hint">Saved automatically in your browser. Also copy to <code>notes/</code> for backup.</p>
    </div>
    <div class="learn-block">
      <h4>✏️ Edit content</h4>
      <p>Built-in: <code>learn-content.js</code> · Notion sync: <code>NOTION-SETUP.md</code> · Step id: <code>${stepId}</code></p>
    </div>
  `;

  document.getElementById('learnBody').innerHTML = html;

  const textarea = document.getElementById('learnNotesInput');
  textarea.addEventListener('input', () => {
    state.stepNotes = state.stepNotes || {};
    state.stepNotes[noteKey] = textarea.value;
    saveState();
  });

  document.getElementById('learnOverlay').classList.add('open');
}

function closeLearnPanel() {
  document.getElementById('learnOverlay').classList.remove('open');
}

async function loadNotionContent() {
  try {
    const res = await fetch('data/notion-content.json');
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.steps) mergeNotionContent(data);
    const badge = document.getElementById('notionSyncBadge');
    if (badge && data.syncedAt) {
      badge.textContent = `Notion synced ${new Date(data.syncedAt).toLocaleDateString()}`;
    }
  } catch (_) {}
}

function renderIntegrations() {
  const bar = document.getElementById('integrationsBar');
  if (!bar || typeof INTEGRATIONS === 'undefined') return;

  let html = '<label>Connected:</label>';

  if (INTEGRATIONS.notion?.enabled && INTEGRATIONS.notion.hubUrl) {
    html += `<a class="int-btn" href="${INTEGRATIONS.notion.hubUrl}" target="_blank" rel="noopener">${INTEGRATIONS.notion.icon || '📓'} ${INTEGRATIONS.notion.label || 'Notion'}</a>`;
  }
  if (INTEGRATIONS.github?.enabled && INTEGRATIONS.github.repoUrl) {
    html += `<a class="int-btn" href="${INTEGRATIONS.github.repoUrl}" target="_blank" rel="noopener">${INTEGRATIONS.github.icon || '🐙'} ${INTEGRATIONS.github.label || 'GitHub'}</a>`;
  }
  if (INTEGRATIONS.calendar?.enabled && INTEGRATIONS.calendar.googleTemplateUrl) {
    html += `<a class="int-btn" href="${INTEGRATIONS.calendar.googleTemplateUrl}" target="_blank" rel="noopener">${INTEGRATIONS.calendar.icon || '📅'} ${INTEGRATIONS.calendar.label || 'Calendar'}</a>`;
  }

  html += `<span class="notion-sync-badge" id="notionSyncBadge"></span>`;
  bar.innerHTML = html;
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastActiveDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (state.lastActiveDate === yesterday) {
    state.streak = (state.streak || 0) + 1;
  } else if (state.lastActiveDate !== today) {
    state.streak = state.lastActiveDate ? 1 : 1;
  }
  state.lastActiveDate = today;
}

function toggleStep(stepId, xp) {
  const key = taskKey(stepId);
  const xpBefore = getTotalXP();
  const wasDone = !!state.completedTasks[key];

  if (wasDone) {
    delete state.completedTasks[key];
  } else {
    state.completedTasks[key] = true;
    updateStreak();
    autoBoostSkill(stepId);
  }

  saveState();
  const xpAfter = getTotalXP();
  const delta = xpAfter - xpBefore;

  if (delta > 0) {
    showToast(`+${delta} XP — keep going!`);
    burstConfetti(30);
  } else if (delta < 0) {
    showToast(`${delta} XP — unchecked`);
  }

  renderQuestMap();
  renderToday();
  checkPhaseComplete();
}

function applyRoleUI() {
  document.querySelectorAll('.role-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.role === state.role);
  });
  const meta = ROLE_META[state.role];
  document.getElementById('questMapTitle').textContent = `🗺️ Quest map — ${meta.name}`;
  document.getElementById('rolePathBanner').innerHTML =
    `<span class="path-emoji">${meta.emoji}</span><p>${meta.pathSummary}</p>`;
}

function renderQuestMap() {
  const map = document.getElementById('questMap');
  const phases = getPhases();

  map.innerHTML = phases.map(phase => {
    const { done, total } = getPhaseProgress(phase);
    const pct = total ? done / total : 0;
    const offset = 113 - (113 * pct);
    const isOpen = state.openPhase === phase.id;
    const isComplete = done === total && total > 0;
    const focusLabel = FOCUS_LABELS[phase.focus] || '';
    const focusClass = phase.focus || 'light';

    const questsHtml = phase.tasks.map(quest => {
      const qp = getQuestProgress(quest);
      const qOpen = state.openQuest === quest.id;
      const method = METHOD_LABELS[quest.method] || METHOD_LABELS.do;
      const questDone = qp.done === qp.total;

      const stepsHtml = quest.steps.map(s => {
        const hasLearn = hasLearnContent(s.id, quest.id, state.role);
        return `
        <li class="step-item ${isStepDone(s.id) ? 'done' : ''}" data-step="${s.id}" data-quest="${quest.id}" data-xp="${s.xp}">
          <div class="step-check">${isStepDone(s.id) ? '✓' : ''}</div>
          <span class="step-text">${s.text}</span>
          <button class="step-learn-btn ${hasLearn ? 'has-content' : ''}" data-step="${s.id}" data-quest="${quest.id}" title="Why? & notes">📖</button>
          <span class="step-xp">+${s.xp}</span>
        </li>
      `}).join('');

      const questHasLearn = questLearn[quest.id];
      const aboutBtn = questHasLearn
        ? `<button class="quest-about-btn" data-quest-only="${quest.id}" title="Quest overview">Why this quest?</button>`
        : '';

      return `
        <div class="quest-group ${qOpen ? 'open' : ''} ${questDone ? 'completed' : ''}" data-quest="${quest.id}">
          <div class="quest-header">
            <div class="quest-meta">
              <h4>${quest.title} ${questDone ? '✓' : ''}${aboutBtn}</h4>
              <div class="sub">~${quest.minutes} min · ${qp.done}/${qp.total} steps</div>
            </div>
            <span class="method-badge" title="${method.tip}">${method.icon} ${method.label}</span>
            <span class="quest-progress">${qp.done}/${qp.total}</span>
            <span class="quest-chevron">▼</span>
          </div>
          <div class="quest-body">
            <ul class="step-list">${stepsHtml}</ul>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="phase-card ${isOpen ? 'open' : ''} ${isComplete ? 'completed' : ''} active"
           style="--phase-color: ${phase.color}" data-phase="${phase.id}">
        <div class="phase-header">
          <div class="phase-badge">${phase.emoji}</div>
          <div class="phase-info">
            <h3>${phase.title}${focusLabel ? `<span class="phase-focus ${focusClass}">${focusLabel}</span>` : ''}</h3>
            <div class="meta">${phase.weeks} · ${phase.goal} · <strong>${done}/${total} steps</strong></div>
          </div>
          <svg class="phase-progress-ring" viewBox="0 0 44 44">
            <circle class="bg" cx="22" cy="22" r="18"/>
            <circle class="fg" cx="22" cy="22" r="18" style="stroke-dashoffset: ${offset}"/>
          </svg>
          <span class="chevron">▼</span>
        </div>
        <div class="phase-body">
          <div class="phase-content">${questsHtml}</div>
        </div>
      </div>
    `;
  }).join('');

  map.querySelectorAll('.phase-header').forEach(h => {
    h.addEventListener('click', () => {
      const id = h.closest('.phase-card').dataset.phase;
      state.openPhase = state.openPhase === id ? null : id;
      saveState();
      renderQuestMap();
    });
  });

  map.querySelectorAll('.quest-header').forEach(h => {
    h.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = h.closest('.quest-group').dataset.quest;
      state.openQuest = state.openQuest === id ? null : id;
      saveState();
      renderQuestMap();
    });
  });

  map.querySelectorAll('.step-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.step-learn-btn')) return;
      e.stopPropagation();
      toggleStep(item.dataset.step, +item.dataset.xp);
    });
  });

  map.querySelectorAll('.step-learn-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openLearnPanel(btn.dataset.step, btn.dataset.quest);
    });
  });

  map.querySelectorAll('.quest-about-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openLearnPanel(btn.dataset.questOnly + '-intro', btn.dataset.questOnly);
    });
  });
}

function renderToday() {
  const list = document.getElementById('todayList');
  const incomplete = getAllSteps().filter(s => !isStepDone(s.id));
  const today = incomplete.slice(0, 3);

  if (today.length === 0) {
    list.innerHTML = '<li style="color:var(--success);font-size:0.9rem">🎉 All steps done! Pick a new phase or role.</li>';
    return;
  }

  list.innerHTML = today.map(s => `
    <li class="today-item" data-step="${s.id}" data-xp="${s.xp}">
      <div class="mini-check"></div>
      <span>${s.text.replace(/<code>/g, '').replace(/<\/code>/g, '')}</span>
    </li>
  `).join('');

  list.querySelectorAll('.today-item').forEach(item => {
    item.addEventListener('click', () => {
      toggleStep(item.dataset.step, +item.dataset.xp);
    });
  });
}

function selectRole(role) {
  if (!phasesByRole[role] || state.role === role) return;
  const wrap = document.getElementById('questMapWrap');
  wrap.classList.add('updating');
  state.role = role;
  state.openPhase = 'p1';
  state.openQuest = null;
  saveState();
  applyRoleUI();
  setTimeout(() => {
    renderQuestMap();
    renderToday();
    updateHUD();
    wrap.classList.remove('updating');
  }, 180);
  showToast(`Path: ${ROLE_META[role].name}`);
}

function autoBoostSkill(stepId) {
  const map = { p1: 'python', p2: 'ml', p3: 'llm', p4: 'deploy' };
  const prefix = stepId.slice(0, 2);
  const skillId = map[prefix] || 'python';
  state.skills[skillId] = Math.min(100, (state.skills[skillId] || 10) + 2);
}

function checkPhaseComplete() {
  getPhases().forEach(phase => {
    const { done, total } = getPhaseProgress(phase);
    if (done === total && total > 0) {
      const key = `celebrated-${state.role}-${phase.id}`;
      if (!state[key]) {
        state[key] = true;
        showToast(`${phase.emoji} Phase complete!`);
        burstConfetti(80);
      }
    }
  });
  saveState();
}

function renderSkills() {
  const el = document.getElementById('skillBars');
  el.innerHTML = skills.map(s => {
    const val = state.skills[s.id] || 10;
    return `
      <div class="skill-row" data-skill="${s.id}">
        <div class="skill-label"><span>${s.name}</span><span>${val}%</span></div>
        <div class="skill-track"><div class="skill-fill" style="width:${val}%;background:${s.color}"></div></div>
      </div>`;
  }).join('');
}

function renderQuiz() {
  const q = quizzes[quizIndex];
  const alreadyDone = (state.quizDone || []).includes(q.id);
  document.getElementById('quizQ').textContent = q.q + (alreadyDone ? ' (already earned XP)' : '');
  const opts = document.getElementById('quizOpts');
  opts.innerHTML = q.opts.map((o, i) =>
    `<button class="quiz-opt" data-i="${i}">${o}</button>`
  ).join('');
  document.getElementById('quizFb').className = 'quiz-feedback';
  document.getElementById('quizNext').classList.remove('show');
  quizAnswered = false;

  opts.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (quizAnswered) return;
      quizAnswered = true;
      const i = +btn.dataset.i;
      const correct = i === q.ans;
      opts.querySelectorAll('.quiz-opt').forEach((b, j) => {
        b.disabled = true;
        if (j === q.ans) b.classList.add('correct');
        else if (j === i && !correct) b.classList.add('wrong');
      });
      const fb = document.getElementById('quizFb');
      fb.textContent = (correct ? '✓ Correct! ' : '✗ Not quite. ') + q.explain;
      fb.className = 'quiz-feedback show ' + (correct ? 'ok' : 'no');
      if (correct && !(state.quizDone || []).includes(q.id)) {
        state.quizDone = state.quizDone || [];
        state.quizDone.push(q.id);
        saveState();
        showToast('+25 XP (quiz — once per question)');
        burstConfetti(20);
      }
      document.getElementById('quizNext').classList.add('show');
    });
  });
}

function formatPomo(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startPomodoro(seconds, label) {
  clearInterval(pomoInterval);
  pomoSeconds = seconds;
  document.getElementById('pomoTime').textContent = formatPomo(pomoSeconds);
  document.getElementById('pomoStart').classList.toggle('running', label === 'focus');
  pomoInterval = setInterval(() => {
    pomoSeconds--;
    document.getElementById('pomoTime').textContent = formatPomo(pomoSeconds);
    if (pomoSeconds <= 0) {
      clearInterval(pomoInterval);
      document.getElementById('pomoStart').classList.remove('running');
      showToast(label === 'focus' ? '🍅 Session done! Take a break.' : 'Break over — back to learning!');
      try { new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2Onp6dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d').play(); } catch (_) {}
    }
  }, 1000);
}

/* Confetti */
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function burstConfetti(count = 50) {
  const colors = ['#00f5d4', '#7b61ff', '#ff6bcb', '#ffd166', '#06d6a0'];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      life: 1,
      decay: Math.random() * 0.02 + 0.015,
    });
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += 0.35; p.life -= p.decay;
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size * 0.6);
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateConfetti);
}
animateConfetti();

/* Event listeners */
document.getElementById('quizNext').addEventListener('click', () => {
  quizIndex = (quizIndex + 1) % quizzes.length;
  renderQuiz();
});

document.getElementById('roleCards').addEventListener('click', e => {
  const card = e.target.closest('.role-card');
  if (card) selectRole(card.dataset.role);
});

document.getElementById('rollQuote').addEventListener('click', () => {
  const q = document.getElementById('quote');
  q.style.opacity = '0';
  setTimeout(() => {
    q.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    q.style.opacity = '1';
  }, 200);
  document.getElementById('scienceTip').innerHTML =
    '💡 ' + SCIENCE_TIPS[Math.floor(Math.random() * SCIENCE_TIPS.length)];
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset all quest progress? This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('ai-quest-progress-v1');
    state = loadState();
    applyRoleUI();
    renderQuestMap();
    renderToday();
    renderSkills();
    renderQuiz();
    updateHUD();
    showToast('Quest reset.');
  }
});

document.getElementById('pomoStart').addEventListener('click', () => startPomodoro(25 * 60, 'focus'));
document.getElementById('pomoBreak').addEventListener('click', () => startPomodoro(5 * 60, 'break'));
document.getElementById('pomoReset').addEventListener('click', () => {
  clearInterval(pomoInterval);
  document.getElementById('pomoStart').classList.remove('running');
  pomoSeconds = 25 * 60;
  document.getElementById('pomoTime').textContent = formatPomo(pomoSeconds);
});

document.getElementById('learnClose').addEventListener('click', closeLearnPanel);
document.getElementById('learnOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'learnOverlay') closeLearnPanel();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLearnPanel();
});

/* Init */
document.getElementById('quote').style.transition = 'opacity 0.3s';
renderIntegrations();
loadNotionContent().then(() => {
  applyRoleUI();
  renderQuestMap();
  renderToday();
  renderSkills();
  renderQuiz();
  updateHUD();
});
