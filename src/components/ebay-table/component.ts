import { AttrString, AttrTriState } from "marko/tags-html";
import { WithNormalizedProps } from "../../global";
import { CheckboxEvent } from "../ebay-checkbox/component-browser";

export type TableSort = "asc" | "desc" | "none";

export interface TableHeader extends Omit<Marko.HTML.TH, `on${string}`> {
    "column-type"?: "normal" | "numeric" | "layout" | "icon-action";
    "row-header"?: boolean;
    name?: string;
    sort?: TableSort | boolean;
    href?: AttrString;
    renderBody: Marko.Body;
}

export interface TableCell
    extends Omit<Marko.HTML.TD & Marko.HTML.TH, `on${string}`> {}

export interface TableRow extends Omit<Marko.HTML.TR, `on${string}`> {
    name?: string;
    selected?: boolean;
    cell?: Marko.AttrTag<TableCell>;
}
export interface TableInput extends Omit<Marko.HTML.Div, `on${string}`> {
    header: Marko.AttrTag<WithNormalizedProps<TableHeader>>;
    mode?: "none" | "selection";
    "all-selected"?: AttrTriState;
    row?: Marko.AttrTag<TableRow>;
    density?: "compact" | "relaxed" | "none";
    "a11y-select-all-text"?: string;
    "a11y-select-row-text"?: string;
    "on-select"?: (event: {
        selected: Record<string, boolean>;
        allSelected?: AttrTriState;
    }) => void;
    "on-sort"?: (event: { sorted: Record<string, TableSort> }) => void;
}

export interface Input extends WithNormalizedProps<TableInput> {}

interface State {
    selected: Record<string, boolean>;
    sorted: Record<string, TableSort | undefined>;
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
        const selected: Record<string, boolean> = {};
        if (input.row) {
            for (const [i, row] of Object.entries([...input.row])) {
                const name = row.name || i;
                selected[name] = row.selected || false;
            }
        }
        return selected;
    }

    getSortedColStateFromInput(input: Input) {
        const sorted: Record<string, TableSort> = {};
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
            {} as Record<string, boolean>,
        );
        this.state.allSelected = allSelected !== "true" ? "true" : "false";
        this.emit("select", {
            selected: this.state.selected,
            allSelected: this.state.allSelected,
        });
    }

    rowSelect(name: string, { checked }: CheckboxEvent) {
        this.state.selected[name] = checked;
        this.setStateDirty("selected");
        this.state.allSelected = this.getAllSelectedState(this.input);
        this.emit("select", {
            selected: this.state.selected,
        });
    }

    sortColumn(name: string) {
        const sortTo: Record<TableSort, TableSort> = {
            asc: "desc",
            desc: "none",
            none: "asc",
        };
        const currSort = this.state.sorted[name];
        if (currSort) {
            const nextSort = sortTo[currSort];
            this.state.sorted = Object.keys(this.state.sorted).reduce(
                (acc, key) => {
                    acc[key] = key === name ? nextSort : "none";
                    return acc;
                },
                {} as Record<string, TableSort>,
            );
            this.emit("sort", {
                sorted: { [name]: nextSort },
            });
        }
    }
}
