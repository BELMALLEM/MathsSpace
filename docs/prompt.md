# Current MathsGalaxy Goal Prompt

Evolve MathsGalaxy into a mathematical exploration game that a curious gamer
would choose to keep playing and a serious mathematician would respect. Think
as a game designer and an enthusiastic mathematician: movement should feel
natural, the world should invite investigation, and discoveries should lead to
understanding.

This app should make life easier for the user and future agents. Prioritize
high-impact work, apply the 80/20 rule, and avoid process overhead that does not
improve the player experience, mathematical breadth, mathematical correctness,
or future development speed.

## Highest Priorities

1. MathsGalaxy must feel mathematically large.
   Show a broad visible universe with a high range of mathematical concepts:
   number theory, geometry, algebra, analysis, probability, logic, topology,
   computation, complexity, discrete mathematics, chaos, networks,
   transformations, optimization, proof, conjectures, and surprising bridges
   between fields. The player should not feel trapped in a tiny demo or a narrow
   set of topics.

2. Make breadth visible while keeping depth playable.
   A good milestone is wide visible scope plus selected deep routes. It is fine
   for some regions to be dormant, unmapped, locked, or weak-signal if that is
   honest. Do not hide the scale of mathematics just because every region is not
   fully playable yet.

3. Make mathematics the gameplay.
   Encounters should follow:
   notice -> investigate -> predict -> manipulate -> observe -> explain -> use.
   Mathematical understanding should change what the player can do: restore a
   signal, reveal a route, unlock a structure, navigate a network, decode a
   pattern, or connect distant ideas.

4. Improve the player experience before small polish.
   Movement, selection, first-minute clarity, meaningful destinations, and
   mathematical range beat tiny UI tweaks, repeated audits, or low-impact tests.

5. Do not over-engineer.
   Reuse the existing static Three.js app, local ES modules, native browser
   APIs, Canvas, CSS, localStorage, and current MathsGalaxy modules. Add
   dependencies, generic systems, backends, plugins, or scaffolding only when
   they clearly serve the current player-facing goal.

## Priority Gate For Future Runs

Before choosing work, ask:

- Does this make the universe feel larger, more meaningful, or more playable?
- Does this improve movement, discovery, mathematical understanding, or future
  agent efficiency?
- Is this the smallest complete slice that proves the idea?
- Is verification proportional to the risk of the change?
- Am I documenting a user pain point that should guide future runs?

If the answer is no, skip or defer the work. Do not let tiny polish, repeated
tests, broad audits, or speculative systems consume the session while higher
priority player value is still missing.

## Product Direction

MathsGalaxy is a large outer-space world of mathematical ideas. The user flies
through galaxies, stars, planets, moons, asteroids, archives, signals, routes,
and strange phenomena. Objects represent concepts, theorems, examples,
conjectures, experiments, puzzles, and connections.

The world should feel alive and explorable:

- recognizable mathematical territories and distant landmarks;
- nearby destinations that are worth investigating;
- visible scale: galaxies are broad families, stars are major ideas, planets
  are substantial concepts, moons are examples or consequences, asteroids are
  compact puzzles or surprises;
- spaceships, effects, characters, routes, signals, and places only when they
  support exploration or mathematics;
- bounded randomness that creates curiosity without making essential learning
  depend on luck.
- You may use the following reference for Maths possible routes and 'reference button' : https://mathworld.wolfram.com/

Avoid empty travel, random content with no mathematical role, decorative-only
objects, and lessons that are just panels with sliders.

## Movement And Controls

Use arrow keys as the visible primary desktop movement controls. PageUp and
PageDown handle vertical movement. Shift accelerates. W/A/S/D and Q/E may
remain fallback habits, but visible guidance should be arrow-first.

Mouse controls should feel natural for a real game:

- drag empty space to look;
- click objects or labels to preview;
- approach/travel should be easy to start and cancel;
- wheel or trackpad should support smooth travel;
- Escape should stop, dismiss, or recover cleanly.

The player must be able to explore with mouse alone, with keyboard controls
complementing it. Movement needs smooth acceleration, reliable stopping,
cancellable travel, and easy recovery when disoriented. Menus, dialogs, and
experiments must not accidentally steer the camera.

Mobile should be thumb-friendly and game-like. Use touch gestures or a clear
mobile travel control only if it makes movement easier. Avoid clutter and avoid
controls that fight the lesson UI.

## Mathematical Gameplay

Each serious encounter needs:

- a clear question;
- something strange or interesting to notice;
- a prediction before or during experimentation;
- a manipulation that depends on the actual math;
- feedback that changes with the player's action;
- an explanation of what happened and why;
- a useful outcome in the world;
- a later chance to apply the idea.

Opening a lesson, visiting a planet, or moving a slider is not enough evidence
of understanding. Progress should distinguish visited, observed, predicted,
solved, connected, and applied when useful.

## Dr. Mira

Dr. Mira is an authored mathematician companion, not an external AI chatbot. She
should be brief, contextual, optional, and dismissible.

She should help the player know:

