import React, { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { BORDER_RADIUS } from '@/core/styles/borderRadius';
import { COLORS } from '@/core/styles/colors';

interface Props extends ComponentProps<typeof TextInput> {
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  onIconPress?: () => void;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  valid?: boolean;
  error?: string;
}

const AppTextInput = ({
  onChangeText,
  onBlur,
  onIconPress,
  value,
  placeholder,
  secureTextEntry,
  leftIcon,
  rightIcon,
  valid,
  error,
  ...rest
}: Props) => {
  const stateColor = error
    ? COLORS.danger80
    : valid
    ? COLORS.success80
    : COLORS.transparent;

  // TODO: REFACTOR THE ICON, WE SHOULD USE A CUSTOM ICON IN THE COMPONENT AND JUST PASS THE STRING DOWN, THAT WAY WE HAVE TO STATE COLOR LOGIC INSIDE OF THE COMPONENT INSTEAD OF HAVING TO PASS IT IN ALL THE TIME.

  return (
    <View style={{ gap: 8 }}>
      <View
        style={[
          styles.container,
          {
            borderWidth: 1,
            borderColor: stateColor,
          },
        ]}>
        <View
          style={[styles.leftContainer, { paddingRight: rightIcon ? 16 : 0 }]}>
          {leftIcon && (
            <Pressable onPress={onIconPress} style={styles.leftIconContainer}>
              {leftIcon}
            </Pressable>
          )}

          <TextInput
            {...rest}
            onChangeText={onChangeText}
            placeholderTextColor={error ? COLORS.danger40 : COLORS.gray40}
            onBlur={() => onBlur}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
        </View>

        {rightIcon && (
          <Pressable onPress={onIconPress} style={styles.rightIconContainer}>
            {rightIcon}
          </Pressable>
        )}
      </View>
      {/* TODO: fix text to use AppText instead */}
      {error && (
        <Text
          style={{
            color: COLORS.danger80,
            fontWeight: 'normal',
            fontSize: 12,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: BORDER_RADIUS.xLarge,
    width: '100%',
    backgroundColor: COLORS.inputBackground,
    flexDirection: 'row',
  },
  error: {
    borderColor: COLORS.danger100,
    borderWidth: 1,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  leftIconContainer: {
    position: 'relative',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    top: 0,
    right: 16,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default AppTextInput;
