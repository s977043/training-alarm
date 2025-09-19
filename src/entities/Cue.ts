// Representation of individual cues in a session

/** Types of cues that can occur during a training session. */
export type CueKind =
  | 'half'
  | 'milestone'
  | 'final_countdown'
  | 'tick';

export type Cue = {
  /** The number of seconds elapsed when this cue should occur. */
  atSec: number;
  /** The kind of cue. */
  kind: CueKind;
  /** Optional payload, such as the remaining seconds during a final countdown. */
  payload?: number;
};
