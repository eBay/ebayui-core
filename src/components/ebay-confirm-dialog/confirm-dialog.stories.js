import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Confirm from './examples/01-default/template.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-confirm-dialog',
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
        'confirm-text': {
            control: { type: 'text' },
            description: 'Text for confirm button',
        },
        'reject-text': {
            control: { type: 'text' },
            description: 'Text for reject button',
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
            code: tagToString('ebay-confirm-dialog', Standard.args),
        },
    },
};
