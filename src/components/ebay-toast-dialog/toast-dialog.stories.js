import Readme from './README.md';
import Component from './examples/01-default/template.marko';
import code from './examples/01-default/template.marko?raw';

const Template = (args) => ({
    input: {
        ...args,
        spread: null,
        ...args.spread,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
});

export default {
    title: 'dialogs/ebay-toast-dialog',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        open: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'Whether toast is open.',
            table: {
                disable: true,
            },
        },
        a11yCloseText: {
            control: { type: 'text' },
            description: ' A11y text for close button.',
        },
        header: {
            name: '@header',
            description: 'The header to be displayed in the toast dialog',
            table: {
                category: '@attribute tags',
            },
        },
        onOpen: {
            action: 'on-open',
            description: 'Triggered on dialog opened',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '',
                },
            },
        },
        onClose: {
            action: 'on-close',
            description: 'Triggered on dialog closed.',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {};
Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
