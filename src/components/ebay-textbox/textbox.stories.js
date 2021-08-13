import Readme from './README.md';
import Component from './index.marko';

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
    title: 'ebay-textbox',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        fluid: {
            type: 'boolean',
            control: { type: 'boolean' },
        },
        inputSize: {
            control: { type: 'text' },
            description: 'either "regular" or "large". If large, then renders larger sized textbox',
        },
        multiline: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'renders a multi-line texbox if true',
        },
        invalid: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'indicates a field-level error with red border if true',
        },
        buttonAriaLabel: {
            control: { type: 'text' },
            description:
                'aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`',
        },
        prefixIcon: {
            name: '@prefix-icon',
            description: 'An `<ebay-{name}-icon>` to show as the prefix icon.',
            table: {
                category: '@attribute tags',
            },
        },
        postfixIcon: {
            name: '@postfix-icon',
            description: 'An `<ebay-{name}-icon>` to show as the postfix icon.',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {};
