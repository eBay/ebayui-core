const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Inline = {
    a11yHeadingText: 'Heading Text',
    renderBody: createRenderBody('Content')
};
exports.Inline_Custom_Heading_Tag = assign({}, exports.Inline, {
    a11yHeadingTag: 'h3'
});

exports.Inline_Custom_Status = assign({}, exports.Inline, {
    status: 'confirmation'
});
