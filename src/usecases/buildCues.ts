// Pure function to build an array of cues based on a preset.
import { TimerPreset } from '../entities/TimerPreset';
import { Cue } from '../entities/Cue';

/**
 * Generates the list of cues that should occur during a session.  Each cue has
 * an absolute time (`atSec`) relative to the session start and a type (`kind`).
 *
 * @param preset The preset describing the desired duration and cue policy.
 */
export function buildCues(preset: TimerPreset): Cue[] {
  const { durationSec, cuesPolicy } = preset;
  const cues: Cue[] = [];

  if (cuesPolicy.half) {
    cues.push({ atSec: Math.floor(durationSec / 2), kind: 'half' });
  }
  for (const m of cuesPolicy.extraMilestones ?? []) {
    if (m < durationSec) cues.push({ atSec: m, kind: 'milestone' });
  }
  // Final countdown cues
  for (let s = Math.min(cuesPolicy.finalCountdownFrom, durationSec - 1); s >= 1; s--) {
    cues.push({ atSec: durationSec - s, kind: 'final_countdown', payload: s });
  }
  // Tick cues every second
  if (cuesPolicy.tickEverySec) {
    for (let t = 1; t <= durationSec; t++) cues.push({ atSec: t, kind: 'tick' });
  }
  cues.sort((a, b) => a.atSec - b.atSec);
  return cues;
}
