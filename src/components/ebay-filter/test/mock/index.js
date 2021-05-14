const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    renderBody: createRenderBody('text'),
};

exports.Selected = assign({}, exports.Basic, {
    selected: true,
});

exports.Disabled = assign({}, exports.Basic, {
    disabled: true,
});

exports.Fake = assign({}, exports.Basic, {
    href: '#fake',
});

exports.Fake_Selected = assign({}, exports.Fake, {
    selected: true,
    a11ySelectedText: 'Selected Filter',
});

exports.Fake_Disabled = assign({}, exports.Fake, {
    disabled: true,
});
