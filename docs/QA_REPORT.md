# MathsGalaxy QA Report

## First-screen frontier sweep, 2026-09-11

- Added a compact `Frontier sweep` action inside the existing Nearby panel so
  mathematical breadth is visible from the opening screen without adding another
  overlay or pretending the frontier regions are complete lessons.
- The action opens the Atlas directly on the Regions tab, where the five
  frontier territories are visible alongside the eight playable systems.
- PASS: `node --check dist/app.js`.
- PASS: focused UI integrity test after sandbox `spawn EPERM` rerun: 2/2.
- PASS: `npm test`: 45/45.
- PASS: fresh isolated Chrome page at localhost showed `Frontier sweep · 5
  distant math territories` on the first screen. Clicking it opened the Atlas
  with Regions active, 13 region cards, five frontier cards, no horizontal
  overflow, and no console warnings/errors.
- Follow-up mobile check found the taller Nearby panel overlapped the Passing
  archive signal. The mobile signal offset was raised. A fresh phone-sized
  Chrome check then showed the route summary, Passing archive, Nearby panel,
  Frontier sweep, flight help, and bottom bar separated with no horizontal
  overflow and no console warnings/errors.
- NOT VERIFIED: physical-device touch or whether a first-time player chooses
  the sweep without being prompted.

## Frontier space markers, 2026-09-11

- Added live space markers for unmapped frontier territories, reusing the
  existing marker layer and region-travel behavior instead of adding fake
  lesson objects.
- Clicking a frontier marker starts travel to that territory; the marker copy
  identifies it as a frontier and shows its honest state.
- PASS: `node --check dist/universe.js`.
- PASS: focused navigation/UI tests after a sandbox `spawn EPERM` rerun: 12/12.
- PASS: `npm test`: 45/45.
- PASS: fresh isolated Chrome page at localhost created 37 marker-layer
  children, including five `.frontier-marker` nodes. Programmatically clicking
  The Prime Deep marker started flight. During frontier travel, the space view
  showed The Infinite Observatory as a visible `FRONTIER · future expedition`
  marker, the sector label read `THE PRIME DEEP`, no horizontal overflow was
  detected, and no console warnings/errors appeared.
- NOT VERIFIED: physical-device touch interaction with frontier markers, and
  whether a newcomer notices the frontier labels without being directed toward
  them.

## Frontier breadth signal, 2026-09-11

- Added five visible frontier territories to answer the current prompt priority
  that MathsGalaxy should not feel like a small demo: The Prime Deep, The Logic
  Lanterns, The Continuity Reef, The Algorithmic Forge, and The Infinite
  Observatory.
- The Atlas now reports 13 territories: eight playable systems with 32 authored
  discoveries and five honest frontier regions marked as weak signal, unmapped,
  dormant, locked, or future expedition.
- Frontier regions can be scanned/travelled to as existing region landmarks,
  without adding fake lessons, a new system, dependencies, or archive belts.
- PASS: `node --check dist/world.js`, `node --check dist/living-space.js`, and
  `node --check dist/app.js`.
- PASS: targeted tests for expansion, living-space, and UI integrity after a
  sandbox `spawn EPERM` rerun: 18/18.
- PASS: `npm test`: 45/45.
- PASS: Chrome mobile viewport at localhost showed the updated first-route
  breadth text, 32 discoveries / 13 territories, 13 Atlas region cards, five
  frontier cards, no horizontal overflow, and no console warnings/errors.
- NOT VERIFIED: physical-device touch, long-session performance with the extra
  galaxy point field, or newcomer perception that the world now feels large.

## Measured frame-pacing baseline, 2026-09-10

Chrome DevTools, localhost:8000, balanced quality, no explicit CPU or network
throttling. These are short host-machine lab samples, not physical-device or
long-session guarantees. No performance optimization was made in this pass.

| Sample | Duration | Frame intervals | Median | p95 | Intervals over 50ms |
| --- | --- | --- | --- | --- | --- |
| Desktop exploration, 1280x800 | 15.05s | 447 | 33.3ms | 50ms | 21 |
| Desktop wave lesson | 5s | 154 | 33.3ms | 50ms | not collected |
| Emulated phone approach, 390x844 | 10.03s | 377 | 33ms | 47.8ms | 8 |

