import Readme from './README.md';
import Component from './examples/default.marko';
import code from './examples/default.marko?raw';

export default {
    title: 'form input/ebay-date-textbox',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        range: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'True if selecting a range, false if a single value',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        locale: {
            type: 'text',
            control: { type: 'text' },
            description: 'Locale of the date picker',
            table: {
                defaultValue: {
                    summary: 'navigator.language',
                },
            },
        },
    },
};

export const Standard = (args) => ({ input: args });
Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
