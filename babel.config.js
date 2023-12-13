module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
        'transform-inline-environment-variables',
        {
          include: ['EXPO_ROUTER_APP_ROOT'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
