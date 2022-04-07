/* eslint camelcase: "off" */
import { createRenderBody } from '../../../../common/test-utils/shared';

export const Dialog = {
    confirmText: 'confirm',
    rejectText: 'close',
    header: {
        renderBody: createRenderBody('title content'),
    },
    renderBody: createRenderBody('body content'),
};

export const dialogOpen = Object.assign({}, Dialog, {
    open: true,
});