- Desktop world update instrumentation, separate 5s sample: 157 updates,
  median 3.8ms and p95 5.8ms. This includes JS submission work, not completed
  GPU execution. It does not establish the cause of the slower frame cadence.
- Desktop exploration: 56-58 draw calls, 55 geometries; phone approach ended
  at 31 calls and 38 geometries. Both used renderer pixel ratio 1. These
  counts are snapshots, not proof of leak-free long sessions.
- Phone approach moved 51.08 world units toward Circular Signal. Calling stop
  produced zero camera-position drift in the following 250ms. Flight was
  invoked through the live Universe instance, not a physical touch gesture.
- Desktop navigation trace: LCP 429ms (76ms TTFB, 353ms render delay), CLS
  0.0099. The shift involved nearby/companion content. Forced-reflow analysis
  reported 255ms unattributed and identified no application function or
  estimated savings. Further attribution is needed before changing code.
- No Chrome warnings/errors in the phone flow. Existing Lighthouse snapshot
  scores measure accessibility and other checks, not rendering performance.
- Observed pacing is below a consistent 60fps target. Sustained cross-region
  sessions and representative physical hardware remain unverified; do not
  describe performance as solved or infer GPU/CPU cause from these samples.

## Replay guidance ownership, 2026-09-10

- Reproduced: resetting the relay after completing the route left the heading
  and action on the ratio beacon while the next lead correctly named waves.
- Route narrative now has one writer, driven by nextLead, instead of being
  overwritten by the individual encounter renderers. The active repeated
  encounter shows REPLAY; historical applied connections remain in the journal.
- Chrome checks covered relay reset and reload, scanner reset, recursion reset,
  golden reset, and solving the repeated sequence back to Fibonacci. Each
  heading/action matched its current lead. All four prior connections survived.
  Test inputs for the seeded repeats were computed from the math helpers; this
  was a functional regression check, not a blind player learning test.
- PASS: 45 automated tests; no Chrome warnings/errors in the checked sequence.
- The wider newcomer, immersion and sustained-performance goals remain open.

## Opening-world visibility, 2026-09-10

- Combined route and companion into one native details disclosure, initially
  collapsed at phone widths. The phone's initial central panels shrink to a
  45px summary; the lead action, nearby destination and archive remain visible.
- Inspected 390x844 collapsed/expanded screenshots and 1280x800 desktop.
  Desktop intro bottom 338px and panel top 360px remain separate; the panel
  scrolls within a bounded height. No page horizontal overflow was detected.
- At 360x640, opening the panel and following Mira selected the Wave Garden;
  Explore opened its lesson. Short phones retain the disclosure rather than
  losing the entire route panel. Recenter restores it after flight.
- ArrowDown on a focused expedition control is not captured by camera input.
  No Chrome warnings/errors appeared in the checked flow. npm test: 45/45.
- This improves the opening view; it does not establish newcomer learning,
  physical touch usability, sustained frame pacing or full-goal completion.

## Golden prediction and canvas reset, 2026-09-10

- Golden's challenge now applies rational turns to a scanner: 144/360 = 2/5,
  so five distinct directions repeat over two revolutions. A new spiral
  transmission requires a solved challenge. Existing accepted transmissions
  and saved connections remain available.
- Chrome isolated-context check passed: default sliders cannot transmit;
  direct handler invocation also cannot bypass the prediction gate; wrong
  prediction stays blocked; correct prediction enables transmission; 180
  degrees fails; 137.5 degrees with 300 seeds succeeds. First wrong challenge
  and spiral predictions persist, as does the connection after reload.
- Found and fixed a shared canvas bug: a same-size ResizeObserver callback
  cleared pixels without invalidating the static render cache. Regression
  coverage checks redraw after that reset while retaining ordinary caching.
- Inspected screenshots at 390x844 and 1280x800. Golden canvas had 102707 and
  112429 nontransparent pixels respectively after reload/resize, without
  slider input. No page horizontal overflow or Chrome warnings/errors in
  the checked flow. Phone challenge answers fit the scrolling guide.
