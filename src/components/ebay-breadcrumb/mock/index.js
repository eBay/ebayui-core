const assign = require('core-js-pure/features/object/assign');

const getItem = (text, href = '#') => ({
    href,
    navSrc: '{"actionKind":"NAVSRC","operationId":"2489527"}',
    _sp: 'p2489527.m4340.l9751.c1',
    renderBody(stream) {
        stream.write(text);
    }
});
const basicItems = [getItem('eBay'),
    getItem('Auto Parts and Vehicles'),
    getItem('Motors Parts & Accessories', null)];

const firstItemMissingHref = [getItem('eBay', null),
    getItem('Auto Parts and Vehicles'),
    getItem('Motors Parts & Accessories', null)];

module.exports = {
    basicItems: {
        a11yHeadingText: 'Page navigation',
        items: basicItems
    },
    buttons: {
        items: basicItems.map(item => assign({}, item, { href: undefined }))
    },
    firstItemMissingHref: {
        a11yHeadingText: 'Page navigation',
        items: firstItemMissingHref
    },
    itemsWithHeadingTag: {
        a11yHeadingText: 'Page navigation',
        a11yHeadingTag: 'h3',
        items: basicItems
    }
};
