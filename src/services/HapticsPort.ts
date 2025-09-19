// Interface for haptic feedback

export interface HapticsPort {
  /** Provides a light impact vibration for a tick cue. */
  tick(): void;
  /** Provides a stronger vibration for important cues like milestones. */
  notifySuccess(): void;
}
