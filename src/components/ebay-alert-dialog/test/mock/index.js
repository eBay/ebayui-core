import { createRenderBody } from "../../../../common/test-utils/shared";

export const Dialog = {
    confirmText: "confirm",
    header: {
        renderBody: createRenderBody("title content"),
    },
    renderBody: createRenderBody("body content"),
};

export const dialogOpen = Object.assign({}, Dialog, {
    open: true,
});
