# Fix GitHub Pages Deploy

Your workflow failed because **GitHub Actions** was set as the Pages source, but Pages wasn't fully enabled for that mode.

We switched to a simpler method: deploy to the **`gh-pages` branch**.

---

## Do this once (2 steps)

### Step 1 — Enable Pages from branch

1. Open **https://github.com/vinayyellaram/ai-quest/settings/pages**
2. **Build and deployment** → **Source** → **Deploy from a branch**
3. **Branch:** `gh-pages` → folder **`/ (root)`** → **Save**

### Step 2 — Re-run deploy

1. Open **https://github.com/vinayyellaram/ai-quest/actions**
2. Click **Deploy AI Quest to GitHub Pages**
3. **Re-run all jobs**

Wait 1–2 minutes.

**Live URL:** **https://vinayyellaram.github.io/ai-quest/**

---

## What changed

| Old (broken) | New (works) |
|--------------|-------------|
| `configure-pages` + `deploy-pages` | Pushes files to `gh-pages` branch |
| Requires "GitHub Actions" as Pages source | Requires "Deploy from branch" → `gh-pages` |

---

## Still failing?

**Repo must be Public** (free GitHub Pages for public repos).

If repo is private: Settings → General → Danger zone → Change visibility → Public.

Or upgrade to GitHub Pro for private Pages.

---

## Node 20 warning

Harmless message from GitHub's runners. Our workflow no longer pins Node 20.
