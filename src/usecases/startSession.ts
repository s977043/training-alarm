// Logic for starting a new training session

import { TimerPreset } from '../entities/TimerPreset';
import { Session } from '../entities/Session';

/**
 * Creates a new session object.  A unique id is generated based on the current
 * timestamp.  The session initially has zero progress and a state of
 * `running`.  It is the responsibility of the session runner to handle
 * pausing, resuming and completion.
 */
export function startSession(preset: TimerPreset): Session {
  return {
    id: `s${Date.now()}`,
    preset,
    startedAt: Date.now(),
    state: 'running',
    progressSec: 0,
  };
}
