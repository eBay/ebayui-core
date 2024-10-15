import { AttrTriState } from "marko/tags-html";
import { WithNormalizedProps } from "../../global";
import { CheckboxEvent } from "../ebay-checkbox/component-browser";

type TableColRowName = string | number;
export type TableSelectEvent = {
    selected: Record<TableColRowName, boolean>;
    allSelected?: AttrTriState;
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
    allSelected?: AttrTriState;
    row?: Marko.RepeatableAttrTag<TableRow> | Marko.AttrTag<TableRow>[];
    density?: "compact" | "relaxed" | "none";
    "a11y-select-all-text"?: string;
    "a11y-select-row-text"?: string;
    "on-select"?: (event: TableSelectEvent) => void;
}
export interface Input extends WithNormalizedProps<TableInput> {}

interface State {
    selected: Record<TableColRowName, boolean>;
    allSelected: AttrTriState;
}

export default class EbayTable extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            selected: {},
            allSelected: "false",
        };
    }

    onInput(input: Input) {
        this.state.selected = this.getSelectedRowStateFromInput(input);
        this.state.allSelected = this.getAllSelectedState(input);
    }

    getSelectedRowStateFromInput(input: Input) {
        const selected: Record<TableColRowName, boolean> = {};
        if (input.row) {
            for (const [i, row] of Object.entries([...input.row])) {
                const name = row.name || i;
                selected[name] = row.selected || false;
            }
        }
        return selected;
    }

    getAllSelectedState(input: Input): AttrTriState {
        if (input.allSelected) {
            return input.allSelected;
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
            return "false";
        }
        if (selectedCount === rowCount) {
            return "true";
        }
        return "mixed";
    }

    headerSelect() {
        const { allSelected } = this.state;
        this.state.selected = [...(this.input.row || [])].reduce(
            (acc, { name }, i) => {
                acc[name || i] = allSelected !== "true";
                return acc;
            },
            {} as Record<TableColRowName, boolean>,
        );
        this.state.allSelected = allSelected !== "true" ? "true" : "false";
        this.emit("select", {
            selected: this.state.selected,
            allSelected: this.state.allSelected,
        });
    }

    rowSelect(name: TableColRowName, { checked }: CheckboxEvent) {
        this.state.selected[name] = checked;
        this.setStateDirty("selected");
        this.state.allSelected = this.getAllSelectedState(this.input);
        this.emit("select", {
            selected: this.state.selected,
        });
    }
}
