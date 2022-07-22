import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Expand from './index.marko';

const Template = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
});

export default {
    title: 'building blocks/ebay-expand-button',
    component: Expand,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {},
        size: {
            type: 'options',
            description: 'Can be "large"',
            table: {
                defaultValue: {
                    summary: 'default',
                },
            },
            options: ['default', 'large'],
        },
        ariaExpanded: {
            description: 'if the expand button is expanded or not',
            options: ['false', 'true'],
            type: 'false',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        disabled: {
            description: 'if disabled or not',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        onEscape: {
            action: 'on-escape',
            description: 'Triggered on escape',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
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
    },
};

export const WithText = Template.bind({});
WithText.args = {
    renderBody: 'Default Text',
    disabled: false,
    'aria-expanded': 'false',
    size: 'default',
};

WithText.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-expand-button', WithText.args),
        },
    },
};

export const WithoutText = Template.bind({});
WithoutText.args = {
    renderBody: '',
    disabled: false,
    'aria-expanded': 'false',
    size: 'default',
};

WithoutText.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-expand-button', WithoutText.args),
        },
    },
};
