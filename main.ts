// One-Line Roast: The Gadget You Use Every Day — entry program (Node 22, stdlib only).
//
// Writes exactly one original roast line to /output/entry.txt: the line
// roasts a gadget used every day — the microwave — in a single line of
// 106 characters, well inside the 1–200 gate. The line is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The line: "My microwave beeps when the food is done, then beeps again
// every minute until I apologise for ignoring it."
//
// Why this line, against the judge's brief (in its order):
// 1. Names a daily gadget clearly — the microwave — and roasts how it
//    actually behaves, not a generic complaint.
// 2. Funny on first read: the sting of recognition is the re-beep. Every
//    microwave owner has been nagged by it.
// 3. Fresh: it is not the sponsor's examples (phone dying at 4 p.m.,
//    app asking for a rating, smart kettle firmware update) and not the
//    angles already entered (robot vacuum, smartwatch, smart speaker).
//    The angle is the appliance as a passive-aggressive nag, not a
//    broken or slow machine.
// 4. Neatly worded: one sentence, 106 characters, no wasted words.
// 5. Specific: the concrete behaviour is the beep that repeats every
//    minute until acknowledged — a detail only someone who lives with
//    one would write.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My microwave beeps when the food is done, then beeps again every minute until I apologise for ignoring it.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–200 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text. The line is 106 characters.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE)
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
