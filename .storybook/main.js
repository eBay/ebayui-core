const { getDSFlags } = require('../src/common/ds-util');

const AdaptivePlugin = require('arc-webpack');

const dsVersion = getDSFlags(process.env.DS);
module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        './plugins/theme-switcher/register.jsx',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        });

        config.module.rules.push({
            test: /\.txt$/,
            type: 'asset/source',
        });
        config.module.rules = [
            {
                oneOf: [
                    {
                        resourceQuery: /raw/,
                        type: 'asset/source',
                    },
                    ...config.module.rules,
                ],
            },
        ];
        return config;
    },
};
