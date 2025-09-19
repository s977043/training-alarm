// Produces a sequence of labels for the pre‑session countdown.

/**
 * Returns an array of numbers representing the countdown before a session starts.
 * For example, a 5 second countdown returns [5, 4, 3, 2, 1].  The caller can
 * then speak these numbers or display them to the user.
 */
export function buildCountdown(countFrom: number = 5): number[] {
  const countdown: number[] = [];
  for (let s = countFrom; s >= 1; s--) {
    countdown.push(s);
  }
  return countdown;
}
