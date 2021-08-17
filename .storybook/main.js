module.exports = {
    stories: ['../src/**/*.stories.js'],

    addons: [
        './plugins/theme-switcher/register.jsx',
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false,
            },
        },
    ],
};
