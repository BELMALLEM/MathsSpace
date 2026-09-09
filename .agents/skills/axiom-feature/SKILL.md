---
name: axiom-feature
description: Implement a feature end-to-end in AXIOM Math Universe. Use for new discoveries, experiments, world behavior, navigation, Atlas/journal UI, or learning interactions. Do not use for review-only or documentation-only requests.
---

# Build an AXIOM Feature

Read `AGENTS.md`, `README.md`, `package.json`, `docs/prompt.md`, and
`docs/RESUME_IN_VSCODE.md` before changing product behavior. Inspect the
module that owns the feature and one adjacent example before editing.

AXIOM is a static Three.js app. Preserve `dist/` as source, the vendored
Three.js dependency, localStorage progress keys, and the existing local run
command. Do not add a backend, framework, network import, account integration,
or package dependency unless the user explicitly asks or the feature cannot be
implemented cleanly in the current architecture.

For new mathematical content, ship a complete authored slice:

- discovery metadata, region/world placement, object kind, color, and related
  target;
- bounded control schema and valid default values;
- pure math helpers or validators when needed;
- responsive canvas experiment renderer;
- contextual feedback tied to parameter changes;
- intuition, mathematical explanation, and why-it-works content that separates
  known results, experiments, conjectures, and mysteries;
- challenge answer and explanation;
- tests for math, bounds, catalogue integrity, and drawing behavior.

For world, navigation, picking, or UI features, preserve desktop and touch
controls, reduced-motion behavior, focus/leave flow, resource disposal, and
responsive layout. Keep the first screen polished and immediately explorable.

Update README or docs when setup, visible scope, catalogue counts, limitations,
or user-facing behavior changes. Run `npm test` after code/content changes and
use browser inspection for rendering or interaction work when available. Report
what was actually verified and any visual/performance QA still outstanding.
