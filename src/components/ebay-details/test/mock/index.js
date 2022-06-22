/* eslint camelcase: "off" */
import { createRenderBody } from '../../../../common/test-utils/shared';

export const Default_Details = {
    text: 'open',
    renderBody: createRenderBody('body content'),
};

export const Open_Details = Object.assign({}, Default_Details, {
    open: true,
});
