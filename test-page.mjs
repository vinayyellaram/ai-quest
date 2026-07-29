import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pageUrl = 'file://' + path.join(__dirname, 'index.html');

const results = [];
const pass = (n, d = '') => { results.push({ ok: true, name: n }); console.log(`✓ ${n}${d ? ` — ${d}` : ''}`); };
const fail = (n, d = '') => { results.push({ ok: false, name: n, detail: d }); console.log(`✗ ${n}${d ? ` — ${d}` : ''}`); };

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  try {
    await page.goto(pageUrl, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => { localStorage.removeItem('ai-quest-progress-v2'); localStorage.removeItem('ai-quest-progress-v1'); });
    await page.reload({ waitUntil: 'domcontentloaded' });
    pass('Page loads');

    // Micro-steps exist (phase 1 starts open)
    const p1 = page.locator('.phase-card[data-phase="p1"]');
    const questCount = await p1.locator('.quest-group').count();
    if (questCount >= 3) pass('Micro-quest groups render', `${questCount} quests in p1`);
    else fail('Micro-quest groups render', String(questCount));

    // Expand first quest inside p1
    await p1.locator('.quest-group').first().locator('.quest-header').click();
    await page.waitForTimeout(300);
    const stepCount = await p1.locator('.step-item').count();
    if (stepCount >= 3) pass('Micro-steps render', `${stepCount} steps`);
    else fail('Micro-steps render', String(stepCount));

    // XP on check
    const xp0 = await page.locator('#xp').textContent();
    await p1.locator('.step-item').first().click();
    await page.waitForTimeout(200);
    const xp1 = parseInt(await page.locator('#xp').textContent(), 10);
    if (xp1 > parseInt(xp0, 10)) pass('Check step adds XP', `${xp0} → ${xp1}`);
    else fail('Check step adds XP', `${xp0} → ${xp1}`);

    // XP on uncheck (should decrease)
    await p1.locator('.step-item').first().click();
    await page.waitForTimeout(200);
    const xp2 = parseInt(await page.locator('#xp').textContent(), 10);
    if (xp2 < xp1) pass('Uncheck step removes XP', `${xp1} → ${xp2}`);
    else fail('Uncheck step removes XP', `${xp1} → ${xp2}`);

    // Re-check should NOT exceed first check XP
    await p1.locator('.step-item').first().click();
    await page.waitForTimeout(200);
    const xp3 = parseInt(await page.locator('#xp').textContent(), 10);
    if (xp3 === xp1) pass('Re-check gives same XP (no farming)', `XP = ${xp3}`);
    else fail('Re-check gives same XP (no farming)', `expected ${xp1}, got ${xp3}`);

    // Quiz XP once only
    await page.locator('.quiz-opt').nth(1).click();
    await page.locator('#quizNext.show').waitFor({ timeout: 3000 });
    const xpQuiz1 = parseInt(await page.locator('#xp').textContent(), 10);
    await page.locator('#quizNext').click();
    await page.waitForTimeout(150);
    // Cycle back to q0
    for (let i = 0; i < 4; i++) {
      await page.locator('.quiz-opt').first().click().catch(() => {});
      const next = page.locator('#quizNext.show');
      if (await next.isVisible().catch(() => false)) await next.click();
      await page.waitForTimeout(100);
    }
    await page.locator('.quiz-opt').nth(1).click();
    await page.waitForTimeout(200);
    const xpQuiz2 = parseInt(await page.locator('#xp').textContent(), 10);
    if (xpQuiz2 === xpQuiz1) pass('Quiz XP not farmable', `stayed at ${xpQuiz2}`);
    else fail('Quiz XP not farmable', `${xpQuiz1} → ${xpQuiz2}`);

    // Today focus
    const todayItems = await page.locator('#todayList .today-item').count();
    if (todayItems === 3) pass('Today focus shows 3 items');
    else fail('Today focus shows 3 items', String(todayItems));

    // Role switch changes content
    await page.locator('.role-card[data-role="ml-eng"]').click();
    await page.waitForTimeout(400);
    const mlText = await page.locator('.phase-card[data-phase="p1"]').textContent();
    if (mlText.includes('Math')) pass('Role switch updates quest map');
    else fail('Role switch updates quest map');

    // Pomodoro
    await page.locator('#pomoStart').click();
    await page.waitForTimeout(1100);
    const pomo = await page.locator('#pomoTime').textContent();
    if (pomo !== '25:00') pass('Pomodoro counts down', pomo);
    else fail('Pomodoro counts down');

    if (!errors.length) pass('No JS errors');
    else fail('No JS errors', errors.join('; '));

  } catch (e) {
    fail('Test run', e.message);
  } finally {
    await browser.close();
  }

  const failed = results.filter(r => !r.ok);
  console.log(`\n---\n${results.length - failed.length}/${results.length} passed`);
  if (failed.length) process.exit(1);
}

main();
