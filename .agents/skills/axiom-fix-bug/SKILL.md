---
name: axiom-fix-bug
description: Diagnose and fix a bug in AXIOM Math Universe. Use for regressions in math logic, Three.js rendering, navigation, picking, lessons, journal/localStorage, responsive UI, or tests. Do not use for new features or review-only requests.
---

# Fix an AXIOM Bug

Read `AGENTS.md`, the failing code, one related module, and the relevant test or
configuration before editing. Reproduce the problem when practical; otherwise
trace the concrete path from data to UI/rendering.

Use the lean bug-fix rule: a report names a symptom. Grep callers of the shared
function or state path you plan to touch, then fix the smallest root cause once.
Do not add parallel guards, fallback systems, or broad refactors when one
validated normalization point covers the bug.

Classify the bug before fixing it:

- authored content, catalogue/world placement, or stale counts;
- pure math formula, validator, challenge, or parameter bounds;
- navigation physics, gesture state, camera focus, travel, or selection;
- Three.js rendering, picking, instancing, animation, disposal, or performance;
- UI state, dialogs, Atlas, journal, localStorage, reduced motion, or responsive
  CSS.

Make the smallest root-cause correction and preserve public behavior outside
the bug. Add or update a regression test when there is a viable seam in
`tests/`. Do not weaken tests, hide failures with hard-coded success paths, or
make broad refactors while fixing a narrow issue.

Run the narrow relevant check and normally `npm test`. For rendering,
interaction, or mobile bugs, inspect the app in a browser when tooling is
available and report any unverified visual/performance risk.
