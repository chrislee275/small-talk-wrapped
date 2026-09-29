// Keep English words intact when laying out the local canvas export.
export function wrapCardText(
  text: string,
  measure: (text: string) => number,
  maxWidth: number,
): string[] {
  const lines: string[] = [];
  let row = "";
  for (const word of text.trim().split(/\s+/).filter(Boolean)) {
    const next = row ? `${row} ${word}` : word;
    if (row && measure(next) > maxWidth) {
      lines.push(row);
      row = word;
    } else row = next;
  }
  if (row) lines.push(row);
  return lines;
}
