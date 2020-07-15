const { BrowserJSONPlugin } = require('webpack-plugin-browser-json');
const { getDSFlags } = require('../src/common/ds-util');

module.exports = async ({ config }) => {
  config.devtool = "none";
  config.resolve.extensions.push('.less');

  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader'
    ]
  });

  config.plugins.push(new BrowserJSONPlugin({
    flags: getDSFlags()
  }));

  return config;
};