# MathsGalaxy agent guide

## Project

This repository contains MathsGalaxy, formerly AXIOM Math Universe: a static
Three.js web app for learning mathematics through 3D exploration. Use
MathsGalaxy for player-facing product identity. Keep existing AXIOM-flavored
file names, skill names, and `axiom-*-v1` storage keys for compatibility unless
the user explicitly asks for a migration.

- `dist/` is the editable application source, not disposable build output.
- `dist/vendor/three.module.js` is vendored Three.js 0.170.0; keep its MIT
  license file beside it.
- `tests/` uses Node's built-in test runner for math, navigation, rendering
  logic, expansion, and living-space behavior.
- `docs/context.md` is the compact current-state reference for future agents.
- `docs/design.md` is the player-facing MathsGalaxy design direction.
- `docs/instructions.md` is the practical future-agent operating contract.
- `docs/prompt.md` is the current goal prompt first, with older AXIOM prompt
  material retained below as superseded history.
- `docs/PROJECT_BRIEF.md` keeps deeper milestone context, team rules, routes,
  missing experience, misleading claims, and gates.
- `docs/QA_REPORT.md` records the latest browser QA evidence and remaining
  verification gaps.
- `docs/RESUME_IN_VSCODE.md` records local handoff notes and known QA gaps.
- `.openai/hosting.json` points static hosting at `dist/`; do not change or
  publish hosting unless the user asks.

There is no backend, build step, database, framework, API key, account
connection, package install, or CDN dependency required for the current app.

## Working Commands

Run commands from the repository root.

- Serve locally: `python3 -m http.server 8000 --directory dist`
- Windows fallback: `py -m http.server 8000 --directory dist`
- Open locally: `http://localhost:8000`
- Automated checks: `npm test`
- Direct test command: `node --test tests/*.test.mjs`

Do not run `npm install` or add dependencies unless a task truly requires it and
the existing static setup cannot solve the problem.

## Product Direction

MathsGalaxy should feel like a living mathematical universe, not a textbook
page or a generic game shell. Preserve the current identity:

- playful, curious, clear, visual, and polished;
- outer-space exploration with stars, planets, moons, galaxies, moving archive
  asteroids, signals, the Atlas, lessons, experiments, challenges, and journal;
- localStorage-only progress using the existing `axiom-*-v1` keys;
- desktop navigation by drag, wheel, arrow keys, PageUp/PageDown, Shift, and click selection, with W/A/S/D and Q/E retained only as fallback habits;
- mobile navigation by one-finger look, pinch travel, two-finger pan, and tap
  selection, with no fixed directional flight pad;
- authored mathematical guidance that distinguishes known results, experiments,
  conjectures, and mysteries.

Use Three.js for the primary 3D world. Keep the first screen immediately usable:
the user should understand that they can explore, select, approach, and learn
without reading a long manual.

Current user priority: MathsGalaxy must feel mathematically large, not like a
small demo. Show breadth across many mathematical families early, even while
only selected routes are deeply playable. Pair wide visible scope with honest
states for unfinished regions and one or more deep routes where mathematics
changes what the player can do.

## Architecture

- `dist/world.js`: regions, galaxies, bodies, object classes, orbital metadata.
- `dist/orbits.js`: pure orbital positions and deterministic encounter values.
- `dist/living-space.js`: instanced archives, galaxy point fields, picking,
  labels, target lookup, and resource disposal.
- `dist/universe.js`: renderer setup, scene updates, selection, focus, travel.
- `dist/navigation.js`: movement physics, camera damping, gesture state, labels.
- `dist/discoveries.js`, `dist/extended-content.js`, `dist/rare-content.js`:
  authored lesson and discovery content.
- `dist/math.js`, `dist/extended-math.js`, `dist/rare-math.js`: mathematical
  models, validators, and pure logic.
- `dist/experiments.js`, `dist/extended-experiments.js`,
  `dist/rare-experiments.js`: responsive canvas experiment renderers.
- `dist/app.js`: UI orchestration, Atlas, journal, settings, active lessons.
- `dist/style.css` and `dist/index.html`: interface structure and styling.

Prefer adding behavior in the existing module that owns it. Do not create a
second app, migrate to a framework, or split files only for tidiness.

## Engineering Rules

- Read `README.md`, `package.json`, `docs/prompt.md`,
  `docs/PROJECT_BRIEF.md`, `docs/QA_REPORT.md`, `docs/RESUME_IN_VSCODE.md`,
  the target file, and a nearby related module before non-trivial changes.
