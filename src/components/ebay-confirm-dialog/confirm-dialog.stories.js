import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Confirm from './examples/01-default/template.marko';
import code from './examples/01-default/template.marko?raw';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'dialogs/ebay-confirm-dialog',
    component: Confirm,
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
        closeFocus: {
            control: { type: 'text' },
            description:
                'An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened',
        },
        'confirm-text': {
            control: { type: 'text' },
            description: 'Text for confirm button',
        },
        'reject-text': {
            control: { type: 'text' },
            description: 'Text for reject button',
        },
        onOpen: {
            action: 'on-open',
            description: 'Triggered on dialog open',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onConfirm: {
            action: 'on-confirm',
            description: 'Triggered on dialog confirm button click',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onReject: {
            action: 'on-reject',
            description: 'Triggered when dialog is closed',
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
    'confirm-text': 'Okay',
    'reject-text': 'Cancel',
};
Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
