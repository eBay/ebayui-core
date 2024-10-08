import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "media/ebay-file-preview-card",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        a11yCancelUploadText: {
            type: "string",
            control: { type: "text" },
            description: "a11y text for cancel upload button",
        },
        deleteText: {
            type: "string",
            control: { type: "text" },
            description: "Text for delete button",
        },
        file: {
            type: "object",
            description:
                "File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview",
            table: {
                category: "File",
            },
        },
        status: {
            type: "string",
            control: {
                type: "select",
                options: ["uploading"],
            },
            description:
                'Status of the file, can be `"uploading"` or `undefined`',
        },
        labelText: {
            type: "string",
            control: { type: "text" },
            description: "Text to display in the label",
        },
        menuActions: {
            type: "array",
            description:
                "Array of menu actions, containing `event` and `label`",
            table: {
                category: "Menu Actions",
            },
        },
        showMore: {
            type: "number",
            control: { type: "number" },
            description:
                'Passing a number here will convert the card to a "show more" card',
        },
        "onMenu-action": {
            action: "on-menu-action",
            description: "Triggered when an action is selected from the menu. ",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "name, event /* from ebay-menu-button */",
                },
            },
        },
        "onShow-more": {
            action: "on-show-more",
            description: "Triggered when the show more button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onDelete: {
            action: "on-delete",
            description: "Triggered when the delete button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onCancel: {
            action: "on-cancel",
            description: "Triggered when the cancel button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Uploading = Template.bind({});
Uploading.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        type: "image/jpeg",
    },
    status: "uploading",
};

Uploading.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", Uploading.args),
        },
    },
};

export const Image = Template.bind({});
Image.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        type: "image/jpeg",
        src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    },
};

Image.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", Image.args),
        },
    },
};

export const Video = Template.bind({});
Video.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.mov",
        type: "video/quicktime",
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    labelText: "10:30:21",
};

Video.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", Video.args),
        },
    },
};

export const MultipleMenuActions = Template.bind({});
MultipleMenuActions.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        type: "image/jpeg",
        src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    },
    menuActions: [
        {
            event: "edit",
            label: "Edit",
        },
        {
            event: "download",
            label: "Download",
        },
    ],
};

MultipleMenuActions.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-file-preview-card",
                MultipleMenuActions.args,
            ),
        },
    },
};

export const Document = Template.bind({});
Document.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.csv",
        type: "text/csv",
    },
    menuActions: [
        {
            event: "edit",
            label: "Edit",
        },
    ],
};

Document.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-file-preview-card",
                MultipleMenuActions.args,
            ),
        },
    },
};

export const ShowMore = Template.bind({});
ShowMore.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    a11yShowMoreText: "Show more",
    showMore: 15,
    file: {
        name: "file-name.jpg",
        type: "image/jpeg",
        src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
    },
};

ShowMore.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", ShowMore.args),
        },
    },
};
