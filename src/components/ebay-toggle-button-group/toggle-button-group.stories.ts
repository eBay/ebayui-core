import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";
import withIconsTemplate from "./examples/icons.marko";
import withIconsCode from "./examples/icons.marko?raw";
import withDefaultTemplate from "./examples/withDefault.marko";
import withDefaultCode from "./examples/withDefault.marko?raw";
import controlledTemplate from "./examples/controlled.marko";
import controlledCode from "./examples/controlled.marko?raw";
import externalLabelTemplate from "./examples/externalLabel.marko";
import externalLabelCode from "./examples/externalLabel.marko?raw";
import columnsTemplate from "./examples/columns.marko";
import columnsCode from "./examples/columns.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
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
        columnsMin: {
            type: "number",
            control: { type: "number" },
            description:
                "Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsXS: {
            type: "number",
            control: { type: "number" },
            description:
                "Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsSM: {
            type: "number",
            control: { type: "number" },
            description:
                "Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsMD: {
            type: "number",
            control: { type: "number" },
            description:
                "Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        columnsXL: {
            type: "number",
            control: { type: "number" },
            description:
                "Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.",
        },
        a11yText: {
            type: "string",
            description:
                "Accessibility text for the group. Cannot be used together with `a11yLabelId`",
        },
        a11yLabelId: {
            type: "string",
            description:
                "Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`",
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
    a11yText: "Toggle Button Group",
    button: [
        { renderBody: "Button 1" },
        { renderBody: "Button 2" },
        { renderBody: "Button 3" },
        { renderBody: "Button 4" },
        { renderBody: "Button 5" },
        { renderBody: "Button 6" },
    ] as any,
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-toggle-button", Default.args),
        },
    },
};

export const WithIcons = buildExtensionTemplate(
    withIconsTemplate,
    withIconsCode,
);

export const WithDefaultSelected = buildExtensionTemplate(
    withDefaultTemplate,
    withDefaultCode,
);

export const externalLabel = buildExtensionTemplate(
    externalLabelTemplate,
    externalLabelCode,
);

export const Controlled = buildExtensionTemplate(
    controlledTemplate,
    controlledCode,
);

export const PerferedColumns = buildExtensionTemplate(
    columnsTemplate,
    columnsCode,
    {
        columnsMin: 1,
        columnsSM: 3,
        columnsXS: 2,
        columnsMD: 6,
        columnsXL: 8,
    },
);
