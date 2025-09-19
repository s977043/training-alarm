// Schema for validating preset forms (placeholder)

// In a real project you might use a library like zod or yup.  This file
// intentionally contains only a placeholder type to avoid adding dependencies.

export interface PresetFormValues {
  name: string;
  durationSec: number;
  half: boolean;
  extraMilestones: number[];
  finalCountdownFrom: number;
  tickEverySec: boolean;
}

export function validatePresetForm(values: PresetFormValues): string[] {
  const errors: string[] = [];
  if (!values.name) errors.push('Name is required');
  if (values.durationSec <= 0) errors.push('Duration must be positive');
  if (values.finalCountdownFrom < 0) errors.push('Final countdown must be non‑negative');
  return errors;
}
