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
    title: 'progress/ebay-progress-bar',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        value: {
            control: { type: 'number', min: 1, max: 100 },
            description: 'HTML value of progress bar',
        },
        max: {
            control: { type: 'number', min: 1, max: 100 },
            description: 'HTML max. Defaults to 100',
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    value: 50,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-progress-bar', Standard.args),
        },
    },
};
