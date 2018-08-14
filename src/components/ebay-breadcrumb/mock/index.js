const getItem = (text, href) => {
    const item = {
        href: 'https://www.ebay.com/',
        navSrc: '{"actionKind":"NAVSRC","operationId":"2489527"}',
        _sp: 'p2489527.m4340.l9751.c1'
    };
    const clonedItem = JSON.parse(JSON.stringify(item));
    clonedItem.renderBody = (stream) => stream.write(text);
    clonedItem.href = href;
    return clonedItem;
};
const basicItems = [getItem('eBay', 'https://www.ebay.com'),
    getItem('Auto Parts and Vehicles', 'https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334'),
    getItem('Motors Parts & Accessories', null)];

const firstItemMissingHref = [getItem('eBay', null),
    getItem('Auto Parts and Vehicles', 'https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334'),
    getItem('Motors Parts & Accessories', null)];

module.exports = {
    basicItems: {
        a11yHeadingText: 'Page navigation',
        items: basicItems
    },
    hijax: {
        hijax: true,
        items: basicItems
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
