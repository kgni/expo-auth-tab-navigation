import React from 'react';
import { DimensionValue, FlexStyle, View } from 'react-native';

import { COLORS } from '@/core/styles/colors';

interface Props {
  height?: number;
  width?: DimensionValue;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  alignment?: FlexStyle['alignSelf'];
}

const Divider = ({
  height = 1,
  width = '100%',
  color = COLORS.gray20,
  marginTop = 0,
  marginBottom = 0,
  alignment = 'center',
}: Props) => {
  return (
    <View
      style={{
        height,
        width,
        backgroundColor: color,
        marginTop,
        marginBottom,
        alignSelf: alignment,
      }}></View>
  );
};

export default Divider;
