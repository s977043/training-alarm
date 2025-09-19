// Unit tests for buildCountdown use case
import { buildCountdown } from '../../src/usecases/buildCountdown';

test('buildCountdown returns descending array', () => {
  const countdown = buildCountdown(5);
  expect(countdown).toEqual([5, 4, 3, 2, 1]);
});
