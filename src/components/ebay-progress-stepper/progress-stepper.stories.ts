import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "progress/ebay-progress-stepper",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        direction: {
            type: "enum",
            control: { type: "select" },
            options: ["row", "column"],
            description:
                'Will display stepper as a vertical column or horizontal row. Default is "row"',
        },
        defaultState: {
            type: "enum",
            control: { type: "select" },
            options: ["complete", "upcoming", "attention", "active"],
            description:
                "If complete, then all items will be in complete state by default. If upcoming, all items will be in upcoming state. If attention, then the current item will show as blocked. Otherwise, the default (active), will change items based on the `current` item (current defaults to first step if not set).",
        },
        autoParagraph: {
            type: "boolean",
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: "true",
                },
            },
            description:
                "Specify whether to auto wrap @step body text with a paragraph tag",
        },
        a11yHeadingTag: {
            table: {
                defaultValue: {
                    summary: "h2",
                },
            },
            control: { type: "text" },
            description: "heading tag for progress stepper",
        },
        a11yHeadingText: {
            type: "string",
            control: { type: "text" },
            description:
                "heading text for progress stepper which will be clipped",
        },
        step: {
            name: "@step",
            description: "",
            table: {
                category: "@attribute tags",
            },
        },
        title: {
            name: "@title",
            description:
                'The bolded title for each step. Will be rendered in an `h4` by default. In order to override, pass the `as` attribute. `<@title as="h3">Title</@title>`. All other attributes will be passed through to the header tag',
            table: {
                category: "@step subtags",
                control: false,
            },
        },
        current: {
            type: "boolean",
            control: { type: "boolean" },
            table: {
                category: "@step attributes",
                control: false,
            },
            description:
                "The current step. Only first step that has this attribute will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any item, then will render based on `default-state` attribute",
        },
        a11yText: {
            table: {
                category: "@step attributes",
                control: false,
            },
            type: "string",
            description:
                "The accessibility text for the icon. Defaults to either complete, upcoming, current, or blocked depending on type or current",
        },
    },
};

export const InProgress = Template.bind({});
InProgress.args = {
    step: [
        {
            title: { renderBody: "Started" },
            renderBody: "July 3rd",
        },

        {
            title: { renderBody: "Shipped" },
            renderBody: "July 4th",
        },
        {
            current: true,
            title: { renderBody: "Transit" },
            renderBody: "July 5th",
        },
        {
            title: { renderBody: "Delivered" },
            renderBody: "July 6th",
        },
    ] as any,
    a11yHeadingTag: "",
    a11yHeadingText: "Shipment progress",
};
InProgress.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-progress-stepper", InProgress.args, {
                step: "step",
            }),
        },
    },
};

export const Blocked = Template.bind({});
Blocked.args = {
    step: [
        {
            title: { renderBody: "Started" },
            renderBody: "July 3rd",
        },

        {
            title: { renderBody: "Shipped" },
            renderBody: "July 4th",
        },
        {
            current: true,
            title: { renderBody: "Blocked" },
            renderBody: "July 5th",
        },
        {
            title: { renderBody: "Delivered" },
            renderBody: "July 6th",
        },
    ] as any,
    defaultState: "attention",
    a11yHeadingTag: "",
    a11yHeadingText: "Shipment progress, shipment is blocked",
};
Blocked.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-progress-stepper", Blocked.args, {
                step: "step",
            }),
        },
    },
};
