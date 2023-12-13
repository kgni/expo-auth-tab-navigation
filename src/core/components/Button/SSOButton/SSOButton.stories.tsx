import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { SSOButton } from './SSOButton';

const meta: Meta<typeof SSOButton> = {
  title: 'Components/Buttons/SSOButton',
  component: SSOButton,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    onPress: { action: 'pressed' },
  },
};

export default meta;
type Story = StoryObj<typeof SSOButton>;

export const Facebook: Story = {
  args: {
    text: 'Sign up with Facebook',
  },
};

export const Google: Story = {
  args: {
    text: 'Sign up with Google',
  },
};

export const Grouped: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <SSOButton text='Facebook' />
      <SSOButton text='Google' />
      <SSOButton text='Disabled' disabled />
    </View>
  ),
};
