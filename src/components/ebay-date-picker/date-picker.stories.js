import Readme from './README.md';
import Component from './examples/default.marko';
import code from './examples/default.marko?raw';

export default {
    title: 'dialogs/ebay-date-picker',
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
        today: {
            type: 'date',
            control: { type: 'date' },
            description: 'Date value representing the current day',
            table: {
                defaultValue: {
                    summary: 'new Date()',
                },
            },
        },
        locale: {
            type: 'text',
            control: { type: 'text' },
            description: 'Locale of the date picker',
            table: {
                defaultValue: {
                    summary: 'en-US',
                },
            },
        },
        selected: {
            type: 'date',
            control: { type: 'date' },
            description: 'Currently selected date [ONLY ACTIVE WHEN RANGE IS FALSE]',
        },
        rangeStart: {
            type: 'date',
            control: { type: 'date' },
            description: 'Start of the currently selected range',
        },
        rangeEnd: {
            type: 'date',
            control: { type: 'date' },
            description: 'End of the currently selected range',
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered when date value(s) are changed',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ selected, rangeStart, rangeEnd }',
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
