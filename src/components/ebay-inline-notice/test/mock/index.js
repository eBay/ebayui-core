const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Inline = {
    a11yText: 'Heading Text',
    renderBody: createRenderBody('Content'),
};

exports.Inline_Custom_Status = Object.assign({}, exports.Inline, {
    status: 'confirmation',
});
