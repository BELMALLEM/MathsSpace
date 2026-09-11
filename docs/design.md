# MathsGalaxy Design Direction

Build MathsGalaxy as a mathematical exploration game that a curious gamer would
choose to keep playing. It should feel like travelling through a real space of
ideas: readable, surprising, playful, and mathematically serious.

## Player Experience

The player should quickly understand:

- I can move, look, select, approach, and recover my bearings.
- Nearby objects are worth investigating.
- Distant landmarks suggest bigger ideas ahead.
- Mathematical insight changes what I can do in the world.
- Dr. Mira is a helpful mathematician companion, not an external AI chatbot.
- Scaling of objects is respected following how they can be perceived in real world.
- spaceships are sort of some fantastical ships adapted to this MathsSpace world without over-abusing the idea. Being loyal to our design is more important than adding ideas.

Avoid empty travel, decorative-only objects, generic quest clutter, and lessons
that amount to "move a slider and read text."

## Controls

- Desktop primary movement: arrow keys.
- Desktop vertical movement: PageUp/PageDown.
- Shift accelerates.
- Drag empty space to look.
- Scroll or trackpad glides forward/back.
- Click object or label to preview; Approach travels; Explore opens lesson.
- Escape stops/dismisses/returns.
- W/A/S/D and Q/E may remain fallback habits, but visible guidance is arrow-first.
- Mobile: one-finger visible when clicking pad for control on all directions as used in real mobile games.
- Menus, dialogs, and experiments must not accidentally steer the camera.

Movement must have smooth acceleration, reliable stopping, cancellable travel,
and an easy Recenter/Home recovery.

## World Meaning

Scale communicates conceptual role, not universal importance:

- Galaxies: broad mathematical families.
- Stars: major ideas.
- Planets: substantial concepts.
- Moons: examples, consequences, and connected cases.
- Asteroids: compact puzzles, variants, and surprises.

A large world should still have direction. Always provide a useful nearby lead
and an understandable longer-term destination.

The world must signal breadth early. Even while only a subset is deeply
playable, MathsGalaxy should visibly contain a wide range of mathematical
territories: number, geometry, algebra, analysis, probability, logic, topology,
computation, discrete mathematics, and surprising bridges between them. Honest
states such as dormant, unmapped, weak signal, or requires another idea are
better than hiding the breadth or pretending unfinished regions are complete.

## Mathematical Gameplay Loop

Each serious encounter should follow this loop:

notice something strange -> investigate -> predict -> manipulate -> observe ->
explain -> apply the discovery.

Good outcomes change the world or future choices. Examples:

- Align waves to restore a signal.
- Use sine/cosine to calibrate a scanner direction.
- Count a finite recursion to unlock a hidden archive.
- Use golden-angle spacing to reveal a Fibonacci route.

Do not treat visiting, watching, or opening a panel as understanding.

## Dr. Mira

Dr. Mira is authored, contextual, brief, and dismissible. She should:

- notice the player's current route state;
- ask useful questions;
- offer optional hints;
- identify prerequisites;
- distinguish definition, example, theorem, proof, approximation, conjecture,
  experiment, and mystery;
- avoid claiming a simulation proves a theorem or solves an open problem.

## Breadth And Depth

Do not choose between a huge world and a playable route. The near-term target is
wide visible scope plus narrow deep proof:

- wide scope: enough named landmarks and mathematical families to feel like a
  true galaxy of ideas;
- deep proof: at least one satisfying 15-20 minute route where mathematics
  changes what the player can do.

A newcomer should be able to:

- move and select a destination within one minute;
- find a purposeful interaction within three minutes;
- explain and apply at least one discovered relationship by the end.

Expand breadth with identity and direction, not empty distance. Expand depth
when a route can support the full loop: notice -> predict -> manipulate ->
observe -> explain -> apply.
