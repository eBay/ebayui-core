import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import DefaultTemplate from './examples/default.marko';
import DefaultTemplateCode from './examples/default.marko?raw';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'form input/ebay-date-textbox',
    component: DefaultTemplate,
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
        a11yOpenPopoverText: {
            type: 'text',
            control: { type: 'text' },
            description: 'A11y label for the button that opens the calendar popover',
            table: { defaultValue: { summary: 'open calendar' } },
        },
        inputPlaceholderText: {
            type: 'text|array',
            control: { type: 'object' },
            description:
                'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (YYYY-MM-DD)", "End (YYYY-MM-DD)"]`).',
            table: { defaultValue: { summary: '"YYYY-MM-DD"' } },
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

export const Default = Template.bind({});
Default.parameters = {
    docs: {
        source: {
            DefaultTemplateCode,
        },
    },
};
