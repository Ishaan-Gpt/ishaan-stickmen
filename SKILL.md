---
name: ishaan-stickmen
description: Make a "What If" stickman video (the genre of Ifverse, Ifinite and Miko) with Claude, entirely in code, 2D that feels 3D on one canvas. Use it when someone wants a viral What If stickman film, a cold open in that style, or to study and beat the channels in this genre. It covers the study, the premise check, the script, the voice and word timing, the 2D canvas kit, the blind judge and the single export.
---

# ishaan-stickmen

The workflow behind the video "How to Make Viral 3D Stickman Animations With Claude (Free Full Workflow)". Every step below was used
for real on the cold open "What If You Only Had 1,000 Words Left?" (kit/coldopen.html).

## 1. Study the hits before you write a word
- Take the openings (the first 60-90 s) of the most viewed films in the genre. Make a contact sheet at one frame a second, and write out the
  narration with times (faster-whisper works well).
- Write down what all of them share. Measure it: when the title lands, how many words a second, which number sits on screen, who says the
  line of disbelief. rulebook.md holds the rulebook we measured on seven films with 690K-4.6M views.
- Copy the why, never the what: their premise, characters and colours stay theirs.

## 2. Check the premise is open
Search YouTube for your premise before writing. Throw it out if it has been made many times (in our test, "rewind ten seconds" had 8 copies
and the best had 13K views). Keep one with a single strong number over the head and actions your rig can already do well: talking, looking, going
quiet. Every action you can't animate well is a scene you will cut later.

## 3. Script: prove the power before you name it
Write in the second person ("you"), in present tense, with a calm read. Line one is an everyday moment with the power already working, or a number that
contradicts the words. Put one number on screen, normal against you. One other character says the viewer's line of disbelief. The title lands
after the proof, at about 0:30. Flowing, joined sentences in plain words; no signposting.

## 4. Voice and word timing
- `tools/fish.mjs <voice id> <text file> <out.mp3>` makes a take with Fish Audio (set FISH_API_KEY; the free model works).
- `tools/align.py <audio.wav> <script.txt> <timing.js> <GLOBAL>` times every word to a hundredth of a second, so a counter can drop on
  exactly the right word. Align each take on its own, then add the take offsets; one alignment across several voices drifts.

## 5. Build it in 2D that feels 3D
`kit/coldopen.html` is a complete 61 s film on one canvas: black ball heads with a light rim, a bright room the camera pans across, depth
from blur, the counter pill, and shots keyed to word indices. Copy it, swap the script, the room and the counter, and keep the page a pure
function of time (`window.seek(t)`), so every frame can be checked without exporting. `kit/score.mjs` synthesises the music and mixes it
under the voice at -14 LUFS.

## 6. Judge it blind, on frames from the page
- `tools/grab.mjs page=<film.html> out=<dir> step=0.5` writes contact sheets straight from the live page, with no encode.
- Give a fresh agent `judge/JUDGE-brief.md` with your film and two hits from the genre, labelled X, Y and Z, so it never knows which one is yours.
- Fix exactly what it names, judge again with a new agent, and stop after one fix round if it stalls. Our cold open went from 4.3 to 5.5;
  the bar is 8.

## 7. Export once, at the end
Watch the live page with sound first. Export to MP4 only when the film is finished, a single time.

## For how-to films about your work
`tools/capture.mjs` and `tools/locate.mjs` take real screenshots of real pages and find where a given text sits on them, so a camera can
zoom onto the exact number being said. Show the real work, not slides.
