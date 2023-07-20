import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import readme from "./README.md";
import component from "./index.marko";
import WithIconsTemplate from "./examples/icons.marko";
import WithIconsCode from "./examples/icons.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-toggle-button-group",
    component,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        radio: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether the buttons act as radio buttons",
        },
        columns: {
            type: "number",
            control: { type: "number" },
            description: "Suggested number of columns",
        },
        layoutType: {
            type: "string",
            control: { type: "select" },
            options: ["minimal", "list", "gallery"],
            description:
                'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image',
        },
        buttons: {
            name: "@toggle-button",
            description: "An `<img>` to show as the button's image",
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
    columns: 3,
    buttons: [
        { title: "Button 1" },
        { title: "Button 2" },
        { title: "Button 3" },
        { title: "Button 4" },
        { title: "Button 5" },
        { title: "Button 6" },
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
    component: WithIconsTemplate,
});
WithIcons.args = {};
WithIcons.parameters = {
    docs: {
        source: {
            code: WithIconsCode,
        },
    },
};
