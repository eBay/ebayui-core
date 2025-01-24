import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import button, { type Input } from "./index.marko";
import Readme from "./README.md";
import WithIconsTemplate from "./examples/with-icons.marko";
import WithIconsTemplateCode from "./examples/with-icons.marko?raw";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-segmented-buttons",
    component: button,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        button: {
            description: "Each button in the segmented button",
            name: "@button",
            table: {
                category: "@Attribute Tags",
            },
        },
        selected: {
            description: "If true, this will be the selected button",
            table: {
                category: "@button attribute",
            },
        },
        size: {
            options: ["large", "regular"],
            description: "",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: { category: "Options" },
        },
        icon: {
            description: "The icon to show before the text",
            name: "@icon",
            table: {
                category: "@button attribute",
            },
        },
        onChange: {
            action: "on-change",
            description: "Triggered on change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, index, value }",
                },
            },
        },

        spread: {
            control: {
                type: "object",
            },
            description: "Additional attributes being passed to component",
            table: {
                category: "Other",
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    button: [
        {
            renderBody: `Q1`,
            value: "quarter1",
        },
        {
            renderBody: `Q2`,
            value: "quarter2",
        },
        {
            renderBody: `Q3`,
            value: "quarter3",
        },
        {
            renderBody: `Q4`,
            value: "quarter4",
        },
    ] as any,
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-segmented-buttons", Default.args, {
                button: "button",
            }),
        },
    },
};

export const WithIcons = buildExtensionTemplate(
    WithIconsTemplate,
    WithIconsTemplateCode,
);
