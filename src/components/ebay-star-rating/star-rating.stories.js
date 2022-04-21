import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import fixed from './examples/01-star-rating/template.marko';
import code from './examples/01-star-rating/template.marko?raw';
import component from './index.marko';

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
    title: 'ebay-star-rating',
    component: component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        value: {
            control: { type: 'text' },
            description:
                'Only for <ebay-star-rating/>. 1 - 5, depending on how many starts are selected. If 0 or null defaults to no stars selected. Can use 2-5 for 2 and a half stars',
        },
        a11yText: {
            control: { type: 'text' },
            description: 'The aria label for the outer container.',
        },
    },
};

export const DynamicStars = Template.bind({});
DynamicStars.args = {
    value: '3-5',
};
DynamicStars.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-star-rating', DynamicStars.args),
        },
    },
};

export const FixedStars = (args) => ({
    input: args,
    component: fixed,
});
FixedStars.args = {};
FixedStars.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
