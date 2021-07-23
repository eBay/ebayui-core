import button from './index.marko';
import readme from './README.md';

const Template = (args) => ({
    input: {
        ...args,
        renderBody(out) {
            out.html(args.renderBody);
        },
    },
});
// const Template = args =({ input: withRenderBody(args) })

export default {
    title: 'ebay-button',
    component: button,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        renderBody: {},
        href: {
            description: 'url for link behaviour (switches to anchor tag)',
        },
        size: {
            options: ['large', 'regular'],

            description: '',
            table: {
                defaultValue: {
                    summary: 'none',
                },
            },
            type: { category: 'Options' },
        },
        priority: {
            options: ['primary', 'secondary', 'delete', 'none'],
            description: '',

            table: {
                defaultValue: {
                    summary: 'secondary',
                },
            },
            type: { category: 'Options' },
        },
        fluid: {
            description: 'button fills 100% width of container',
            table: {
                category: 'Toggles',
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        disabled: {
            description: '',
            table: {
                category: 'Toggles',
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        'partially-disabled': {
            description: 'programmatically disabled, but remains keyboard focusable',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                category: 'Toggles',
            },
        },
        transparent: {
            description: 'transparent background color (overrides `priority` setting)',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                category: 'Toggles',
            },
        },
        'fixed-height': {
            description: 'fixes the height based on `size`',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                category: 'Toggles',
            },
        },
        truncate: {
            description:
                'used in conjunction with `fixed-height`; truncates text to single line with ellipsis when text overflows',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                category: 'Toggles',
            },
        },
        onClick: {
            action: 'on-click',
            description: 'Triggered on click',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onEscape: {
            action: 'on-escape',
            description: 'Triggered on escape key',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onFocus: {
            action: 'on-focus',
            description: 'Triggered on focus',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onBlur: {
            action: 'on-blur',
            description: 'Triggered on blur',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: 'Button',
    href: '',
    fluid: false,
    size: null,
    disabled: false,
    priority: null,
    'partially-disabled': false,
    transparent: false,
    'fixed-height': false,
    truncate: false,
};