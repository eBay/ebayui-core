import { createRenderBody } from '../../../../common/test-utils/shared';

export const Basic = {
    a11yCloseText: 'Close Tourtip',
    host: {
        renderBody: createRenderBody('<span class="tooltip__host">Host Text</span>', 'Host Text'),
    },
    heading: {
        renderBody: createRenderBody('Heading Text'),
    },
    content: {
        renderBody: createRenderBody('Content Text'),
    },
};
