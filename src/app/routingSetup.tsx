import { router, useSegments } from 'expo-router';
import { useEffect } from 'react';

import Layouts from './layoutSetup';

import { useSupabase } from '@/core/hooks/useSupabase';

export default function Routing() {
  const { session, initialized } = useSupabase();
  // Define your screen routes here
  const onboardingScreen = '/(onboarding)/introduction';
  const landingScreen = '/(auth)/initial';
  const homeScreen = '/(tabs)';

  // ======= !IMPORTANT: Replace these with your actual authentication and loading logic
  const isLoaded = initialized; // Toggle it to see screens.
  const isSignedIn = false; // Toggle it to see screens.
  const hasSeenOnboarding = true; // Toggle it to see screens.
  /**
   * EXAMPLE
   *   const isSignedIn = authCheck === true;
   *   const isLoaded = loadingUser === false && loadingUserData === false;
   */
  // ====== !End Region

  // Get the current route segment
  const segment = useSegments();

  useEffect(() => {
    if (!isLoaded) return;

    const isTabsGroup = segment[0] === '(tabs)';
    console.log('CURRENT ROUTE SEGMENT:', segment[0]);

    if (isSignedIn && !isTabsGroup) {
      const navigateTo = homeScreen;
      router.replace(navigateTo);
    } else if (!isSignedIn) {
      const navigateTo = landingScreen;
      router.replace(navigateTo);
    }
  }, [isSignedIn, isLoaded, hasSeenOnboarding]);

  return <Layouts />;
}
