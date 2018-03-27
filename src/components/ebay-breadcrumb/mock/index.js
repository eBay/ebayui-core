const item = { href: 'https://www.ebay.com/', navSrc: '{"actionKind":"NAVSRC","operationId":"2489527"}', _sp: 'p2489527.m4340.l9751.c1' };

const getItem = (text, href) => {
    const clonedItem = JSON.parse(JSON.stringify(item));
    clonedItem.renderBody = (stream) => stream.write(text);
    clonedItem.href = href;
    return clonedItem;
};
const items = [getItem('eBay', 'https://www.ebay.com'),
    getItem('Auto Parts and Vehicles', 'https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334'),
    getItem('Motors Parts & Accessories', 'https://www.ebay.com/rpp/motors-parts-accessories'),
    getItem('Motorcycle Parts', 'https://www.ebay.com/b/Motorcycle-Parts/10063/bn_557636')];

const itemsWithMissingLinks = [getItem('eBay', null),
    getItem('Auto Parts and Vehicles', 'https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334'),
    getItem('Motors Parts & Accessories', 'https://www.ebay.com/rpp/motors-parts-accessories'),
    getItem('Motorcycle Parts', 'https://www.ebay.com/b/Motorcycle-Parts/10063/bn_557636')];

const itemsWithNoHref = [getItem('eBay', 'https://www.ebay.com/'),
    getItem('Auto Parts and Vehicles', 'https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334'),
    getItem('Motors Parts & Accessories', 'https://www.ebay.com/rpp/motors-parts-accessories'),
    getItem('Motorcycle Parts', null)];

module.exports = {
    items: { ariaLabel: 'You are here',
        items: items,
        '*': { dataview: 'data-view tracking' }
    },
    itemsWithMissingLinks: { ariaLabel: 'You are here',
        items: itemsWithMissingLinks,
        '*': { dataview: 'data-view tracking' }
    },
    itemsWithNoHref: { ariaLabel: 'You are here',
        items: itemsWithNoHref,
        '*': { dataview: 'data-view tracking' }
    },
    itemsWithPreventDefault: { ariaLabel: 'You are here',
        items: items,
        preventDefault: true,
        '*': { dataview: 'data-view tracking' }
    }
};
