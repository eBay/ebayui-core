const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    renderBody: createRenderBody('CTA Text')
};

exports.Small = assign({}, exports.Basic, {
    size: 'small'
});

exports.Large = assign({}, exports.Basic, {
    size: 'large'
});
