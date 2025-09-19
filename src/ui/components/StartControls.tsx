// Controls for starting and stopping sessions
import React from 'react';
import { Button, View } from 'react-native';

interface StartControlsProps {
  onStart: () => void;
  onStop: () => void;
  running: boolean;
}

export default function StartControls({ onStart, onStop, running }: StartControlsProps) {
  return (
    <View style={{ flexDirection: 'row', margin: 8 }}>
      {running ? (
        <Button title="Stop" onPress={onStop} />
      ) : (
        <Button title="Start" onPress={onStart} />
      )}
    </View>
  );
}