- Lighthouse desktop lesson snapshot initially found a heading-order issue.
  Encounter headings now use h2 with unchanged sizing; recheck scored 100
  for accessibility, best practices, SEO and agentic browsing (31 passed).
  This snapshot does not measure performance or sustained frame pacing.
- Full newcomer playtesting, physical touch and overall game completion
  remain open. A correct multiple-choice answer is limited evidence of
  understanding; the encounter still needs observed player feedback.

## Route guidance regression check, 2026-09-10

- Reproduced in an isolated Chrome context at localhost:8000: after repairing
  the relay and changing its wave control, leaving the lesson still requested
  a correction while the heading said Signal restored. Restricted that prompt
  to the unresolved relay lead.
- Kept the completed golden archive's next lead on Fibonacci, matching its
  travel action and Mira, instead of choosing an unrelated unvisited lesson.
- Browser verification: relay correction 90, scanner bearing 135, recursion
  count 31, golden angle 180 rejected, 137.5 with 300 seeds accepted. The first
  golden prediction remained 180; the Fibonacci connection was saved. The
  relay guidance fix survived reload. No Chrome warnings or errors were found.
- PASS: npm test, 44/44. Initial sandbox execution failed with spawn EPERM;
  the permitted rerun passed.
- These programmatic browser interactions are functional evidence, not a
  newcomer playtest. No new mobile screenshot or performance audit was run.
- Remaining: the golden task gives away its target and can be completed with
  default sliders. Strengthen prediction and application before treating it
  as demonstrated understanding. The full game objective remains incomplete.

## AI setup consolidation, 2026-09-10

- PASS: future-agent context is consolidated into `docs/context.md`,
  `docs/design.md`, and `docs/instructions.md`.
- PASS: Ponytail is integrated as MathsGalaxy's lean working principle in
  `AGENTS.md`, project skills, and `docs/instructions.md`; it is not maintained
  as a separate copied setup.
- PASS: `README.md`, `package.json`, `docs/PROJECT_BRIEF.md`, and
  `docs/RESUME_IN_VSCODE.md` now point future work at the compact context files.
- PASS: `npm test` passed with 44 tests after the consolidation. The first
  sandboxed run failed with Windows `spawn EPERM`; rerunning under the approved
  test prefix produced the passing result.
- NOT VERIFIED: Chrome console, Lighthouse, layout, and runtime KPIs were not
  rerun for this docs/AI-setup-focused cleanup.

## Mobile mission hierarchy pass, 2026-09-10

- PASS: at 390x844, the opening prompt and Resonance mission panel now use less vertical space, preserving the world, landmark labels, passing archive, nearby lead, Recenter, and bottom bar without horizontal overflow.
- PASS: active lesson tasks are promoted above secondary explanation content on mobile. Wave Garden opens with the relay question, correction input, and Transmit action visible in the field guide.
- PASS: fresh Chrome mobile and desktop Lighthouse navigation audits scored 100 for accessibility, best practices, SEO, and agentic browsing; no console errors or warnings were reported.
- PASS: mobile performance trace measured LCP at 482 ms and CLS at 0.00 on the local 390x844 route. The trace still reports a broad forced-reflow insight in existing startup/UI work; it has no estimated metric savings and was not expanded into this focused UX change.
- PASS: 44 automated tests, including responsive mission and lesson hierarchy integrity checks.
- NOT VERIFIED: physical-device touch, sustained long-session frame pacing, and a real newcomer 15-20 minute playtest.

## MathsGalaxy route and KPI pass, 2026-09-10

- PASS: the first-region route was exercised in Chrome from Wave Garden through
  the unit-circle scanner and finite recursion lock. Phase `180` showed live
  cancellation feedback; relay correction `90` restored the beacon; scanner
  bearing `135` revealed the recursion route; wrong count `15` was preserved;
  correct count `31` opened the golden-angle archive.
- PASS: the fresh recursion input now starts at its valid minimum of `1` rather
  than rendering an invalid `0` against `min="1"`.
- PASS: 43 automated tests, including the new first-screen label and constrained
  input integrity check.
- PASS: Chrome snapshot showed MathsGalaxy branding, arrow-first controls,
  readable world markers, nearby applied leads, Resonance route state, and Dr.
  Mira guidance. No console errors, warnings, or issues were reported.
