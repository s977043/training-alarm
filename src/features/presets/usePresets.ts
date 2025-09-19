// Hook to load and save timer presets
import { useEffect, useState } from 'react';
import { StoragePort } from '../../services/StoragePort';
import { TimerPreset } from '../../entities/TimerPreset';

export function usePresets(storage: StoragePort) {
  const [presets, setPresets] = useState<TimerPreset[]>([]);
  useEffect(() => {
    storage.getPresets().then(setPresets);
  }, [storage]);
  const save = async (list: TimerPreset[]) => {
    await storage.savePresets(list);
    setPresets(list);
  };
  return { presets, save };
}
