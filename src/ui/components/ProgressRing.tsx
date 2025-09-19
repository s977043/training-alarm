// Placeholder progress ring component
import React from 'react';
import { View } from 'react-native';

interface ProgressRingProps {
  progress: number; // value between 0 and 1
}

export default function ProgressRing({ progress }: ProgressRingProps) {
  // In a real implementation, render an SVG or canvas ring
  return <View style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 4 }} />;
}
