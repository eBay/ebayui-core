module.exports = {
    stories: ['../src/**/*.stories.js'],

    addons: [
        './plugins/theme-switcher/register.jsx',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
};