- PASS: Lighthouse snapshot audits on desktop and mobile scored 100 for
  accessibility, best practices, SEO, and agentic browsing; 29 audits passed
  with zero failures on each device profile.
- PASS: performance trace measured LCP at 162 ms and CLS at 0.02 on the local
  desktop-sized route, with no network throttling or CPU throttling.
- NOT VERIFIED: physical-device touch, sustained long-session frame pacing,
  complete post-golden catalogue play, and a real newcomer 15-20 minute
  playtest. The first Lighthouse navigation screenshot produced `NO_FCP` from
  an empty audit tab; the controlled snapshot audits above are the valid KPI
  evidence for the loaded page.

## Recursion lock, 2026-09-10

- PASS: static architecture retained. The lock reuses the existing Fractals
  lesson, `branchCount`, route state, journal, and localStorage understanding
  record. No new lesson count, dependency, backend, CDN, account, or generic
  quest system was added.
- PASS: 41 automated tests. New checks cover a seeded depth-4 target with 31
  segments, finite geometric counts over seeded variants, and rejected malformed
  predictions.
- PASS: browser route in isolated storage: repair relay, calibrate scanner,
  follow to Fractals, transmit wrong count 15, preserve that first prediction,
  transmit correct count 31, record `connected:["golden"]`, and follow to the
  Golden-angle archive.
- PASS: reload restores the golden-surprise headline, main action, intro copy,
  and stored relay/scanner/recursion progress from localStorage.
- PASS: negative path verified. Opening Fractals before scanner calibration
  disables the lock, explains the prerequisite, and sends the player back to
  Circular Signal; Circular Signal still blocks until the relay is repaired.
- PASS: mobile 390x844 Fractals lesson has no horizontal overflow. The lock
  fits in the scrollable guide; it is below the first fold, so this remains a
  dense lesson rather than proven newcomer-perfect pacing.
- PASS: no browser warning/error console messages in checked recursion flows.
  Syntax checks passed for changed JavaScript modules.
- NOT VERIFIED: physical-device touch, sustained frame pacing, every route after
  Golden-angle, or an actual newcomer 15-20 minute playtest. The full goal
  remains open.

## Scout scanner course, 2026-09-10

- PASS: static architecture retained. The scanner uses local Three.js geometry,
  pure unit-circle helpers, the existing lesson controls, and localStorage
  understanding records. No dependency, backend, CDN, account, or catalogue cap
  was added.
- PASS: 40 automated tests. New course tests cover reproducible unit directions,
  default non-axis first target at 135 degrees, valid/rejected bearings, quadrant
  coverage over seeded variants, bounded scanner resources, beam coordinates,
  and disposal.
- PASS: browser route in isolated storage: repair Wave Garden relay with 90
  degrees, follow to Circular Signal, wrong 45-degree scanner bearing is
  preserved as first prediction, correct 135-degree bearing reveals the violet
  recursion beacon and records `connected:["fractals"]`.
- PASS: reload restores the route headline, main action, stored wave relay,
  stored scanner course, and visible beacon state from localStorage.
- PASS: negative path verified. Opening Circular Signal before relay repair
  disables scanner transmit, shows the repair shortcut, and the shortcut opens
  Wave Garden with the relay task visible.
- PASS: live Three.js inspection found the scanner station in `Universe`, a
  visible restored beam, bounded group children, finite beam endpoints, and a
  nonblank WebGL center pixel.
- PASS: desktop 1280x800 restored-route layout has no horizontal overflow;
  intro, route, companion, nearby panel, and bottom bar do not overlap. Mobile
  390x844 lesson layout has no horizontal overflow; the scanner panel fits
  inside the scrollable guide.
- PASS: no browser warning/error console messages in checked desktop and mobile
  scanner flows. Syntax checks passed for changed JavaScript modules.
- NOT VERIFIED: physical-device touch, full 15-20 minute newcomer playtest,
  long-session frame pacing, every lesson after the scanner, or broader
  spaceship abilities. The full goal remains open.

## Player scout, 2026-09-10

