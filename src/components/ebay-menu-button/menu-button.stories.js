import Readme from './README.md';
import Component from './examples/01-basic/template.marko';
import iconExample from './examples/09-icon-with-text/template.marko';

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
    title: 'ebay-menu-button',
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

export const iconText = () => ({
    component: iconExample,
});
