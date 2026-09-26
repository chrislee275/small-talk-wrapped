export const ENTRY_MS = 260;
export const UNLOCK_MS = 700;
export function readingHold(text: string, punchline = false) {
  return (
    Math.min(3200, Math.max(650, Array.from(text).length * 42)) +
    (punchline ? 700 : 0)
  );
}
export function remainingHold(
  previousShown: number,
  now: number,
  text: string,
  punchline: boolean,
) {
  return Math.max(0, previousShown + readingHold(text, punchline) - now);
}
