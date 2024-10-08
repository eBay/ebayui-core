import { WithNormalizedProps } from "../../global";

// export type ColumnType = "normal" | "numeric" | "row-header" | "none";
export type TableDensity = "compact" | "relaxed" | "none";
export interface TableHeader extends Omit<Marko.Input<"th">, `on${string}`> {
    columnType?: string; // Use ColumnType after marko fix the ts error for attr tags
    renderBody: Marko.Body;
}
export interface TableCell
    extends Omit<Marko.Input<"td"> & Marko.Input<"th">, `on${string}`> {
    renderBody: Marko.Body;
}
export interface TableRow extends Omit<Marko.Input<"tr">, `on${string}`> {
    cell: Marko.RepeatableAttrTag<TableCell> | Marko.AttrTag<TableCell>[];
}
export interface TableInput extends Omit<Marko.Input<"div">, `on${string}`> {
    header: Marko.RepeatableAttrTag<TableHeader> | Marko.AttrTag<TableHeader>[];
    row?: Marko.RepeatableAttrTag<TableRow> | Marko.AttrTag<TableRow>[];
    density?: TableDensity;
}
export interface Input extends WithNormalizedProps<TableInput> {}

export default class extends Marko.Component<Input> {}
