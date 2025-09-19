// Domain representation of an active or completed session

import { TimerPreset } from './TimerPreset';

export type SessionState = 'pending' | 'running' | 'paused' | 'completed';

export interface Session {
  id: string;
  preset: TimerPreset;
  startedAt: number; // epoch milliseconds
  state: SessionState;
  /** The number of seconds elapsed since the session began. */
  progressSec: number;
}
