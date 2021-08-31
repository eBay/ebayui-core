import { tagToString } from '../../../.storybook/storybook-code-source';
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
    title: 'ebay-page-notice',
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

            description: 'The icon used and status of the noptice',
            options: ['attention', 'confirmation', 'information', 'celebration'],
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
        a11yIconText: {
            description: 'adding description for the icon in the notice for a11y users',
        },

        title: {
            name: '@title',
            description: 'The title content to be displayed. Used mostly for celebration notice',
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
    },
};

export const Standard = Template.bind({});
Standard.args = {
    a11yText: 'see this notice',
    status: null,
    icon: null,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-page-notice', Standard.args),
        },
    },
};

export const WithAction = (args) => ({
    input: {
        ...args,
        renderBody,
        footer,
    },
});
WithAction.args = {
    a11yText: 'see this notice',
    status: null,
    icon: null,
};
