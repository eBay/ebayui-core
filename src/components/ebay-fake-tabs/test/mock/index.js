const assign = require('core-js-pure/features/object/assign');
const { getNItems, createRenderBody } = require('../../../../common/test-utils/shared');

exports.Fake_3Headings_No_Index = {
    tabs: getNItems(3, i => ({
        href: `#tab-${i}`,
        renderBody: createRenderBody(`Heading ${i}`)
    })),
    renderBody: createRenderBody('Panel 0')
};

exports.Fake_3Headings_1Index = assign({}, exports.Fake_3Headings_No_Index, {
    current: 1
});
