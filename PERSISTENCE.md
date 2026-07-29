# Progress Persistence — Don't Lose Your XP

## How it works today

| Storage | Survives | Syncs across devices |
|---------|----------|----------------------|
| **localStorage** (default) | Until you clear browser data | ❌ No |
| **Export backup** (JSON file) | Forever (if you keep the file) | ✅ Manual import |
| **Cloud sync** (future) | Yes | ✅ Automatic |

---

## Option 1: Export / Import (live now — use this)

Built into the app at the bottom: **💾 Save progress**

### After each study session
1. Click **⬇ Export backup**
2. Save `ai-quest-backup-2026-07-29.json` to:
   - Google Drive / iCloud
   - Email to yourself
   - `~/Documents/Learning/ai-learning/notes/backups/`

### After clearing localStorage or on a new device
1. Open https://vinayyellaram.github.io/ai-quest/
2. Click **⬆ Import backup**
3. Select your JSON file → progress restored

### What's in the backup
- Checked steps + XP
- Streak, skills, quiz progress
- Your 📖 notes per step
- Selected role (AI App / ML / Full-Stack)

**Safe:** No API keys — only learning progress.

---

## Option 2: Private GitHub backup (manual)

```bash
# After exporting, copy to a PRIVATE repo (not ai-quest public)
mkdir -p ~/ai-quest-private-backups
cp ~/Downloads/ai-quest-backup-*.json ~/ai-quest-private-backups/
cd ~/ai-quest-private-backups && git init && git add . && git commit -m "backup"
```

---

## Option 3: Cloud sync (future — needs backend)

For **automatic** sync across phone + laptop:

| Approach | Stack | Effort |
|----------|-------|--------|
| **Supabase** | Auth + Postgres JSON | ~1 day |
| **Express + MongoDB** | Your existing skills | ~2 days |
| **Firebase** | Google auth + Firestore | ~1 day |
| **GitHub OAuth + Gist** | Store JSON in private gist | ~1 day |

Architecture (when you build it):

```
Browser app  →  POST /api/progress  →  MongoDB
     ↑              JWT login              ↓
     └──────── GET /api/progress ──────────┘
```

This is a great **Phase 3 portfolio project**: "Add auth + sync to my learning app."

---

## Option 4: Notion (notes only, not XP)

Notion sync in this project pulls **learn content** (why/how text), not your checkbox progress.

Use Notion for long notes; use **Export backup** for XP/steps.

---

## Habit to build

```
Study session ends → Export backup → file to Drive
```

Takes 5 seconds. Never lose weeks of progress.

---

## FAQ

**Q: I cleared localStorage — can I recover?**  
A: Only if you exported a backup before. No backup = start fresh.

**Q: Same progress on phone and laptop?**  
A: Export on one device, import on the other. Or build cloud sync (Option 3).

**Q: Is the backup file safe to share?**  
A: It only has learning progress — no secrets. Still keep it private if you prefer.
