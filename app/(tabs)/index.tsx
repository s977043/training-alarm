// Home screen of the training alarm app
import React from 'react';
import { View, Text, Button } from 'react-native';

/**
 * The home tab allows a user to choose a preset and start a session.
 */
export default function HomeTab() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Training Alarm</Text>
      {/* TODO: list available presets and start session */}
      <Button title="Start 60 s Session" onPress={() => { /* navigate to session */ }} />
    </View>
  );
}
