/* eslint camelcase: "off" */
import { createRenderBody } from "../../../../common/test-utils/shared";

export const Drawer = {
    a11yCloseText: "close",
    a11yMinimizeText: "minimize",
    a11yMaximizeText: "maximize",
    header: {
        renderBody: createRenderBody("head content"),
    },
    footer: {
        renderBody: createRenderBody("foter content"),
    },
    renderBody: createRenderBody("body content"),
};

export const Drawer_Open = Object.assign({}, Drawer, {
    open: true,
});

export const Drawer_Expanded = Object.assign({}, Drawer_Open, {
    expanded: true,
});
