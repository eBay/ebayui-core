import { AttrString, AttrTriState } from "marko/tags-html";
import { WithNormalizedProps } from "../../global";
import { CheckboxEvent } from "../ebay-checkbox/component-browser";

type TableColRowName = string | number;
type TableSort = "asc" | "desc" | "none";
export type TableSelectEvent = {
    selected: Record<TableColRowName, boolean>;
    allSelected?: AttrTriState;
};
export type TableSortEvent = {
    sorted: Record<TableColRowName, boolean>;
};
export interface TableHeader extends Omit<Marko.Input<"th">, `on${string}`> {
    columnType?: "normal" | "numeric" | "row-header" | "layout" | "icon-action";
    name?: TableColRowName;
    sort?: TableSort | boolean;
    href?: AttrString;
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
    "on-sort"?: (event: TableSortEvent) => void;
}
export interface Input extends WithNormalizedProps<TableInput> {}

interface State {
    selected: Record<TableColRowName, boolean>;
    sorted: Record<TableColRowName, TableSort | undefined>;
    allSelected: AttrTriState;
}

export default class EbayTable extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            selected: {},
            sorted: {},
            allSelected: "false",
        };
    }

    onInput(input: Input) {
        this.state.selected = this.getSelectedRowStateFromInput(input);
        this.state.allSelected = this.getAllSelectedState(input);
        this.state.sorted = this.getSortedColStateFromInput(input);
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

    getSortedColStateFromInput(input: Input) {
        const sorted: Record<TableColRowName, TableSort> = {};
        for (const [i, header] of Object.entries([...input.header])) {
            const name = header.name || i;
            if (header.sort === true) {
                sorted[name] = "none";
            } else if (header.sort) {
                sorted[name] = header.sort;
            }
        }
        return sorted;
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

    sortColumn(name: TableColRowName) {
        const sort = this.state.sorted[name];
        if (sort) {
            if (sort === "asc") {
                this.state.sorted[name] = "desc";
            } else if (sort === "desc") {
                this.state.sorted[name] = "none";
            } else {
                this.state.sorted[name] = "asc";
            }
            this.setStateDirty("sorted");
            this.emit("sort", {
                sorted: this.state.sorted,
            });
        }
    }
}
