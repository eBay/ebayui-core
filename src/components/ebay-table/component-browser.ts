import { WithNormalizedProps } from "../../global";
import { CheckboxEvent } from "../ebay-checkbox/component-browser";
import { getSelectionState } from "./index.marko";

type TableRowName = string | number;
type TableRowStateMapping = Record<TableRowName, boolean>;
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
    selected?: boolean;
    cell: Marko.RepeatableAttrTag<TableCell> | Marko.AttrTag<TableCell>[];
}
export interface TableInput extends Omit<Marko.Input<"div">, `on${string}`> {
    header: Marko.RepeatableAttrTag<TableHeader> | Marko.AttrTag<TableHeader>[];
    mode?: "none" | "selection";
    selectionState?: "none-selected" | "all-selected" | "indeterminate";
    row?: Marko.RepeatableAttrTag<TableRow> | Marko.AttrTag<TableRow>[];
    density?: "compact" | "relaxed" | "none";
    selected?: TableRowStateMapping;
    "a11y-select-all-text"?: string;
    "a11y-select-row-text"?: string;
    "on-select"?: (event: TableSelectEvent) => void;
}
export interface Input extends WithNormalizedProps<TableInput> {}

export default class EbayTable extends Marko.Component<Input> {
    headerSelect() {
        const selectionState = getSelectionState(this.input);
        this.emit("select", {
            selected: [...(this.input.row || [])].reduce((acc, { name }, i) => {
                acc[name || i] = selectionState !== "all-selected";
                return acc;
            }, {} as TableRowStateMapping),
            selectionState:
                selectionState !== "all-selected"
                    ? "all-selected"
                    : "none-selected",
        });
    }

    rowSelect(name: TableRowName, { checked }: CheckboxEvent) {
        this.emit("select", {
            selected: [...this.input.row!].reduce((acc, row, i) => {
                const rowName = row.name || i;
                if (rowName === name) {
                    acc[rowName] = checked;
                } else {
                    acc[rowName] = !!row.selected;
                }
                return acc;
            }, {} as TableRowStateMapping),
        });
    }
}
