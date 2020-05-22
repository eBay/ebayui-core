const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Drawer = {
    a11yCloseText: 'close',
    a11yHandleText: 'handle',
    header: {
        renderBody: createRenderBody('head content')
    },
    footer: {
        renderBody: createRenderBody('foter content')
    },
    renderBody: createRenderBody('body content')
};

exports.Drawer_Open = assign({}, exports.Drawer, {
    open: true
});

exports.Drawer_Expanded = assign({}, exports.Drawer_Open, {
    expanded: true
});
