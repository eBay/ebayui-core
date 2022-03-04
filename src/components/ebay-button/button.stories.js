import { tagToString } from '../../../.storybook/storybook-code-source';
import button from './index.marko';
import readme from './README.md';
import migratorTemplate from './examples/migrator.marko';
import migratorCode from './examples/migrator.marko?raw';

const Template = (args) => ({
    input: {
        ...args,
        spread: null,
        ...args.spread,
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
            options: ['primary', 'secondary', 'tertiary', 'none'],
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
        bodyState: {
            description:
                'when state is loading, adds progress spinner. when user interacts with button, reset should be called to reset aria-live state. default is none',
            options: ['none', 'loading', 'reset'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'none',
                },
            },
            type: { category: 'Options' },
        },
        a11yText: {
            description: 'aria label for button when bodyState === loading',
            table: {
                defaultValue: '',
            },
            control: { type: 'text' },
            type: { category: 'Options' },
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
        variant: {
            options: ['standard', 'destructive'],
            description:
                'transforms to a specific variant that styles in conjunction with priority',
            table: {
                defaultValue: {
                    summary: 'standard',
                },
            },
            type: { category: 'Options' },
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
        spread: {
            control: {
                type: 'object',
            },
            description: 'Additional attributes being passed to component',
            table: {
                category: 'Other',
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

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-button', Standard.args),
        },
    },
};

export const migrators = (args) => ({
    input: args,
    component: migratorTemplate,
});

migrators.args = {};
migrators.parameters = {
    docs: {
        source: {
            code: migratorCode,
        },
    },
};
