module.exports = {
    stories: ['../src/**/examples/**/template.marko'],
    addons: [
        'storybook-readme',
        '@storybook/addon-knobs',
        './plugins/code-syntax/register.jsx',
        './plugins/theme-switcher/register.jsx',
    ],
};
