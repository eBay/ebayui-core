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
    title: 'progress/ebay-progress-spinner',
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
            options: ['small', 'large'],
            control: { type: 'select' },
            description: 'size of spinner - can be "small", "large". default is small ',
        },
        ariaLabel: {
            control: { type: 'text' },
            description: 'Description for accessibility',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    ariaLabel: 'loading',
};
Loading.parameters = {
    docs: {
        source: {
            code: `<ebay-progress-spinner aria-label="Busy"/>`,
        },
    },
};

Loading.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-progress-spinner', Loading.args),
        },
    },
};
