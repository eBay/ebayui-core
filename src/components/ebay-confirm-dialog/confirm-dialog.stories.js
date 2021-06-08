import Readme from './README.md';
import Confirm from './examples/01-default/template.marko';

const Template = (args) => ({ input: args });

export default {
    title: 'ebay-confirm-dialog',
    component: Confirm,
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
