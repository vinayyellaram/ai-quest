# Connect Notion + GitHub Pages

Use **Notion** as your writing space (notes, deep dives) and **GitHub Pages** as the live app your quest map runs on. Two ways to connect them:

| Mode | Effort | What it does |
|------|--------|----------------|
| **Links** | 5 min | Buttons open your Notion pages |
| **API sync** | 20 min | Edit in Notion → auto-updates live site daily |

---

## Part 1: Go live with GitHub Pages

### Step 1 — Create GitHub repo

1. Open [github.com/new](https://github.com/new)
2. Name: `ai-quest`
3. Public → **Create repository** (no README)

### Step 2 — Push code

```bash
cd ~/Documents/Learning/ai-learning
git remote add origin git@github.com:vinayyellaram/ai-quest.git
./deploy.sh
```

### Step 3 — Enable Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Wait ~1 minute

**Live URL:** `https://vinayyellaram.github.io/ai-quest/`

Update `integrations.config.js` → `github.repoUrl` with your repo URL.

---

## Part 2: Connect Notion (links — easiest)

### Create your learning hub in Notion

1. In Notion, create a page: **AI Quest — Learning HQ**
2. Add sections: Phase 1 notes, Phase 2, Journal, Resources
3. **Share** → **Publish to web** (or share link)
4. Copy the URL

### Link it in the app

Edit `integrations.config.js`:

```javascript
notion: {
  enabled: true,
  hubUrl: 'https://your-workspace.notion.site/AI-Quest-Learning-HQ-abc123',
},
```

### Per-step Notion pages (optional)

For any step, add a deep-dive page in Notion and link it:

```javascript
notionStepPages: {
  'p1-q1-s3': 'https://www.notion.so/my-venv-notes',
  'p3-q2-s3': 'https://www.notion.so/my-rag-chunking-notes',
},
```

Push to GitHub → site updates. Click **📖** on a step → **Open in Notion** appears.

---

## Part 3: Notion API sync (auto-pull content)

Edit notes in a **Notion database** → GitHub Action syncs to the live app. No API keys in the browser.

### A. Create Notion integration

1. [notion.so/my-integrations](https://www.notion.so/my-integrations) → **New integration**
2. Name: `AI Quest Sync`
3. Copy **Internal Integration Secret** → save as `NOTION_TOKEN`

### B. Create database in Notion

Create a database with these columns:

| Column name | Type | Example |
|-------------|------|---------|
| **Step ID** | Title | `p1-q1-s3` |
| **Title** | Text | Virtual environment |
| **Why** | Text | Isolates packages per project... |
| **Analogy** | Text | Like node_modules... |
| **How** | Text | python3 -m venv .venv |
| **URL** | URL | Link to full Notion page |

**Quest overviews:** use Step ID `quest:p1-q1` (prefix `quest:`).

Share the database with your integration: **⋯** → **Connect to** → AI Quest Sync.

Copy database ID from URL: `notion.so/workspace/DATABASE_ID?v=...`

### C. Add GitHub secrets

Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Secret | Value |
|--------|-------|
| `NOTION_TOKEN` | Integration secret |
| `NOTION_DATABASE_ID` | 32-char database id |

### D. Run sync

Repo → **Actions** → **Sync from Notion** → **Run workflow**

Or wait for daily 6:00 UTC cron. Synced content lands in `data/notion-content.json` and merges into the 📖 learn panel.

**Priority:** Notion sync **overrides** `learn-content.js` for fields you fill in Notion.

---

## Part 4: Other tools

Edit `integrations.config.js`:

| Tool | Config key | Use case |
|------|------------|----------|
| **Google Calendar** | `calendar.googleTemplateUrl` | Block 90 min study slots |
| **GitHub** | `github.repoUrl` | Link to repo + notes folder |
| **Notion** | `notion.hubUrl` | Main knowledge base |

### Future integrations (same pattern)

- **Airtable** — duplicate sync script pattern as `sync-airtable.mjs`
- **Google Sheets** — export CSV → GitHub Action → JSON
- **Obsidian** — git push notes folder, link from integrations config

---

## Architecture

```
┌─────────────┐     write      ┌──────────────┐
│   Notion    │ ──────────────►│ GitHub Action│
│  (database) │   API sync     │  (daily)     │
└─────────────┘                └──────┬───────┘
                                      │ commit
                                      ▼
┌─────────────┐                ┌──────────────┐
│  Your phone │◄── browse ────│ GitHub Pages │
│  / laptop   │                │  index.html  │
└─────────────┘                └──────────────┘
       │
       └── localStorage (XP, streak, personal notes in browser)
```

- **Notion** = long-form notes, editable content (synced)
- **GitHub Pages** = quest UI, gamification, micro-steps
- **Browser** = progress XP (per device unless you add a backend later)

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Pages 404 | Settings → Pages → Source must be **GitHub Actions** |
| Notion sync fails | Check secrets; database shared with integration |
| Old content on site | Hard refresh `Cmd+Shift+R` or wait for deploy |
| Step ID not found | Must match `tasks-data.js` exactly (e.g. `p1-q1-s3`) |

---

## Quick checklist

- [ ] GitHub repo `ai-quest` created
- [ ] `./deploy.sh` pushed
- [ ] Pages enabled (GitHub Actions)
- [ ] Notion HQ page created + URL in `integrations.config.js`
- [ ] (Optional) Notion database + GitHub secrets for sync
