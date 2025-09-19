// Hook to manage the state of a running session
import { useEffect, useRef, useState } from 'react';
import { Session } from '../../entities/Session';
import { ClockPort } from '../../services/ClockPort';

export function useSessionRunner(session: Session, clock: ClockPort) {
  const [elapsed, setElapsed] = useState(0);
  const timeoutId = useRef<any>(null);

  useEffect(() => {
    // Schedule ticks based on the session start time
    function tick() {
      const now = clock.now();
      const diffSec = Math.floor((now - session.startedAt) / 1000);
      setElapsed(diffSec);
      timeoutId.current = clock.setTimeout(tick, 1000);
    }
    timeoutId.current = clock.setTimeout(tick, 1000);
    return () => {
      if (timeoutId.current) {
        clock.clearTimeout(timeoutId.current);
      }
    };
  }, [session.startedAt, clock]);

  return { elapsed };
}
