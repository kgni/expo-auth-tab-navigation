import { COLORS } from '@/core/styles/colors';
import { FONTS } from '@/core/styles/fonts';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ButtonSizes, ButtonVariants } from './Button.utils';

export const getButtonStylesByVariant = (variant: ButtonVariants) => {
  switch (variant) {
    case 'primary':
      return {
        buttonStyle: buttonStyles.primary,
        pressedStyle: buttonStyles.primaryPressed,
        buttonTextStyle: textButtonStyles.primary,
        loadingSpinnerColor: COLORS.white,
      };
    case 'secondary':
      return {
        buttonStyle: buttonStyles.secondary,
        pressedStyle: buttonStyles.secondaryPressed,
        buttonTextStyle: textButtonStyles.secondary,
        loadingSpinnerColor: COLORS.primary100,
      };
    case 'disabled':
      return {
        buttonStyle: buttonStyles.disabled,
        pressedStyle: buttonStyles.disabled,
        buttonTextStyle: textButtonStyles.disabled,
        loadingSpinnerColor: COLORS.gray20,
      };
  }
};

const baseButtonStyles: ViewStyle = {
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 20,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const baseTextStyles: TextStyle = {
  fontFamily: FONTS.PoppinsRegular,
};

export const buttonStyles = StyleSheet.create({
  primary: {
    ...baseButtonStyles,
    backgroundColor: COLORS.primary100,
  },
  primaryPressed: {
    ...baseButtonStyles,
    backgroundColor: COLORS.primary80,
  },
  secondary: {
    ...baseButtonStyles,
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.primary100,
    borderWidth: 1.4,
  },
  secondaryPressed: {
    ...baseButtonStyles,
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.primary80,
    borderWidth: 1.4,
  },
  disabled: {
    ...baseButtonStyles,
    backgroundColor: COLORS.gray20,
  },
});

export const textButtonStyles = StyleSheet.create({
  primary: {
    ...baseTextStyles,
    color: COLORS.white,
  },
  secondary: {
    ...baseTextStyles,
    color: COLORS.primary100,
  },
  disabled: {
    ...baseTextStyles,
    color: COLORS.gray40,
  },
});

export const getHeight = (size: ButtonSizes) => {
  switch (size) {
    case 'small':
      return 40;
    case 'medium':
      return 46;
    case 'large':
      return 52;
  }
};
