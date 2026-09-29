export const ENTRY_MS = 260;
export const UNLOCK_MS = 700;
export function readingHold(text: string, punchline = false) {
  return (
    Math.min(
      6000,
      Math.max(650, text.trim().split(/\s+/).filter(Boolean).length * 250),
    ) + (punchline ? 700 : 0)
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
