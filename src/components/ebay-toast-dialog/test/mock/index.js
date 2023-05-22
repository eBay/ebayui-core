import { createRenderBody } from "../../../../common/test-utils/shared";

export const Toast = {
    a11yCloseText: "close",
    header: {
        renderBody: createRenderBody("head content"),
    },
    footer: {
        renderBody: createRenderBody("foter content"),
    },
    renderBody: createRenderBody("body content"),
};

export const toastOpen = Object.assign({}, Toast, {
    open: true,
});
