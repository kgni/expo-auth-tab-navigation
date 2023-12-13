import { Tabs } from 'expo-router';

import { COLORS } from '@/core/styles/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.black,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name='schedule'
        options={{
          title: 'Schedule',
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}
