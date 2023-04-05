import { createRenderBody } from "../../../../common/test-utils/shared";

export const Dialog = {
    a11yCloseText: "close",
    renderBody: createRenderBody("body content"),
};

export const headerFooterDialog = {
    a11yCloseText: "close",
    footer: {
        renderBody: createRenderBody("footer content"),
    },
    header: {
        renderBody: createRenderBody("title content"),
    },
    renderBody: createRenderBody("body content"),
};

export const dialogOpen = Object.assign({}, Dialog, {
    open: true,
});
