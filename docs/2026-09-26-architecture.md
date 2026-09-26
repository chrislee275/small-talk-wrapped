# Architecture

## Content and rendering

`content/demo.json` is the sole authoring source. The deterministic generator validates coverage, assigns templates/themes and writes the typed generated module. It never searches parent directories or reads chat archives. `FICTIONAL_DEMO` and `demo-1` replace any real-record verification claims.

The model retains ScreenId, PersonId, StoryScreen, explicit block kinds and templates A–G. Quote bubbles require an explicit fictional speaker ID; names in prose are not parsed as attribution. Templates map to entry, chronicle, evidence, personal story, achievement, export and ending surfaces.

One reusable screen shell renders blocks. Special interactions use explicit `interaction` values, not a test of the person's name. Each personal branch has exactly one paper/checklist/restart screen. Data and types intentionally support only the three fixture characters.

## State boundary

The active screen and person are memory-only. History entries carry an in-memory session token. Refresh replaces the current entry with the safe opening; old sessions cannot restore a private/person-specific route. Switching person creates a new session, clears completed reveals and returns to unselected radio cards, then proceeds to S23.

The screen component remounts on navigation. Completed reveals are remembered within the active session so Back does not force a second wait. Timers, media subscriptions and intersection observers clean up on unmount. There is no localStorage, server state, authentication or upload.

## Motion and input

Ordinary sequences begin with one visible beat. Later content waits for visibility and remaining reading time, with a longer final-beat hold. The name montage is separately visibility-gated and pauses when offscreen. Reduced motion displays passive content directly; signature buttons still work but bypass their animated wait. Show All bypasses every sequence.

The neutral ScrollGate policy was selected from the original project's generic implementation. A gesture must start at the bottom; the scroll that reaches the bottom is not navigation. Wheel inertia needs a separate sustained burst, and interactive controls do not trigger gesture navigation. Keyboard and visible buttons remain the primary alternatives.

## Runtime

React and TypeScript retain the existing vinext/Vite runtime family. The candidate omits hosting bindings, authentication scaffolding, databases, remote fonts, image services and unused component packages. Build output is ignored by Git. No production URL is assumed.
