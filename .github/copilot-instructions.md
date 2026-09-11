# MathsGalaxy Copilot Instructions

This repository uses a cross-agent setup. The root `AGENTS.md` and `.agents/skills/` are the canonical project guide and reusable workflows; preserve them and treat this file as the GitHub Copilot adapter, not a replacement.

## Before changing code

- Read `AGENTS.md` and the relevant `.agents/skills/*/SKILL.md` file.
- For non-trivial work, read the target module, one adjacent implementation, and the relevant test or QA note before editing.
- Form one local hypothesis about the behavior and choose the cheapest executable check that could disconfirm it.
- Preserve user changes and work with a dirty tree; do not reset, checkout, or commit unless explicitly requested.

## Project constraints

- `dist/` is editable static application source, not disposable build output.
- MathsGalaxy is a static Three.js mathematics exploration game. Keep the existing module boundaries, vendored Three.js, localStorage progress, and no-backend architecture.
- Prefer native browser APIs and existing helpers over new dependencies, frameworks, services, or duplicated systems.
- Keep mathematical content honest: distinguish definitions, examples, experiments, proofs, conjectures, and mysteries. A simulation is not a proof.
- Preserve desktop arrow-first navigation, mouse gestures, touch gestures, reduced-motion behavior, accessible controls, and cancellable travel.
- Treat player understanding as product behavior: encounters should connect notice, prediction, manipulation, feedback, explanation, and application.
- Keep random variation bounded and reproducible. Do not imply infinite content, cloud sync, accounts, AI tutoring, or real gravitational simulation.

## Validation

- Run `npm test` after code or content changes.
- Run `node --check` for changed JavaScript modules when syntax-sensitive code is touched.
- For rendering, navigation, UI, or responsive changes, serve `dist/` with `py -m http.server 8000 --directory dist` and inspect the browser when available.
- Check browser console errors, local network requests, responsive layout, and performance evidence before claiming the work is ready.
- Report what actually ran and state remaining visual, device, performance, or newcomer-playtest gaps honestly.

## Editing style

- Keep changes focused and incremental.
- Use existing owners: world behavior in `dist/world.js`, `dist/universe.js`, `dist/navigation.js`, and related Three.js modules; learning content in content/math/experiment modules; UI orchestration in `dist/app.js` and `dist/index.html`/`dist/style.css`.
- Add focused regression tests for changed math, navigation, persistence, rendering, or catalogue behavior.
- Avoid speculative abstractions, generic quest economies, framework migrations, and unrelated cleanup.
