// Interface for obtaining the current time and scheduling intervals

export interface ClockPort {
  /** Returns the current time in milliseconds. */
  now(): number;
  /**
   * Schedules a callback to occur after the given delay in milliseconds.  The
   * implementation should minimise drift by using high‑resolution timers when
   * available.
   */
  setTimeout(callback: () => void, delay: number): any;
  /** Clears a scheduled timeout. */
  clearTimeout(id: any): void;
}
