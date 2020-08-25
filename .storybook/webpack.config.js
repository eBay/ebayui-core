const { BrowserJSONPlugin } = require('webpack-plugin-browser-json');
const markoCompiler = require("marko/compiler")
const { getDSFlags } = require('../src/common/ds-util');

markoCompiler.taglibFinder.excludePackage("@lasso/marko-taglib");

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