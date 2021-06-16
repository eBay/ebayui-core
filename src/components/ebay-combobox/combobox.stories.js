import Readme from './README.md';
import Combobox from './index.marko';

const Template = (args) => ({ input: args });

export default {
    title: 'ebay-combobox',
    component: Combobox,
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
Standard.args = {
    input: {},
};
