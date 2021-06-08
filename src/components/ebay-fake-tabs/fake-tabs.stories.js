import Readme from './README.md';
import Component from './examples/01-default-selected-index/template.marko';

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
    title: 'ebay-fake-tabs',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {},
};

export const Standard = Template.bind({});
Standard.args = {};