- PASS: local Three.js craft integrated into existing travel, with bounded
  geometry, shared materials, and a disposal method. No added dependencies.
- PASS: 38 tests, including desktop/phone/landscape ship framing, bounded bank,
  speed-driven thrust, lesson visibility, and disposal of shared resources.
- PASS: browser arrow travel increased engine opacity from idle 0.18 to 0.454
  and produced bank -0.133 radians. Stopping returned opacity to idle.
- PASS: actual canvas pixels differed with the craft shown versus hidden.
  Lesson entry hid it and leaving restored it. No app warning/error messages.
- PASS: inspected 390x844 and 1280x800 screenshots. Phone flight removes the
  introduction, route and companion overlays so the craft and world remain clear.
  Near-body clearance now accounts for the craft ahead of the camera.
- NOT VERIFIED: Playwright remains unavailable (DevTools used), physical-device
  touch, extended flight performance, docking or the whole newcomer route.
- Goal remains open: build connected encounters beyond the relay, deeper
  mathematical world changes and ship capabilities, and a replayable first
  region demonstrated through newcomer play. The craft is an initial travel
  representation, not proof of a complete immersive game.

## Flight interruption, 2026-09-10

- Reproduced: losing window focus during region travel left the destination
  active; the camera moved 534 world units during the following 150ms sample.
- Fixed: stop clears destination, target tracking, momentum and pending turns.
  Escape stops flight; movement keys cancel automatic travel before the next
  frame. Saved exploration poses survive interruption during lesson entry.
- PASS: browser camera displacement after blur and Settings opening was zero.
  Escape cancelled travel; a fresh Approach and lesson entry/return still worked.
- PASS: 36 tests, including three regressions using the actual Universe methods.
- PASS: no browser warnings/errors in the checked flow. Static architecture
  retained; mathematical content and visual layout were not changed in this fix.
- NOT VERIFIED: physical-device touch cancellation or the complete newcomer
  route. This fixes flight interruption, not the full game objective.

## Resonance relay, 2026-09-10

- PASS: static architecture; a local Three.js relay landmark and pure wave
  helpers add no runtime dependency. The station is an encounter, not another
  catalogue lesson or a limit on future world size.
- PASS: 33 tests including reproducible phase puzzles, pointwise cancellation,
  rejection of invalid corrections, bounded station geometry and disposal.
- PASS: browser transmission with initial offset 90 degrees. Correction 180
  left residual amplitude 1.414; correction 90 restored the beacon. First
  prediction 180 remained recorded. The applied circle-angle connection persisted.
- PASS: reload restored the actual Three.js line visibility and green lamp.
  Following the signal exited the lesson and approached the unit-circle planet.
  Retuning advanced to a 30-degree offset; correction 150 restored that variant.
- PASS: station animation moved during exploration and stopped in reduced motion.
- PASS: Chrome DevTools screenshots at 1280x800 and 390x844; station and signal
  visible in desktop space, relay controls fit the scrolling mobile guide with
  no horizontal overflow. WebGL center-pixel sample was nonblank.
- Runtime: no app console warnings/errors in the tested flows. One diagnostic
  script lost its temporary object reference after viewport emulation; rerunning
  the inspection established animation and reduced-motion behavior.
- Timing: 90 initial desktop animation callbacks had median interval 16.7ms.
  This short sample does not establish sustained rendering performance.
- PASS: the opening action changes from Investigate relay to Follow beacon after
  repair. Its desktop bottom is 338.3px, clear of the route starting at 392.5px;
  clicking Follow beacon selected the Circular Signal after reload. The original
  Surprise me action remains available in the Atlas.
- Remaining: Playwright is unavailable locally (DevTools used); physical touch,
  full newcomer route, long-session profiling and broader game immersion are
  unverified. The complete goal remains open.

## Companion and prediction follow-up, 2026-09-10

- PASS: static architecture, no added dependencies or services.
- PASS: 31 automated tests; npm test required child-process permission after
  the sandbox returned spawn EPERM. JavaScript syntax check passed.
- PASS: browser flow in an isolated local context. A wrong first Wave Garden
  answer remained recorded after correction and reload. The journal retained
  its takeaway without a bookmark. Answering alone did not mark an observation.
