# MathsGalaxy Context

MathsGalaxy is the new product name for the existing AXIOM Math Universe codebase.
Keep the old `axiom-*-v1` localStorage keys, skill names, and file names unless a
task explicitly requires migration; they are compatibility details, not the
player-facing brand.

## Current App

- Static Three.js web app for mathematical exploration.
- `dist/` is source, not disposable build output.
- No backend, database, account system, framework, build step, API key, CDN
  import, or package install is required.
- Three.js 0.170.0 is vendored in `dist/vendor/three.module.js`; keep its MIT
  license beside it.
- Tests use Node's built-in runner through `npm test`.
- `.openai/hosting.json` points hosting at `dist/`; do not publish or change
  hosting unless the user asks.

## Source Map

- `dist/world.js`: regions, galaxies, hierarchy, object classes, orbital setup.
- `dist/orbits.js`: pure orbital positions and deterministic encounter values.
- `dist/living-space.js`: galaxy fields, archive asteroids, labels, picking,
  target lookup, and disposal.
- `dist/universe.js`: Three.js scene, renderer, selection, focus, route travel.
- `dist/navigation.js`: camera movement, damping, gestures, label layout.
- `dist/player-ship.js`: visible camera-relative scout craft.
- `dist/relay-station.js`, `dist/compass-station.js`: route landmarks and beams.
- `dist/app.js`: UI, route state, Atlas, journal, settings, active lesson flow.
- `dist/discoveries.js`, `dist/extended-content.js`, `dist/rare-content.js`:
  authored lesson content.
- `dist/math.js`, `dist/extended-math.js`, `dist/rare-math.js`: pure formulas
  and validators.
- `dist/experiments.js`, `dist/extended-experiments.js`,
  `dist/rare-experiments.js`: canvas experiment renderers.
- `dist/index.html`, `dist/style.css`: interface structure and styling.

## Implemented Direction

The expedition route and Dr. Mira share a native disclosure panel. It starts
collapsed on phones and open on desktop; Recenter restores it after flight.
Its focused controls do not send arrow-key input to the camera.

MathsGalaxy now exposes broad mathematical scope through 13 Atlas territories:
eight playable systems with 32 authored discoveries, plus five honest frontier
regions for number theory, logic/foundations, topology, computation/complexity,
and deeper analysis. Frontier regions are visible as distant signals and
scannable landmarks with live space markers, not completed lessons. The opening
Nearby panel includes a compact Frontier sweep action that opens the Atlas
Regions view.

## Current User Priorities And Pain Points

The user's current highest priority is that MathsGalaxy must feel large in
mathematical range. Do not let the app feel like a tiny demo with a few isolated
concepts. A good near-term shape is a broad visible universe of named math
territories, with one or more deeper playable routes proving the game loop.

Apply the 80/20 rule. Prioritize high-impact player and project value over
small polish, repeated audits, or token-expensive verification that does not
match the change. This app is meant to make life easier, not create more process.

When the user signals a pain point or priority, document it in this section or
in `docs/design.md` / `docs/instructions.md` as appropriate before it gets lost.
Current pain points:

- too much time and token budget spent on small-impact work or repeated tests;
- risk of over-engineering generic systems before the game feels better;
- the world still feels too small for the intended range of mathematics;
- verification should be proportional to impact and not become the product;
- future work should reduce friction for the user, not add chores.

The first region is becoming a replayable mathematical route:

1. Wave Garden: phase cancellation repairs a relay.
2. Circular Signal: sine and cosine calibrate a scanner bearing.
3. Infinite Branch: a finite recursive tree count opens the golden archive.
4. Golden archive: golden-angle spacing points toward Fibonacci ratios.

New golden transmissions require the rational-turn scanner challenge before
testing the spiral. Existing accepted transmissions remain compatible.
Experiment resize invalidates cached drawing, including same-size canvas resets.

Exploration remains free, but essential learning should never depend on a rare
random encounter. Randomness belongs in bounded, reproducible variations that
create curiosity without breaking mathematical correctness.

## Compatibility

Preserve existing saved progress unless explicitly asked to migrate it:

- `axiom-journal-v1`
- `axiom-visited-v1`
- `axiom-prefs-v1`
- `axiom-catches-v1`
- `axiom-solved-v1`
- `axiom-understanding-v1`

The app is local-first. Do not imply sync, accounts, multiplayer, cloud saves,
or external AI tutoring.
