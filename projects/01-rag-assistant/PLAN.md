# Project 1 Plan — RAG Knowledge Assistant

**Status:** Not started  
**Target completion:** End of Phase 3 (Week 18)

## Scope (MVP)

- Upload PDF/markdown files
- Ask questions in chat UI
- Answers with source citations
- Deployed with HTTPS

## Out of scope (v1)

- Multi-user orgs
- Fine-tuning
- Voice input

## Milestones

- [ ] Week 13: Ingestion + chunking script works locally
- [ ] Week 14: Vector search returns relevant chunks
- [ ] Week 15: End-to-end CLI Q&A
- [ ] Week 17: React UI + API
- [ ] Week 18: Deploy + README + demo video

## Tech decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Backend | FastAPI or Express | FastAPI if Python-heavy; Express if you move faster in Node |
| Vector DB | Chroma → Pinecone | Start local, cloud for deploy |
| Embeddings | OpenAI text-embedding-3-small | Good quality/cost for portfolio |

## Open questions

- What document set will you use? (Your own notes, public docs, open-source READMEs)

---

*Fill this in as you build. Move code to a separate GitHub repo when Week 13 starts.*
