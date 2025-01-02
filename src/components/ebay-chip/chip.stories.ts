import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-chip",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {
            control: { type: "text" },
            description: "Text to be displayed in the chip",
        },
        a11yDeleteButtonText: {
            control: { type: "text" },
            description:
                "A11y text for the delete button, also determines if delete button is shown",
        },
        onDelete: {
            action: "on-delete",
            description: "Triggered when delete button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "[ Event, HTMLElement ]",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    renderBody: "chip text" as any,
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-chip", Default.args),
        },
    },
};

export const WithDelete = Template.bind({});
WithDelete.args = {
    renderBody: "chip text" as any,
    a11yDeleteButtonText: "Delete",
};
WithDelete.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-chip", WithDelete.args),
        },
    },
};
