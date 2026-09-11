# Continue MathsGalaxy Locally

Future-agent context was consolidated into `docs/context.md`, `docs/design.md`,
and `docs/instructions.md`. Read those with `AGENTS.md` before substantial work.
Ponytail's useful "lazy senior engineer" principle is integrated into the
MathsGalaxy setup there; do not maintain a separate copied Ponytail setup.
The old AXIOM name remains in compatibility details such as skill names and
`axiom-*-v1` localStorage keys.

Frontier breadth follow-up (2026-09-11): MathsGalaxy now shows 13 Atlas
territories: eight playable systems with 32 authored discoveries plus five
honest frontier regions for number theory, logic/foundations, topology,
computation/complexity, and deeper analysis. These are distant signals with
Scan frontier travel, not completed lessons. Tests pass 45/45; Chrome mobile
Atlas check found five frontier cards, no console warnings/errors, and no
horizontal overflow. Long-session performance and real player perception remain
unverified.

Mobile UX follow-up (2026-09-10): exploration overlays are more compact at
390x844, and the active lesson task is promoted above secondary explanation
content so Wave Garden opens with the relay repair action visible. Lighthouse
scored 100 across mobile and desktop categories; 44 tests pass. Physical touch,
sustained frame pacing, and a real newcomer route remain unverified.

## Open and run
Player-craft follow-up: player-ship.js adds a camera-relative scout with travel
thrust and banking. Universe owns it; planet clearance includes its forward
extent. Lessons/dialogs hide the ship. On phone, flight hides introductory
overlays; Recenter restores the opening route. Tests and browser checks cover
framing, thrust, banking, lesson visibility and resource disposal. This is a
visible travel craft, not a completed piloting/docking progression system.

Flight-interruption follow-up: stop now cancels autopilot and target tracking,
not just velocity. Escape stops flight; blur no longer lets travel continue.
Three regressions in navigation-flow.test.mjs cover cancellation, restarting
travel, and preserving the return pose. Browser displacement checks passed.

Relay follow-up (2026-09-10): a selectable Three.js station beside the Wave Garden
has a phase-offset transfer puzzle in the lesson. A correct transmitted correction
restores a persistent beacon to the unit-circle planet; retuning offers another
seeded offset. State lives in understanding.waves.relay, connections in connected.
Pure checks are in tests/relay.test.mjs; station geometry is relay-station.js.
The catalogue and test counts are current evidence, never a cap on scope.

Latest follow-up (2026-09-10): Mira is dismissible through a persistent Settings
preference, with optional contextual lesson hints. First challenge predictions
are preserved across retries; journal entries now include unbookmarked progress,
takeaways, and unfinished questions. Answering does not imply observation or
mastery. See the dated follow-up in QA_REPORT.md for checks and remaining gaps.
The active direction includes immersion and mathematical actions that change
the world; the full replayable first-region goal remains incomplete. The latest
objective also calls for inspiration from space games: ships, characters,
recognizable places, and effects that serve mathematical exploration. Prioritize
an immersive first region over more catalogue entries; phone exploration is
currently dominated by overlays. This supersedes older restrictions that would
prevent meaningful game mechanics.

AI setup follow-up: Ponytail's useful principle has been integrated as the
MathsGalaxy lean working style in `AGENTS.md`, `docs/instructions.md`, and
project skills. Future agents should reuse existing modules, native browser
APIs, vendored Three.js, and the static app shape before adding systems,
dependencies, or copied scaffolding. Lean does not mean skipping math
correctness, accessibility, saved-progress compatibility, visual QA, KPIs, or
the complete mathematical game loop.

Scout scanner follow-up (2026-09-10): Circular Signal now has a second
first-region encounter. After the relay is repaired, the player uses the
existing unit-circle angle control to match a seeded scanner direction. The
default target is 135 degrees, so signs/quadrants matter. A wrong bearing
preserves the first prediction; a correct bearing records a connection to
fractals and reveals a violet Three.js route beam. Opening the scanner before
repair disables transmission and offers a shortcut back to Wave Garden. Tests
and DevTools checks passed; physical touch, long-session performance and the
complete 15-20 minute newcomer route are still not verified.

Recursion lock follow-up (2026-09-10): Fractals now applies recursion as
gameplay. After scanner calibration, the player must count the finite binary
tree at depth 4 and transmit 31 segments. Wrong counts preserve the first
prediction; a correct count records `fractals.connected=["golden"]` and makes
the main route point to the Golden-angle surprise. Opening Fractals too early
shows the prerequisite and routes back to Circular Signal. Tests and DevTools
checks passed; physical touch, sustained performance, every post-golden route
and real newcomer playtest remain unverified.

Open this repository folder in VS Code.

