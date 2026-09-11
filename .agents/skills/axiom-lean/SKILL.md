---
name: axiom-lean
description: Apply the integrated Ponytail lean principle inside MathsGalaxy, formerly AXIOM Math Universe. Use for coding, cleanup, refactoring, dependency choices, or requests to keep the project simple without weakening math, UX, accessibility, or verification.
---

# Build MathsGalaxy Lean

Use Ponytail's useful core here as an integrated MathsGalaxy principle:
efficient, not careless. The best code is code this game does not need to own.

Before editing, read `AGENTS.md`, `docs/context.md`, `docs/design.md`,
`docs/instructions.md`, the target file, and the nearest existing pattern. Then
choose the first rung that honestly solves the request:

1. Does this need to exist for the current learner/game goal? If not, skip it
   and say why briefly.
2. Does MathsGalaxy already have the helper, content shape, renderer pattern,
   storage path, or UI state flow? Reuse it.
3. Does JavaScript, the DOM, CSS, Canvas, localStorage, or Three.js already
   cover it? Use that before custom code.
4. Does the vendored/static architecture solve it without a new dependency,
   backend, build step, or plugin? Stay there.
5. Only then write the minimum complete change.

Lean in MathsGalaxy never cuts: mathematical assumptions, input bounds,
saved-progress compatibility, accessibility, reduced motion, browser QA for
visible flows, performance/KPI evidence when relevant, resource disposal, or
tests for non-trivial formulas and state transitions.

For game work, do not replace a meaningful encounter with generic systems.
Prefer one replayable authored loop over broad scaffolding: notice,
investigate, predict, manipulate, observe, explain, apply.

If a deliberate shortcut has a real ceiling, mark it with an `axiom-lean:`
comment naming the limit and revisit trigger. Trivial one-line changes do not
need tests; non-trivial logic needs the smallest useful runnable check.
