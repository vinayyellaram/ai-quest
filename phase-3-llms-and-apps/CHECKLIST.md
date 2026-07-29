# Phase 3 Checklist — LLMs & AI Apps (Weeks 11–18)

## Weeks 11–12: LLM fundamentals

- [ ] Create OpenAI (or Anthropic) API account; set billing limits
- [ ] Install Ollama for free local models: `ollama run llama3`
- [ ] Build CLI chatbot in Python (20 lines, then improve)
- [ ] Practice prompt patterns:
  - [ ] System prompt with role + constraints
  - [ ] Few-shot examples
  - [ ] Chain-of-thought ("think step by step")
  - [ ] JSON / structured output
- [ ] Compare: GPT-4o-mini vs local Llama on same task (cost, quality, speed)
- [ ] Read: [OpenAI Prompt Engineering guide](https://platform.openai.com/docs/guides/prompt-engineering)

---

## Weeks 13–14: RAG system

**Project: Company Knowledge Assistant (Portfolio #1)**

- [ ] Ingest: PDFs or markdown docs (use `pypdf` or `unstructured`)
- [ ] Chunk: 500–1000 tokens, overlap 100; try 2 chunk sizes
- [ ] Embed: `text-embedding-3-small` or `sentence-transformers`
- [ ] Store: Chroma (local) → then pgvector or Pinecone
- [ ] Retrieve: top-k similarity search (k=3–5)
- [ ] Generate: answer with citations to source chunks
- [ ] Add basic eval: 10 hand-written questions + check faithfulness

**Architecture to document in README:**
```
User → React UI → Express/FastAPI → Embed query → Vector DB → Top chunks → LLM → Response
```

---

## Weeks 15–16: Agents

- [ ] Pick framework: **LangChain** (more jobs list it) OR LlamaIndex (strong for RAG)
- [ ] Build agent with 2+ tools:
  - [ ] Calculator or datetime
  - [ ] SQL query tool (your MySQL skills!)
  - [ ] HTTP call to external API
- [ ] Implement max iterations / timeout to prevent runaway loops
- [ ] Log tool calls for debugging
- [ ] *Stretch:* Multi-step research agent (search → summarize → answer)

---

## Weeks 17–18: Full-stack integration

**Stack suggestion (uses your skills):**

| Layer | Tech |
|-------|------|
| Frontend | React + streaming chat UI |
| API | Express or FastAPI |
| AI | LangChain / direct OpenAI SDK |
| Vector DB | Chroma or Pinecone |
| Chat history | MongoDB |
| Cache | Redis (optional) |
| Deploy | Ubuntu VPS + nginx OR Railway |

**Checklist:**
- [ ] User auth (JWT — you know this)
- [ ] Rate limiting per user
- [ ] Streaming responses (SSE)
- [ ] Env vars for API keys (never commit)
- [ ] Error handling when LLM times out
- [ ] Deploy publicly with HTTPS
- [ ] Add cost estimate to README (~$X per 1000 queries)

**Phase 3 complete when:** Live URL + GitHub repo with architecture diagram + demo video

---

## LangChain.js alternative (if you prefer Node)

```bash
npm install langchain @langchain/openai
```

Valid path: keep AI logic in Node/Express if you're faster there. Many teams use Python for ML and Node for BFF — either works for portfolio.

---

## Evaluation checklist (impress interviewers)

- [ ] Latency: p50 / p95 response time
- [ ] Retrieval: hit rate on 20 test questions
- [ ] Hallucination: does answer cite wrong chunk?
- [ ] Cost: tokens in/out per session
