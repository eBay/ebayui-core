const { text, select, boolean } = require('@storybook/addon-knobs');

module.exports = () => ({
    status: select('status', [null, 'attention', 'confirmation', 'information'], null, 'Options'),
    icon: select('icon', ['default', 'none'], 'default', 'Options'),
    hasFooter: boolean('has footer?', false, 'Options'),
    a11yText: text('a11y-text', 'Attention', 'Accessibility'),
    a11yRoleDescription: text('a11y-role-description', 'Notice', 'Accessibility'),
});
