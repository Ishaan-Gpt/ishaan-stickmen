# ishaan-stickmen

A Claude skill for making "What If" stickman videos (the genre of Ifverse, Ifinite and Miko) entirely in code: 2D that feels 3D,
on one canvas, with a real voice and every word timed.

It's the workflow from the video **How to Make Viral 3D Stickman Animations With Claude (Free Full Workflow)**.

## Install (one command)

```bash
git clone https://github.com/Ishaan-Gpt/ishaan-stickmen ~/.claude/skills/ishaan-stickmen
```

Then ask Claude for a What If stickman film, and it follows `SKILL.md`.

## What's inside

| | |
|---|---|
| `SKILL.md` | the workflow: study the hits, check the premise, script, voice, 2D kit, blind judge, one export |
| `PROMPTS.md` | every prompt from the video, step by step, ready to paste |
| `rulebook.md` | what seven of the genre's biggest films share, measured frame by frame |
| `kit/coldopen.html` | a complete 61 s cold open, "What If You Only Had 1,000 Words Left?", to copy and re-skin |
| `kit/score.mjs` | music synthesised in code, mixed under the voice at -14 LUFS |
| `tools/fish.mjs` | a voice take from Fish Audio (`FISH_API_KEY`; the free model works) |
| `tools/align.py` | word timing to a hundredth of a second (faster-whisper) |
| `tools/grab.mjs` | contact sheets straight from the live page, with no export |
| `tools/capture.mjs`, `tools/locate.mjs` | real screenshots of real pages, and where a given text sits on them |
| `judge/JUDGE-brief.md` | the blind judge's brief |

You need Claude (a paid plan), Node 20+, `npm i playwright-core` with Chrome installed, ffmpeg, and Python with `faster-whisper`.
Everything else is free.

## Licence

[PolyForm Noncommercial 1.0.0](LICENSE). Free for personal and other noncommercial use. Commercial use needs permission
from the author.
