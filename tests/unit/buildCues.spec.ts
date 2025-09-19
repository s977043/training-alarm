// Unit tests for buildCues use case
import { buildCues } from '../../src/usecases/buildCues';
import { TimerPreset } from '../../src/entities/TimerPreset';

describe('buildCues', () => {
  test('generates half and final countdown cues for 30s preset', () => {
    const preset: TimerPreset = {
      id: 'p30',
      name: '30s',
      durationSec: 30,
      cuesPolicy: { half: true, extraMilestones: [], finalCountdownFrom: 10, tickEverySec: false },
    };
    const cues = buildCues(preset);
    // Halfway at 15 seconds
    expect(cues.some(c => c.kind === 'half' && c.atSec === 15)).toBe(true);
    // Final countdown begins at 20 seconds remaining (payload 10)
    expect(cues.some(c => c.kind === 'final_countdown' && c.payload === 10)).toBe(true);
  });

  test('generates half, milestone and final countdown cues for 60s preset', () => {
    const preset: TimerPreset = {
      id: 'p60',
      name: '60s',
      durationSec: 60,
      cuesPolicy: { half: true, extraMilestones: [45], finalCountdownFrom: 10, tickEverySec: false },
    };
    const cues = buildCues(preset);
    // Halfway at 30 seconds
    expect(cues.some(c => c.kind === 'half' && c.atSec === 30)).toBe(true);
    // Additional milestone at 45 seconds
    expect(cues.some(c => c.kind === 'milestone' && c.atSec === 45)).toBe(true);
    // Final countdown begins at 50 seconds (10 seconds remaining)
    expect(cues.some(c => c.kind === 'final_countdown' && c.atSec === 50 && c.payload === 10)).toBe(true);
  });

  test('generates half, milestone and final countdown cues for 80s preset', () => {
    const preset: TimerPreset = {
      id: 'p80',
      name: '80s',
      durationSec: 80,
      cuesPolicy: { half: true, extraMilestones: [60], finalCountdownFrom: 10, tickEverySec: false },
    };
    const cues = buildCues(preset);
    // Halfway at 40 seconds
    expect(cues.some(c => c.kind === 'half' && c.atSec === 40)).toBe(true);
    // Additional milestone at 60 seconds
    expect(cues.some(c => c.kind === 'milestone' && c.atSec === 60)).toBe(true);
    // Final countdown begins at 70 seconds
    expect(cues.some(c => c.kind === 'final_countdown' && c.atSec === 70 && c.payload === 10)).toBe(true);
  });
});
