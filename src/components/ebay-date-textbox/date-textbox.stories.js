import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../../.storybook/utils";
import { tagToString } from "../../../.storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import LocalizedTemplate from "./examples/localized.marko";
import LocalizedTemplateCode from "./examples/localized.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "form input/ebay-date-textbox",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        value: {
            type: "date",
            control: { type: "date" },
            description: "Selected date",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        range: {
            type: "boolean",
            control: { type: "boolean" },
            description: "True if selecting a range, false if a single value",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        rangeEnd: {
            type: "date",
            control: { type: "date" },
            description: "If range is true, the end of the selected range",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        locale: {
            type: "text",
            control: { type: "text" },
            description: "Locale of the date picker",
            table: {
                defaultValue: {
                    summary: "navigator.language",
                },
            },
        },
        disableBefore: {
            type: "date",
            control: { type: "date" },
            description:
                "First date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        disableAfter: {
            type: "date",
            control: { type: "date" },
            description:
                "Last date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        disableWeekdays: {
            type: "array",
            control: { type: "array" },
            description:
                "List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        disableList: {
            type: "array",
            control: { type: "array" },
            description:
                "List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        getA11yShowMonthText: {
            type: "callback",
            control: { type: "callback" },
            description:
                "Function used to get the text for showing previous and next months",
            table: {
                defaultValue: {
                    summary: "(monthName) => `Show ${monthName}`",
                },
            },
        },
        a11ySelectedText: {
            type: "text",
            control: { type: "text" },
            description:
                "Text to be read by screen readers when a date is selected",
            table: {
                defaultValue: {
                    summary: "selected",
                },
            },
        },
        a11yRangeStartText: {
            type: "text",
            control: { type: "text" },
            description:
                "Text to be read by screen readers when a date is the start of a range",
            table: {
                defaultValue: {
                    summary: "start of range",
                },
            },
        },
        a11yInRangeText: {
            type: "text",
            control: { type: "text" },
            description:
                "Text to be read by screen readers when a date is in a range",
            table: {
                defaultValue: {
                    summary: "in range",
                },
            },
        },
        a11yRangeEndText: {
            type: "text",
            control: { type: "text" },
            description:
                "Text to be read by screen readers when a date is the end of a range",
            table: {
                defaultValue: {
                    summary: "end of range",
                },
            },
        },
        a11ySeparator: {
            type: "text",
            control: { type: "text" },
            description:
                "Text to be read by screen readers to separate properties",
            table: {
                defaultValue: {
                    summary: " - ",
                },
            },
        },
        a11yOpenPopoverText: {
            type: "text",
            control: { type: "text" },
            description:
                "A11y label for the button that opens the calendar popover",
            table: { defaultValue: { summary: "open calendar" } },
        },
        inputPlaceholderText: {
            type: "text|array",
            control: { type: "object" },
            description:
                'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (YYYY-MM-DD)", "End (YYYY-MM-DD)"]`).',
            table: { defaultValue: { summary: '"YYYY-MM-DD"' } },
        },
        onChange: {
            action: "on-change",
            description: "Triggered when the selection changes",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ selected } | { rangeStart, rangeEnd }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-date-textbox", {}),
        },
    },
};

export const Localized = buildExtensionTemplate(
    LocalizedTemplate,
    LocalizedTemplateCode
);
