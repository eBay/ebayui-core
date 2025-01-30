/* eslint camelcase: "off" */
import { createRenderBody } from "../../../../common/test-utils/shared";

export const Page = {
    a11yText: "Heading Text",
    renderBody: createRenderBody("Content"),
};

export const Page_Custom_Heading_Tag = Object.assign({}, Page, {
    title: {
        as: "h3",
        renderBody: createRenderBody("Title"),
    },
});

export const Page_Custom_Status = Object.assign({}, Page, {
    status: "confirmation",
});

export const Page_Icon_Hidden = Object.assign({}, Page, {
    icon: "none",
});

export const Footer_Button = Object.assign({}, Page, {
    footer: {
        renderBody: createRenderBody("Footer"),
    },
});
