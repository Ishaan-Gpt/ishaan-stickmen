#!/usr/bin/env node
// capture.mjs: real screens for a how-to film (ishaan-motion 1.17.77): screenshots of real pages, the viewport and the full scroll.
//   node capture.mjs <out dir> name=url [name=url ...] [w=1600] [h=1000] [full=1] [wait=3000]
// Cookie banners are declined, never accepted. Read-only: nothing is clicked except "Reject all".
import { mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import * as pw from 'playwright-core';   // npm i playwright-core; uses your installed Chrome (CHROME_PATH)
const args = process.argv.slice(2), out = resolve(args[0]); mkdirSync(out, { recursive: true });
const kv = Object.fromEntries(args.slice(1).filter(a => /^(w|h|full|wait)=/.test(a)).map(a => a.split('=')));
const jobs = args.slice(1).filter(a => !/^(w|h|full|wait)=/.test(a)).map(a => a.split(/=(.*)/s).slice(0, 2));
const b = await pw.chromium.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const ctx = await b.newContext({ viewport: { width: +(kv.w || 1600), height: +(kv.h || 1000) }, deviceScaleFactor: 1.5, locale: 'en-US', colorScheme: 'dark' });
for (const [name, url] of jobs) {
  const p = await ctx.newPage();
  try {
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    for (const sel of ['button:has-text("Reject all")', 'button[aria-label^="Reject"]']) { const x = p.locator(sel).first(); if (await x.count()) { await x.click().catch(() => {}); break; } }
    await p.waitForTimeout(+(kv.wait || 3000));
    await p.screenshot({ path: join(out, name + '.png') });
    if (kv.full === '1') await p.screenshot({ path: join(out, name + '-full.png'), fullPage: true });
    console.log('ok', name, await p.title());
  } catch (e) { console.log('fail', name, String(e).slice(0, 160)); }
  await p.close();
}
await b.close();
