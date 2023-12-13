import { ExpoConfig } from 'expo/config';

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: process.env.APP_NAME || 'VASKE.APP',
  slug: 'vaske-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/core/assets/images/icon.png',
  scheme: 'vaske-app',
  userInterfaceStyle: 'automatic',
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: process.env.EXPO_PUBLIC_SENTRY_ORGANIZATION_SLUG,
          project: process.env.EXPO_PUBLIC_SENTRY_PROJECT_NAME,
        },
      },
    ],
  },
  splash: {
    image: './src/core/assets/images/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#15B6FF',
  },
  assetBundlePatterns: ['**/*'],

  ios: {
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
    bundleIdentifier: 'app.vaske',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/core/assets/images/icon.png',
      backgroundColor: '#15B6FF',
    },
    package: 'app.vaske',
  },
  plugins: [
    'expo-router',
    'expo-localization',
    'sentry-expo',
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 33,
          targetSdkVersion: 33,
          buildToolsVersion: '33.0.0',
        },
        ios: {
          deploymentTarget: '13.0',
        },
      },
    ],
  ],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: '4431ab34-ca51-4b84-99e7-091ed75bbb10',
    },
  },
};

export default config;
