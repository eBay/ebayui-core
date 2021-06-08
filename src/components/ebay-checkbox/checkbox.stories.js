import Readme from './README.md';
import Checkbox from './index.marko';
import GroupTemplate from './examples/group.marko';

const Template = (args) => ({ input: args });

export default {
    title: 'ebay-checkbox',
    component: Checkbox,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        checked: {
            description: 'if checked or not',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
            type: 'boolean',
        },
        disabled: {
            description: 'disables button',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
            type: 'boolean',
        },
        size: {
            options: ['large', 'regular'],

            description:
                'Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',
            table: {
                defaultValue: {
                    summary: 'regular',
                },
            },
            type: { category: 'Options' },
        },
        'icon-style': {
            options: ['rounded', 'square'],
            description:
                'Will change the icon to be rounded or square (square being the legacy and deprecated version)',
            table: {
                defaultValue: {
                    summary: 'rounded',
                },
            },
            type: { category: 'Options' },
        },

        onChange: {
            action: 'on-change',
            description: 'Triggered on change',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value, checked }',
                },
            },
        },
        onFocus: {
            action: 'on-focus',
            description: 'Triggered on focus',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
                },
            },
        },
        onKeydown: {
            action: 'on-keydown',
            description: 'Triggered on keydown',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent, value }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    input: {
        checked: false,
        disabled: false,
        size: 'regular',
        'icon-style': 'rounded',
    },
};

export const Group = (args) => ({
    input: args,
    component: GroupTemplate,
});
Group.args = {};