- Before writing code, use the integrated Ponytail principle described in
  `docs/instructions.md`: skip work that does not serve the current player or
  mathematical goal; reuse an existing helper, module, content pattern, or
  platform feature before inventing a new one; use local ES modules and native
  browser APIs before dependencies; only then write the smallest complete
  change. Apply the 80/20 rule: prioritize high-impact player and project value
  over small polish, repeated audits, or token-expensive checks. Do not keep a
  separate copied Ponytail setup.
- When the user signals a pain point or priority, document it in
  `docs/context.md` and, when relevant, `docs/design.md` or
  `docs/instructions.md` so future runs inherit it.
- Keep changes focused and incremental. Preserve visual identity, storage keys,
  public run commands, module boundaries, and existing authored content unless
  the requested change depends on updating them.
- Prefer deletion, simplification, and consolidation when they improve clarity
  or remove stale copied setup. Do not add abstractions, config, scaffolds,
  plugin files, or "future" layers with one caller or no immediate use.
- The smallest diff is only correct after understanding the flow. Trace callers
  and state paths before editing shared logic; fix root causes once instead of
  patching each symptom.
- Treat math correctness as product behavior. New or changed formulas need
  tests and clear assumptions.
- Keep content bounded and honest. Do not imply infinite curriculum, real
  gravitational physics, server sync, AI tutoring, or completed browser QA
  unless that is actually implemented and verified.
- Use semantic, accessible HTML and keyboard-operable controls. Preserve useful
  labels, visible focus, reduced-motion behavior, responsive layouts, and
  touch-friendly controls.
- Do not edit generated caches or add build artifacts. In this project `dist/`
  is source, so it is appropriate to edit files there.
- Keep comments rare and useful; explain non-obvious constraints rather than
  restating code.
- If taking a deliberate shortcut with a known ceiling, mark it with
  `axiom-lean:` and name the trigger for revisiting it. Example:
  `// axiom-lean: linear scan is fine below 1000 bodies; index if region counts grow.`

## Feature Work

For new discoveries or experiments, implement the complete learning slice:

- lesson metadata and placement in the world;
- valid control schema and parameter bounds;
- responsive canvas renderer;
- contextual feedback that changes with parameters;
- intuition, mathematical explanation, and why-it-works content;
- challenge with a correct answer and explanation;
- meaningful related discovery;
- tests for formulas, bounds, catalogue integrity, and drawing behavior.

For game-feel requests, ship one meaningful, replayable mathematical encounter
before building generic systems. The slice should make curiosity productive:
notice -> investigate -> predict -> manipulate -> observe -> explain -> apply.
More objects are not progress unless they create authored mathematical meaning
or a useful player choice.

Update visible counts and documentation when the authored catalogue changes.
Keep asteroid archives as bounded parameter variations, not unlimited unique
subjects.

## Bug Fixes

Trace or reproduce the bug before editing when practical. Identify whether the
root cause is content data, pure math, navigation, picking, rendering, UI state,
localStorage, or responsive CSS. Fix the smallest cause and add a regression
test where the repository has a viable seam.

For shared helpers, grep callers before editing. One validated guard or
normalization point is better than several UI-side patches, provided it
preserves existing saved progress and authored behavior.

## Verification

Choose checks proportionate to the change and report only what actually ran.

- Always run `npm test` after code or content changes unless clearly blocked.
- For syntax-sensitive JavaScript edits, use `node --check` on the changed
  modules when helpful.
- For UI, navigation, rendering, or mobile changes, start a local static server
  and inspect the browser when tooling is available. Automated tests are not a
  substitute for visual/performance QA.
- If browser inspection or performance measurement was not completed, say so
  directly.

## Review Rules

When reviewing changes, prioritize bugs and merge risk:

- broken math assumptions, invalid parameter bounds, or misleading claims;
- catalogue/world integrity errors, duplicate IDs, missing related targets, or
  stale visible counts;
- navigation, gesture, picking, focus, pause, or localStorage regressions;
- rendering leaks, unbounded instance growth, excessive per-frame work, or
  missing disposal;
- inaccessible controls, unreadable labels, panel overflow, or mobile overlap;
- new external services, network imports, backend assumptions, API keys, or
  dependencies that violate the static app constraint;
- tests or docs that no longer match behavior.

Also run a lean-complexity pass when asked to simplify or clean house: find
duplicated systems, unused flexibility, unnecessary dependencies, speculative
abstractions, and code that native browser APIs or existing modules already
cover. Complexity findings should name the deletion or replacement directly.
