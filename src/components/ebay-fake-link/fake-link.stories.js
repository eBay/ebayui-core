import { tagToString } from '../../../.storybook/storybook-code-source';
import component from './index.marko';
import readme from './README.md';

const Template = (args) => ({
    input: {
        ...args,
        renderBody(out) {
            out.html(args.renderBody);
        },
    },
});

export default {
    title: 'buttons/ebay-fake-link',
    component,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        renderBody: {},
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
            description:
                'Should only be standalone when it is clear contextually that this is a link, regardless of styles',
            options: ['inline', 'standalone'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'inline',
                },
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
    renderBody: 'Fake-Link',
    disabled: false,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-fake-link', Standard.args),
        },
    },
};
