# AXIOM QA Report

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
