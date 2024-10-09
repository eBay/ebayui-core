import { AttrTriState } from "marko/tags-html";
import { WithNormalizedProps } from "../../global";
import { CheckboxEvent } from "../ebay-checkbox/component-browser";

// export type ColumnType = "normal" | "numeric" | "row-header" | "none";
export type TableDensity = "compact" | "relaxed" | "none";
export type TableMode = "none" | "selection";
export type TableRowName = string | number;
export type TableRowStateMapping = Record<TableRowName, boolean>;
export type TableSelectEvent = {
    selected: TableRowStateMapping;
};
export interface TableHeader extends Omit<Marko.Input<"th">, `on${string}`> {
    columnType?: string; // Use ColumnType after marko fix the ts error for attr tags
    renderBody: Marko.Body;
}
export interface TableCell
    extends Omit<Marko.Input<"td"> & Marko.Input<"th">, `on${string}`> {
    renderBody: Marko.Body;
}
export interface TableRow extends Omit<Marko.Input<"tr">, `on${string}`> {
    name?: TableRowName;
    disabled?: boolean;
    cell: Marko.RepeatableAttrTag<TableCell> | Marko.AttrTag<TableCell>[];
}
export interface TableInput extends Omit<Marko.Input<"div">, `on${string}`> {
    header: Marko.RepeatableAttrTag<TableHeader> | Marko.AttrTag<TableHeader>[];
    mode?: TableMode;
    row?: Marko.RepeatableAttrTag<TableRow> | Marko.AttrTag<TableRow>[];
    density?: TableDensity;
    selected?: TableRowStateMapping;
    "a11y-select-all-text"?: string;
    "a11y-select-row-text"?: string;
    "on-select"?: (event: TableSelectEvent) => void;
}
export interface Input extends WithNormalizedProps<TableInput> {}

enum RowState {
    SELECTED = "selected",
    DISABLED = "disabled",
}

interface State extends Record<RowState, TableRowStateMapping> {}

export default class EbayTable extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            selected: {},
            disabled: {},
        };
    }

    onInput(input: Input) {
        this.state = {
            ...this.getRowStateFromInput(input),
        };
    }

    getRowStateFromInput(input: Input) {
        const selected = { ...input.selected };
        const disabled: TableRowStateMapping = {};
        for (const [i, row] of Object.entries(input.row || [])) {
            const name = row.name || i;
            selected[name] ??= false;
            disabled[name] = !!row.disabled;
        }
        return { selected, disabled };
    }

    getSelectionStatus(
        selected: TableRowStateMapping = this.state.selected,
    ): AttrTriState {
        let selectedCount = 0;
        let rowCount = 0;
        for (const [name, isSelected] of Object.entries(selected)) {
            if (this.state.disabled[name]) {
                continue;
            }
            if (isSelected) {
                selectedCount++;
            }
            rowCount++;
        }
        if (selectedCount === 0) {
            return "false";
        }
        if (selectedCount === rowCount) {
            return "true";
        }
        return "mixed";
    }

    headerSelect() {
        const selectionStatus = this.getSelectionStatus();
        this.state.selected = {
            ...this.state.selected,
            ...Object.keys(this.state.selected).reduce((acc, name) => {
                if (!this.state.disabled[name]) {
                    acc[name] = selectionStatus !== "true";
                }
                return acc;
            }, {} as TableRowStateMapping),
        };
        this.emit("select", {
            selected: this.state.selected,
        });
    }

    rowSelect(name: TableRowName, { checked }: CheckboxEvent) {
        this.state.selected = {
            ...this.state.selected,
            [name]: checked,
        };
        this.emit(
            "select",
            {
                selected: this.state.selected,
            },
            true,
        );
    }
}
