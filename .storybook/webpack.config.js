const path = require('path');
const { BrowserJSONPlugin } = require('webpack-plugin-browser-json');
const markoCompiler = require("marko/compiler")
const { getDSFlags } = require('../src/common/ds-util');
const SourcePlugin = require('./sourceCodeUtils/webpackPlugin')

markoCompiler.taglibFinder.excludePackage("@lasso/marko-taglib");

function getRawSoruces() {
  const data = {
    files: {
      ...previousFiles,
      ...cache.getSources(),
    },
    id: sourceId++,
  }
  previousFiles = data.files
  const sources = JSON.stringify(data);
  cache.cleanCache()
  return {
    source: () => sources,
      size: () => sources.length,
  };
}


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

  config.module.rules.push({
    test: /\.marko?$/,
    use: [
      {
        loader: path.resolve(__dirname, 'sourceCodeUtils/webpackLoader.js'),
        options: { root: path.resolve(__dirname, "../src") }
      }
    ]
  });

  config.plugins.push(new BrowserJSONPlugin({
    flags: getDSFlags()
  }));

  config.plugins.push(new SourcePlugin())

  return config;
};