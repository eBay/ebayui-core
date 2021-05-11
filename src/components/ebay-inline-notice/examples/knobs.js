const { text, select } = require('@storybook/addon-knobs');

module.exports = () => ({
    status: select('status', [null, 'attention', 'confirmation', 'information'], null, 'Options'),
    icon: select('icon', ['default', 'none'], 'default', 'Options'),
    a11yText: text('a11y-text', 'See this notice', 'Accessibility'),
});
