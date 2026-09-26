import type { PersonId, ScreenId } from "../app/content-types.ts";
export type StoryState = {
  screenId: ScreenId;
  personId: PersonId | null;
  returning: boolean;
};
export const INITIAL: StoryState = {
  screenId: "S00",
  personId: null,
  returning: false,
};
export const IDS: PersonId[] = ["milo", "nora", "theo"];
export function validState(value: unknown): value is StoryState {
  if (!value || typeof value !== "object") return false;
  const s = value as StoryState;
  return (
    /^S(0[0-9]|[12][0-9]|3[01])$/.test(s.screenId) &&
    typeof s.returning === "boolean" &&
    (s.personId === null || IDS.includes(s.personId)) &&
    (Number(s.screenId.slice(1)) < 2 || s.personId !== null)
  );
}
export function nextState(
  state: StoryState,
  selected: PersonId | null,
): StoryState {
  if (state.screenId === "S01")
    return selected
      ? {
          ...state,
          screenId: state.returning ? "S23" : "S02",
          personId: selected,
        }
      : state;
  if (state.screenId === "S31") return state;
  return {
    ...state,
    screenId: `S${String(Number(state.screenId.slice(1)) + 1).padStart(2, "0")}`,
  };
}
export function switchPerson(): StoryState {
  return { screenId: "S01", personId: null, returning: true };
}
export function routeFor(personId: PersonId): StoryState[] {
  return Array.from({ length: 32 }, (_, i) => ({
    screenId: `S${String(i).padStart(2, "0")}`,
    personId: i < 2 ? null : personId,
    returning: false,
  }));
}
