# Training Alarm App

This project is an **Expo** (React Native + TypeScript) application that functions as a training timer.  It helps athletes and hobbyists keep track of exercise intervals by providing auditory, visual and haptic cues over configurable durations.  The design follows a domain‑driven architecture to cleanly separate UI concerns from business logic and infrastructure.

The app ships with a few preset durations (30 s, 60 s, 80 s) and announces halfway points, extra milestones and a final countdown.  Users can extend it with custom presets and swap audio packs without modifying the core timer logic.

## Structure

The repository is organised around domain entities, use cases, service ports and concrete adapters.  Under `app/` lives the Expo router entrypoints and screens.  The `src/` folder contains most of the logic:

- **entities/** – pure data types like `TimerPreset`, `Cue` and `Session`.
- **usecases/** – pure functions that derive cues and countdown plans.
- **services/** – interfaces for playing audio, scheduling notifications and reading the current time.  These have no implementation details.
- **adapters/** – concrete implementations of services using Expo libraries.
- **features/** – hooks and presenters that translate domain state into UI state.
- **ui/** – purely presentational components and styling utilities.
- **lib/** – small helper functions and i18n strings.

There are also folders for tests, documentation and build scripts.  See `docs/` for more detailed specifications.
