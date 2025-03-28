import { buildExtensionTemplate } from "../../common/storybook/utils";
import table from "./index.marko";
import Readme from "./README.md";
import defaultTemplate from "./examples/default.marko";
import defaultCode from "./examples/default.marko?raw";
import selectionTemplate from "./examples/selection.marko";
import selectionCode from "./examples/selection.marko?raw";
import withActionsTemplate from "./examples/with-actions.marko";
import withActionsCode from "./examples/with-actions.marko?raw";
import sortTemplate from "./examples/sort.marko";
import sortCode from "./examples/sort.marko?raw";
import sortWithLinkTemplate from "./examples/sort-with-link.marko";
import sortWithLinkCode from "./examples/sort-with-link.marko?raw";
import sortClientSideTemplate from "./examples/sort-client-side.marko";
import sortClientSideCode from "./examples/sort-client-side.marko?raw";

export default {
    title: "data-display/ebay-table",
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
        bodyState: {
            control: { type: "select" },
            description: "table state",
            options: ["loading", "none"],
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
        rowHeader: {
            name: "row-header",
            control: { type: "boolean" },
            description: "If true, the cell will be rendered as a row header",
            table: {
                category: "@header attribute tags",
            },
        },
        row: {
            name: "@row",
            description: "row attribute tags",
            table: {
                category: "@attribute tags",
            },
        },
        columnName: {
            name: "name",
            control: { type: "text" },
            description: "Column name, default is index",
            table: {
                category: "@header attribute tags",
            },
        },
        columnType: {
            name: "column-type",
            control: { type: "select" },
            options: ["normal", "numeric", "layout", "icon-action"],
            table: {
                category: "@header attribute tags",
                defaultValue: {
                    summary: "normal",
                },
            },
        },
        href: {
            name: "href",
            control: { type: "text" },
            description: "If set, column sorting will be a link to this href",
            table: {
                category: "@header attribute tags",
            },
        },
        rowName: {
            name: "name",
            control: { type: "text" },
            description: "Row name, default is index",
            table: {
                category: "@row attribute tags",
            },
        },
        selected: {
            name: "selected",
            control: { type: "boolean" },
            table: {
                category: "@row attribute tags",
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
        a11yLoadingText: {
            description:
                "Text for progress bar expressive when table is in loading body state",
            table: {
                category: "a11y",
                defaultValue: {
                    summary: "Loading...",
                },
            },
        },
        a11ySelectAllText: {
            description: "Text for selecting all rows. Used with select mode",
            table: {
                category: "a11y",
            },
        },
        a11ySelectRowText: {
            description: "Text for selecting a row. Used with select mode",
            table: {
                category: "a11y",
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
        onSort: {
            action: "on-sort",
            description: "Triggered on column sort",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ sorted }",
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
export const TableWithActions = buildExtensionTemplate(
    withActionsTemplate,
    withActionsCode,
);

export const ColumnSorting = buildExtensionTemplate(sortTemplate, sortCode);
export const ColumnSortingWithLink = buildExtensionTemplate(
    sortWithLinkTemplate,
    sortWithLinkCode,
);
export const ColumnSortingClientSide = buildExtensionTemplate(
    sortClientSideTemplate,
    sortClientSideCode,
);
