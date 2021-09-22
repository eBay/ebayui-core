import { tagToString } from '../../../.storybook/storybook-code-source';
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
    title: 'ebay-progress-spinner',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        size: {
            control: { type: 'text' },
            description: 'size of spinner - can be "small", "large". default is small ',
        },
        ariaLabel: {
            control: { type: 'text' },
            description: 'Description for accessibility',
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {};
Standard.parameters = {
    docs: {
        source: {
            code: `<ebay-progress-spinner aria-label="Busy"/>`,
        },
    },
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-progress-spinner', Standard.args),
        },
    },
};
