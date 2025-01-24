import { createRenderBody, getNItems } from "../../../common/test-utils/shared";

export const Links = {
    a11yHeadingText: "Page navigation",
    item: getNItems(3, (i) => ({
        href: i === 2 ? undefined : "#",
        renderBody: createRenderBody(`Item Text ${i}`),
    })),
};
export const Buttons = {
    item: getNItems(3, (i) => ({
        renderBody: createRenderBody(`Item Text ${i}`),
    })),
};
export const linkLastWithoutHREF = {
    a11yHeadingText: "Page navigation",
    item: getNItems(3, (i) => ({
        href: i === 2 ? undefined : "#",
        renderBody: createRenderBody(`Item Text ${i}`),
    })),
};
export const linkHeadingTag = Object.assign({}, Links, {
    a11yHeadingTag: "h3",
});
