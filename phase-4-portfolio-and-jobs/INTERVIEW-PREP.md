# Interview Prep — AI / Full-Stack Roles

---

## Concepts you must explain clearly

### ML fundamentals
1. **Supervised vs unsupervised learning** — with examples
2. **Overfitting** — how to detect and prevent
3. **Precision vs recall** — when you care about each
4. **Train/validation/test split** — why leakage is bad
5. **Feature engineering** — what it means for tabular data

### Deep learning (high level)
1. **What is a neural network?** — layers, weights, activation
2. **What is backpropagation?** — one sentence intuition
3. **Why transformers?** — attention, parallelization, context

### LLM / AI apps
1. **How does an LLM generate text?** — next-token prediction
2. **What are embeddings?** — vectors that capture meaning
3. **What is RAG and when to use it?** — vs fine-tuning vs long context
4. **Chunking strategies** — size, overlap, metadata
5. **Prompt engineering limits** — when you need fine-tuning or tools
6. **Agent risks** — loops, cost, security, injection
7. **Evaluation for LLMs** — human eval, LLM-as-judge, retrieval metrics

---

## System design: "Design a document Q&A system"

Use this outline in interviews:

```
1. Requirements
   - Doc types, users, latency SLA, privacy (on-prem vs cloud)

2. Ingestion pipeline
   - Upload → parse PDF → chunk → embed → index

3. Query path
   - User question → embed → retrieve top-k → rerank (optional) → LLM prompt → stream response

4. Storage
   - Vector DB (Pinecone/pgvector), object storage for files, Postgres for metadata

5. Non-functional
   - Caching (Redis), rate limits, auth, observability, cost controls

6. Failure modes
   - Stale index, hallucination, slow retrieval, API outage → fallbacks
```

Practice drawing this on paper in 15 minutes.

---

## Coding (Python)

Expect LeetCode **easy/medium** — arrays, hashes, strings, basic BFS/DFS.

AI-specific coding:
- Implement cosine similarity between two vectors
- Write a function to chunk text by token count
- Parse LLM JSON output with error handling

```python
import math

def cosine_similarity(a: list[float], b: list[float]) -> float:
    dot = sum(x * y for x, y in zip(a, b))
    norm_a = math.sqrt(sum(x * x for x in a))
    norm_b = math.sqrt(sum(x * x for x in b))
    return dot / (norm_a * norm_b) if norm_a and norm_b else 0.0
```

---

## Behavioral (STAR format)

Prepare 5 stories:
1. Hard technical problem you solved
2. Project you shipped under deadline
3. Disagreement with teammate — resolution
4. Something you learned quickly (Python/AI pivot fits here)
5. Production incident you handled

**Your pivot story:** "As a full-stack engineer I shipped X. I saw AI transforming Y, so I built Z (portfolio project) and learned embeddings/RAG hands-on."

---

## Questions to ask them

- How do you evaluate LLM quality in production?
- What's the split between building vs integrating third-party models?
- How is the AI team structured with product engineering?
- What's the biggest technical challenge on the AI roadmap?

---

## Mock interview schedule

| Session | Partner | Focus |
|---------|---------|-------|
| 1 | Friend / Pramp | Explain RAG whiteboard |
| 2 | Friend | Walk through portfolio project #1 |
| 3 | Pramp | Python coding medium |
| 4 | Friend | System design: chatbot at scale |

---

## 30-day review checklist

- [ ] Can draw RAG architecture from memory
- [ ] Can implement cosine similarity without Google
- [ ] Can explain your 3 projects in 3 minutes each
- [ ] Read one system design chapter (Designing ML Systems Ch 1–3)
