import React from 'react';
import { View } from 'react-native';

import { COLORS } from '@/core/styles/colors';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

const Splash = () => {
  return <View style={{ flex: 1, backgroundColor: COLORS.primary100 }}></View>;
};

let EntryPoint = Splash;

if (storybookEnabled) {
  const StorybookUI = require('../../.ondevice').default;
  EntryPoint = () => {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  };
}

export default EntryPoint;
