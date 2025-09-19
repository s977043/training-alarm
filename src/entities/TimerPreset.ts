// Defines timer presets and cue policies.

export type CuesPolicy = {
  /** Whether to announce the halfway point. */
  half: boolean;
  /** Optional extra milestones to announce during the session, given in seconds. */
  extraMilestones?: number[];
  /** Number of seconds before the end at which to start the final countdown. */
  finalCountdownFrom: number;
  /** Whether to play a tick sound every second. */
  tickEverySec: boolean;
};

export type TimerPreset = {
  id: string;
  /** Display name for the preset (e.g. "60\u202fs" or "80\u202fs"). */
  name: string;
  /** Total duration in seconds. */
  durationSec: number;
  /** Policy for when cues should be triggered. */
  cuesPolicy: CuesPolicy;
  /** Optional identifier for a voice pack to use when announcing cues. */
  voicePackId?: string;
};
