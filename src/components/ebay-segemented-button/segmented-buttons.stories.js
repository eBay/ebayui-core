import { tagToString } from "../../../.storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../../.storybook/utils";
import button from "./index.marko";
import readme from "./README.md";
import WithIconsTemplate from "./examples/with-icons.marko";
import WithIconsTemplateCode from "./examples/with-icons.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-segmented-buttons",
    component: button,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        buttons: {
            description: "Each button in the segmented button",
            name: "@buttons",
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
    buttons: [
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
    ],
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-segmented-button", Default.args, {
                buttons: "button",
            }),
        },
    },
};

export const WithIcons = buildExtensionTemplate(
    WithIconsTemplate,
    WithIconsTemplateCode
);
