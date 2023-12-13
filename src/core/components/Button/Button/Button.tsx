import React, { ComponentProps, ReactNode } from 'react';
import { ActivityIndicator, Pressable, TextStyle, View } from 'react-native';

import AppText from '../../Text/AppText';
import { getButtonStylesByVariant, getHeight } from './Button.styles';
import { ButtonSizes, ButtonVariants } from './Button.utils';

interface Props extends ComponentProps<typeof Pressable> {
  text: string;
  textStyle?: TextStyle;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isLoading?: boolean;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  loadingColor?: string;
  disabled?: boolean;
  // textAlign?: TextStyle['textAlign'];
}
export const Button = ({
  text,
  textStyle,
  variant = 'primary',
  size = 'large',
  isLoading,
  LeftIcon,
  RightIcon,
  loadingColor,
  disabled,
  // textAlign = 'center',
  ...rest
}: Props) => {
  const { buttonStyle, pressedStyle, buttonTextStyle, loadingSpinnerColor } =
    getButtonStylesByVariant(disabled ? 'disabled' : variant);

  const height = getHeight(size);

  // TODO: add icon logic for buttons
  return (
    <Pressable {...rest} disabled={isLoading || disabled}>
      {({ pressed }) => (
        <View
          style={[pressed ? pressedStyle : buttonStyle, { minHeight: height }]}>
          <View style={{ opacity: isLoading ? 0 : 1 }}>{LeftIcon}</View>

          <ActivityIndicator
            size='small'
            color={loadingColor ?? loadingSpinnerColor}
            style={{ opacity: isLoading ? 1 : 0, position: 'absolute' }}
          />
          <AppText
            style={[
              buttonTextStyle,
              { opacity: isLoading ? 0 : 1 },
              textStyle,
            ]}>
            {text}
          </AppText>
          <View style={{ opacity: isLoading ? 0 : 1 }}>{RightIcon}</View>
        </View>
      )}
    </Pressable>
  );
};
