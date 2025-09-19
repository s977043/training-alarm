# Specifications

This document describes the behaviour of the training alarm application.  It includes the rules for when cues are triggered during a session and the expected user interactions.

## Preset Rules

- **30 seconds** – announce halfway at 15 s and start a 10 second countdown from 20 s.
- **60 seconds** – announce halfway at 30 s, announce at 45 s, and start a 10 second countdown from 50 s.
- **80 seconds** – announce halfway at 40 s, announce at 60 s, and start a 10 second countdown from 70 s.

Users may configure additional presets.  See `src/entities/TimerPreset.ts` for the structure of a preset.
