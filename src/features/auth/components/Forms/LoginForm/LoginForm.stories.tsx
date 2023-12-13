import type { Meta, StoryObj } from '@storybook/react';

import { ScrollView, StyleSheet, View } from 'react-native';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  argTypes: {
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    value: '',
  },
  decorators: [
    (Story) => (
      <View style={{ width: '100%' }}>
        <ScrollView bounces={false}>
          <Story />
        </ScrollView>
      </View>
    ),
  ],
};

const styles = StyleSheet.create({
  contentContainer: {},
});
