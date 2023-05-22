/* eslint camelcase: "off" */
import { createRenderBody } from "../../../../../common/test-utils/shared";
export const dialog = {
    classPrefix: "lightbox-dialog",
    class: "lightbox-dialog--mask-fade",
    windowClass: "lightbox-dialog__window--fade",
    a11yCloseText: "close",
    renderBody: createRenderBody("body content"),
};

export const headerFooterDialog = {
    classPrefix: "lightbox-dialog",
    class: "lightboxc-dialog--mask-fade",
    windowClass: "lightbox-dialog__window--fade",
    a11yCloseText: "close",
    footer: {
        renderBody: createRenderBody("footer content"),
    },
    header: {
        renderBody: createRenderBody("title content"),
    },
    renderBody: createRenderBody("body content"),
};

export const dialogOpen = Object.assign({}, dialog, {
    open: true,
});
