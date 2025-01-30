import {
    createRenderBody,
    getNItems,
} from "../../../../common/test-utils/shared";

export const basic2Items = {
    item: getNItems(2, (i) => ({
        href: `#${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

export const basic3Items = Object.assign({}, basic2Items, {
    item: getNItems(3, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

export const a11yCurrentTrue = Object.assign({}, basic2Items, {
    item: getNItems(3, (i) => {
        if (i === 0) {
            return {
                current: "true",
                itemMatchesUrl: false,
                value: `item ${i}`,
                renderBody: createRenderBody(`Item text ${i}`),
            };
        }
        return {
            value: `item ${i}`,
            renderBody: createRenderBody(`Item text ${i}`),
        };
    }),
});

export const separator4Items = Object.assign({}, basic2Items, {
    item: getNItems(4, (i) => ({
        value: `item ${i}`,
        separator: i === 2,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});
