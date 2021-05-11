const { text, select, boolean } = require('@storybook/addon-knobs');

module.exports = () => ({
    status: select(
        'status',
        [null, 'attention', 'confirmation', 'information', 'celebration'],
        null,
        'Options'
    ),
    icon: select('icon', ['default', 'none'], 'default', 'Options'),
    hasFooter: boolean('has footer?', false, 'Options'),
    hasTitle: boolean('has title?', false, 'Options'),
    a11yText: text('a11y-text', 'See this notice', 'Accessibility'),
});
