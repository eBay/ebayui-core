/* eslint camelcase: "off" */
import { createRenderBody } from '../../../../common/test-utils/shared';

export const Snackbar = {
    a11yCloseText: 'close',
    header: {
        renderBody: createRenderBody('head content'),
    },
    footer: {
        renderBody: createRenderBody('footer content'),
    },
    action: {
        renderBody: createRenderBody('action content'),
    },
    renderBody: createRenderBody('body content'),
};

export const Snackbar_Open = Object.assign({}, Snackbar, {
    open: true,
});

export const Snackbar_Closed = Object.assign({}, Snackbar, {
    open: false,
});
