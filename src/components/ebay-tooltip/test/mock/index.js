const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    host: {
        renderBody: createRenderBody('<span class="tooltip__host">Host Text</span>', 'Host Text'),
    },
    heading: {
        renderBody: createRenderBody('Heading Text'),
    },
    content: {
        renderBody: createRenderBody('Content Text'),
    },
};

exports.Pointers = [
    'top-left',
    'top',
    'top-right',
    'right',
    'right-bottom',
    'right-top',
    'bottom-left',
    'bottom-right',
    'bottom',
    'left',
    'left-bottom',
    'left-top',
].map((pointer) => assign({}, exports.Basic, { pointer }));

exports.Custom_Pointer = assign({}, exports.Basic, {
    styleTop: '20px',
    styleLeft: '20px',
});
