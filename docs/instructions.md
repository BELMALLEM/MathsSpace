# Future Agent Instructions

Use this file as the compact working contract for future MathsGalaxy work.
It integrates the useful Ponytail principle into this project; do not keep a
separate copied Ponytail setup.

## Read First

For non-trivial work, read:

1. `AGENTS.md`
2. `docs/context.md`
3. `docs/design.md`
4. `docs/instructions.md`
5. `docs/QA_REPORT.md`
6. `docs/RESUME_IN_VSCODE.md`
7. The target file and one nearby module that already solves a similar problem.

Use the current section of `docs/prompt.md` as the active product goal. Treat
its "Historical Prompt (Superseded)" section as background only. Use
`docs/PROJECT_BRIEF.md` only when deeper milestone context is needed.

## Ponytail Principle, Integrated

Be a lazy senior engineer in the good sense:

1. Skip work that does not serve the current player or mathematical goal.
2. Reuse the existing owner module, content shape, renderer, helper, or storage
   path.
3. Prefer native browser APIs, local ES modules, CSS, Canvas, localStorage, and
   vendored Three.js before dependencies.
4. Stay inside the static app unless the user explicitly changes the product.
5. Write the smallest complete slice that can be played and verified.

Lean never means cutting mathematical correctness, accessibility, saved-progress
compatibility, responsive behavior, resource cleanup, browser QA, or necessary
tests.

Use 80/20 judgment aggressively. Prefer changes that improve player clarity,
mathematical breadth, movement, understanding, or future-agent efficiency. Avoid
spending large token or tool budgets on repeated audits, tiny visual polish, or
verification that is broader than the change. The project exists to make the
user's life easier, not to create process overhead.

When the user names a pain point, preserve it in `docs/context.md` and, when it
affects product direction or workflow, update `docs/design.md` or this file too.
Do this as part of the task rather than waiting for a separate documentation
pass.

Current priority order:

1. Make MathsGalaxy feel mathematically large: visible breadth across many
   concept families, honest unfinished regions, and meaningful long-range
   destinations.
2. Keep at least one route deeply playable, where understanding unlocks or
   changes something in the world.
3. Improve movement, selection, recovery, and first-minute clarity.
4. Add or refine Dr. Mira only when it helps the player understand what to try
   next or what kind of mathematical claim they are seeing.
5. Run proportional verification; do not let tests and KPIs consume the work.

## Commands

Run from the repository root.

```sh
py -m http.server 8000 --directory dist
npm test
node --test tests/*.test.mjs
```

Use `python3 -m http.server 8000 --directory dist` when available.

Do not run `npm install` or add dependencies unless the existing static setup
cannot solve the task.

## Verification

Report only evidence actually collected.

- Run `npm test` after code or content changes.
- Run `node --check` on changed JavaScript modules when syntax-sensitive.
- For UI, navigation, rendering, or mobile changes, inspect in Chrome through
  HTTP, not by opening the file directly.
- Check Chrome console for relevant errors.
- For player-facing slices, verify desktop and mobile viewport behavior.
- When performance matters, collect concrete KPIs: Lighthouse or DevTools
  timing, frame-rate/pacing observation, console errors, and any layout overflow.
- Document remaining gaps in `docs/QA_REPORT.md` or `docs/RESUME_IN_VSCODE.md`.

Scale checks to risk:

- Pure math or validator change: targeted tests, then `npm test` when feasible.
- Content-only direction/copy: catalogue or relevant unit checks if affected;
  no full browser/performance pass unless layout or player flow changed.
- UI, movement, rendering, or mobile change: browser check required.
- Performance work: measure before and after, but only after render, animation,
  layout, or object-count changes.

## Editing Rules

- `dist/` is editable source.
- Keep localStorage keys stable unless a migration is explicitly requested.
- Preserve the vendored Three.js license.
- Do not add backend, accounts, API keys, external AI, telemetry, cloud sync,
  build artifacts, framework migrations, or speculative scaffolding by default.
- Do not rename internal AXIOM compatibility identifiers casually; player-facing
  copy may use MathsGalaxy.
- Keep docs short and current. Prefer updating `context.md`, `design.md`, and
  `instructions.md` over spreading the same rule across many files.
