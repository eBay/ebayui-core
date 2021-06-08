import breadcrumb1 from './examples/01-breadcrumb-heading-level/template.marko';
import breadcrumb2 from './examples/02-last-page-as-current/template.marko';
import breadcrumb3 from './examples/03-last-page-as-parent/template.marko';
import breadcrumb4 from './examples/04-page-with-custom-attributes/template.marko';
import Readme from './README.md';

// const Template = (args) => ({ input: args });

export default {
    title: 'ebay-breadcrumbs',
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
};

export const heading = () => ({
    component: breadcrumb1,
});

export const lastPageCurrent = () => ({
    component: breadcrumb2,
});

export const lastPageParent = () => ({
    component: breadcrumb3,
});
export const pageCustomAttribute = () => ({
    component: breadcrumb4,
});
