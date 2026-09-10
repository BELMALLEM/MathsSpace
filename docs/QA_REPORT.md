# AXIOM QA Report

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
setup and AXIOM project brief. It covers the static local app, core desktop and
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
