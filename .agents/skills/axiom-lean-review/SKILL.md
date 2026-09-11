---
name: axiom-lean-review
description: Review MathsGalaxy changes only for over-engineering and unnecessary complexity. Use when asked what can be deleted, simplified, consolidated, or replaced with native/static project patterns. Does not apply fixes.
---

# Review MathsGalaxy For Lean Complexity

Review the diff or named files for complexity only. Correctness, security,
performance, and math-review findings belong in `axiom-review` unless they are
caused by over-building.

Look for:

- duplicated navigation, UI, lesson, storage, or rendering systems;
- abstractions with one caller or one implementation;
- dependencies, build tools, services, plugins, or generated setup that the
  static app does not need;
- hand-rolled behavior already covered by native browser APIs, Canvas, CSS,
  localStorage, JavaScript, Three.js, or an existing MathsGalaxy module;
- generic game machinery that does not improve the current mathematical loop;
- docs or scaffolds that describe imaginary capabilities.

Output one finding per line:

`path:line - tag - what to cut - replacement`

Use tags: `delete`, `reuse`, `native`, `yagni`, `shrink`, `docs`.
End with `Lean already. Ship.` when there is nothing material to cut.
