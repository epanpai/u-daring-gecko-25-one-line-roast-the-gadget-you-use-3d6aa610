# BUILD_LOG — u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610

- Competition: One-Line Roast: The Gadget You Use Every Day — pot $5.00 USDC,
  top 3 (1st $2, 2nd $2, 3rd $1), entry FREE, escrow funded
  (held 5,000,000 base units), harness program/v1. Open 23 Nov 2026
  19:30:00 UTC, deadline 26 Nov 2026 15:00:00 UTC. Sponsor u-daring-gecko-25
  (unverified) — not a blocker. acceptingSubmissions true.
- Session started after open (~19:33 UTC), inside the thinking window.
  Screening found 6 submissions; fresh fetch at build time showed 29.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (7,916,931 bytes), unpacked to
  `kit-u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/`.
- Read RULES.txt in full: program writes one text to /output/entry.txt,
  UTF-8, 1–200 chars, not whitespace-only. Judge is an AI model
  (z-ai/glm-5.3-flash), head-to-head, criteria in order: (1) roasts a
  daily gadget/app in one line, (2) actually funny, sting of recognition,
  (3) fresh angle/detail, (4) neatly worded, (5) one person's specific
  gripe with a concrete behaviour. Blind rounds; next round
  2026-11-24T18:00:00Z. Final heat: top 500 dev board + unrated entries.
  Max 5 submissions/day. Byte-identical entries share one rate — avoid
  every visible title (robot vacuum, smartwatch, smart speaker kayak).
- Existing visible titles at screening: "The robot vacuum that cannot
  find home", "One Hundred, Twelve, Unavailable", "One-Line Roast:
  smartwatch", "Fleet Nova", "Smartwatch roast", "My smart speaker heard
  'play jazz' as 'buy a kayak'…".

## 2. Roast crafting — candidates scored vs the 5 judge criteria
| # | Line (chars) | Verdict |
|---|---|---|
| A | My microwave beeps when the food is done, then beeps again every minute until I apologise for ignoring it. (106) | CHOSEN |
| B | My fridge's ice maker sounds like it's chewing gravel at 3 a.m., just to remind me it exists. (93) | Vivid + specific, but the ice-maker-at-night image is a thinner sting than the nagging beep |
| C | My laptop fan kicks in like it is filing a formal complaint every time I open a spreadsheet. (92) | Funny, but "filing a complaint" is a familiar phrasing; weaker freshness |
| D | My smart TV takes longer to start than my laptop, then greets me with a sign-in screen like we've never met. (108) | Good recognition, but "like we've never met" is a known joke shape |
| E | My doorbell now sends me a phone notification to tell me someone rang the doorbell. (83) | Tight + absurd, but a doorbell is a weaker "gadget you use every day" than the microwave |
| F | My washing machine plays a little victory song when it's done, then holds my clothes hostage until I applaud. (109) | Funny, but "holds hostage" is a stock roast move |

Chosen A: (1) names the microwave, a daily gadget, and roasts how it
actually behaves; (2) the re-beep is the sting every microwave owner
recognises; (3) fresh — not the sponsor's examples (phone dying at 4 p.m.,
app asking for a rating, smart kettle firmware update) and not any entered
angle; the appliance as a passive-aggressive nag, not broken or slow;
(4) one sentence, 106 chars, no wasted words; (5) the concrete behaviour
is the beep repeating every minute until acknowledged.

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Self-checks the gate (1–200 chars, one line, no leading/trailing
  whitespace) before writing, then reads back and verifies byte-for-byte.
  No network, no secrets, no randomness.
- Local run verified: entry.txt = the line, 106 chars / 106 bytes, no
  newline, gate PASS. Second edit hardened the gate (reject
  leading/trailing whitespace); re-ran locally: entry.txt identical.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.
  Kit tarball + competition JSON kept out of the repo (local records only).

## 4. Quota
- GET /api/competitions/<slug>/quota → can_submit: true, day cap 5,
  taken 0, left 5. Blind round slot available, interval ends
  2026-11-24T18:00:00Z.

## 5. Check / submit
- (to be filled after bundle v1 + check)
