# How to Add "Why?" Learn Content

Every micro-step can have explanations: **why it matters**, **analogies for devs**, **how-to**, and **links**.

---

## Where content lives

| File | What to edit |
|------|----------------|
| **`learn-content.js`** | Built-in explanations (read by everyone who clones the repo) |
| **In the app** | Click 📖 on any step → **Your notes** (saved in browser) |
| **`notes/`** | Your personal markdown notes (backup, long-form) |

---

## Add explanation for a step

1. Find the **step id** in `tasks-data.js` (e.g. `p1-q1-s3`)
2. Open `learn-content.js`
3. Add an entry to `stepLearn`:

```javascript
'p1-q1-s3': {
  title: 'Virtual environment (venv)',
  why: 'Why this matters — 2-3 sentences.',
  analogy: 'Compare to something you know (Node, MySQL, nginx).',
  how: 'Concrete commands. HTML <code> tags work.',
  links: [
    { label: 'Official docs', url: 'https://docs.python.org/3/library/venv.html' },
  ],
},
```

4. Save and refresh `index.html`
5. Click 📖 on that step — content appears in the side panel

---

## Add quest overview ("Why this quest?")

Add to `questLearn` in `learn-content.js`:

```javascript
'p1-q1': {
  title: 'Day 1 — Python environment',
  intro: 'What this day is about and why it comes first.',
},
```

The **"Why this quest?"** button appears on quest headers that have an entry.

---

## Role-specific content

If the same step id means different things per role, prefix with role:

```javascript
'fullstack-ai::p2-q1-s1': {
  title: 'Express streaming',
  why: '...',
},
```

---

## Personal notes (in the app)

1. Click 📖 on any step
2. Scroll to **Your notes**
3. Type — saves automatically to browser localStorage

For permanent backup, copy to `notes/week-01.md`:

```markdown
## p1-q1-s3 — venv

My note: venv is like node_modules isolation...
```

---

## Field guide

| Field | Required | Purpose |
|-------|----------|---------|
| `title` | Yes | Panel heading |
| `why` | Recommended | Why this step matters for AI jobs |
| `analogy` | Optional | Map to JS/Node/React/MySQL |
| `how` | Optional | Commands, steps, examples |
| `links` | Optional | Docs, videos, articles |
| `intro` | Quest only | Quest-level overview |

---

## Tips for good explanations

- **Short** — 3–5 sentences per section; learners are doing, not reading a textbook
- **Job-relevant** — "Employers expect you to know X because Y"
- **Actionable** — include exact commands they will run next
- **Analogy first** — you already know full-stack; bridge from there

---

## Steps without content yet

Steps without a `stepLearn` entry still open the panel with:
- Quest overview (if available)
- Empty template pointing to this file
- Your notes textarea

Add content over time as you learn — your notes become your second brain.
