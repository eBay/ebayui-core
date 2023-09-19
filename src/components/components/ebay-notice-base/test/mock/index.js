/* eslint camelcase: "off" */
import { createRenderBody } from "../../../../../common/test-utils/shared";

export const defaultNotice = {
    prefixClass: "page-notice",
    status: "attention",
    a11yText: "default label",
    class: "page-notice--attention",
    renderBody: createRenderBody("body"),
};

export const inlineNotice = {
    root: "div",
    prefixClass: "inline-notice",
    status: "information",
    class: "extra-class",
    a11yText: "default label",
    iconClass: "notice-class",
    renderBody: createRenderBody("body"),
};

export const titleFooterNotice = {
    prefixClass: "other-notice",
    status: "attention",
    a11yText: "default label",
    class: "page-notice--attention",
    renderBody: createRenderBody("body"),
    title: {
        renderBody: createRenderBody("title"),
    },
    footer: {
        renderBody: createRenderBody("footer"),
    },
};

export const educationSectionNotice = {
    prefixClass: "section-notice",
    status: "education",
    a11yText: "education label",
    class: "section-notice--education",
    renderBody: createRenderBody("body"),
    type: "section",
    prominent: true,
};
