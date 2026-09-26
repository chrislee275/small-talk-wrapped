import { readFile, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
const root = new URL("../", import.meta.url);
const data = JSON.parse(
  await readFile(new URL("content/demo.json", root), "utf8"),
);
assert.equal(data.provenance, "FICTIONAL_DEMO");
const screens = [];
for (const [person, entries] of [
  [null, data.common],
  ...Object.entries(data.personal),
]) {
  for (const entry of entries) {
    const n = Number(entry.id.slice(1));
    const template =
      n === 31
        ? "G"
        : n === 30
          ? "F"
          : n === 29
            ? "E"
            : n >= 24
              ? "D"
              : (n >= 15 && n <= 20) || n === 23
                ? "C"
                : n >= 4 && n <= 13
                  ? "B"
                  : "A";
    screens.push({
      ...entry,
      personId: person,
      revision: data.revision,
      provenance: data.provenance,
      template,
      theme:
        n === 29 || n === 31
          ? "night"
          : template === "C"
            ? "signal"
            : "archive",
      eyebrow: entry.eyebrow ?? `${person.toUpperCase()} / FICTIONAL DEMO`,
      interaction: entry.interaction ?? "none",
      blocks: entry.blocks.map(([kind, text, speakerId]) => ({
        kind,
        text,
        ...(speakerId ? { speakerId } : {}),
        provenance: data.provenance,
      })),
    });
  }
}
assert.equal(screens.length, 48);
assert.equal(new Set(screens.map((s) => `${s.personId}/${s.id}`)).size, 48);
const expected = [
  ...Array.from({ length: 23 }, (_, i) => `S${String(i).padStart(2, "0")}`),
  "S31",
];
assert.deepEqual(
  data.common.map((s) => s.id),
  expected,
);
for (const p of data.people)
  assert.deepEqual(
    data.personal[p.id].map((s) => s.id),
    Array.from({ length: 8 }, (_, i) => `S${i + 23}`),
  );
const output = `// Generated from content/demo.json. Fictional demo only.\nimport type { StoryScreen, DemoPerson } from "./content-types";\nexport const PEOPLE: DemoPerson[] = ${JSON.stringify(data.people, null, 2)};\nexport const PERIOD = ${JSON.stringify(data.period)};\nexport const SCREENS: StoryScreen[] = ${JSON.stringify(screens, null, 2)};\n`;
const target = new URL("app/content.generated.ts", root);
if (process.argv.includes("--check"))
  assert.equal(await readFile(target, "utf8"), output, "Run content:generate");
else await writeFile(target, output);
console.log("PASS: 48 fictional content records; deterministic output");
