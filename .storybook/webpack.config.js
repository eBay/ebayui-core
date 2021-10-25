const path = require('path');
const { BrowserJSONPlugin } = require('webpack-plugin-browser-json');
const markoCompiler = require('marko/compiler');
const { getDSFlags } = require('../src/common/ds-util');
const SourcePlugin = require('./sourceCodeUtils/webpackPlugin');

markoCompiler.taglibFinder.excludePackage('@lasso/marko-taglib');

module.exports = async ({ config }) => {
    config.resolve.extensions.push('.less');

    config.module.rules.push({
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
    });

    config.module.rules.push({
        test: /\.marko?$/,
        use: [
            {
                loader: path.resolve(__dirname, 'sourceCodeUtils/webpackLoader.js'),
                options: { root: path.resolve(__dirname, '../src') },
            },
        ],
    });

    config.module.rules.push({
        test: /\.txt$/i,
        use: 'raw-loader',
    });

    config.plugins.push(
        new BrowserJSONPlugin({
            flags: getDSFlags(process.env.DS),
        })
    );

    config.plugins.push(new SourcePlugin());

    return config;
};
