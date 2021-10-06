const { getNItems, createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic_3Headings_3Panels_No_Index = {
    tabs: getNItems(3, (i) => ({
        renderBody: createRenderBody(`Heading ${i}`),
    })),
    panels: getNItems(3, (i) => ({
        renderBody: createRenderBody(`Panel ${i}`),
    })),
};

exports.Basic_3Headings_3Panels_1Index = Object.assign(
    {},
    exports.Basic_3Headings_3Panels_No_Index,
    {
        selectedIndex: 1,
    }
);

exports.Basic_3Headings_3Panels_2Index = Object.assign(
    {},
    exports.Basic_3Headings_3Panels_No_Index,
    {
        selectedIndex: 2,
    }
);

exports.Basic_3Headings_3Panels_ActivationManual = Object.assign(
    {},
    exports.Basic_3Headings_3Panels_No_Index,
    {
        activation: 'manual',
    }
);

exports.Fake_3Headings_No_Index = {
    fake: true,
    tabs: getNItems(3, (i) => ({
        href: `#tab-${i}`,
        renderBody: createRenderBody(`Heading ${i}`),
    })),
    panels: [
        {
            renderBody: createRenderBody('Panel 0'),
        },
    ],
};

exports.Fake_3Headings_1Index = Object.assign({}, exports.Fake_3Headings_No_Index, {
    selectedIndex: 1,
});
