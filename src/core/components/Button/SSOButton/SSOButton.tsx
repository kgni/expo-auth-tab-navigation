import React, { ComponentProps, ReactNode } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';

import AppText from '../../Text/AppText';
import { getHeight } from '../Button/Button.styles';
import { getButtonStyle } from './SSOButton.styles';
import { ButtonSizes } from './SSOButton.utils';

import { COLORS } from '@/core/styles/colors';

interface Props extends ComponentProps<typeof Pressable> {
  text: string;
  size?: ButtonSizes;
  isLoading?: boolean;
  icon?: ReactNode;
  RightIcon?: ReactNode;
  loadingColor?: string;
  disabled?: boolean;
}
export const SSOButton = ({
  text,
  size = 'large',
  isLoading,
  icon,
  RightIcon,
  loadingColor = COLORS.black,
  disabled,
  ...rest
}: Props) => {
  const { buttonStyle, pressedStyle, textStyle, loadingSpinnerColor } =
    getButtonStyle(disabled);

  const height = getHeight(size);

  return (
    <Pressable {...rest} disabled={isLoading || disabled}>
      {({ pressed }) => (
        <View
          style={[
            rest.onPress && pressed ? pressedStyle : buttonStyle,
            { minHeight: height, gap: icon ? 8 : 0 },
          ]}>
          {icon && <View style={{ opacity: isLoading ? 0 : 1 }}>{icon}</View>}

          <ActivityIndicator
            size='small'
            color={loadingColor ?? loadingSpinnerColor}
            style={{ opacity: isLoading ? 1 : 0, position: 'absolute' }}
          />
          <AppText style={[textStyle, { opacity: isLoading ? 0 : 1 }]}>
            {text}
          </AppText>
        </View>
      )}
    </Pressable>
  );
};
