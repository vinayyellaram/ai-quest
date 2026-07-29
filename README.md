# AI Learning Path — Job-Ready Plan

A structured roadmap for a **full-stack engineer** (JS, Node, React, Express, MySQL, MongoDB) to become hireable in AI roles.

## Your target roles (pick one primary focus)

| Role | Fit for you | Typical salary band (varies by region) |
|------|-------------|----------------------------------------|
| **AI Application Engineer** | Best fit — builds LLM features, RAG, agents on top of your stack | High demand, fastest path |
| **ML Engineer** | Good fit after Phase 2 — trains/deploys models, needs more math | Strong long-term |
| **Full-Stack + AI** | Easiest transition — AI features in existing web apps | Most companies hiring now |

**Recommendation:** Aim for **AI Application Engineer** first. Your Node/React/Express skills transfer directly; you add Python, ML basics, and LLM tooling.

## How to use this folder

```
ai-learning/
├── README.md                 ← You are here
├── ROADMAP.md                ← Full 6-month plan (start here)
├── WEEKLY-SCHEDULE.md        ← 10–15 hrs/week template
├── phase-1-foundations/      ← Python + math + Git for ML
├── phase-2-ml-basics/        ← Classical ML + first model
├── phase-3-llms-and-apps/    ← LLMs, RAG, agents, APIs
├── phase-4-portfolio-and-jobs/ ← Portfolio + interviews
├── projects/                 ← Build these for your resume
├── notes/                    ← Your daily notes (create as you go)
└── resources/                ← Curated links and books
```

## Time commitment

- **Minimum:** 10 hours/week → ~6 months to job-ready portfolio
- **Ideal:** 15–20 hours/week → ~4 months
- **Daily:** 1.5–2 hours weekdays + one 4-hour block on weekends

## Success criteria (you are job-ready when)

- [ ] 3 portfolio projects on GitHub (see `projects/PROJECTS.md`)
- [ ] Can explain: embeddings, RAG, fine-tuning vs prompting, evaluation
- [ ] Comfortable with Python, PyTorch or scikit-learn basics, and one vector DB
- [ ] Built and deployed at least one AI feature end-to-end (React + API + LLM)
- [ ] Resume lists measurable outcomes (latency, cost, accuracy improvements)

## Interactive dashboard

Open **`index.html`** in your browser for a gamified quest map with:

- **Micro-steps** (2–10 min each) — not vague "learn Python" goals
- **Today's Focus** — 3 next steps (implementation intentions)
- **Pomodoro timer** — 25 min focus blocks
- **Streak tracking** — daily consistency
- **Honest XP** — unchecking removes XP; quizzes award once only

See **`LEARNING-SCIENCE.md`** for the research behind the design.

**Learn content:** Click 📖 on any step for "Why?" explanations. Edit built-in content in `learn-content.js` — see `HOW-TO-ADD-LEARN-CONTENT.md`.

## Go live + Notion

| Step | Action |
|------|--------|
| 1 | Create repo [github.com/new](https://github.com/new) → `ai-quest` |
| 2 | `git remote add origin git@github.com:vinayyellaram/ai-quest.git && ./deploy.sh` |
| 3 | Settings → Pages → **GitHub Actions** |
| 4 | Create Notion HQ → paste URL in `integrations.config.js` |
| 5 | (Optional) Notion API sync → `NOTION-SETUP.md` |

**Live:** `https://vinayyellaram.github.io/ai-quest/`

Full guides: **`NOTION-SETUP.md`** · **`DEPLOY.md`**

## Start today

1. Open `index.html` or read `ROADMAP.md` end to end (30 min)
2. Open `phase-1-foundations/CHECKLIST.md` and complete Week 1 items
3. Create a `notes/` file: `notes/week-01.md` and log what you learned

---

*Created: July 2026 | Background: Full-stack JS/Node/React*
