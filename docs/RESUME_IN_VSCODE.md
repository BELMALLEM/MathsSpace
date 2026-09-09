# Continue AXIOM Locally

## Open and run
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

Continue the existing AXIOM project in this open workspace. Read `AGENTS.md`, `README.md`, `package.json`, `docs/prompt.md`, `docs/PROJECT_BRIEF.md`, `docs/QA_REPORT.md`, and this handoff before making changes. Inspect the actual code and run the existing tests before claiming its state. This is an existing working project: preserve its visual identity and architecture; do not scaffold a replacement.

Product vision:
AXIOM is a playful, highly visual, interactive Three.js universe for understanding mathematics. The main activity is exploring outer space and manipulating mathematical ideas. It should feel alive, intuitive, spacious and enjoyable, with a clean interface on desktop and mobile. Avoid academic textbook screens and generic game tasks. Make abstraction tangible: let learners change something, observe an effect, receive contextual guidance, and understand why it happens. Clearly distinguish experiments, proofs and conjectures.

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
