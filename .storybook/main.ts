module.exports = {
    stories: ['../src/**/*.stories.@(mdx|ts)'],
    addons: [
        './plugins/theme-switcher/register.jsx',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
    core: {
        builder: 'webpack5',
    },
    features: {
        previewMdx2: true,
    },
    webpackFinal: async (config: any) => {
        config.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        });
        config.module.rules.push({
            test: /\.txt$/,
            type: 'asset/source',
        });
        config.module.rules.push({
            test: /\.ts$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ],
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