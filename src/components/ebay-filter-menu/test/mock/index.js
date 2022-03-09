import { createRenderBody, getNItems } from '../../../../common/test-utils/shared';

export const basic2Items = {
    text: 'Basic Filter Menu Button',
    footerText: 'Apply',
    a11yText: 'Filter Menu Button A11y Text',
    items: getNItems(2, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

export const basic3Items = Object.assign({}, basic2Items, {
    items: getNItems(3, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

export const radio2Items = {
    text: 'Radio Filter Menu Button',
    type: 'radio',
    footerText: 'Apply',
    a11yText: 'Filter Menu Button A11y Text',
    items: getNItems(2, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

export const radio3Items = Object.assign({}, radio2Items, {
    type: 'radio',
    items: getNItems(3, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});
