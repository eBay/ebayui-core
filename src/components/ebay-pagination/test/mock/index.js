import { getNItems, createRenderBody } from '../../../../common/test-utils/shared';

export const base0Items = {
    a11yPreviousText: 'Previous page',
    a11yNextText: 'Next page',
    a11yCurrentText: 'Results Pagination - Page 2',
    items: [],
};

export const base0ItemsDots = Object.assign({}, base0Items, {
    variant: 'show-last',
});

export const link6ItemsNoSelected = Object.assign({}, base0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#next',
        },
        getNItems(6, (i) => ({
            href: `#${i}`,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link9Items1Selected = Object.assign({}, base0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous',
        },
        getNItems(9, (i) => ({
            href: `#${i}`,
            current: i === 1,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link9Items4Selected = Object.assign({}, base0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous',
        },
        getNItems(9, (i) => ({
            href: `#${i}`,
            current: i === 4,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link9Items7Selected = Object.assign({}, base0Items, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous',
        },
        getNItems(9, (i) => ({
            href: `#${i}`,
            current: i === 7,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link16ItemsDots1Selected = Object.assign({}, base0ItemsDots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous',
        },
        getNItems(16, (i) => ({
            href: `#${i}`,
            current: i === 1,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link16ItemsDots7Selected = Object.assign({}, base0ItemsDots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous',
        },
        getNItems(16, (i) => ({
            href: `#${i}`,
            current: i === 7,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link16ItemsDots13Selected = Object.assign({}, base0ItemsDots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous',
        },
        getNItems(16, (i) => ({
            href: `#${i}`,
            current: i === 13,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link16ItemsDots15Selected = Object.assign({}, base0ItemsDots, {
    items: [].concat(
        {
            type: 'previous',
            href: '#previous',
        },
        getNItems(16, (i) => ({
            href: `#${i}`,
            current: i === 15,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
            href: '#next',
        }
    ),
});

export const link1ItemsNavigationDisabled = Object.assign({}, base0Items, {
    items: [
        {
            type: 'previous',
            variant: 'link',
            disabled: true,
        },
        {
            href: `#1`,
            renderBody: createRenderBody('Pagination content 1'),
        },
        {
            type: 'next',
            href: '#next',
            disabled: true,
        },
    ],
});

export const link1ItemsNoNavigation = Object.assign({}, base0Items, {
    items: [
        {
            href: `#1`,
            renderBody: createRenderBody('Pagination content 1'),
        },
    ],
});

export const Buttons0Selected = Object.assign({}, base0Items, {
    items: [].concat(
        {
            type: 'previous',
            variant: 'button',
        },
        getNItems(6, (i) => ({
            current: i === 0,
            renderBody: createRenderBody(`P${i}`),
        })),
        {
            type: 'next',
        }
    ),
});
