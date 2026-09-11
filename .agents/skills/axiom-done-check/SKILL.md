---
name: axiom-done-check
description: Verify that completed MathsGalaxy, formerly AXIOM Math Universe, work is genuinely ready. Use before declaring feature, bug-fix, navigation, rendering, lesson, experiment, or customer-visible UI work done. Do not use for docs-only or review-only tasks.
---

# Verify MathsGalaxy Completion

Run only checks relevant to the changed flow. Never report an unrun check as passing.

1. Read `AGENTS.md`, `docs/context.md`, `docs/design.md`,
   `docs/instructions.md`, the changed files, and relevant docs.
2. Confirm the static app still uses `dist/` as source, local imports, vendored
   Three.js, and no new backend/API-key/CDN requirement unless explicitly
   requested.
3. Confirm the change did not add avoidable complexity: no unused abstraction,
   duplicate system, speculative scaffold, dependency, build step, service, or
   content volume without authored mathematical value.
4. For content changes, verify discovery IDs, related targets, region
   membership, visible counts, parameter bounds, challenge correctness, and
   honest known/experiment/conjecture language.
5. For math changes, verify formulas and edge cases with targeted tests.
6. For world/rendering/navigation changes, exercise the changed path in the
   running app when browser tooling is available: first view, selection,
   approach/travel interruption, entering/leaving lessons, reduced motion, and
   relevant desktop/touch behavior.
7. For UI changes, check responsive layout, keyboard operation, focus states,
   labels, panel overflow, readable text, and no incoherent overlap.
8. Check console/server output for errors when a browser/server was used.
9. Run `npm test` after code or content changes unless clearly blocked.
10. Report `PASS`, `FAIL`, or `NOT APPLICABLE` for static architecture,
   lean complexity, content/math integrity, changed flow, runtime errors,
   accessibility/UI, and automated checks. A failure prevents a completion
   claim.
