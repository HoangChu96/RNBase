module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.d.ts',
        ],
        alias: {
          '@app': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
