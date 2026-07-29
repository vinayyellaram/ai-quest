# 6-Month AI Roadmap (Job-Focused)

## Strategy

You do **not** need a PhD. Employers hiring full-stack engineers for AI want people who can:

1. Ship production AI features (not just Jupyter notebooks)
2. Integrate LLMs with existing backends and databases
3. Understand ML enough to debug, evaluate, and improve systems
4. Deploy, monitor, and control cost/latency

Your unfair advantage: you already know APIs, databases, auth, deployment, and frontend. Most ML bootcamp grads lack this.

---

## Phase 1 — Foundations (Weeks 1–4)

**Goal:** Python fluency + just enough math + ML environment setup

### Week 1: Python for engineers
- Syntax, virtual envs (`venv`, `poetry`), `pip`, type hints
- NumPy, Pandas basics (you know JSON/SQL — this is tabular data)
- Write 3 small scripts: CSV parser, API client, file batch processor

### Week 2: Math essentials (no proofs, only intuition)
- Linear algebra: vectors, dot product, matrices (for embeddings)
- Calculus: derivatives at a high level (for gradient descent)
- Probability: mean, variance, distributions, Bayes rule (skim)
- Resource: 3Blue1Brown "Neural Networks" series (watch, don't memorize)

### Week 3: Dev environment for ML
- Install: Python 3.11+, VS Code/Cursor, Jupyter
- Git workflow for ML repos (data in `.gitignore`, `requirements.txt`, `README`)
- Run your first notebook: load Iris dataset, plot with matplotlib

### Week 4: SQL + data for ML
- Feature tables, train/validation/test splits
- Connect Python to MySQL (you know this — reuse skills)
- Mini project: predict something from a Kaggle dataset (e.g. Titanic or House Prices)

**Phase 1 deliverable:** GitHub repo `python-ml-starter` with notebooks + README

→ Details: `phase-1-foundations/CHECKLIST.md`

---

## Phase 2 — Machine Learning Basics (Weeks 5–10)

**Goal:** Understand how models learn; train and evaluate classical ML

### Weeks 5–6: Supervised learning
- Regression vs classification
- scikit-learn: `fit`, `predict`, `train_test_split`, metrics
- Overfitting, regularization, cross-validation
- Algorithms: Linear/Logistic Regression, Random Forest, XGBoost

### Weeks 7–8: Deep learning intro
- PyTorch basics: tensors, `nn.Module`, training loop
- Build a simple neural net (MNIST or similar)
- Understand: loss function, optimizer, epochs, batch size
- *Optional depth:* fast.ai Practical Deep Learning (first 4 lessons)

### Weeks 9–10: NLP & embeddings foundation
- Tokenization, word embeddings (Word2Vec concept)
- Transformer intuition (attention in plain English)
- Hugging Face `transformers`: load a pretrained model, run inference
- Sentence embeddings with `sentence-transformers`

**Phase 2 deliverable:** Repo `ml-classification-project` — end-to-end tabular ML pipeline with metrics and a simple FastAPI endpoint

→ Details: `phase-2-ml-basics/CHECKLIST.md`

---

## Phase 3 — LLMs & AI Applications (Weeks 11–18)

**Goal:** Build what companies actually hire for — LLM-powered products

### Weeks 11–12: LLM fundamentals
- How GPT-style models work (tokens, context window, temperature)
- OpenAI / Anthropic / open-source APIs (Ollama for local dev)
- Prompt engineering: system prompts, few-shot, chain-of-thought
- Structured outputs (JSON mode, function calling)

### Weeks 13–14: RAG (Retrieval-Augmented Generation)
- Chunking strategies, embedding models, vector search
- Vector DBs: start with **Chroma** (local), then **Pinecone** or **pgvector**
- Build RAG over your own docs (PDFs, markdown)
- Evaluation: relevance, faithfulness, latency

### Weeks 15–16: Agents & tool use
- LangChain or LlamaIndex (pick one, don't both deeply)
- Agent loops: plan → tool call → observe → respond
- Connect tools: web search, DB query, your Express API
- Guardrails: input validation, output filtering, rate limits

### Weeks 17–18: Full-stack AI integration
- **Backend:** FastAPI or Node + LangChain.js for AI routes
- **Frontend:** React chat UI, streaming (SSE/WebSockets)
- **Data:** MongoDB for chat history, MySQL for business data
- **Ops:** Redis caching, nginx reverse proxy, env secrets
- Deploy on Railway, Render, or AWS (use what you know)

**Phase 3 deliverable:** Production-style app — "Company Knowledge Assistant" (RAG + chat + auth)

→ Details: `phase-3-llms-and-apps/CHECKLIST.md`

---

## Phase 4 — Portfolio & Job Hunt (Weeks 19–24)

**Goal:** 3 strong projects, resume, interviews

### Weeks 19–20: Portfolio project #2
Pick one high-impact project (see `projects/PROJECTS.md`):
- AI code reviewer for PRs
- Multi-agent research assistant
- Document Q&A with evaluation dashboard

### Weeks 21–22: Portfolio project #3 + polish
- Add tests, CI, monitoring, cost tracking
- Write strong READMEs with architecture diagrams
- Record 2-min demo videos (Loom)

### Weeks 23–24: Job prep
- Resume rewrite (AI bullets with metrics)
- LinkedIn + GitHub profile optimization
- Mock interviews: system design for RAG, ML concepts, coding
- Apply: 10–15 targeted applications/week

→ Details: `phase-4-portfolio-and-jobs/CHECKLIST.md`

---

## Tech stack to learn (mapped to what you know)

| You already know | AI equivalent / addition |
|------------------|--------------------------|
| JavaScript/Node  | Python (primary for ML), LangChain.js (optional) |
| Express          | FastAPI (Python) — very similar mental model |
| React            | Same — build chat UIs, dashboards |
| MySQL/MongoDB    | pgvector, Pinecone, Chroma for vectors; Mongo for chat logs |
| nginx/Ubuntu     | Same — deploy ML APIs behind nginx |
| Git              | Same + DVC optional for datasets |
| **New**          | PyTorch, Hugging Face, OpenAI API, vector DBs, Jupyter |

---

## What to skip (for now)

- Research-level math (real analysis, measure theory)
- Training LLMs from scratch
- CUDA/kernel optimization
- Competing on Kaggle leaderboards (unless you enjoy it)

Revisit these only if you target **Research Engineer** or **ML Research** roles.

---

## Monthly milestones

| Month | Milestone |
|-------|-----------|
| 1 | Python comfortable; first ML notebook on GitHub |
| 2 | Trained classifiers; understand metrics and overfitting |
| 3 | PyTorch MNIST; Hugging Face inference working |
| 4 | First RAG app deployed |
| 5 | Agent + full-stack AI app live |
| 6 | 3 portfolio projects; actively interviewing |

---

## Next step

Open `WEEKLY-SCHEDULE.md` and block time on your calendar for Week 1.
