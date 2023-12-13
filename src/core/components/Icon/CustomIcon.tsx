import { createIconSet } from '@expo/vector-icons';
import * as React from 'react';

const glyphMap = {
  google: '../../assets/icons/google-icon-logo.svg',
};
const CustomIconSet = createIconSet(
  glyphMap,
  'fontFamily',
  'custom-icon-font.ttf',
);

interface Props {
  name: keyof typeof glyphMap;
  size: number;
  color?: string;
}

export default function CustomIcon({ name, size, color }: Props) {
  return <CustomIconSet name={name} size={size} color={color} />;
}
