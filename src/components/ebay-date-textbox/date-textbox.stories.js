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
        disableBefore: {
            type: 'date',
            control: { type: 'date' },
            description: 'First date that may be selected',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disableAfter: {
            type: 'date',
            control: { type: 'date' },
            description: 'Last date that may be selected',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disableWeekdays: {
            type: 'array',
            control: { type: 'array' },
            description:
                'List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disableList: {
            type: 'array',
            control: { type: 'array' },
            description:
                'List of specific days that are disabled. Should be a list of date objects, but also accepts timestamps or ISO strings',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered when the selection changes',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ selected } | { rangeStart, rangeEnd }',
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
