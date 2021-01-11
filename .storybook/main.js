const path = require('path');

module.exports = {
    stories: [
        "../src/**/examples/**/template.marko",
    ],
    addons: [
        'storybook-readme',
        // './plugins/code-syntax/register.jsx', Reenable once code-syntax works
        './plugins/theme-switcher/register.jsx'
    ],
};
