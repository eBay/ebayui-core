import Readme from './README.md';
import Component from './examples/standard.marko';
import code from './examples/standard.marko?raw';

const Template = (args) => ({
    input: {
        ...args,
    },
});

export default {
    title: 'ebay-window-notice',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
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
        window: {
            table: {
                defaultValue: {
                    summary: 'lightbox',
                },
            },
            options: ['fullscreen', 'lightbox'],
            type: 'select',
            description:
                "If set to full screen the notice will fill the full height of it's window/container",
        },
        title: {
            name: '@title',
            description: 'The title content to be displayed',
            table: {
                category: '@attribute tags',
            },
        },
        footer: {
            name: '@footer',
            description: 'The footer content to be displayed. Used for buttons or actions',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    a11yText: 'success',
    icon: null,
    window: null,
};

Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
