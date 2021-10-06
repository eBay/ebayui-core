const { text, number, select, boolean } = require('@storybook/addon-knobs');

module.exports = () => ({
    text: text('Button Text', 'Button Text', 'Options'),
    size: select('size', ['large', null], null, 'Options'),
    priority: select(
        'priority',
        ['primary', 'secondary', 'delete', 'none'],
        'secondary',
        'Options'
    ),
    variant: select('variant', [null, 'expand', 'fake-link', 'icon'], null, 'Options'),
    fluid: boolean('fluid', false, 'Toggles'),
    disabled: boolean('disabled', false, 'Toggles'),
    transparent: boolean('transparent', false, 'Toggles'),
    fixedHeight: boolean('fixed-height', false, 'Toggles'),
    truncate: boolean('truncate', false, 'Toggles'),
    badgeNumber: number('badge-number', null, {}, 'Badge'),
    badgeAiraLabel: text('badge-aria-label', 'number of notifications', 'Badge'),
});
