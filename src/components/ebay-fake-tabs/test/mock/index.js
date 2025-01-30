import {
    getNItems,
    createRenderBody,
} from "../../../../common/test-utils/shared";

export const fake3HeadingsNoIndex = {
    tab: getNItems(3, (i) => ({
        href: `#tab-${i}`,
        renderBody: createRenderBody(`Heading ${i}`),
    })),
    renderBody: createRenderBody("Panel 0"),
};

export const fake3Headings1Index = Object.assign({}, fake3HeadingsNoIndex, {
    selectedIndex: 1,
});
