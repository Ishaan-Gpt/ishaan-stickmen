# The prompts, step by step

These are the prompts from the video, in order. Paste them into Claude Code with this skill installed; swap the parts in [brackets].

## 1. Find what's working
```
Find the 20 most viewed "What If" stickman videos uploaded in the last 30 days.
For each, give me views, the channel's subscribers, and views divided by subscribers.
Sort by that ratio, so the breakouts from small channels come first.
```
The ratio is the trick: a big channel getting views tells you nothing, a 4,000-subscriber channel getting 700,000 tells you the idea itself is hot.

## 2. Make Claude really watch the hits
```
Download the first 90 seconds of the top 7. Do not skim: take one frame every second
into contact sheets, and transcribe every word of the narration with timestamps.
Then write a rulebook of what ALL of them do: the first line, when the title appears,
the number on screen, who reacts, the pace in words per second, and the look.
Measure everything; no opinions.
```
"Analyse this video" makes it look at a few frames. One frame a second and every word is what finds the rules.

## 3. Pick an idea nobody has made
```
Here are 5 premises: [list]. Search YouTube for each one and tell me how many
copies exist and the views of the best copy. Keep a premise only if it is open,
has one number that can sit over a character's head, and needs only talking,
looking and simple gestures to act out.
```

## 4. Write the script with the rules
```
Write a 60-second cold open for "What If [premise]?" using the rulebook:
second person, present tense, the power proven before it is named, one number
on screen (normal against you), one other character who says the viewer's line
of disbelief, the title at about 0:30. Plain flowing sentences, no signposting.
```

## 5. Voice it for free
```
Voice this with Fish Audio (free model, voice "Ethan") using tools/fish.mjs,
then time every word with tools/align.py so the counter can change on the exact word.
```

## 6. Build the picture: 2D that feels 3D
```
Build the cold open on one canvas, 1920x1080, as a pure function of time.
2D that feels 3D: matte black ball heads with a light rim on the side the light
comes from, one colour per character, a bright room the camera pans across, the
foreground blurred, one light mood. A counter pill over the hero's head that ticks
on the spoken word. Start from kit/coldopen.html.
```

## 7. Judge it blind, then fix
```
Spawn a fresh agent as a blind judge. Give it contact sheets of three openings,
mine and two hits from the genre, labelled X, Y and Z, never saying which is mine.
Use judge/JUDGE-brief.md. Then fix exactly what it names and judge again with a new agent.
```

## 8. All of it at once
```
Make me a "What If" stickman cold open about [premise], following the ishaan-stickmen skill.
```
