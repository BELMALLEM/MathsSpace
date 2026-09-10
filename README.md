# AXIOM — A universe of ideas

An explorable Three.js mathematical universe with **32 complete discoveries across eight solar systems in three galaxies**. Stars, planets, moons and asteroids are independently selectable learning destinations. Each has a preview, contextual guidance, a working experiment and a challenge. Catchable travelling archives offer bounded parameter variations of eight curated mathematical curiosities.

## Run
Serve `dist/` with any static HTTP server. Local example: `python3 -m http.server 8000 --directory dist`. Run checks with `node --test tests/*.test.mjs` or `npm test` using Node 20+. No build step, network imports, API keys, or accounts are required. Vendored Three.js 0.170.0 includes its MIT license.

## Regions
The Resonance Reach now includes a repairable relay station. Investigate equal
wave cancellation, predict a correction for the relay's additional phase offset,
and transmit it. Cancellation restores a visible signal to the unit-circle
planet and records an applied connection in the journal. Retuning generates a
reproducible new offset. The Circular Signal then offers a scout-scanner
calibration: match a seeded unit direction with the correct angle, using
cosine as horizontal position and sine as vertical position. A correct bearing
reveals a violet route to recursion and records the applied connection. The
Infinite Branch then adds a finite recursion lock: count the segments in a
depth-4 binary tree to map the optional golden-angle archive. Free exploration
remains available before repair.

- Resonance Reach: wave interference, sine/cosine, recursion.
- Transformation Isles: linear functions, inverse functions, exponential growth.
- Shape Expanse: rotation matrices, Pythagorean theorem, volume, rotational symmetry.
- Changing Deep: derivatives, integration, geometric series and limits.
- Uncertainty Cloud: Bernoulli probability, mean/median, combinations.
- Connected Frontier: vector addition, determinants, weighted shortest paths, modular arithmetic.
- Golden Horizon in Aurelia: Fibonacci ratios and complex multiplication.
- Butterfly Wake in Umbra: deterministic chaos and Fourier synthesis.
- Eight rare archives throughout the systems: birthday paradox, Monty Hall, Collatz conjecture, golden-angle patterns, Euler’s polyhedron formula, harmonic series, prime spirals, and pigeonhole principle.

## Architecture
- `world.js`: solar systems, galaxy membership, object classification and orbital parameters.
- `orbits.js`: pure orbital positions and deterministic bounded encounter parameters.
- `living-space.js`: moving instanced asteroid belts, spiral galaxy point fields, orbital guides, target lookup, picking and resource disposal.
- `rare-math.js`, `rare-content.js`, `rare-experiments.js`: rare encounters and deeper topics.
- `universe.js`: 3D rendering, object picking, camera transitions and region travel.
- `navigation.js`: pure damping/integration functions, normalized movement, label layout, pointer gesture state machine.
- `discoveries.js` / `extended-content.js`: curated lesson schemas, reasoning and challenges.
- `math.js` / `extended-math.js`: pure mathematics and validation.
- `experiments.js` / `extended-experiments.js`: responsive mathematical canvas renderers.
- `app.js`: selection previews, Atlas, journal, settings and active experiment state.
- `style.css`: responsive exploration and learning interfaces.

## Project guidance
Read `AGENTS.md`, `docs/prompt.md`, `docs/PROJECT_BRIEF.md`,
`docs/QA_REPORT.md`, and `docs/RESUME_IN_VSCODE.md` before substantial
changes. `docs/PROJECT_BRIEF.md` captures the AXIOM-specific team rules, UX
routes, missing experience, risks, and milestone gates. `docs/QA_REPORT.md`
records the latest browser QA evidence and remaining verification gaps.

## Navigation
A visible scout craft now accompanies exploration, with thrust responding to
actual travel speed and banking during turns or sideways flight. It clears the
view during lessons and dialogs. Phone flight hides the opening overlays;
Recenter brings the opening route back. Planet clearance includes the craft.

