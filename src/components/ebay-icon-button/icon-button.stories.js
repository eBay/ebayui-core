import { tagToString } from '../../../.storybook/storybook-code-source';
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
        partiallyDisabled: {
            description: 'programmatically disabled, but remains keyboard focusable',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                category: 'Toggles',
            },
        },
        badgeNumber: {
            description: 'number to show in badge',
            table: {
                category: 'Badge (only with variant=icon)',
            },
            type: 'number',
        },
        badgeAriaLabel: {
            description: '`aria-label` for badge',
            table: {
                category: 'Badge',
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
    href: '',
    disabled: false,
    partiallyDisabled: false,
    badgeNumber: 0,
    badgeAriaLabel: '',
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-icon-button', Standard.args),
        },
    },
};
