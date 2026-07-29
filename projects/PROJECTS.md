# Portfolio Projects (Ranked for Job Market)

Build these in order. Each should take 1–3 weeks.

---

## Project 1: RAG Knowledge Assistant (Required)

**What:** Chat over your own documents (PDFs, wiki, codebase docs)

**Why employers care:** RAG is the #1 skill in AI app job postings in 2025–2026.

**Stack:** React + FastAPI/Express + OpenAI + Chroma/Pinecone + MongoDB

**Differentiators:**
- Citation links to source chunks
- Admin UI to upload new docs
- Simple eval page (question → expected vs actual)

---

## Project 2: Pick one

### Option A: AI Support Ticket Classifier + Reply Suggester
- Classify tickets (billing, technical, account) with sklearn or fine-tuned classifier
- Suggest reply drafts with LLM
- **Shows:** classical ML + LLM combo (very hireable)

### Option B: Code Review Bot
- GitHub Action or webhook on PR
- LLM reviews diff, comments on style/security
- **Shows:** DevTools integration, your audience is engineers

### Option C: SQL Natural Language Interface
- Ask questions in English → safe SQL → MySQL results → natural language answer
- Guardrails: read-only DB user, query validation
- **Shows:** your MySQL strength + LLM tool use

### Option D: Multi-Agent Research Assistant
- Agent 1: web search; Agent 2: summarize; Agent 3: synthesize report
- **Shows:** agent orchestration (hot topic)

**Recommendation:** Option C or B if targeting full-stack roles; Option D for AI-first startups.

---

## Project 3: Pick one (more advanced)

### Option A: Fine-tuned Model for Domain Task
- Fine-tune small model (LoRA) on domain dataset — e.g. support tone, classification
- Compare base vs fine-tuned on eval set
- **Shows:** you go beyond API calls

### Option B: AI Feature in Existing React App
- Add to `my-react-app` or new app: smart search, auto-complete, content generation
- **Shows:** integration into real product shape

### Option C: Observability Dashboard for LLM Apps
- Log prompts, latencies, token costs, user feedback thumbs up/down
- Simple React dashboard
- **Shows:** production mindset (senior signal)

---

## README template (copy per project)

```markdown
# Project Name

One-line description.

## Problem
What pain does this solve?

## Solution
High-level approach.

## Architecture
[diagram or ASCII]

## Tech Stack
- Frontend: React
- Backend: ...
- AI: ...

## Metrics
- Latency: ...
- Cost: ...
- Accuracy/relevance: ...

## Setup
\`\`\`bash
git clone ...
cp .env.example .env
...
\`\`\`

## Demo
[Link to video or live app]

## What I learned
- ...
```

---

## Folder structure for each project

Create under `ai-learning/projects/` as planning docs, build actual code in separate repos:

```
ai-learning/projects/
├── 01-rag-assistant/
│   └── PLAN.md          ← scope, milestones before coding
├── 02-your-choice/
│   └── PLAN.md
└── 03-your-choice/
    └── PLAN.md
```

When you start Project 1, create `01-rag-assistant/PLAN.md` with weekly milestones.
