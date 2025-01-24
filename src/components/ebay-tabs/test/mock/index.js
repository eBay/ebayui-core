/* eslint camelcase: "off" */
import {
    getNItems,
    createRenderBody,
} from "../../../../common/test-utils/shared";

export const basic3Headings_3Panels_No_Index = {
    tab: getNItems(3, (i) => ({
        renderBody: createRenderBody(`Heading ${i}`),
    })),
    panel: getNItems(3, (i) => ({
        renderBody: createRenderBody(`Panel ${i}`),
    })),
};

export const basic3Headings_3Panels_1Index = Object.assign(
    {},
    basic3Headings_3Panels_No_Index,
    {
        selectedIndex: 1,
    },
);

export const basic3Headings_3Panels_2Index = Object.assign(
    {},
    basic3Headings_3Panels_No_Index,
    {
        selectedIndex: 2,
    },
);

export const basic3Headings_3Panels_ActivationManual = Object.assign(
    {},
    basic3Headings_3Panels_No_Index,
    {
        activation: "manual",
    },
);

export const fake3HeadingsNoIndex = {
    fake: true,
    tab: getNItems(3, (i) => ({
        href: `#tab-${i}`,
        renderBody: createRenderBody(`Heading ${i}`),
    })),
    panel: [
        {
            renderBody: createRenderBody("Panel 0"),
        },
    ],
};

export const fake3Headings1Index = Object.assign({}, fake3HeadingsNoIndex, {
    selectedIndex: 1,
});
