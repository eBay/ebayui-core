import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-listbox-button',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        selected: {
            description: 'allows you to set the selected index option to `selected`',
        },
        borderless: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether button has borders ',
        },
        fluid: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether listbox width is 100% ',
        },
        buttonName: {
            control: { type: 'text' },
            description: 'used for the `name` attribute of the native `<button>` ',
        },
        truncate: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'will truncate the text of the button onto a single line, and adds an ellipsis, when the buttons text overflows',
        },
        prefixId: {
            control: { type: 'text' },
            description:
                'id of an external element to use as the prefix label for the listbox button. Cannot be used with `prefix-label`',
        },
        prefixLabel: {
            control: { type: 'text' },
            description:
                'The label to add before each selected item on the button. Cannot be used with `prefix-id`',
        },
        option: {
            name: '@option',
            table: {
                category: '@attribute tags',
            },
        },
        text: {
            table: {
                control: { type: 'text' },
                category: '@option attributes',
            },
        },
        value: {
            table: {
                control: { type: 'value' },
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
            code: tagToString('ebay-listbox-button', Standard.args),
        },
    },
};
