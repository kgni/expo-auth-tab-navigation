import type { Meta, StoryObj } from '@storybook/react';

import { ScrollView } from 'react-native';
import SignUpForm from './SignUpForm';

const meta: Meta<typeof SignUpForm> = {
  title: 'Forms/SignUpForm',
  component: SignUpForm,
  argTypes: {
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {
    value: '',
  },
  decorators: [
    (Story) => (
      <ScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}>
        <Story />
      </ScrollView>
    ),
  ],
};
