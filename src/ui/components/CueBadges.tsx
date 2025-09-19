// Displays badges for upcoming cues
import React from 'react';
import { View, Text } from 'react-native';
import { Cue } from '../../entities/Cue';

interface CueBadgesProps {
  cues: Cue[];
}

export default function CueBadges({ cues }: CueBadgesProps) {
  return (
    <View style={{ flexDirection: 'row', margin: 8 }}>
      {cues.map((cue, idx) => (
        <View
          key={idx}
          style={{
            padding: 4,
            marginRight: 4,
            backgroundColor: '#eee',
            borderRadius: 4,
          }}>
          <Text>{cue.kind}</Text>
        </View>
      ))}
    </View>
  );
}
