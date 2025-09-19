// Interface for audio playback services

/**
 * Describes methods for playing tones and spoken phrases.  Concrete
 * implementations can use expo-av, expo-speech, or other audio libraries.
 */
export interface AudioPort {
  /** Preloads any necessary audio assets. */
  preload(): Promise<void>;
  /** Plays a short tone to indicate a tick. */
  playTone(): void;
  /** Speaks a phrase aloud. */
  speak(text: string): void;
}
