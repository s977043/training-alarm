// Miscellaneous mathematical helpers

/**
 * Returns the remainder of dividing two numbers in a way that always yields a positive
 * remainder.  Useful for angle wrapping.
 */
export function mod(a: number, n: number): number {
  return ((a % n) + n) % n;
}
