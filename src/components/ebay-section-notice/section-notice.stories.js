import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';
import withAction from './examples/with-action.marko';
import withActionCode from './examples/with-action.marko?raw';
import withDismiss from './examples/with-dismiss.marko';
import withDismissCode from './examples/with-dismiss.marko?raw';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'notices & tips/ebay-section-notice',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        status: {
            table: {
                defaultValue: {
                    summary: 'attention',
                },
            },

            description: 'The icon used and status of the notice',
            options: ['attention', 'confirmation', 'information'],
            type: 'select',
        },
        icon: {
            table: {
                defaultValue: {
                    summary: 'default',
                },
            },
            options: ['default', 'none'],
            type: 'select',
            description: 'matches whatever is specified by the "status", or if none hides icon',
        },
        a11yText: {
            description: 'adding description for the notice for a11y users',
        },
        a11yRoleDescription: {
            table: {
                defaultValue: {
                    summary: 'Notice',
                },
            },
            description: 'The roledescription to announce the component type for a11y users.',
        },
        dismissed: {
            description: 'whether or not the notice is dismissed',
            type: 'boolean',
        },
        title: {
            name: '@title',
            description: 'The title content to be displayed.',
            table: {
                category: '@attribute tags',
            },
        },
        footer: {
            name: '@footer',
            description: 'The footer content to be displayed. Used to show a CTA button generally',
            table: {
                category: '@attribute tags',
            },
        },
        cta: {
            name: '@cta',
            description: 'This allows the addition of a main CTA link',
            table: {
                category: '@attribute tags',
            },
        },
        onDismiss: {
            action: 'on-dismiss',
            description: 'Triggered on notice dismiss',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
    },
};

export const Basic = Template.bind({});
Basic.args = {
    a11yText: 'attention',
    status: 'attention',
    a11yRoleDescription: 'Notice',
    renderBody: '<p>Section notice info. Things you need to know.</p>',
};
Basic.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-section-notice', Basic.args),
        },
    },
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    a11yText: 'attention',
    status: 'attention',
    a11yRoleDescription: 'Notice',
    title: {
        renderBody: 'Section notice title',
    },
    renderBody: '<p>Section notice info. Things you need to know.</p>',
};

WithTitle.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-section-notice', WithTitle.args),
        },
    },
};

export const WithAction = (args) => ({
    input: args,
    component: withAction,
});

WithAction.args = {
    a11yText: 'attention',
    status: 'attention',
};

WithAction.parameters = {
    docs: {
        source: {
            code: withActionCode,
        },
    },
};

export const WithDismiss = (args) => ({
    input: args,
    component: withDismiss,
});

WithDismiss.args = {
    a11yText: 'information',
    a11yIconText: '',
    a11yDismissText: 'Dismiss Notice',
    status: 'information',
    icon: null,
};

WithDismiss.parameters = {
    docs: {
        source: {
            code: withDismissCode,
        },
    },
};
