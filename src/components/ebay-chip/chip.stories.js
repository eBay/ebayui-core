import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";

const Template = (args) => ({
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
        deleteButtonLabel: {
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
                    summary: "{ el, checked, originalEvent }",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: "chip text",
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-chip", Standard.args),
        },
    },
};

export const WithDelete = Template.bind({});
WithDelete.args = {
    renderBody: "chip text",
    deleteButtonLabel: "Delete",
};
WithDelete.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-chip", Standard.args),
        },
    },
};
