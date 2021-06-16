import Readme from './README.md';
import Drawer from './examples/01-default/template.marko';

const Template = (args) => ({
    input: {
        ...args,
        renderBody(out) {
            out.html(args.renderBody);
        },
    },
});

export default {
    title: 'ebay-drawer-dialog',
    component: Drawer,
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
