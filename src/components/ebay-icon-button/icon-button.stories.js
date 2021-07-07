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
            description: 'for link that looks like a button',
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
            description: 'used as the number to be placed in the badge',
            table: {
                category: 'Badge (only with variant=icon)',
            },
            type: 'number',
        },
        'badge-aira-label': {
            description: 'passed as the `aria-label` directly to the badge',
            table: {
                category: 'Badge (only with variant=icon)',
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
            description: 'Triggered when user presses escape',
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
    fluid: false,
    size: null,
    disabled: false,
    'partially-disabled': false,
    'badge-number': 0,
    'badge-aria-label': '',
};
