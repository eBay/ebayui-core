const assign = require('core-js-pure/features/object/assign');
const { getNItems, createRenderBody } = require('../../../../common/test-utils/shared');

exports.Base_0Items = {
    a11yPreviousText: 'Previous page',
    a11yNextText: 'Next page',
    a11yCurrentText: 'Results Pagination - Page 2',
    items: []
};

exports.Base_0Items_Dots = assign({}, exports.Base_0Items, {
    variant: 'show-last'
});

exports.Links_6Items_No_Selected = assign({}, exports.Base_0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#next'
        },
        getNItems(6, i => ({
            href: `#${i}`,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_9Items_1Selected = assign({}, exports.Base_0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous'
        },
        getNItems(9, i => ({
            href: `#${i}`,
            current: i === 1,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_9Items_4Selected = assign({}, exports.Base_0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous'
        },
        getNItems(9, i => ({
            href: `#${i}`,
            current: i === 4,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_9Items_7Selected = assign({}, exports.Base_0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous'
        },
        getNItems(9, i => ({
            href: `#${i}`,
            current: i === 7,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_16ItemsDots_1Selected = assign({}, exports.Base_0Items_Dots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous'
        },
        getNItems(16, i => ({
            href: `#${i}`,
            current: i === 1,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_16ItemsDots_7Selected = assign({}, exports.Base_0Items_Dots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous'
        },
        getNItems(16, i => ({
            href: `#${i}`,
            current: i === 7,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_16ItemsDots_13Selected = assign({}, exports.Base_0Items_Dots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous'
        },
        getNItems(16, i => ({
            href: `#${i}`,
            current: i === 13,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_16ItemsDots_15Selected = assign({}, exports.Base_0Items_Dots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous'
        },
        getNItems(16, i => ({
            href: `#${i}`,
            current: i === 15,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next',
            href: '#next'
        }
    )
});

exports.Links_1Items_Navigation_Disabled = assign({}, exports.Base_0Items, {
    items: [
        {
            type: 'previous',
            variant: 'link',
            disabled: true
        },
        {
            href: `#1`,
            renderBody: createRenderBody('Pagination content 1')
        },
        {
            type: 'next',
            href: '#next',
            disabled: true
        }
    ]
});

exports.Links_1Items_No_Navigation = assign({}, exports.Base_0Items, {
    items: [
        {
            href: `#1`,
            renderBody: createRenderBody('Pagination content 1')
        }
    ]
});

exports.Buttons_0Selected = assign({}, exports.Base_0Items, {
    items: [].concat(
        {
            type: 'previous',
            variant: 'button'
        },
        getNItems(6, i => ({
            current: i === 0,
            renderBody: createRenderBody(`P${i}`)
        })),
        {
            type: 'next'
        }
    )
});
