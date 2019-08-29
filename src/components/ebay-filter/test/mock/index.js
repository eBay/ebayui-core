const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    renderBody: createRenderBody('text')
};

exports.Pressed = assign({}, exports.Basic, {
    pressed: true
});

exports.Disabled = assign({}, exports.Basic, {
    disabled: true
});

exports.Fake = assign({}, exports.Basic, {
    href: '#fake'
});

exports.Fake_Pressed = assign({}, exports.Fake, {
    pressed: true,
    a11yActiveText: 'Selected Filter'
});

exports.Fake_Disabled = assign({}, exports.Fake, {
    disabled: true
});
