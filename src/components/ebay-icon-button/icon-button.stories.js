import button from './index.marko';
import renderBody from './examples/body.marko';
import readme from './README.md';

const Template = (args) => ({
    input: {
        ...args,
        renderBody,
    },
});
// const Template = args =({ input: withRenderBody(args) })

export default {
    title: 'ebay-icon-button',
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
        'badge-number': {
            description: 'number to show in badge',
            table: {
                category: 'Badge (only with variant=icon)',
            },
            type: 'number',
        },
        'badge-aria-label': {
            description: '`aria-label` for badge',
            table: {
                category: 'Badge',
            },
        },

        //     text(
        //     'badge-aria-label',
        //     'number of notifications',
        //     'Badge (only with variant=icon)'
        //     )
        // },
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
    href: '',
    disabled: false,
    'partially-disabled': false,
    'badge-number': 0,
    'badge-aria-label': '',
};
