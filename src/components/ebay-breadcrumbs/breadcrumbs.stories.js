import { tagToString } from '../../../.storybook/storybook-code-source';
import breadcrumb1 from './examples/01-breadcrumb-heading-level/template.marko';
import breadcrumb2 from './examples/02-last-page-as-current/template.marko';
import breadcrumb3 from './examples/03-last-page-as-parent/template.marko';
import breadcrumb4 from './examples/04-page-with-custom-attributes/template.marko';
import breadcrumb5 from './examples/05-buttons-breadcrumbs/template.marko';
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

heading.args = {};
heading.parameters = {
    controls: { hideNoControlsWarning: true },
};

heading.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-breadcrumbs', heading.args),
        },
    },
};

export const lastPageCurrent = () => ({
    component: breadcrumb2,
});
lastPageCurrent.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const lastPageParent = () => ({
    component: breadcrumb3,
});
lastPageParent.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const pageCustomAttribute = () => ({
    component: breadcrumb4,
});
pageCustomAttribute.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const buttons = () => ({
    component: breadcrumb5,
});

buttons.parameters = {
    controls: { hideNoControlsWarning: true },
};
