import { createRenderBody, getNItems } from '../../../../common/test-utils/shared';

export const basic2Items = {
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

export const separator4Items = Object.assign({}, basic2Items, {
    items: getNItems(4, (i) => ({
        value: `item ${i}`,
        separator: i === 2,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

export const fake2Items = Object.assign({}, basic2Items, {
    type: 'fake',
    items: getNItems(2, (i) => ({
        href: `#${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

const countries = ['Albania', 'Alcania', 'Alcdnia'];

export const Countries = Object.assign({}, basic2Items, {
    items: getNItems(3, (i) => ({
        value: `item ${i} ${countries[i]}`,
        renderBody: createRenderBody(`Item text ${i} ${countries[i]}`),
    })),
});
