import { createRenderBody } from '../../../../common/test-utils/shared';

export const windowNotice = {
    type: 'window',
    title: {
        renderBody: createRenderBody('Title'),
    },
    renderBody: createRenderBody('Body'),
};
