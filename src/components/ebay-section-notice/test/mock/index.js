const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Section_Info = {
    a11yText: 'Heading Text',
    status: 'information',
    renderBody: createRenderBody('Content')
};

exports.Section_Light = {
    renderBody: createRenderBody('Content'),
    footer: {
        renderBody: createRenderBody('Footer')
    }
};
