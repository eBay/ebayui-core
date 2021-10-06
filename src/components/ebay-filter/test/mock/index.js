const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    renderBody: createRenderBody('text'),
};

exports.Selected = Object.assign({}, exports.Basic, {
    selected: true,
});

exports.Disabled = Object.assign({}, exports.Basic, {
    disabled: true,
});

exports.Fake = Object.assign({}, exports.Basic, {
    href: '#fake',
});

exports.Fake_Selected = Object.assign({}, exports.Fake, {
    selected: true,
    a11ySelectedText: 'Selected Filter',
});

exports.Fake_Disabled = Object.assign({}, exports.Fake, {
    disabled: true,
});
