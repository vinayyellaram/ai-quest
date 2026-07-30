# AI Quest — macOS App

Native Mac wrapper for AI Quest. Progress is saved to a JSON file on your machine:

```
~/Library/Application Support/AI Quest/progress.json
```

## Run in development

```bash
cd mac-app
npm install
npm start
```

## Build a `.app` / `.dmg`

```bash
cd mac-app
npm install
npm run build
```

Output: `mac-app/dist/AI Quest.app` and `AI Quest-x.x.x.dmg`

## Data

- All quest progress, XP, streak, skills, and notes are stored locally in `progress.json`.
- Use **AI Quest → Reveal Data File in Finder** from the menu bar to open the file.
- Export/import in the app still works for backups to iCloud or Google Drive.

## Web version

The browser version at `index.html` still works and uses `localStorage`. The Mac app uses the same UI with file-based storage.
