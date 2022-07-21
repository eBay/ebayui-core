import { addRenderBodies } from '../../../.storybook/utils';
import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Combobox from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'form input/ebay-combobox',
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
        disabled: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'sets the disabled attribute of the input',
        },
        expanded: {
            control: { type: 'boolean' },
            description: 'sets whether the listbox is expanded',
        },
        autocomplete: {
            control: { type: 'text' },
            description:
                'default is `none`; available values are `none` or `list`. For list, will automatically filter results while typing.',
        },
        'list-selection': {
            control: { type: 'text' },
            description:
                'default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys.',
        },
        roledescription: {
            control: { type: 'text' },
            description:
                'The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales',
        },
        'floating-label': {
            control: { type: 'text' },
            description: 'The label to show on the combobox which moves up when focused',
        },
        option: {
            name: '@option',
            table: {
                category: '@attribute tags',
            },
        },
        text: {
            description: 'string to use in the option',
            control: { type: 'text' },
            table: {
                category: '@option attributes',
            },
        },
        sticky: {
            control: { type: 'boolean' },
            type: 'boolean',
            table: {
                category: '@option attributes',
            },
            description:
                'If true, the option will always be shown even if it does not match the filter',
        },
    },
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
    name: 'example1text',
    autocomplete: 'list',
    options: [
        { text: 'August Campaign' },
        { text: '4th of July Sale (paused)' },
        { text: 'Basic Offer' },
        { text: 'Basic Offer 2' },
        { text: 'Basic Offer 3' },
        { text: 'Basic Offer 4' },
    ],
    floatingLabel: 'Default Label',
};
FloatingLabel.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-combobox', FloatingLabel.args, { options: 'option' }),
        },
    },
    expanded: {
        table: {
            category: 'disabled',
        },
    },
};

export const Isolated = Template.bind({});
Isolated.args = {
    name: 'example1text',
    autocomplete: 'list',
    options: [
        { text: 'August Campaign' },
        { text: '4th of July Sale (paused)' },
        { text: 'Basic Offer' },
        { text: 'Basic Offer 2' },
        { text: 'Basic Offer 3' },
        { text: 'Basic Offer 4' },
    ],
};
Isolated.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-combobox', Isolated.args, { options: 'option' }),
        },
    },
    expanded: {
        table: {
            category: 'disabled',
        },
    },
};
