import Readme from './README.md';
import Component from './examples/01-basic/template.marko';

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
    title: 'ebay-snackbar-dialog',
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
            table: {
                disable: true,
            },
        },
        layout: {
            type: 'enum',
            control: { type: 'radio' },
            options: ['row', 'column'],
        },
        snacktext: {
            control: { type: 'text' },
            description: 'for demo only',
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
        onAction: {
            action: 'on-action',
            description: 'Triggered on action pressed',
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
Standard.args = {
    snacktext: 'This is the snackbar',
};
