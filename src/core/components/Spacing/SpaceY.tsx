import React from 'react';
import { DimensionValue, View } from 'react-native';

interface Props {
  height: DimensionValue;
}

const SpaceY = ({ height = 0 }: Props) => {
  return <View style={{ height }}></View>;
};

export default SpaceY;
