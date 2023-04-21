import { createRenderBody } from "../../../../common/test-utils/shared";

export const TitleBasic = {
    renderBody: createRenderBody("Title content"),
};

export const Title = {
    title: {
        renderBody: createRenderBody("Title content"),
    },
};

export const Subtitle = Object.assign({}, Title, {
    subtitle: {
        renderBody: createRenderBody("Subtitle content"),
    },
});

export const CTASeeAll = Object.assign({}, Title, {
    ctaText: "See All",
    href: "https://www.ebay.com/",
});

export const CTA = Object.assign({}, Title, {
    href: "https://www.ebay.com/",
});

export const Info = Object.assign({}, Title, {
    info: {
        renderBody: createRenderBody("Info content"),
    },
});

export const Overflow = Object.assign({}, Title, {
    overflow: {
        renderBody: createRenderBody("Overflow content"),
    },
});

export const Size = Object.assign({}, Title, {
    size: "large",
});
