# Third-party notices

This project uses packages installed from npm rather than vendored third-party source. Their licenses and notices remain with their distributed packages. Do not strip dependency license headers from build output.

| Package family                       | License    | Source                                                                  |
| ------------------------------------ | ---------- | ----------------------------------------------------------------------- |
| React, React DOM, React Server DOM   | MIT        | https://github.com/facebook/react                                       |
| Next.js and its ESLint configuration | MIT        | https://github.com/vercel/next.js                                       |
| Vite, its RSC plugin, vinext         | MIT        | https://github.com/vitejs/vite and https://github.com/cloudflare/vinext |
| TypeScript                           | Apache-2.0 | https://github.com/microsoft/TypeScript                                 |
| Playwright                           | Apache-2.0 | https://github.com/microsoft/playwright                                 |
| ESLint                               | MIT        | https://github.com/eslint/eslint                                        |
| DefinitelyTyped type definitions     | MIT        | https://github.com/DefinitelyTyped/DefinitelyTyped                      |

The lockfile records the actual resolved dependency graph, including transitive packages with their own terms. Before redistributing a bundled release, retain the notices supplied by those packages. No permissive license for this project's own code or artwork is granted by this dependency list.
