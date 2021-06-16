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
    title: 'ebay-expand-button',
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
        'aria-expanded': {
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

export const Standard = Template.bind({});
Standard.args = {
    renderBody: '',
    disabled: false,
    'aria-expanded': 'false',
    size: 'default',
};
