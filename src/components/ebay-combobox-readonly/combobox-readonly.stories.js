import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Combobox from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-combobox-readonly',
    component: Combobox,
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
            description: 'used for the `name` attribute of the `<input>` element',
        },
        borderless: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether button has borders ',
        },
        selected: {
            description: 'allows you to set the selected index option to `selected`',
        },
        text: {
            description: 'string to use in the option',
            control: { type: 'text' },
            table: {
                category: '@option attributes',
            },
        },
        value: {
            description: 'used for the `value` attribute of the native `<option>`',
            control: { type: 'text' },
            table: {
                category: '@option attributes',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    name: 'example1text',
    autocomplete: 'list',
    borderless: true,
    options: [
        { text: 'August Campaign' },
        { text: '4th of July Sale (paused)' },
        { text: 'Basic Offer' },
        { text: 'Basic Offer 2' },
        { text: 'Basic Offer 3' },
        { text: 'Basic Offer 4' },
    ],
};
