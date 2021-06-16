import alertDialog from './examples/01-default/template.marko';
import Readme from './README.md';

export default {
    title: 'ebay-alert-dialog',
    component: alertDialog,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {},
};

export const normal = () => ({
    input: {},
});
