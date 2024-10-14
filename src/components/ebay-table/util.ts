import { AttrTriState } from "marko/tags-html";
import type { Input } from "./component-browser";

export function getSelectionState(input: Input) {
    if (input.selectionState) {
        return input.selectionState;
    }
    let selectedCount = 0;
    let rowCount = 0;
    if (input.row) {
        for (const [_name, { selected }] of Object.entries([...input.row])) {
            if (selected) {
                selectedCount++;
            }
            rowCount++;
        }
    }
    if (selectedCount === 0) {
        return "none-selected";
    }
    if (selectedCount === rowCount) {
        return "all-selected";
    }
    return "indeterminate";
}

export function getSelectionAttrTriState(input: Input): AttrTriState {
    const selectionState = getSelectionState(input);
    if (selectionState === "all-selected") {
        return "true";
    }
    if (selectionState === "indeterminate") {
        return "mixed";
    }
    return "false";
}
