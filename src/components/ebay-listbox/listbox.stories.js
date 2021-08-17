import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-listbox',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        name: {
            control: { type: 'text' },
            description: 'used for the `name` attribute of the native `<select>`',
        },
        selected: {
            description: 'allows you to set the selected index option to `selected`',
        },
        option: {
            name: '@option',
            table: {
                category: '@attribute tags',
            },
        },
        text: {
            control: { type: 'text' },
            table: {
                category: '@option attributes',
            },
        },
        value: {
            control: { type: 'text' },
            table: {
                category: '@option attributes',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    options: [
        {
            value: '1',
            text: 'Option 1',
        },
        {
            value: '2',
            text: 'Option 2',
        },
        {
            value: '3',
            text: 'Option 3',
        },
    ],
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-listbox', Standard.args),
        },
    },
};