Escape stops automatic flight. Losing window focus or cancelling a pointer
gesture also clears the destination, moving-target tracking, momentum, and
unfinished camera turns. Starting a new approach or returning from a lesson
still establishes a fresh destination.

Desktop: drag to look; wheel/trackpad to travel; arrow keys move; PageDown/PageUp descend or rise; Shift accelerates. W/A/S/D and Q/E still work as fallback habits, but the visible control scheme is arrow-first. Click an object or label to preview it, then choose Approach or Explore. Escape dismisses selection or exits an experiment. Atlas offers catalogue filtering and direct region travel.

Touch: one finger looks, pinching travels, and two-finger dragging pans. Tap previews; Explore enters. Gestures never turn into accidental selections after multi-touch or dragging. There are no directional flight-pad buttons. Recenter remains available, as do textual keyboard instructions in settings.

Navigation uses frame-rate-independent acceleration/braking and camera damping, normalized multi-axis speed, proximity slowdown, camera surface clearance and restoration of the exploration pose when leaving focus. Region travel is interruptible with drag, movement, wheel or touch input.

## Rendering and scope
The universe contains 32 authored destinations, 224 moving archive asteroids on mobile or 416 on desktop, and three spiral galaxy point fields. Asteroid bodies share geometry and use instanced rendering. Detail selection is based on initial viewport width. Counts remain bounded during long sessions; off-region asteroid fields stop matrix uploads. Planets follow display orbits; moons follow their parent planets. Stars drift slightly and their atmospheres pulse. These motions are stylized and do not constitute a gravitational simulation.

Select an asteroid directly or through the passing-archive signal. Approach tracks the moving target until interrupted. Catch & explore opens its lesson with a deterministic variation and records the catch on this device. Asteroid instances are not hundreds of unique authored subjects: eight rare topic families generate bounded parameter variations. The Atlas exposes all 32 subjects without requiring catches.

The world pauses during focused lessons and reduced-motion mode. Static mathematical canvases redraw on parameter, size or sample changes; the wave experiment can animate. There is no claim of an infinite authored curriculum.

## Companion and journal
Dr. Mira can be dismissed and restored in Settings. Optional lesson hints live
under "Ask Dr. Mira" and call attention to assumptions and further questions.
Answering a challenge records the first prediction and its experiment settings;
later corrections preserve that first answer. An answer alone does not mark an
experiment observed or establish mastery. Observations and challenge attempts
appear in the journal without requiring a separate bookmark, with takeaways for
solved challenges and unfinished questions otherwise. Removing saved settings
does not erase learning history.

## Persistence
The device-local journal, visited concepts and preferences retain their existing v1 storage keys. Saved discoveries restore parameter settings. A separate local understanding record distinguishes visited, observed and solved discoveries. Probability trials themselves are not saved; changing probability resets trials, aggregate counts cap at 10,000, and at most 1,500 outcomes remain in memory for display. Caught archive IDs (up to 500) and solved challenge IDs use additional local storage keys. Existing saved lessons remain compatible. There is no server synchronization or AI chatbot. Dr. Mira is an authored mathematician companion whose guidance reacts to selection, lesson state and route progress.

## Verification
Automated tests cover mathematical relationships and boundaries, region integrity and body clearance, gesture selection/cancellation, normalized and frame-rate-independent navigation, label exclusion zones, finite contextual explanations, and drawing operations for all 32 models at desktop/mobile canvas sizes. Additional CPU-side Three.js checks verify instanced asteroid picking after movement, resource disposal, finite long-time orbital positions, and bounded instance counts. Static checks verify JavaScript syntax, unique HTML IDs, and local imports. Relay, scanner, and recursion checks cover phase-offset cancellation, seeded unit-circle bearings, finite branch counts, and bounded station resources. Browser checks and their limits are recorded in docs/QA_REPORT.md; they do not establish the full newcomer experience.

## Extending the catalogue
Define a lesson and valid parameter schema, add a matching renderer and feedback, place its ID into a region, link meaningful related ideas, and add correctness checks. Update visible counts with content changes. New theorems require a valid explanation of assumptions and reasoning, not only repeated visual examples.
