import { AttrTriState } from "marko/tags-html";
import { WithNormalizedProps } from "../../global";
import { CheckboxEvent } from "../ebay-checkbox/component-browser";

type TableColRowName = string | number;
type TableColRowStateMapping = Record<TableColRowName, boolean>;
export type TableSelectEvent = {
    selected: TableColRowStateMapping;
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
    name?: TableColRowName;
    selected?: boolean;
    cell: Marko.RepeatableAttrTag<TableCell> | Marko.AttrTag<TableCell>[];
}
export interface TableInput extends Omit<Marko.Input<"div">, `on${string}`> {
    header: Marko.RepeatableAttrTag<TableHeader> | Marko.AttrTag<TableHeader>[];
    mode?: "none" | "selection";
    selectionState?: "none-selected" | "all-selected" | "indeterminate";
    row?: Marko.RepeatableAttrTag<TableRow> | Marko.AttrTag<TableRow>[];
    density?: "compact" | "relaxed" | "none";
    "a11y-select-all-text"?: string;
    "a11y-select-row-text"?: string;
    "on-select"?: (event: TableSelectEvent) => void;
}
export interface Input extends WithNormalizedProps<TableInput> {}

interface State {
    selected: TableColRowStateMapping;
}

export default class EbayTable extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            selected: {},
        };
    }

    onInput(input: Input) {
        this.state.selected = this.getSelectedRowStateFromInput(input);
    }

    getSelectedRowStateFromInput(input: Input) {
        const selected: TableColRowStateMapping = {};
        for (const [i, row] of Object.entries(input.row || [])) {
            const name = row.name || i;
            selected[name] = row.selected || false;
        }
        return selected;
    }

    getSelectionState(input: Input) {
        if (input.selectionState) {
            return input.selectionState;
        }
        let selectedCount = 0;
        let rowCount = 0;
        for (const [_name, selected] of Object.entries(this.state.selected)) {
            if (selected) {
                selectedCount++;
            }
            rowCount++;
        }
        if (selectedCount === 0) {
            return "none-selected";
        }
        if (selectedCount === rowCount) {
            return "all-selected";
        }
        return "indeterminate";
    }

    getSelectionAttrTriState(input: Input): AttrTriState {
        const selectionState = this.getSelectionState(input);
        if (selectionState === "all-selected") {
            return "true";
        }
        if (selectionState === "indeterminate") {
            return "mixed";
        }
        return "false";
    }

    headerSelect() {
        const selectionState = this.getSelectionState(this.input);
        this.state.selected = [...(this.input.row || [])].reduce(
            (acc, { name }, i) => {
                acc[name || i] = selectionState !== "all-selected";
                return acc;
            },
            {} as TableColRowStateMapping,
        );
        this.emit("select", {
            selected: this.state.selected,
            selectionState:
                selectionState !== "all-selected"
                    ? "all-selected"
                    : "none-selected",
        });
    }

    rowSelect(name: TableColRowName, { checked }: CheckboxEvent) {
        this.state.selected[name] = checked;
        this.setStateDirty("selected");
        this.emit("select", {
            selected: this.state.selected,
        });
    }
}