- PASS: dismissing Mira moved focus to Settings; dismissal survived reload;
  the Settings checkbox restored her. Lesson guidance is optional native details.
- PASS: screenshots inspected at 390x844 and 1280x800. The expanded lesson hint
  fits the scrollable guide; no horizontal guide overflow at desktop size.
  Mobile route and companion have a measured 9.5px gap.
- PASS: no browser warning/error messages in the checked flow; HTTP modules loaded.
- Content integrity: reviewed hints for equal-wave assumptions, unit-circle
  definitions, finite recursion, and rational versus golden-angle turns.
- NOT VERIFIED: physical-device gestures, long-session performance, every
  lesson, a newcomer playtest, or the complete 15-20-minute game route.
- Remaining design work: mathematical actions with persistent world outcomes,
  transfer challenges and demonstrated connections, a coherent replayable first
  region, and a less overlay-heavy exploration screen. The goal remains open.

Date: 2026-09-09

## Scope

This report records the first browser QA pass after adapting the project AI
setup and project brief. It covers the static local app, core desktop and
mobile routes, accessibility, layout overlap checks, console/network health,
and a short lab performance trace.

## Environment

- Local server: `py -m http.server 8000 --directory dist`
- URL: `http://localhost:8000`
- Browser tooling: Chrome DevTools MCP
- Mobile emulation: 390 x 844, DPR 2, touch/mobile user agent
- Desktop-sized check: available DevTools viewport reported 1100 x 540, DPR
  1.75 after resize request

## Routes Checked

- Fresh load through HTTP: passed.
- Desktop first view: universe canvas rendered, intro/nearby/signal/flight help
  visible, no detected overlay collisions.
- Discovery selection: nearby discovery opened a preview with Dismiss,
  Approach, and Explore actions.
- Lesson entry: Explore opened the lesson, focused Back to space, exposed
  labelled canvas and range controls.
- Live experiment feedback: changing the Sine & cosine angle to 120 updated
  the output and explanation.
- Save and Journal: saving a discovery wrote local journal state; Journal showed
  saved entry and revisit/remove actions.
- Mobile fresh load: intro, signal, nearby, Recenter, and bottom bar rendered
  without detected overlap after fixes.
- Mobile lesson route: preview and Explore worked; experiment, guide, and
  bottom bar rendered with explicit gaps after fixes.

## Issues Fixed

- Mobile passing archive and nearby panel touched at a subpixel boundary on a
  390 x 844 viewport. Increased the mobile signal offset to preserve a gap.
- Mobile lesson experiment, guide, and bottom bar touched at fixed-position
  boundaries. Added a small gap and adjusted guide height.
- The intro heading could be exposed as `A little further.A new idea.` in the
  accessibility tree when the line break collapsed. Added an explicit label.
- Lighthouse reported `aria-label` on `#universe` without a role. Added a
  labelled region role.
- Mobile CSS hid the Recenter button text because it targeted every nested
  `#flightHelp span`. Added a later override for button text.
- Accessible names drifted from visible labels for the journal count, motion
  toggle, and brand link. Synchronized the journal label, let the motion button
  use visible text, and let the brand link use its visible brand name.

## Evidence

- HTTP response: `GET http://localhost:8000/` returned 200.
- Network: all local modules and vendored Three.js loaded with 200 or 304
  responses; no external runtime requests observed.
- Console: no console messages found during checked desktop/mobile flows.
- Mobile Lighthouse snapshot after fixes:
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
  - Agentic Browsing: 100
  - Passed: 29
  - Failed: 0
- Mobile performance trace:
  - LCP: 110 ms
  - CLS: 0.00
  - CPU throttling: 1x
  - Network throttling: none
  - Render-blocking insight showed 0 ms estimated savings.

## Remaining Gaps

- This was not a full manual playtest of every one of the 32 lessons.
- Mobile gesture physics were inspected through emulation and automated gesture
  tests, not by physical-device touch testing.
- Performance evidence is a short lab trace, not a long-session frame pacing
  profile across regions.
- Desktop viewport was constrained by the DevTools session size; broader
  desktop and landscape screenshots should still be checked before a release
  milestone.
