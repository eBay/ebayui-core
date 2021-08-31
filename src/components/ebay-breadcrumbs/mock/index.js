const { getNItems, createRenderBody } = require('../../../common/test-utils/shared');

exports.Links = {
    a11yHeadingText: 'Page navigation',
    items: getNItems(3, (i) => ({
        href: i === 2 ? undefined : '#',
        renderBody: createRenderBody(`Item Text ${i}`),
    })),
};
exports.Buttons = {
    items: getNItems(3, (i) => ({
        renderBody: createRenderBody(`Item Text ${i}`),
    })),
};
exports.Links_Last_Without_HREF = {
    a11yHeadingText: 'Page navigation',
    items: getNItems(3, (i) => ({
        href: i === 2 ? undefined : '#',
        renderBody: createRenderBody(`Item Text ${i}`),
    })),
};
exports.Links_Heading_Tag = Object.assign({}, exports.Links, {
    a11yHeadingTag: 'h3',
});
