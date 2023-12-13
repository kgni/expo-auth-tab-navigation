import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    icon: { control: 'radio', options: ['left', 'right'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    onPress: { action: 'pressed' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary',
    variant: 'primary',
    size: 'large',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    variant: 'secondary',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    size: 'large',
    isLoading: false,
    disabled: true,
  },
};

export const Grouped: Story = {
  args: {
    text: 'Grouped',
    variant: 'primary',
    size: 'large',
  },
  render: () => (
    <View style={{ gap: 12 }}>
      <Button text='Primary' variant='primary' size='large' />
      <Button text='Secondary' variant='secondary' size='large' />
      <Button text='Disabled' variant='primary' size='large' disabled />
    </View>
  ),
};
