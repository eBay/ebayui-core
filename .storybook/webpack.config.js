const { BrowserJSONPlugin } = require('webpack-plugin-browser-json');

console.log(process.env.DS);

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
    flags: process.env.DS === "4" ? ['ds-4'] : []
  }));

  return config;
};