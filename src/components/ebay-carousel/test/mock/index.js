import {
    getNItems,
    createRenderBody,
} from "../../../../common/test-utils/shared";

export const discrete1PerSlide0Items = {
    itemsPerSlide: 1,
    a11yPreviousText: "prev",
    a11yNextText: "next",
    item: [],
};

export const discrete1PerSlide1Items = Object.assign(
    {},
    discrete1PerSlide0Items,
    {
        item: [
            {
                renderBody: createRenderBody("carousel item content 1"),
            },
        ],
    },
);

export const discrete1PerSlide3Items = Object.assign(
    {},
    discrete1PerSlide0Items,
    {
        item: getNItems(3, (i) => ({
            renderBody: createRenderBody(`carousel item content ${i}`),
        })),
    },
);

export const discrete21PerSlide3Items = Object.assign(
    {},
    discrete1PerSlide3Items,
    {
        itemsPerSlide: 2.1,
    },
);

export const discrete2PerSlide6Items = Object.assign(
    {},
    discrete1PerSlide0Items,
    {
        itemsPerSlide: 2,
        item: getNItems(6, (i) => ({
            renderBody: createRenderBody(`carousel item content ${i}`),
        })),
    },
);

export const discrete1PerSlide3ItemsAutoPlay = Object.assign(
    {
        a11yPlayText: "play",
        a11yPauseText: "pause",
        autoplay: 400,
    },
    discrete1PerSlide3Items,
);

export const continuous0Items = {
    a11yPreviousText: "prev",
    a11yNextText: "next",
    item: [],
};

export const continuous1Item = Object.assign({}, continuous0Items, {
    item: [
        {
            style: "width:200px",
            renderBody: createRenderBody("carousel item content 1"),
        },
    ],
});

export const continuous6Items = Object.assign({}, continuous0Items, {
    item: getNItems(6, (i) => ({
        style: "width:200px",
        renderBody: createRenderBody(`carousel item content ${i}`),
    })),
});

export const continuous12Items = Object.assign({}, continuous0Items, {
    item: getNItems(12, (i) => ({
        style: "width:200px",
        renderBody: createRenderBody(`carousel item content ${i}`),
    })),
});
