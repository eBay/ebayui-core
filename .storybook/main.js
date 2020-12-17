const path = require('path');

module.exports = {
    stories: [
        "../src/**/examples/**/template.marko",
    ],
    addons: [
        'storybook-readme',
        './plugins/code-syntax/register.jsx',
        './plugins/theme-switcher/register.jsx'
    ],
};
