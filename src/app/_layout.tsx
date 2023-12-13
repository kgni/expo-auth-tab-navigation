import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Mixpanel } from 'mixpanel-react-native';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import * as Sentry from 'sentry-expo';

import Routing from './routingSetup';

import { SupportedLanguages } from '@/core/I18n/locales';
import useLocalization from '@/core/I18n/useLocalization';
import { SupabaseProvider } from '@/core/providers/SupabaseProvider';
import { store } from '@/core/store';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  enableInExpoDevelopment: true,
  // debug: process.env.EAS_BUILD_PROFILE !== 'production', // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  environment: process.env.EAS_BUILD_PROFILE ?? 'development',
});

const mixpanel = new Mixpanel(
  process.env.EXPO_PUBLIC_MIXPANEL_PROJECT_TOKEN,
  true,
);
mixpanel.init();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  mixpanel.track('App opened');

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('../core/assets/fonts/poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../core/assets/fonts/poppins/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../core/assets/fonts/poppins/Poppins-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayoutNav />;
};

function RootLayoutNav() {
  const { locale, translationMessages } = useLocalization();
  return (
    <SupabaseProvider>
      <Provider store={store}>
        <IntlProvider
          locale={locale}
          messages={translationMessages}
          defaultLocale={SupportedLanguages.EN}>
          <Routing />
        </IntlProvider>
      </Provider>
    </SupabaseProvider>
  );
}

export default RootLayout;
