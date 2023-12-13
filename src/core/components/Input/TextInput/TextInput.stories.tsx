import type { Meta, StoryObj } from '@storybook/react';

import AppTextInput from './TextInput';

const meta: Meta<typeof AppTextInput> = {
  title: 'Components/Inputs/TextInput',
  component: AppTextInput,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    secureTextEntry: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof AppTextInput>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Email Address',
  },
};
