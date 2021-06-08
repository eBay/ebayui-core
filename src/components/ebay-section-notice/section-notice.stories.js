import Readme from './README.md';
import Component from './index.marko';
import footer from './examples/button.marko';
import renderBody from './examples/body.marko';
import title from './examples/title.marko';

const Template = (args) => ({
    input: {
        ...args,
        renderBody,
        title: args.status === 'celebration' && title,
    },
});

export default {
    title: 'ebay-section-notice',
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
        'a11y-text': {
            description: 'adding description for the notice for a11y users',
        },
        'a11y-role-description': {
            table: {
                defaultValue: {
                    summary: 'Notice',
                },
            },
            description: 'The roledescription to announce the component type for a11y users.',
        },

        footer: {
            name: '@footer',
            description: 'The footer content to be displayed. Used to show a CTA button generally',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    'a11y-text': 'see this notice',
    'a11y-role-description': 'Notice',
    status: null,
    icon: null,
};

export const WithAction = (args) => ({
    input: {
        ...args,
        renderBody,
        footer,
    },
});
WithAction.args = {
    'a11y-text': 'see this notice',
    status: null,
    icon: null,
};
