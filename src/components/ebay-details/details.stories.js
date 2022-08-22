import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Details from './index.marko';

const Template = (args) => ({
    input: {
        ...args,
        renderBody(out) {
            out.html(args.renderBody);
        },
    },
});

export default {
    title: 'navigation & disclosure/ebay-details',
    component: Details,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {},
        alignment: {
            type: 'options',
            description: 'The position of the details',
            table: {
                defaultValue: {
                    summary: 'regular',
                },
            },
            options: ['regular', 'center'],
        },
        size: {
            type: 'options',
            description: 'Size of the details',
            table: {
                defaultValue: {
                    summary: 'regular',
                },
            },
            options: ['regular', 'small'],
        },
        open: {
            type: 'boolean',
            description: 'Whether details is open',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        as: {
            description: 'The root element.',
            table: {
                defaultValue: {
                    summary: 'div',
                },
            },
        },
        onToggle: {
            action: 'on-toggle',
            description: 'Triggered on toggle',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, open }',
                },
            },
        },
        onClick: {
            action: 'on-click',
            description: 'Triggered on click',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    text: 'Show me the details!',
    size: 'regular',
    open: false,
    as: 'p',
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-details', Standard.args),
        },
    },
};
