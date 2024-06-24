import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";
import withIconsTemplate from "./examples/icons.marko";
import withIconsCode from "./examples/icons.marko?raw";
import withDefaultTemplate from "./examples/withDefault.marko";
import withDefaultCode from "./examples/withDefault.marko?raw";
import controlledTemplate from "./examples/controlled.marko";
import controlledCode from "./examples/controlled.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-toggle-button-group",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        variant: {
            type: "string",
            control: { type: "select" },
            options: ["checkbox", "radio", "radio-toggle"],
            description:
                'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)',
        },
        layoutType: {
            type: "string",
            control: { type: "select" },
            options: ["minimal", "list", "gallery"],
            description:
                'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image',
        },
        buttons: {
            name: "@button",
            description:
                "Represents an `<ebay-toggle-button/>` to be used as part of the group",
            table: {
                category: "@attribute tags",
            },
        },
        onChange: {
            action: "on-change",
            description: "Triggered when the pressed state changes",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, pressed }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    buttons: [
        { renderBody: "Button 1" },
        { renderBody: "Button 2" },
        { renderBody: "Button 3" },
        { renderBody: "Button 4" },
        { renderBody: "Button 5" },
        { renderBody: "Button 6" },
    ],
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-toggle-button", Default.args),
        },
    },
};

export const WithIcons = (args) => ({
    input: args,
    component: withIconsTemplate,
});
WithIcons.args = {};
WithIcons.parameters = {
    docs: {
        source: {
            code: withIconsCode,
        },
    },
};

export const WithDefaultSelected = (args) => ({
    input: args,
    component: withDefaultTemplate,
});
WithDefaultSelected.args = {};
WithDefaultSelected.parameters = {
    docs: {
        source: {
            code: withDefaultCode,
        },
    },
};

export const Controlled = (args) => ({
    input: args,
    component: controlledTemplate,
});
Controlled.args = {};
Controlled.parameters = {
    docs: {
        source: {
            code: controlledCode,
        },
    },
};
