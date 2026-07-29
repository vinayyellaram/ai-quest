/**
 * Sync learn content FROM Notion → data/notion-content.json
 * Runs in GitHub Actions (NOTION_TOKEN + NOTION_DATABASE_ID secrets).
 * Never runs in the browser — API key stays safe on GitHub.
 *
 * Usage locally:
 *   NOTION_TOKEN=secret NOTION_DATABASE_ID=id node scripts/sync-notion.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../data/notion-content.json');

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

if (!token || !databaseId) {
  console.log('Skip: NOTION_TOKEN or NOTION_DATABASE_ID not set.');
  process.exit(0);
}

const headers = {
  Authorization: `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json',
};

async function queryDatabase(startCursor) {
  const body = { page_size: 100 };
  if (startCursor) body.start_cursor = startCursor;

  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Notion API ${res.status}: ${err}`);
  }
  return res.json();
}

function richText(prop) {
  if (!prop?.rich_text?.length) return '';
  return prop.rich_text.map(t => t.plain_text).join('');
}

function title(prop) {
  if (!prop?.title?.length) return '';
  return prop.title.map(t => t.plain_text).join('');
}

function url(prop) {
  return prop?.url || '';
}

async function main() {
  const output = { syncedAt: new Date().toISOString(), source: 'notion', steps: {}, quests: {} };
  let cursor;
  let total = 0;

  do {
    const data = await queryDatabase(cursor);
    for (const page of data.results) {
      const p = page.properties;
      const stepId = richText(p['Step ID'] || p.StepID || p.step_id) || title(p['Step ID']);
      if (!stepId) continue;

      const entry = {
        title: title(p.Title || p.Name) || undefined,
        why: richText(p.Why) || undefined,
        analogy: richText(p.Analogy) || undefined,
        how: richText(p.How) || undefined,
      };

      const notionUrl = url(p.URL || p.Link);
      if (notionUrl) {
        entry.links = [{ label: 'Open in Notion', url: notionUrl }];
      }

      if (stepId.startsWith('quest:')) {
        output.quests[stepId.replace('quest:', '')] = { intro: entry.why || entry.title, ...entry };
      } else {
        output.steps[stepId] = entry;
      }
      total++;
    }
    cursor = data.has_more ? data.next_cursor : null;
  } while (cursor);

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(output, null, 2));
  console.log(`Synced ${total} entries → ${OUT}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
