const assign = require('core-js-pure/features/object/assign');
const { createRenderBody, getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_2Items = {
    text: 'Basic Filter Menu Button',
    footerText: 'Apply',
    a11yText: 'Filter Menu Button A11y Text',
    items: getNItems(2, i => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`)
    }))
};

exports.Basic_3Items = assign({}, exports.Basic_2Items, {
    items: getNItems(3, i => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`)
    }))
});

exports.Radio_2Items = {
    text: 'Radio Filter Menu Button',
    type: 'radio',
    footerText: 'Apply',
    a11yText: 'Filter Menu Button A11y Text',
    items: getNItems(2, i => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`)
    }))
};

exports.Radio_3Items = assign({}, exports.Radio_2Items, {
    type: 'radio',
    items: getNItems(3, i => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`)
    }))
});
