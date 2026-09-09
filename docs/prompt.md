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
