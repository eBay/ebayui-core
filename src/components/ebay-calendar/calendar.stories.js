import Readme from './README.md';
import Component from './examples/default.marko';
import code from './examples/default.marko?raw';

export default {
    title: 'building blocks/ebay-calendar',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        navigable: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'If true, a header is included that allows for navigation between months',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        interactive: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'Date cells are contained in buttons for interactive calendars, and spans otherwise',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        numMonths: {
            type: 'number',
            control: { type: 'number' },
            description: 'Number of months to be displayed at once',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
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
        onSelect: {
            action: 'on-select',
            description: 'Triggered when a date is selected',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ iso }',
                },
            },
        },
        onMonth: {
            action: 'on-month',
            description: 'Triggered during month navigation',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ iso }',
                },
            },
        },
        onFocus: {
            action: 'on-focus',
            description: 'Triggered when a day is focused on, typically via keyboard events',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ iso }',
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
