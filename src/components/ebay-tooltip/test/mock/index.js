import { createRenderBody } from '../../../../common/test-utils/shared';

export const Basic = {
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

export const Pointers = [
    'top-left',
    'top',
    'top-right',
    'right',
    'right-bottom',
    'right-top',
    'bottom-left',
    'bottom-right',
    'bottom',
    'left',
    'left-bottom',
    'left-top',
].map((pointer) => Object.assign({}, Basic, { pointer }));

export const customPointer = Object.assign({}, Basic, {
    styleTop: '20px',
    styleLeft: '20px',
});
