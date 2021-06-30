const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    renderBody: createRenderBody('CTA Text'),
};

exports.Small = Object.assign({}, exports.Basic, {
    size: 'small',
});

exports.Large = Object.assign({}, exports.Basic, {
    size: 'large',
});
