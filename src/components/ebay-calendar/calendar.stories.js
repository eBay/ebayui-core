import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import DefaultTemplate from './examples/default.marko';
import DefaultTemplateCode from './examples/default.marko?raw';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'building blocks/ebay-calendar',
    component: DefaultTemplate,
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
        selected: {
            type: 'text|array',
            control: { type: 'object' },
            description:
                'Date or list of dates that are selected, represented as an ISO string or an array of ISO strings',
            table: {
                defaultValue: {
                    summary: 'undefined',
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
        getA11yShowMonthText: {
            type: 'callback',
            control: { type: 'callback' },
            description: 'Function used to get the text for showing previous and next months',
            table: {
                defaultValue: {
                    summary: '(monthName) => `Show ${monthName}`',
                },
            },
        },
        buildA11yCellText: {
            type: 'callback',
            control: { type: 'callback' },
            description:
                'Function used to get the text for each cell in the calendar. Should return a string that describes the cell. The function is passed an object with the following properties: `selected`, `rangeStart`, `inRange`, `rangeEnd`, `today`, and `disabled`. By default, the function returns hyphen-separated english words describing each property, such as `" - selected - start of range - today"`',
            table: {
                defaultValue: {
                    summary: '(info) => [generates hyphen-separated list of strings]',
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
        onMonthChange: {
            action: 'on-month-change',
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

export const Default = Template.bind({});
Default.parameters = {
    docs: {
        source: {
            DefaultTemplateCode,
        },
    },
};
