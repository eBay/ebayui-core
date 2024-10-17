import { buildExtensionTemplate } from "../../../.storybook/utils";
import table from "./index.marko";
import Readme from "./README.md";
import defaultTemplate from "./examples/default.marko";
import defaultCode from "./examples/default.marko?raw";
import selectionTemplate from "./examples/selection.marko";
import selectionCode from "./examples/selection.marko?raw";

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
        mode: {
            control: { type: "select" },
            description: "table mode",
            options: ["selection", "none"],
        },
        allSelected: {
            control: { type: "select" },
            description: "Select all tri-state checkbox state",
            options: ["true", "false", "mixed"],
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
        selected: {
            name: "selected",
            control: { type: "boolean" },
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
        onSelect: {
            action: "on-select",
            description: "Triggered on selection",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ selected, allSelected }",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(defaultTemplate, defaultCode);
export const TableDensity = buildExtensionTemplate(
    defaultTemplate,
    defaultCode,
    {
        density: "compact",
    },
);
export const SelectionModeBasic = buildExtensionTemplate(
    selectionTemplate,
    selectionCode,
    {
        a11ySelectAllText: "Select all",
        a11ySelectRowText: "Select row",
    },
);
