import { Story } from "@storybook/marko";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "media/ebay-file-preview-card-group",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        card: {
            name: "@card",
            table: {
                category: "@attribute tags",
            },
            description:
                "A repeatable attribute tag for each file preview card",
        },
        a11yCancelUploadText: {
            type: "string",
            control: { type: "text" },
            description:
                "a11y text for cancel upload button, applied to all cards",
        },
        deleteText: {
            type: "string",
            control: { type: "text" },
            description: "Text for delete button, applied to all cards",
        },
        menuActions: {
            type: "array",
            description: "List of menu actions, applied to all cards",
            control: { type: "object" },
        },
        a11ySeeMoreText: {
            type: "string",
            control: { type: "text" },
            description: "a11y text for see more button, applied to all cards",
        },
        "onMenu-action": {
            action: "on-menu-action",
            description:
                "Triggered when an action is selected from the menu on a card",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "index, eventName, event /* from ebay-menu-button */",
                },
            },
        },
        onDelete: {
            action: "on-delete",
            description:
                "Triggered when the delete button is clicked on a card",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "index",
                },
            },
        },
        onCancel: {
            action: "on-cancel",
            description:
                "Triggered when the cancel button is clicked on a card",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "index",
                },
            },
        },
    },
};

const frogImage = {
    name: "frog.jpg",
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
};

export const Default = Template.bind({});
Default.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    card: [
        {
            file: { ...frogImage },
        },
        {
            file: { ...frogImage },
        },
        {
            file: { ...frogImage },
        },
    ] as any,
};

export const ManyCards = Template.bind({});
ManyCards.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    card: [...Array(35)].map(() => ({
        file: { ...frogImage },
    })) as any,
};
