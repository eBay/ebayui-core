import { buildExtensionTemplate } from "../../../.storybook/utils";
import table from "./index.marko";
import Readme from "./README.md";
import defaultTemplate from "./examples/default.marko";
import defaultCode from "./examples/default.marko?raw";

export default {
    title: "data-display/table",
    component: table,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        density: {
            control: { type: "select" },
            description: "table density",
            options: ["compact", "relaxed", "none"],
        },
        header: {
            name: "@header",
            description: "header attribute tags",
            table: {
                category: "@attribute tags",
            },
        },
        row: {
            name: "@row",
            description: "row attribute tags",
            table: {
                category: "@attribute tags",
            },
        },
        columnType: {
            name: "column-type",
            control: { type: "select" },
            options: ["normal", "numeric", "row-header"],
            table: {
                category: "@header attribute tags",
            },
        },
        cell: {
            controls: { hideNoControlsWarning: true },
            name: "@cell",
            description: "cell attribute tags",
            table: {
                category: "@row attribute tags",
            },
        },
    },
};

export const Default = buildExtensionTemplate(defaultTemplate, defaultCode);
export const Dense = buildExtensionTemplate(defaultTemplate, defaultCode, {
    density: "compact",
});
export const Relaxed = buildExtensionTemplate(defaultTemplate, defaultCode, {
    density: "relaxed",
});
