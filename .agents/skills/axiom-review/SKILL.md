---
name: axiom-review
description: Review MathsGalaxy, formerly AXIOM Math Universe, changes for bugs and merge risk. Use when asked to review, audit, assess safety, or inspect a diff. Do not edit unless the user also asks for fixes.
---

# Review MathsGalaxy Changes

Review the actual diff and relevant surrounding code. Prioritize actionable defects over style preferences.

If the user asks for cleanup, simplification, or Ponytail-style review, also use
`axiom-lean-review`. Otherwise include only complexity findings that create real
merge risk for MathsGalaxy.

Check for:

- Incorrect math assumptions, formulas, proof/conjecture claims, parameter
  bounds, challenge answers, or contextual feedback.
- Catalogue/world integrity errors: duplicate IDs, missing related targets,
  stale visible counts, impossible object placement, or broken region/galaxy
  membership.
- Navigation, gesture, picking, focus/leave, approach, pause, reduced-motion, or
  localStorage regressions.
- Three.js rendering leaks, unbounded object growth, expensive per-frame work,
  missing disposal, broken instanced archive picking, or mobile performance
  risks.
- UI accessibility and responsive problems: unreadable labels, overlapping
  panels, keyboard traps, missing focus states, unlabelled controls, or touch
  interactions that cause accidental selection.
- Static-app violations: backend assumptions, API keys, network imports, CDN
  dependencies, framework migrations, or package additions without a clear need.
- Over-built changes that duplicate an existing MathsGalaxy flow, add a one-use
  abstraction, or create generic game machinery without mathematical payoff.
- Tests that do not exercise changed behavior and docs that no longer match
  setup, scope, counts, or limitations.

Run read-only verification when useful. List findings first in severity order as
`file:line - problem - impact - minimal fix`. Do not invent findings. If none
exist, say so and mention residual testing gaps. End with the checks run and
their results.
