module.exports = {
    stories: ['../src/**/*.stories.js'],

    addons: [
        '@storybook/addon-essentials',
        './plugins/code-syntax/register.jsx',
        './plugins/theme-switcher/register.jsx',
    ],
};
