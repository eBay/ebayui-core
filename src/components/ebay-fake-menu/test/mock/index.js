const assign = require('core-js-pure/features/object/assign');
const { createRenderBody, getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_2Items = {
    items: getNItems(2, (i) => ({
        href: `#${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

exports.Basic_3Items = assign({}, exports.Basic_2Items, {
    items: getNItems(3, (i) => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

exports.A11y_Current_True = assign({}, exports.Basic_2Items, {
    items: getNItems(3, (i) => {
        if (i === 0) {
            return {
                current: 'true',
                itemMatchesUrl: false,
                value: `item ${i}`,
                renderBody: createRenderBody(`Item text ${i}`),
            };
        }
        return {
            value: `item ${i}`,
            renderBody: createRenderBody(`Item text ${i}`),
        };
    }),
});

exports.Separator_4Items = assign({}, exports.Basic_2Items, {
    items: getNItems(4, (i) => ({
        value: `item ${i}`,
        _isSeparator: i === 2,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});
