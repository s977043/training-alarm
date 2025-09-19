// Displays a large timer countdown
import React from 'react';
import { Text, View } from 'react-native';

interface BigTimerProps {
  label: string;
}

export default function BigTimer({ label }: BigTimerProps) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 64 }}>{label}</Text>
    </View>
  );
}
