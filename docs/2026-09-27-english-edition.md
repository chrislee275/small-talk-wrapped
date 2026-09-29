# English edition — 2026-09-27

## Scope

The local portfolio candidate is now English-only. The original application, hosting and repository remotes are unchanged. No publication or new Git commit was performed.

All 48 records retain their screen IDs, fictional speakers, statistics and interaction assignments. Copy was adapted for conversational English, including three distinct character voices. The earlier editorial fixes remain: plant pots paired with drip trays, a count-up tea timer, non-spoiling interaction titles and a separate printing story for the personal branch.

The README now leads with the product and the owner's role, explains the 24 shared / 24 personal record structure, and uses English controls and screenshots. AI collaboration and unverified testing remain explicit.

## Files changed across the editorial and English passes

- `README.md`
- `content/demo.json`, `app/content.generated.ts`
- `app/layout.tsx`, `app/globals.css`, `app/story-experience.tsx`, `app/motion.tsx`, `app/save-card.tsx`
- `lib/motion.ts`, new `lib/card-text.ts`
- `tests/content.test.ts`, `tests/browser/journey.spec.ts`, new `tests/browser/english.spec.ts`
- `docs/images/selection.png`, `docs/images/interaction.png`, `docs/images/share-card.png`
- `docs/2026-09-26-architecture.md`, `docs/2026-09-26-assets.md`, `docs/2026-09-26-case-study.md`, `docs/2026-09-26-qa.md`
- This update record.

## Verification

- Deterministic generation: 48 records.
- ESLint and TypeScript: passed.
- Seven unit cases: passed, including English word-based timing and word-safe export wrapping.
- Six existing Chromium browser cases: passed with English selectors and updated screenshots. They cover all three routes, signature interactions, unlock, downloads, navigation, montage visibility, reduced motion, 320/360/390 px and desktop layouts.
- Source scan: no remaining Han-script copy in the runtime, fixture, helpers or README.
- Privacy scanner: passed on the working files, existing build text and two existing commits. The existing build is from the earlier edition; this is not a fresh English production-bundle audit.

- Additional Chromium case: S02–S22, S31 and all three personal branches passed at 320 px with 200% root text sizing and reduced motion. Checked English-only visible text, page/card/button overflow, complete ending text, and downloaded all three English PNGs. The selector's keyboard and image fallback checks remain covered by the existing suite.
- Fixed issues found by this case: enlarged statistics overflow and quantity props lacking wrapping. Long English words now wrap inside controls and panels; credits grow to fit. The first run also exposed a test-only race when reduced motion removed Show All before its click; the test now accepts that completed state.
- README screenshots were inspected in English, along with an exported English PNG. No page-level JavaScript errors were reported in the full-route and English-specific runs.

No physical-device, Safari, screen-reader or new production-build claim is made. This edition remains a local review candidate. Browser plugin not available; checks used the repository's Playwright Chromium workflow at the local preview URL.
