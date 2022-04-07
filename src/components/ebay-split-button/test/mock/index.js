/* eslint camelcase: "off" */
import { createRenderBody, getNItems } from '../../../../common/test-utils/shared';

export const basic3Items = {
    renderBody: createRenderBody('button'),
    a11yMenuText: 'menu',
    items: getNItems(3, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

export const Loading_3Items = {
    renderBody: createRenderBody('button'),
    a11yMenuText: 'menu',
    a11yButtonLoadingText: 'button loading',
    bodyState: 'loading',
    items: getNItems(3, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

export const Options_3Items = {
    renderBody: createRenderBody('button'),
    a11yMenuText: 'menu',
    disabled: true,
    size: 'large',
    type: 'radio',
    items: getNItems(3, (i) => ({
        value: `item ${i}`,
        checked: i === 1,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};