- what concept or prerequisite matters here;
- whether they are seeing a definition, example, theorem, proof idea,
  approximation, experiment, conjecture, or mystery;
- what to try next;
- why the idea matters;
- what remains unresolved.

Never claim a simulation proves a theorem or that the player solved an open
problem.

## Large World Strategy

Do not wait until one route is perfect before showing the mathematical breadth
of the universe. The player should see that MathsGalaxy is much larger than the
current route.

Use honest states for breadth:

- mapped and playable;
- visible but dormant;
- weak signal;
- locked by another concept;
- unmapped archive;
- mystery or conjecture;
- future expedition.

More objects are useful only if they create identity, direction, curiosity, or a
future mathematical connection. A large void is worse than a smaller meaningful
map.

## Verification And Token Discipline

Verification should be proportional to impact:

- Pure math or validators: targeted tests, then `npm test` when feasible.
- Content-only edits: relevant catalogue or unit checks if affected; no full
  browser or performance pass unless layout or flow changed.
- Movement, UI, rendering, mobile, or player-facing flow: browser inspection is
  required.
- Performance work: measure concrete KPIs before and after.

Use Chrome console, Lighthouse, DevTools performance, screenshots, terminal
checks, and automated tests when they answer a real question. Do not spend large
token budgets proving unrelated behavior after tiny changes.

Document user pain points when they are signaled. Current pain points:

- too many tokens spent on small-impact work or repeated tests;
- over-engineering risks;
- the world feeling too small for the intended mathematical range;
- tests and KPIs becoming the work instead of supporting the work;
- the app should reduce friction, not create more chores.

## Success Criteria

A successful MathsGalaxy run should move toward this:

- the first screen communicates exploration, scale, and mathematical breadth;
- the player can move, select, approach, and recover naturally;
- the world shows many mathematical territories, even if some are not complete;
- at least one route is deeply playable and mathematically meaningful;
- discoveries change what the player can do;
- Dr. Mira helps without overwhelming;
- progress records understanding, not just visits;
- future work gets faster because the setup is clean and focused.

Judge success by observed play: does the player know what they can try, feel
curious about what lies ahead, and understand something mathematical because
they played?

## Historical Prompt (Superseded)

The original AXIOM prompt below is historical background only. The current goal
is MathsGalaxy as described above. Do not spend future context reprocessing the
old AXIOM prompt unless a task explicitly needs archaeology.

You are continuing/building a web app project called AXIOM: Math Universe.

The goal is to create a clean, meaningful, usable, gamified, visually rich web application for learning mathematics through interactive 3D exploration.

Core vision:
Create a large 3D outer-space world where mathematics is discovered by exploring. The user flies through a living universe filled with stars, planets, moons, asteroids, galaxies, rare objects, signals, archives, and strange mathematical phenomena. Every object represents a math concept, theorem, idea, pattern, proof, experiment, or surprising fact. The experience should feel like discovering a mysterious universe, not like using a boring academic app.

The app must be:
- Funny
- Easy to understand
- Highly visual
- Fully interactive
- Gamified
- Mobile and desktop responsive
- Smooth and fluid
- Clean in UI and first impression
- Built around abstraction becoming visual
- Designed for long exploration and repeated learning

Main interaction idea:
The user enters a large 3D mathematical universe. They can move freely through space using mouse/keyboard on desktop and finger gestures on mobile. They can select or approach objects such as planets, moons, stars, galaxies, and asteroids. When they interact with an object, the app opens a learning experience related to that object.

The learning should not feel like a textbook. It should show the concept visually, let the user manipulate it, and explain what is happening as they interact. The user should see the effect of changing parameters, moving shapes, bending waves, rotating objects, catching asteroids, unlocking discoveries, and comparing outcomes.

Use Three.js for the 3D world.

Important design direction:
This is not necessarily a traditional game with levels, enemies, or missions. It is a visually interactive discovery space. The user chooses or gets suggested a concept or theorem, then something appears in the 3D space that helps them understand it by touching, dragging, changing, observing, and experimenting.

The world should feel alive:
- Moving asteroids
- Orbiting moons
- Moving planets
- Pulsing stars
- Solar systems
- Galaxies
- Rare mathematical objects
- Signals or discoveries appearing during exploration
- A sense that every turn reveals something new

The project should support a large exploration experience that could take a long time to explore and learn from.

Existing product concept:
AXIOM V4 is a living mathematical universe with several regions and discoveries.

Current version identity:
- App name: AXIOM Math Universe
- Release direction: V4
- Package version may be 1.3.0
- Static frontend web app
- No backend required
- No API keys required
- Use localStorage for progress, captures, settings, and journal
- Use vendored Three.js or local dependency if already available
- Keep the app easy to run locally

Current or desired structure:
- `dist/index.html`
- `dist/style.css`
- `dist/app.js`
- `dist/universe.js`
- `dist/world.js`
- `dist/navigation.js`
- `dist/orbits.js`
- `dist/living-space.js`
- content modules for discoveries, experiments, rare math, extended content
- tests for math, navigation, rendering logic, expansion, and living-space behavior
- README with project explanation and local running instructions

