// Describes a collection of voice samples for announcing cues

export interface VoicePack {
  id: string;
  /** Locale of the voice (e.g. "en-US"). */
  locale: string;
  /** Sample rate in Hz. */
  sampleRate: number;
  /** Mapping of cue labels to audio asset names or URIs. */
  labels: Record<string, string>;
}
