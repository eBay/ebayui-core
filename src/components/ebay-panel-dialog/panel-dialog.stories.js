import { tagToString } from '../../../.storybook/storybook-code-source';
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
    title: 'dialogs/ebay-panel-dialog',
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
            description: 'Whether dialog is open.',
            table: {
                disable: true,
            },
        },
        position: {
            control: { type: 'text' },
            description:
                '"end" or "start", defaults to "start", the position of the panel, either at the start (left side) of the page, or end (right side) of the page.',
        },
        focus: {
            control: { type: 'text' },
            description:
                'An id for an element which will receive focus when the dialog opens (defaults to close button)',
        },
        closeFocus: {
            control: { type: 'text' },
            description:
                'An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened',
        },
        a11yCloseText: {
            control: { type: 'text' },
            description: 'A11y text for close button and mask.',
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
            code: tagToString('ebay-panel-dialog', Standard.args),
        },
    },
};
