// Interface for persistent storage services

import { TimerPreset } from '../entities/TimerPreset';

/**
 * Describes methods for storing and retrieving timer presets and other
 * application data. Concrete implementations can use AsyncStorage, 
 * SQLite, or other storage mechanisms.
 */
export interface StoragePort {
  /** Retrieves saved timer presets. */
  getPresets(): Promise<TimerPreset[]>;
  /** Saves timer presets to storage. */
  savePresets(presets: TimerPreset[]): Promise<void>;
}