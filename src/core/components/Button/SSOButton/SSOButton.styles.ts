import { COLORS } from '@/core/styles/colors';
import { FONTS } from '@/core/styles/fonts';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const getButtonStyle = (isDisabled?: boolean) => {
  switch (isDisabled) {
    case isDisabled === true:
      return {
        buttonStyle: buttonStyles.disabled,
        pressedStyle: buttonStyles.disabled,
        textStyle: textButtonStyles.disabled,
        loadingSpinnerColor: COLORS.gray20,
      };

    default:
      return {
        buttonStyle: buttonStyles.default,
        pressedStyle: buttonStyles.defaultPressed,
        textStyle: textButtonStyles.default,
        loadingSpinnerColor: COLORS.black,
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
  fontSize: 14,
};

export const buttonStyles = StyleSheet.create({
  default: {
    ...baseButtonStyles,
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.gray80,
    borderWidth: 1.4,
  },
  defaultPressed: {
    ...baseButtonStyles,
    backgroundColor: COLORS.inputBackground,
    borderColor: COLORS.gray80,
    borderWidth: 1.4,
  },

  disabled: {
    ...baseButtonStyles,
    backgroundColor: COLORS.gray20,
  },
});

export const textButtonStyles = StyleSheet.create({
  default: {
    ...baseTextStyles,
    color: COLORS.black,
  },

  disabled: {
    ...baseTextStyles,
    color: COLORS.gray20,
  },
});
