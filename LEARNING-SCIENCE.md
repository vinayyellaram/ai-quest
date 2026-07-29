# Learning Science — How to Learn AI Fast (and How We Built It)

Research-backed methods for technical learning, mapped to features in **AI Quest** (`index.html`).

---

## Why big tasks fail ("learn Python" doesn't move the gear)

Your brain needs **clear, immediate feedback**. Vague goals activate the prefrontal cortex but not the reward system. Micro-steps (2–10 min) give:

- Visible progress every session
- Lower activation energy (no "where do I start?")
- Measurable completion (checkbox dopamine)

**In the app:** Every quest is split into **steps** with small XP (3–10 each). Phase progress shows `12/47 steps` not "Phase 1 incomplete."

---

## 7 Science-Backed Techniques (implemented or planned)

### 1. Active recall (highest ROI)

**Research:** Testing yourself beats re-reading by ~50% (Roediger & Karpicke, 2006).

**Do:** Close the tutorial. Write code from memory. Explain a concept without notes.

**In app:**
- Steps tagged `🧠 Recall` — do before peeking
- Quiz section (+25 XP **once per question** — no farming)
- Future: "Explain embeddings" text box before revealing answer

### 2. Spaced repetition

**Research:** Review at increasing intervals (1 day, 3 days, 7 days) moves knowledge to long-term memory (Ebbinghaus forgetting curve).

**Do:** 5 min review of yesterday before new material.

**In app:**
- Streak counter 🔥 (daily consistency)
- Future: wrong quiz answers resurface in 1/3/7 days
- Future: "Review deck" for completed steps

### 3. Interleaving

**Research:** Mixing topics (Python + ML + LLM) beats blocking one subject for weeks (Rohrer & Taylor).

**Do:** Mon Python, Tue embeddings, Wed RAG — not 4 weeks Python only.

**In app:** Quest map mixes phases over months; Today's Focus pulls next 3 steps across current phase.

### 4. Pomodoro / deep work

**Research:** 25-min focused blocks with breaks reduce fatigue and improve retention (Cirillo). Phone in another room.

**In app:** 🍅 Focus timer (25 min work / 5 min break).

### 5. Implementation intentions

**Research:** "After [trigger], I will [action]" doubles follow-through (Gollwitzer).

**Do:** "After morning coffee, I complete 3 micro-steps in AI Quest."

**In app:** ☀️ Today's Focus — exactly 3 next steps, no decision fatigue.

### 6. Feynman technique

**Research:** Teaching in simple language exposes gaps (Feynman).

**Do:** Explain RAG to an imaginary junior dev in 3 sentences. Write in `notes/`.

**In app:** Steps like "Explain overfitting in 2 sentences"; future Feynman note field per quest.

### 7. Project-based learning (build, don't watch)

**Research:** Transfer to real jobs requires deliberate practice on authentic tasks (Ericsson).

**Do:** 70% building, 20% reading, 10% video.

**In app:** Quest methods — `🔨 Build` > `⚡ Do` > `👁 Watch`. Watch steps always paired with a recall/build step after.

---

## What NOT to do (common traps)

| Trap | Why it fails | Instead |
|------|--------------|---------|
| Tutorial hell | Passive input, no retrieval | Build after every 30 min video |
| Highlighting notes | Feels productive, weak retention | Active recall + quiz |
| Learning CUDA first | Wrong order for AI app jobs | APIs → RAG → fine-tune later |
| 8-hour binge | No spacing, burnout | 2× 25-min pomodoros daily |
| Perfect math before code | Analysis paralysis | Math intuition + code in parallel |

---

## XP system design (honest progress)

**Fixed bugs:**
- XP = sum of **currently checked** micro-steps only
- Unchecking **subtracts** XP (no fake progress)
- Quiz XP awarded **once per question** (no re-farming)
- Toast shows actual delta (+5 or −5), not misleading "+15" on re-check

**Why small XP values:** Frequent +3/+5 hits the progress bar more often than rare +50 — better motivation (operant conditioning, small reinforcers).

---

## Suggested daily routine (90 min)

```
1. Open AI Quest → Today's Focus (pick 3 steps)     [2 min]
2. Pomodoro 25 min → complete step 1              [25 min]
3. Break 5 min
4. Pomodoro 25 min → steps 2–3                    [25 min]
5. Active recall: 1 quiz question, no notes         [5 min]
6. Git commit + log in notes/week-XX.md             [8 min]
```

**Weekly:** 1 build quest (🔨), 2 do quests (⚡), 1 review day (re-do hardest step from memory).

---

## Future features (roadmap)

| Feature | Science basis | Effort |
|---------|---------------|--------|
| Spaced repetition deck | Forgetting curve | Medium |
| Feynman note per quest | Elaborative interrogation | Low |
| "Try first" blur on step text | Generation effect | Low |
| Weekly review quiz from your weak areas | Testing effect | Medium |
| Accountability buddy / share progress | Social motivation | High |
| Anki export of AI concepts | Spaced repetition gold standard | Medium |

---

## Key papers & resources (skim, don't obsess)

- [Make It Stick](https://www.retrievalpractice.org/) — practical summary of learning science
- Roediger & Karpicke (2006) — testing effect
- Dunlosky et al. (2013) — which study techniques work
- [fast.ai](https://course.fast.ai/) — "learn by doing" philosophy for ML
- Barbara Oakley — *Learning How to Learn* (Coursera, free)

---

## How to extend the task list

Edit `tasks-data.js`:

```javascript
{
  id: 'p1-q9',
  title: 'Your quest title (~40 min)',
  minutes: 40,
  method: 'build',  // do | watch | recall | build | review
  steps: [
    { id: 'p1-q9-s1', text: 'One concrete action (2–10 min)', xp: 5 },
  ],
}
```

Keep steps **verifiable** ("Run X and see Y") not vague ("understand X").

---

*This doc lives in your `ai-learning` folder. Pair it with `index.html` daily.*
