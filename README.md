# BIW Wrapped

**A mobile-first, text-first interactive retrospective — three fictional perspectives, one shared story.**

Portfolio candidate · React + TypeScript + vinext · Local-only release

> All characters, dialogue, dates, statistics and artwork in this repository are fictional demonstration material. This is not an anonymized chat archive. No private source records, portraits, hosting credentials or original Git history are included.

## A small story, built as a product

Choose Milo, Nora or Theo. Follow a common retrospective, explore a personal branch, unlock an achievement and download a clearly labelled fictional PNG card. The journey has 32 screens per person, backed by 48 content records rather than 96 duplicated screens.

| Choose a perspective                                            | Reveal a story                                                     | Keep a fictional card                                            |
| --------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![Three fictional character choices](docs/images/selection.png) | ![Milo's unfolding paper interaction](docs/images/interaction.png) | ![A fictional personal summary card](docs/images/share-card.png) |

The interface is Chinese to preserve the compact conversational rhythm. English headings and the guide below explain how to explore it.

## Run locally

Requirements: Node.js 22.13+ and npm. No account, API key, database, sibling repository or private content source is required.

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:5186**. For production output:

```sh
npm run build
npm start
```

### English interaction guide

- **打开这本日常** — start the journey.
- Choose a character, then **选好了，继续** — continue. There is no default selection.
- Use the down arrow to advance. Scrolling reads the page first; a separate upward swipe at the bottom may advance. No screen auto-advances.
- **显示全部** — show all content without waiting for motion.
- **展开说明 / 开始揭晓 / Restart** — reveal the fictional outcome, not choose a different past.
- **点击解锁成就** — unlock an achievement.
- **这张值得一个Story** — download a PNG, not automatically post to a social network.
- At the end, **换个视角继续看** selects another person and skips the common chapters; **从开头再看** restarts. Refresh returns to the safe opening.

## What this demonstrates

- **Product design:** narrative hierarchy, deliberate reveal pacing, and a motion budget with one personal signature per branch.
- **Frontend engineering:** typed content, one active person, memory-only state, explicit interaction configuration, clean timer/observer teardown and natural scrolling.
- **Accessible presentation:** DOM text, native radio controls, keyboard focus, reduced-motion support, show-all controls and visible image fallbacks.
- **Delivery judgment:** public-safe fixtures, an independent build, targeted tests and explicit limits on what has been verified.

## Design decisions

The visual language uses stepped pixel controls, cream story surfaces, neutral evidence panels and a navy finale. It uses no third-party game artwork, external fonts or runtime image services. Three original geometric SVG portraits stay small without a high-resolution photo pipeline.

Headings and the first beat appear immediately. Later reveals count time already spent reading, while punchlines retain a short hold. The name montage starts only when visible and pauses offscreen. Long content scrolls naturally; controls are not pinned over text.

Statistics, ranks and export cards read from the same fictional dataset. The export is rendered locally to a 1080 × 1920 canvas and visibly marked as fictional. Nothing is uploaded.

## Authorship and AI collaboration

The project owner directed the concept, visual intent, interaction requirements, privacy boundaries and review decisions. AI assistance was used for implementation, fictional fixture drafting, geometric asset code and automated test authoring. The candidate is AI-assisted work, not a claim of entirely handwritten code or independently reviewed accessibility certification.

Human acceptance of this public candidate and its final licensing is still pending. Automated results are recorded separately from real-device and assistive-technology testing in [QA](docs/2026-09-26-qa.md).

## Verify

```sh
npm run content:check
npm run lint
npm run typecheck
npm test
npx playwright install chromium
npm run test:e2e
npm run build
npm run audit:public
```

Browser tests cover the three journeys, boundary states and viewport scenarios. They also capture the three README screenshots from the fictional app. See [architecture](docs/2026-09-26-architecture.md), [case study](docs/2026-09-26-case-study.md), [asset provenance](docs/2026-09-26-assets.md) and [release checklist](docs/2026-09-26-release-checklist.md).

## Limits and licensing

This is a portfolio candidate, not a general-purpose CMS or analytics product. The vinext dependency is pinned to a beta release; no hosting workflow or automated deployment is provided. Synthetic data demonstrates interaction design, not real-world group analysis.

No open-source license has been selected. Public release and reuse terms require owner approval. Third-party packages retain their respective licenses; see [notices](THIRD_PARTY_NOTICES.md). There is no public repository or live demo created by this candidate.
