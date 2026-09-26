import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import {
  IDS,
  INITIAL,
  nextState,
  routeFor,
  switchPerson,
  validState,
} from "../lib/story-state.ts";
import { ScrollGate } from "../lib/scroll-gate.ts";
import { remainingHold } from "../lib/motion.ts";
const demo = JSON.parse(
  readFileSync(new URL("../content/demo.json", import.meta.url), "utf8"),
);

test("48 fictional blocks cover three complete 32-screen journeys", () => {
  assert.equal(
    demo.common.length +
      Object.values(demo.personal).reduce(
        (sum: number, rows) => sum + (rows as unknown[]).length,
        0,
      ),
    48,
  );
  for (const id of IDS) {
    const route = routeFor(id);
    assert.equal(route.length, 32);
    assert.equal(new Set(route.map((s) => s.screenId)).size, 32);
    for (const state of route) {
      const rows =
        Number(state.screenId.slice(1)) >= 23 && state.screenId !== "S31"
          ? demo.personal[id]
          : demo.common;
      assert.equal(
        rows.filter((s: { id: string }) => s.id === state.screenId).length,
        1,
      );
      assert.ok(validState(state));
    }
  }
});
test("all quote speakers belong to the fictional roster, one explicit signature per branch", () => {
  for (const id of IDS) {
    const person = demo.people.find((p: { id: string }) => p.id === id);
    const signatures = demo.personal[id].filter((s: { interaction: string }) =>
      ["paper", "checklist", "restart"].includes(s.interaction),
    );
    assert.equal(signatures.length, 1);
    assert.equal(signatures[0].interaction, person.signature);
    assert.equal(signatures[0].id, person.signatureScreen);
  }
  for (const screen of [
    ...demo.common,
    ...Object.values(demo.personal).flat(),
  ]) {
    for (const [kind, , speaker] of screen.blocks)
      if (kind === "directQuote") assert.ok(IDS.includes(speaker));
      else assert.equal(speaker, undefined);
  }
});
test("stats and ranks have a single data source and are internally consistent", () => {
  const ranked = [...demo.people].sort((a, b) => b.messages - a.messages);
  ranked.forEach((p, i) => {
    assert.equal(p.rank, i + 1);
    assert.ok(p.activeYear >= 2031 && p.activeYear <= 2033);
  });
  assert.equal(
    ranked.reduce((n, p) => n + p.messages, 0),
    2085,
  );
});
test("selection has no implicit default; switching skips public chapters safely", () => {
  const selection = nextState(INITIAL, null);
  assert.equal(nextState(selection, null), selection);
  assert.equal(nextState(selection, "milo").screenId, "S02");
  const switched = switchPerson();
  assert.equal(switched.personId, null);
  assert.deepEqual(nextState(switched, "nora"), {
    screenId: "S23",
    personId: "nora",
    returning: true,
  });
  assert.equal(
    validState({ screenId: "S25", personId: null, returning: false }),
    false,
  );
});
test("wheel arriving at bottom does not advance; a separate intentional burst does", () => {
  const gate = new ScrollGate();
  assert.equal(
    gate.wheel({ time: 0, delta: 60, atBottom: false, allowed: true }),
    false,
  );
  for (const time of [100, 200, 300])
    assert.equal(
      gate.wheel({ time, delta: 60, atBottom: true, allowed: true }),
      false,
    );
  assert.equal(
    gate.wheel({ time: 1500, delta: 60, atBottom: true, allowed: true }),
    false,
  );
  assert.equal(
    gate.wheel({ time: 1560, delta: 60, atBottom: true, allowed: true }),
    false,
  );
  assert.equal(
    gate.wheel({ time: 1620, delta: 60, atBottom: true, allowed: true }),
    true,
  );
  assert.equal(
    gate.wheel({ time: 1640, delta: 60, atBottom: true, allowed: true }),
    false,
  );
});
test("touch preserves natural scrolling and elapsed reading time avoids another wait", () => {
  const gate = new ScrollGate();
  const swipe = {
    time: 2000,
    startAtBottom: false,
    endAtBottom: true,
    dx: 0,
    dy: 100,
    duration: 300,
    allowed: true,
  };
  assert.equal(gate.touch(swipe), false);
  assert.equal(gate.touch({ ...swipe, startAtBottom: true }), true);
  assert.equal(remainingHold(0, 10000, "短句", true), 0);
  assert.ok(
    remainingHold(1000, 1000, "短句", true) >
      remainingHold(1000, 1000, "短句", false),
  );
});
