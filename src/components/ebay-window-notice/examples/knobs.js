const { text, select, boolean } = require('@storybook/addon-knobs');

module.exports = () => ({
    window: select('window', [null, 'fullscreen', 'lightbox'], null, 'Options'),
    icon: select('icon', ['default', 'none'], 'default', 'Options'),
    hasFooter: boolean('has footer?', true, 'Options'),
    hasTitle: boolean('has title?', true, 'Options'),
    a11yText: text('a11y-text', 'Success!', 'Accessibility'),
});
