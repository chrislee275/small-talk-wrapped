import { readdir, readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { resolve, relative, extname } from "node:path";
const root = resolve(import.meta.dirname, "..");
const excluded = new Set([
  ".git",
  "node_modules",
  "test-results",
  "playwright-report",
  ".vite",
  ".vinext",
  ".next",
]);
const textExt = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".css",
  ".json",
  ".md",
  ".txt",
  ".html",
  ".svg",
  ".yml",
]);
// Construct patterns so the scanner itself is not a false positive.
const rules = [
  new RegExp("/Use" + "rs/[^/\\s]+/"),
  new RegExp("appg" + "prj_[a-z0-9]+"),
  new RegExp("appg" + "dep_[a-z0-9]+"),
  new RegExp("sk-" + "[a-zA-Z0-9_-]{24,}"),
  new RegExp("-----BEGIN " + "(?:RSA |EC )?PRIVATE KEY"),
  new RegExp("https://[^\\s]+\\." + "chatgpt\\.site"),
  new RegExp("[A-Z0-9._%+-]+@" + "[A-Z0-9.-]+\\.[A-Z]{2,}", "i"),
];
let count = 0;
function check(text, label) {
  // The owner-approved fictional demo link is public; all other Sites URLs
  // remain disallowed to avoid exposing the original project.
  const scanned = text.replace(
    /https:\/\/small-talk-wrapped\.chrislee275\.chatgpt\.site(?=$|[\s/"')?#])/g,
    "[approved-public-demo]",
  );
  for (const rule of rules)
    if (rule.test(scanned))
      throw new Error(
        `Public audit: forbidden identifier or secret-like value in ${label}`,
      );
}
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (excluded.has(e.name)) continue;
    const path = resolve(dir, e.name);
    if (e.isDirectory()) {
      await walk(path);
      continue;
    }
    if (e.name.endsWith(".map")) throw new Error("Sourcemap in candidate");
    if (textExt.has(extname(path))) {
      check(await readFile(path, "utf8"), relative(root, path));
      count++;
    }
  }
}
await walk(root);
try {
  const commits = execFileSync("git", ["rev-list", "--all"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  })
    .trim()
    .split("\n")
    .filter(Boolean);
  for (const commit of commits) {
    const names = execFileSync(
      "git",
      ["ls-tree", "-r", "--name-only", commit],
      { cwd: root, encoding: "utf8" },
    )
      .trim()
      .split("\n");
    for (const file of names) {
      if (textExt.has(extname(file)))
        check(
          execFileSync("git", ["show", `${commit}:${file}`], {
            cwd: root,
            encoding: "utf8",
            maxBuffer: 20 * 1024 * 1024,
          }),
          `history:${file}`,
        );
    }
  }
  const remotes = execFileSync("git", ["remote"], {
    cwd: root,
    encoding: "utf8",
  }).trim();
  if (remotes) {
    if (remotes !== "origin") throw new Error("Unexpected Git remote");
    const allowed = [
      "https://github.com/chrislee275/small-talk-wrapped.git",
      "git@" + "github.com:chrislee275/small-talk-wrapped.git",
    ];
    for (const direction of [[], ["--push"]]) {
      const urls = execFileSync(
        "git",
        ["remote", "get-url", ...direction, "--all", "origin"],
        {
          cwd: root,
          encoding: "utf8",
        },
      )
        .trim()
        .split("\n");
      if (urls.length !== 1 || !allowed.includes(urls[0]))
        throw new Error("Remote is not the approved public repository");
    }
  }
  console.log(
    `PASS: ${count} text files and ${commits.length} commits; remote allowlist and identifier checks passed`,
  );
} catch (error) {
  if (error.status !== 128) throw error;
  console.log(`PASS: ${count} text files; Git history not created yet`);
}
