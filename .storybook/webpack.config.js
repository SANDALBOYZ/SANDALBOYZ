const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.alias = {
    '@components': path.resolve(__dirname, '../src/components'),
    '@context': path.resolve(__dirname, '../src/context'),
    '@images': path.resolve(__dirname, '../src/images'),
    '@layouts': path.resolve(__dirname, '../src/layouts'),
    '@templates': path.resolve(__dirname, '../src/templates'),
    '@utils': path.resolve(__dirname, '../src/utils'),
  }

  return config;
}
