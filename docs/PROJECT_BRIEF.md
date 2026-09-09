# AXIOM Project Brief

This brief adapts the earlier production-readiness template to AXIOM only. This project is a static Three.js learning app.

## Target Outcome

Deliver AXIOM as a polished interactive prototype of a mathematical universe:
fast to open, easy to understand, playful without becoming noisy, mathematically
honest, and reliable on desktop and mobile. A learner should be able to fly
through space, select a mathematical object, approach it, explore a visual
experiment, save discoveries locally, catch rare archive variants, and return
to exploration without confusion or lost state.

## Existing Evidence

- Static app source lives in `dist/`.
- There is no backend, build step, database, API key, account flow, Docker
  stack, or package install requirement.
- The current catalogue claims 32 discoveries across eight regions and three
  galaxies.
- Rare archive asteroids are bounded parameter variations of eight topics.
- Progress uses localStorage keys with the `axiom-*-v1` prefix.
- Automated tests cover math, navigation helpers, catalogue integrity,
  rendering operations, and living-space behavior.
- Browser visual QA and performance measurement are known gaps until performed
  in the current workspace.

## Team Rules

### Game Developer

- Preserve the feeling of a living world: moving systems, pulsing stars,
  orbiting bodies, catchable archives, and interruption-friendly travel.
- Keep Three.js responsibilities in `universe.js`, `living-space.js`,
  `orbits.js`, and `world.js`.
- Avoid unbounded objects, per-frame allocation loops, hidden memory growth, and
  rendering work that scales with session length.
- Verify changes with real browser checks when touching camera movement,
  picking, rendering, animation, focus transitions, or mobile gestures.

### Game Designer

- Treat discovery as the core loop: notice signal, select object, preview,
  approach or explore, manipulate experiment, save or follow a connection.
- Add meaning before adding volume. A new object must teach a distinct idea,
  not merely increase counts.
- Keep rare archives surprising but bounded. They should vary parameters or
  framing, not pretend to be hundreds of unique lessons.
- Do not introduce enemies, levels, currencies, grind, or mission clutter unless
  the user explicitly changes the product direction.

### UX Designer

- The first viewport must make the next action obvious: explore, select,
  approach, open Atlas, or try Surprise me.
- Keep overlays light enough that the universe remains the main experience.
- Desktop and touch controls must not fight each other. Mobile must stay
  gesture-first; do not add a fixed directional pad.
- Check for label overlap, panel overflow, keyboard focus traps, missing labels,
  unreadable contrast, and accidental tap selection after gestures.
- Prefer short contextual guidance near the active experiment over long static
  explanation panels.

### Mathematician

- Every lesson must state its assumptions. Examples: equal-frequency waves,
  right triangles in a flat plane, independent Bernoulli trials, finite
  recursion depth, or stylized orbit motion.
- Separate proof, experiment, approximation, conjecture, and mystery.
- New formulas need targeted tests for normal cases, boundaries, and malformed
  restored values.
- Do not make claims of proof from simulation alone. Visuals can motivate; the
  explanation must say what actually proves the result.

### Beta Testers

- Test the app as a learner, not only as a developer.
- Desktop route: first load, drag, wheel, arrow keys, PageUp/PageDown, Shift, select label,
  Approach, Explore, Save, Related, Atlas search, Journal revisit, Escape.
- Mobile route: first load, one-finger look, pinch travel, two-finger pan, tap
  select, open lesson, change controls, collapse guide, return to space.
- Stress route: leave the app open, travel between regions, catch archives,
  toggle reduced motion, resize/orient the viewport, and watch console output.
- Report confusion, stuck states, visual overlap, sluggishness, misleading copy,
  and math explanations that feel detached from the interaction.

## Product Routes

AXIOM has routes in the UX sense, not framework routes. The app is a single
static page at `dist/index.html`.

- Exploration route: load app -> see world -> move camera -> inspect nearby
  discoveries.
- Object route: select object or marker -> preview -> Approach or Explore ->
  dismiss or enter lesson.
- Lesson route: concept title -> canvas experiment -> controls -> explanation
  depth -> challenge -> save -> related discovery -> back to space.
- Atlas route: open Atlas -> search/filter by region or object kind -> travel
  to region or open discovery.
- Journal route: save discovery -> open Journal -> revisit saved settings ->
  remove note if desired.
