// Presenter to map domain session state to view model state
import { Session } from '../../entities/Session';
import { formatDuration } from '../../usecases/formatters';

export function presentSession(session: Session) {
  return {
    title: session.preset.name,
    elapsedLabel: formatDuration(session.progressSec),
    state: session.state,
  };
}