Run locally with:
```bash
python3 -m http.server 8000 --directory dist
````

Then open:

```text
http://localhost:8000
```

Testing:

```bash
npm test
```

Existing / desired content categories:

1. Resonance Reach

   * Waves
   * Trigonometry
   * Recursion
   * Harmonics

2. Transformation Isles

   * Linear functions
   * Inverse functions
   * Exponential growth
   * Transformations

3. Shape Expanse

   * Rotation
   * Pythagoras
   * Volume
   * Symmetry
   * Geometry

4. Changing Deep

   * Derivatives
   * Integration
   * Limits
   * Geometric series
   * Change over time

5. Uncertainty Cloud

   * Probability
   * Averages
   * Combinations
   * Randomness
   * Expected value

6. Connected Frontier

   * Vectors
   * Determinants
   * Shortest paths
   * Modular arithmetic
   * Graphs and networks

7. Golden Horizon / Aurelia

   * Fibonacci
   * Golden ratio
   * Complex multiplication
   * Spirals

8. Butterfly Wake / Umbra

   * Chaos
   * Fourier ideas
   * Sensitive dependence
   * Hidden order in noise

Rare asteroid / rare discovery topics:

* Birthday paradox
* Monty Hall problem
* Collatz conjecture
* Golden angle
* Euler polyhedra formula
* Harmonic series
* Ulam prime spiral
* Pigeonhole principle

Object-to-learning mapping:

* Stars: major math domains or big ideas
* Planets: core concepts
* Moons: related sub-concepts, examples, or intuition helpers
* Asteroids: rare facts, puzzles, paradoxes, mini-discoveries
* Galaxies: broad families of math, like change, shape, randomness, structure
* Signals: suggested nearby discoveries or guided learning opportunities
* Archives: captured objects and saved learning progress

User movement:
Desktop:

* Mouse drag to look around
* Mouse wheel to move/travel/zoom
* Arrow keys for movement
* PageUp / PageDown for vertical movement
* WASD and QE may remain as fallback habits, but the visible control scheme should be arrow-first
* Shift for faster movement
* Click/tap object to inspect or travel toward it

Mobile:

* One-finger drag to look
* Pinch to travel/zoom
* Two-finger pan if supported
* Tap object to inspect
* No fixed arrow pad
* UI should remain clean and thumb-friendly

Visual and UX requirements:

* First page must feel polished immediately
* Responsive on mobile and desktop
* No cluttered academic panels
* Clean glass/space UI
* Strong depth, motion, color, glow, orbit lines, readable labels
* Good object selection
* Smooth camera movement
* Clear onboarding: user must quickly understand “explore, select, learn”
* Do not make the first view feel static or confusing
* Avoid heavy text walls
* Use small explanations tied to what the user is doing
* Make every interaction feel like discovery

Learning experience requirements:
When the user selects a math object:

* Show the concept name
* Show a short friendly explanation
* Show a visual interactive experiment
* Let the user change at least one parameter
* Explain what changes
* Give a simple “what you discovered” takeaway
* Mark progress locally
* Make it feel playful

Each lesson should separate:

* What is known/proven
* What is an experiment
* What is a conjecture or mystery

Tone:

* Playful
* Clear
* Not academic
* Not childish
* Funny where natural
* Curious and exploratory

Important product principle:
The app is not a normal course. It is a mathematical universe. The user learns by finding things, catching things, observing them, manipulating them, and connecting ideas visually.

Implementation principles:

* Preserve existing architecture if continuing from source
* Do not replace the project with a new scaffold
* Improve the current code incrementally
* Keep source clean and readable
* Keep project static and easy to run
* Avoid adding backend complexity unless explicitly requested
* Avoid CDN dependency if vendored Three.js already exists
* Keep tests meaningful
* Test interactions and math logic
* Be honest about what was actually browser-tested versus inspected

Desired future improvements:

1. Improve first-view fluidity and clarity.
2. Make exploration smoother on desktop and mobile.
3. Expand the world with more moving objects and meaningful discoveries.
4. Add more varied interactive math experiments.
5. Improve object picking and travel.
6. Add stronger “catch asteroid” flow.
7. Make the journal and atlas useful for long-term discovery.
8. Add more humor and surprise without making the app silly.
9. Keep UI clean and responsive.
10. Make the world feel large and alive.

Idempotent build instruction:
If the project already exists, inspect the current files first and continue from the existing implementation. Do not duplicate modules, do not create a second app, and do not overwrite working features. Preserve the current design language and improve it. If a feature already exists, refine it instead of recreating it. If a file already contains relevant logic, update that file directly. Keep the app runnable with the same local command.

Definition of success:
The result should feel like a polished interactive prototype of a massive mathematical universe: fun, visual, smooth, usable, and expandable. A user should be able to open it, fly through space, choose mathematical objects, interact with concepts, catch rare asteroids, save discoveries, and understand math through visual behavior instead of abstract explanation alone.
