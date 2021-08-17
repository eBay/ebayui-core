import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';
import formExample from './examples/03-grouped-radio/template.marko';
import textFormExample from './example.txt';

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
    title: 'ebay-radio',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        size: {
            control: { type: 'text' },
            description:
                'Either "large" or "regular". Sets the radio icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the radio will not change, but only the icon)',
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {};
Standard.component = Component;
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-radio', Standard.args),
        },
    },
};

export const RadioForm = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
    component: formExample,
});
RadioForm.parameters = {
    docs: {
        source: {
            code: textFormExample,
        },
    },
    controls: {
        disabled: true,
    },
};
