# Deploy AI Quest to GitHub Pages + Notion

**Live URL:** `https://vinayyellaram.github.io/ai-quest/`

See **`NOTION-SETUP.md`** for Notion connection (links + API sync).

## Quick deploy

```bash
cd ai-learning
git init
git add .
git commit -m "Initial commit: AI Quest learning dashboard"
gh repo create ai-quest --public --source=. --push
```

### Enable Pages in GitHub

1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Push to `main` — workflow deploys automatically

### Update live site

```bash
git add .
git commit -m "Update content"
git push
```

Wait ~1 min. Hard refresh (`Cmd+Shift+R`).

---

## Option 2: Netlify (free, drag & drop)

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `ai-learning` folder
3. Get URL like `random-name.netlify.app`
4. Optional: custom domain in site settings

---

## Option 3: Your VPS + nginx (you know this stack)

```bash
# On your Ubuntu server
sudo mkdir -p /var/www/ai-quest
sudo chown $USER:$USER /var/www/ai-quest

# From your Mac — copy files
rsync -avz --exclude node_modules --exclude .git \
  ~/Documents/Learning/ai-learning/ user@your-server:/var/www/ai-quest/
```

nginx config (`/etc/nginx/sites-available/ai-quest`):

```nginx
server {
    listen 80;
    server_name ai.yourdomain.com;
    root /var/www/ai-quest;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/ai-quest /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
# Add SSL: sudo certbot --nginx -d ai.yourdomain.com
```

---

## Option 4: Vercel / Cloudflare Pages (free)

```bash
npx vercel --cwd ai-learning
# or connect GitHub repo at vercel.com / dash.cloudflare.com
```

---

## What works when live

| Feature | Works? |
|---------|--------|
| Quest map, XP, streak | ✅ (localStorage per device) |
| Learn panel 📖 | ✅ |
| Pomodoro | ✅ |
| Progress sync across phones | ❌ (unless you add a backend later) |
| Private notes | ✅ (local to that browser) |

---

## Custom domain (optional)

**GitHub Pages:** Repo → Settings → Pages → Custom domain → add DNS CNAME.

**Netlify/Vercel:** Add domain in dashboard, follow DNS instructions.

---

## Files deployed

```
index.html
app.js
tasks-data.js
learn-content.js
(+ markdown docs — optional, not required for app)
```

Test locally before deploy:

```bash
cd ai-learning
python3 -m http.server 8080
# open http://localhost:8080
```
