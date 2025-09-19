# Agent Instructions

This file contains instructions and guidelines for automated agents contributing to this repository.  The goal of the agent is to assist in building and maintaining a training alarm application following a domain‑driven architecture.  Agents should respect the separation of concerns between the user interface, business logic and infrastructure.

## Guidelines

1. **Use Domain Types** – All logic related to cue calculation or timer progress should live in the `src/entities` and `src/usecases` folders.  Components and hooks should not perform calculations directly.
2. **Avoid Side Effects in Use Cases** – The functions in `src/usecases` must be pure.  They may accept current time or preset definitions as arguments but should never trigger audio playback or storage writes.
3. **Communicate Through Ports** – Any interaction with the outside world (audio, notifications, haptics, storage) should go through the interfaces defined under `src/services`.  If a new platform requires additional behaviour, add a new adapter in `src/adapters` rather than modifying the core logic.
4. **Keep UI Dumb** – Components in `src/ui` should remain as stateless as possible.  They receive props describing what to render and emit callbacks when the user interacts with the view.
5. **Write Tests** – When adding or modifying behaviour, accompany the change with appropriate tests under `tests/`.  Use unit tests for pure functions and integration tests for session runners.

## Getting Started

To add a new feature, determine which layer it belongs in.  For example, a new type of cue announcement would first require an update to the entities (to represent the cue), a pure use case to generate the cue, a port method to perform the announcement and an adapter to implement the port.  Then a presenter and UI component can display or play the cue in the application.
