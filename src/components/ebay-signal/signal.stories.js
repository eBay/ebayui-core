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
    title: 'graphics & icons/ebay-signal',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        status: {
            type: 'enum',
            control: { type: 'select' },
            options: ['trustworthy', 'recent', 'time-sensitive', 'neutral'],
        },
    },
};
export const Standard = Template.bind({});
Standard.args = {
    renderBody: `Signal Text`,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-signal', Standard.args),
        },
    },
};
