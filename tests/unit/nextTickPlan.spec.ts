// Unit tests for nextTickPlan use case
import { nextTickPlan } from '../../src/usecases/nextTickPlan';

test('nextTickPlan schedules one second later', () => {
  const now = Date.now();
  const next = nextTickPlan(now, 0, 1000);
  expect(next).toBe(now + 1000);
});
