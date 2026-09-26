# Case study: a retrospective, not a slideshow

## Problem

A chronological story can become a wall of text, while excessive motion can make reading feel like waiting. Multiple character perspectives also risk duplicated screens and state leaking between branches.

## Product approach

The candidate uses one shared chapter followed by one selected perspective. Three authored personalities demonstrate different interaction metaphors: a paper unfolding, an outcome checklist and a restart button. Each reveals an already-written fictional outcome rather than offering a branching game choice.

The visual system borrows the _idea_ of everyday pixel software: low-detail props, stepped controls and calm reading surfaces. It does not use copied game assets. DOM text remains selectable and responsive.

## Engineering tradeoffs

- Explicit fixture fields are easier to audit than parsing speaker names out of arbitrary prose.
- Keeping memory-only state simplifies reset and privacy boundaries; refresh intentionally loses progress.
- Visible first content avoids an empty entrance. Timing still leaves a short final-beat hold.
- A local canvas export is predictable and needs no external service, but mobile save behavior still varies by browser.
- A separate clean repository is safer than publishing a deleted/redacted version of historical files.

## Evaluation

This candidate's measurements and validation are listed in QA. No loading-speed claim is inferred from file size, and no automated viewport check is presented as real-device testing. Further human review should evaluate whether each joke lands naturally, not just whether timers fire.

## What changed for public presentation

The public candidate contains newly authored fictional stories and original geometric placeholder portraits. The original material, individual identities and artwork are absent. It showcases product decisions and engineering mechanisms without asking readers to access private history.