Requirements: Python 3 to serve locally; Node.js 20+ to run tests.
From the VS Code terminal in this folder:

```sh
python3 -m http.server 8000 --directory dist
```
On Windows, use `py -m http.server 8000 --directory dist` if `python3` is unavailable.
Open http://localhost:8000 in your browser. Do not open index.html directly.
In a second terminal run `npm test`. No npm install or build is needed for the existing project.

## Paste this into your local coding assistant

Continue the existing MathsGalaxy project in this open workspace. Read `AGENTS.md`, `docs/context.md`, `docs/design.md`, `docs/instructions.md`, `docs/QA_REPORT.md`, and this handoff before making changes. Use `README.md`, `package.json`, `docs/prompt.md`, and `docs/PROJECT_BRIEF.md` as supporting context when needed. Inspect the actual code and run the existing tests before claiming its state. This is an existing working project: preserve its architecture; do not scaffold a replacement.

Product vision:
MathsGalaxy is a playful, highly visual, interactive Three.js universe for understanding mathematics. The main activity is exploring outer space and manipulating mathematical ideas. It should feel alive, intuitive, spacious and enjoyable, with a clean interface on desktop and mobile. Avoid academic textbook screens and generic game tasks. Make abstraction tangible: let learners change something, observe an effect, receive contextual guidance, and understand why it happens. Clearly distinguish experiments, proofs and conjectures.

Current source baseline:
V4. package.json currently says 1.3.0; V4 is the release label.
Static HTML/CSS/ES modules in dist/ are the editable source, not generated output. Vendored Three.js 0.170.0 and its MIT license are included. No framework, build step, backend, API keys or runtime CDN imports. package.json runs Node's built-in test runner.

Implemented scope to verify in code:
- Three galaxies, eight solar systems, 32 authored mathematical discoveries.
- Moving planets, parent-following moons, pulsing/drifting stars, rotating galaxy clouds.
- Instanced moving archive asteroids: 224 on mobile, 416 on desktop.
- Select planets, moons, stars and asteroids; preview, approach and explore lessons.
- Catchable archives offer parameter variants of eight curated rare topics, not hundreds of distinct lessons or an infinite curriculum.
- Atlas navigation/filtering, interactive mathematical canvases, contextual guidance, challenges, local journal and progress.
- Desktop: drag, wheel, arrow keys, PageUp/PageDown and Shift. W/A/S/D and Q/E remain fallback habits. Mobile: one finger look, pinch travel, two-finger pan. No directional arrow pad.
- Motion pauses during lessons and reduced-motion mode; display orbits are stylized, not gravitational physics.
- Progress is localStorage on the current origin; hosted progress will not automatically appear on localhost. The understanding record distinguishes visited, observed and solved discoveries.

Code map (all JS paths below are under dist/):
world.js defines regions and bodies; orbits.js defines pure orbital motion and encounters; living-space.js handles instanced archives and galaxies; universe.js handles scene, picking and travel; navigation.js contains navigation/gesture helpers; app.js coordinates UI and lesson state. discoveries.js, extended-content.js and rare-content.js contain learning content. math.js, extended-math.js and rare-math.js contain mathematical models. experiments.js, extended-experiments.js and rare-experiments.js render experiments. style.css and index.html define the interface. tests/ contains automated tests.

Priorities for the next implementation phase:
1. Start the local app, run npm test, and review the actual first screen and exploration. Earlier work reported 30 automated tests but did not complete real browser visual QA or measured performance benchmarks. Never treat those as already passed.
2. Test desktop and mobile layouts and controls: camera smoothness, travel interruption, moving-target picking, accidental touch selection, overlapping labels, panel overflow, orientation changes and entering/leaving lessons. Use browser tooling if available; report limitations honestly.
3. Measure frame pacing and identify concrete bottlenecks before optimization. Improve fluid exploration, responsive UI and first-view clarity while preserving existing functionality.
4. After stability, expand the living world with meaningful authored mathematical destinations and connections. Propose a bounded next content milestone grounded in the code. More objects alone do not mean more knowledge.
5. Each new topic needs correct assumptions, a visual interaction, feedback explaining effects, a challenge, and meaningful related topics. Preserve saved progress compatibility and bound memory/instance growth.

Working approach:
Start with a brief evidence-based assessment and a concrete implementation plan, then proceed with authorized improvements. Keep changes focused and reusable, preserve the vendored license, and use relevant correctness/regression tests. Report what changed, what was actually verified and what remains uncertain. Do not claim smoothness, responsiveness or correctness based only on code inspection. Do not publish or change hosting unless I request it. Hosting metadata is retained for provenance; local development needs no access to the original hosted environment. Git history is not included in this source export; initialize a local repository if useful.
