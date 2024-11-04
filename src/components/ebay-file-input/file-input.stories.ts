import Readme from "./README.md";
import component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithPreviewCardsTemplate from "./examples/with-preview-cards.marko";
import WithPreviewCardsCode from "./examples/with-preview-cards.marko?raw";
import WithMockUploadsTemplate from "./examples/with-mock-uploads.marko";
import WithMockUploadsCode from "./examples/with-mock-uploads.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

export default {
    title: "form input/ebay-file-input",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        multiple: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether multiple files can be uploaded",
        },
        renderBody: {
            description: "CTA render body",
        },
        subheader: {
            name: "@subheader",
            table: {
                category: "@attribute tags",
            },
        },
        header: {
            name: "@header",
            table: {
                category: "@attribute tags",
            },
        },
        onInput: {
            action: "on-input",
            description: "Triggered when the file(s) are uploaded",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, files }",
                },
            },
        },
    },
};

export const Default: Story<Input> = (args) => ({
    input: args,
    component: DefaultTemplate,
});
Default.args = {};
Default.parameters = {
    docs: {
        description: {
            story: "In this story you can trigger the native file input picker only. Uploading files will have no effect.",
        },
        source: {
            code: DefaultCode,
        },
    },
};

export const WithPreviewCards: Story<Input> = (args) => ({
    input: args,
    component: WithPreviewCardsTemplate,
});
WithPreviewCards.args = {};
WithPreviewCards.parameters = {
    docs: {
        description: {
            story: " In this story you can trigger the native file input picker. Uploading files will render each ebay-file-preview-card component in preview status.",
        },
        source: {
            code: WithPreviewCardsCode,
        },
    },
};

export const WithMockUploads: Story<Input> = (args) => ({
    input: args,
    component: WithMockUploadsTemplate,
});
WithMockUploads.args = {};
WithMockUploads.parameters = {
    docs: {
        description: {
            story: "In this story you can trigger the native file input picker. Uploading files will render each ebay-file-preview-card component in uploading status.",
        },
        source: {
            code: WithMockUploadsCode,
        },
    },
};