- Archive route: notice passing archive -> intercept -> catch and explore ->
  saved deterministic variant.
- Settings route: open settings -> reduce motion -> render quality -> read
  control reference.
- Fallback route: if 3D fails, use Atlas and canvas experiments without the
  universe renderer.

## Misleading Elements To Avoid

- Do not claim AXIOM is production-complete because tests pass. Browser visual
  QA and performance measurement are separate evidence.
- Do not claim infinite content. The app has authored lessons and bounded rare
  variants.
- Do not present stylized orbits as gravitational simulation.
- Do not imply server sync, accounts, AI tutoring, multiplayer, or cloud saves.
- Do not let rare archive counts imply unique authored lessons.
- Do not hide incomplete math behind playful copy.
- Do not use a static screenshot or decorative scene as a substitute for an
  interactive experiment.

## Missing Experience

Highest priority gaps to investigate or improve next:

- Real browser QA for first load, desktop controls, touch controls, lesson
  transitions, and responsive layouts.
- Frame pacing and concrete performance bottleneck measurement.
- Clearer onboarding if new users miss that labels and objects are selectable.
- Stronger archive catch feedback: anticipation, intercept clarity, capture
  confirmation, and journal linkage.
- Better long-session usefulness for Atlas and Journal, such as progress views,
  concept paths, or recently explored connections.
- More varied experiments where current lessons share similar slider-canvas
  patterns.
- More humor and surprise that stays mathematically precise.
- A bounded next content milestone after stability is proven.

## Overengineered Or Overcomplex Parts To Resist

- Framework migration for a static, working app.
- Backend, authentication, sync, telemetry, or API integrations before the local
  learning loop is excellent.
- Build tools, bundlers, or dependency churn without a clear defect they solve.
- Procedural content that creates many objects without authored mathematical
  value.
- Generic game systems that compete with learning: XP economies, shops,
  inventory, quests, or forced progression.
- Duplicated navigation systems or mobile button pads alongside gestures.
- Large refactors that split small modules without improving correctness,
  performance, or comprehension.

## Completion Gates

AXIOM is ready for a milestone only when current evidence proves:

- `npm test` passes with real output.
- The local static server starts and `dist/index.html` loads through HTTP.
- Critical desktop and mobile flows have no relevant browser console errors.
- Exploration, selection, Approach, lessons, Atlas, Journal, settings, and rare
  archive catching work in the browser.
- Responsive layouts avoid incoherent overlap at phone and desktop sizes.
- Reduced motion pauses ambient world motion during focused learning.
- Math explanations and challenges match tested assumptions.
- No new backend, API key, CDN, account, or build requirement has been added
  accidentally.
- Remaining limitations are documented honestly before approval.

## Adapted Master Prompt

Deliver AXIOM as a polished static Three.js mathematical universe with reliable
desktop and mobile exploration, honest interactive lessons, local saved
progress, and bounded rare archive discoveries.

Before acting, read and follow the repository AI setup and Markdown context:
`AGENTS.md`, `README.md`, `docs/prompt.md`, `docs/RESUME_IN_VSCODE.md`, this
brief, and relevant project skills. Resume from recorded state instead of
restarting, contradicting established decisions, or repeating completed work.

Apply the 80/20 rule: prioritize learner clarity, smooth exploration,
mathematical correctness, and reliable local behavior. Avoid overengineering,
duplicated systems, speculative features, unnecessary dependencies, and docs
that do not keep decisions, commands, evidence, or project status accurate.

Never infer success from code alone. Use real command outputs, local server
behavior, browser console evidence, responsive inspection, and focused tests.
For user-facing changes, test the actual workflow in a browser when tooling is
available and be explicit about any visual, mobile, or performance checks that
were not completed.

The product is ready only when:

- The first screen clearly invites exploration.
- Desktop and mobile navigation work without accidental selections.
- Object selection, Approach, Explore, Back to space, Atlas, Journal, Settings,
  Surprise me, and rare archive catching work end to end.
- Lessons include a concept, short friendly explanation, visual experiment,
  adjustable parameter, live feedback, challenge, takeaway, and saved progress.
- Math copy distinguishes proof, experiment, approximation, conjecture, and
  mystery.
- Critical desktop and mobile states have no relevant console errors or layout
  overlap.
- Automated tests pass with real recorded output.
- Browser QA and performance limitations are reported honestly before final
  approval.
