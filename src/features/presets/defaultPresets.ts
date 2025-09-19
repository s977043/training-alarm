import { TimerPreset } from '../../entities/TimerPreset';

export const defaultPresets: TimerPreset[] = [
  {
    id: 'p30',
    name: '30秒',
    durationSec: 30,
    cuesPolicy: {
      half: true,
      extraMilestones: [],
      finalCountdownFrom: 10,
      tickEverySec: true,
    },
  },
  {
    id: 'p60',
    name: '60秒',
    durationSec: 60,
    cuesPolicy: {
      half: true,
      extraMilestones: [45],
      finalCountdownFrom: 10,
      tickEverySec: true,
    },
  },
  {
    id: 'p80',
    name: '80秒',
    durationSec: 80,
    cuesPolicy: {
      half: true,
      extraMilestones: [60],
      finalCountdownFrom: 10,
      tickEverySec: true,
    },
  },
];
