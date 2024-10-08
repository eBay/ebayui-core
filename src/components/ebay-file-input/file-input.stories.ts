import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithPreviewCardsTemplate from "./examples/with-preview-cards.marko";
import WithPreviewCardsCode from "./examples/with-preview-cards.marko?raw";
import WithMockUploadsTemplate from "./examples/with-mock-uploads.marko";
import WithMockUploadsCode from "./examples/with-mock-uploads.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

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
            control: { type: "text" },
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

export const Default = (args) => ({
    input: args,
    component: DefaultTemplate,
});
Default.args = {};
Default.parameters = {
    docs: {
        source: {
            code: DefaultCode,
        },
    },
};

export const WithPreviewCards = (args) => ({
    input: args,
    component: WithPreviewCardsTemplate,
});
WithPreviewCards.args = {};
WithPreviewCards.parameters = {
    docs: {
        source: {
            code: WithPreviewCardsCode,
        },
    },
};

export const WithMockUploads = (args) => ({
    input: args,
    component: WithMockUploadsTemplate,
});
WithMockUploads.args = {};
WithMockUploads.parameters = {
    docs: {
        source: {
            code: WithMockUploadsCode,
        },
    },
};
