module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './app',
          '@assets': './assets',
          '@config': './config',
          '@constants': './constants',
          '@propTypes': './propTypes',
          '@redux': './redux',
          '@scss': './scss',
          '@services': './services',
          '@utils': './utils'
        }
      }
    ]
  ]
};
