/**
 * ONLINE TOOL CONNECTIONS
 * =======================
 * Edit URLs below to link AI Quest with your Notion, GitHub, Calendar, etc.
 * These show as buttons in the app — no API key needed in the browser.
 *
 * For Notion API sync (auto-pull notes into the app), see NOTION-SETUP.md
 */

const INTEGRATIONS = {
  // Your main Notion learning hub (duplicate template, paste URL here)
  notion: {
    enabled: true,
    label: 'Notion HQ',
    icon: '📓',
  // Replace with YOUR public Notion page URL after duplicating the template
    hubUrl: 'https://www.notion.so',
    // Optional: link to duplicate a starter template (create in Notion → Share → Copy link)
    templateUrl: '',
  },

  github: {
    enabled: true,
    label: 'GitHub Repo',
    icon: '🐙',
    // Update after you create the ai-quest repo
    repoUrl: 'https://github.com/vinayyellaram/ai-quest',
    notesPath: 'notes/',
  },

  calendar: {
    enabled: true,
    label: 'Block study time',
    icon: '📅',
    // Opens Google Calendar with a 90-min "AI Quest" event template
    googleTemplateUrl:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=AI+Quest+Study&details=Today%27s+3+micro-steps+from+AI+Quest&duration=9000',
  },

  // Per-step Notion pages (optional) — key = step id from tasks-data.js
  // Example: open deep notes you wrote in Notion for that topic
  notionStepPages: {
    // 'p1-q1-s3': 'https://www.notion.so/your-venv-notes-page',
  },
};
