import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import type { Input } from "./component";
import WithLinksTemplate from "./examples/links.marko";
import WithLinksTemplateCode from "./examples/links.marko?raw";
import WithSpecificLinksTemplate from "./examples/linkMap.marko";
import WithSpecificLinksTemplateCode from "./examples/linkMap.marko?raw";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-calendar",
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
            type: "boolean",
            control: { type: "boolean" },
            description:
                "If true, a header is included that allows for navigation between months",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        interactive: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "Date cells are contained in buttons for interactive calendars, and spans otherwise",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        numMonths: {
            type: "number",
            control: { type: "number" },
            description: "Number of months to be displayed at once",
            table: {
                defaultValue: {
                    summary: "false",
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
        selected: {
            type: "text|array",
            control: { type: "object" },
            description:
                "Date or list of dates that are selected, represented as an ISO string or an array of ISO strings",
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
                    summary: "navigator.language || 'en-US'",
                },
            },
        },
        todayISO: {
            type: "date",
            control: { type: "date" },
            description: "The starting current date.",
            table: {
                defaultValue: {
                    summary: "Today's date",
                },
            },
        },
        disableBefore: {
            type: "date",
            control: { type: "date" },
            description: "First date that may be selected",
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        disableAfter: {
            type: "date",
            control: { type: "date" },
            description: "Last date that may be selected",
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
        linkBuilder: {
            type: "callback",
            control: { type: "callback" },
            description:
                "Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value",
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
        a11yTodayText: {
            type: "text",
            control: { type: "text" },
            description:
                "Text to be read by screen readers when a date is the current date",
            table: {
                defaultValue: {
                    summary: "today",
                },
            },
        },
        a11yDisabledText: {
            type: "text",
            control: { type: "text" },
            description:
                "Text to be read by screen readers when a date is disabled",
            table: {
                defaultValue: {
                    summary: "inactive",
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
        onSelect: {
            action: "on-select",
            description: "Triggered when a date is selected",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ iso }",
                },
            },
        },
        "onMonth-change": {
            action: "on-month-change",
            description: "Triggered during month navigation",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ iso }",
                },
            },
        },
        onFocus: {
            action: "on-focus",
            description:
                "Triggered when a day is focused on, typically via keyboard events",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ iso }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-calendar", {}),
        },
    },
};

export const WithLinks = buildExtensionTemplate(
    WithLinksTemplate,
    WithLinksTemplateCode,
);
export const WithSpecificLinks = buildExtensionTemplate(
    WithSpecificLinksTemplate,
    WithSpecificLinksTemplateCode,
);
