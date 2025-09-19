// Derives the next planned tick time based on elapsed time

/**
 * Given an elapsed number of seconds, returns the timestamp of the next tick in
 * milliseconds.  This helper is intended to minimise drift by scheduling the
 * next timeout relative to the actual start time rather than relying on
 * repeated intervals.
 */
export function nextTickPlan(startedAt: number, elapsedSec: number, tickInterval: number = 1000): number {
  return startedAt + (elapsedSec + 1) * tickInterval;
}
