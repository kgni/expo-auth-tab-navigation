import { Stack } from 'expo-router';

export default function Layouts() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* ==== DEFINE SCREENS ==== */}

      {/* ---- # Essentials  */}
      <Stack.Screen name='index' options={{ headerShown: false }} />
      {/* <Stack.Screen name='(tabs)' options={{ headerShown: false }} /> */}

      {/* ---- # Onboarding  */}
      <Stack.Screen
        name='(onboarding)/introduction'
        options={{ headerShown: false }}
      />

      {/* ---- # Authentication  */}
      <Stack.Screen name='(auth)/login' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)/register' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)/reset' options={{ headerShown: false }} />

      {/* ---- # Modals  */}
      <Stack.Screen name='(modals)/modal' options={{ presentation: 'modal' }} />
    </Stack>
  );
}
