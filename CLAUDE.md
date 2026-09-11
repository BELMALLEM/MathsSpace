# MathsGalaxy Claude Instructions

This repository uses a cross-agent setup. `AGENTS.md` is the canonical project guide, and `.agents/skills/` contains the reusable AXIOM workflows. Read and follow those files; this document is the Claude Code compatibility adapter, not a replacement or a second source of truth.

## Working agreement

- Before non-trivial work, read `AGENTS.md`, the relevant `.agents/skills/*/SKILL.md`, the target module, a nearby implementation, and the relevant test or QA note.
- Preserve existing user changes. Do not reset, checkout, commit, or create branches unless explicitly requested.
- Treat `dist/` as editable static Three.js source. Preserve the vendored library, existing module boundaries, localStorage progress keys, accessible controls, desktop arrow-first navigation, touch gestures, reduced-motion behavior, and cancellable travel.
- Prefer native browser APIs and existing helpers over dependencies, frameworks, backends, services, or duplicated systems.
- Keep mathematical claims honest. Distinguish definitions, examples, experiments, proofs, conjectures, and mysteries; simulations do not prove conjectures.
- Design encounters around notice, prediction, manipulation, feedback, explanation, and application. Keep bounded deterministic variation and do not imply infinite content, accounts, cloud sync, AI tutoring, or real gravitational simulation.

## Validation

- Run `npm test` after code or content changes.
- Run `node --check` for changed JavaScript modules when appropriate.
- For UI, rendering, navigation, or responsive changes, serve `dist/` with `py -m http.server 8000 --directory dist` and inspect the browser.
- Check console errors, local network requests, responsive layout, and performance evidence before claiming readiness.
- Report exactly what was verified and name remaining visual, device, performance, or newcomer-playtest gaps.

## Scope and style

- Keep edits focused and incremental; add regression tests for changed math, navigation, persistence, rendering, or catalogue behavior.
- Use existing owners: `dist/world.js`, `dist/universe.js`, `dist/navigation.js`, related Three.js modules, content/math/experiment modules, and `dist/app.js`/`dist/index.html`/`dist/style.css` for UI.
- Avoid speculative abstractions, generic quest economies, framework migrations, and unrelated cleanup.
