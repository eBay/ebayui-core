import Expander from "makeup-expander";
import { DropdownUtil } from "../../common/dropdown";
import { type DayISO, dateArgToISO } from "../../common/dates/date-utils";
import type { WithNormalizedProps } from "../../global";
import type { AttrString } from "marko/tags-html";
import type {
    TextboxEvent,
    Input as TextboxInput,
} from "../ebay-textbox/component-browser";
import { getLocale, parse } from "../../common/dates";

const MIN_WIDTH_FOR_DOUBLE_PANE = 600;

export interface InvalidDateEvent {
    value: string;
    index: number;
}

interface DateTextboxInput {
    value?: Date | number | string;
    rangeEnd?: Date | number | string;
    locale?: string;
    range?: boolean;
    textbox?: Marko.AttrTag<TextboxInput>;
    todayISO?: Date | number | string;
    disabled?: boolean;
    "disable-before"?: Date | number | string;
    "disable-after"?: Date | number | string;
    "disable-weekdays"?: number[];
    "disable-list"?: (Date | number | string)[];
    /** @deprecated use `@textbox-input` instead */
    "input-placeholder-text"?: string | [string, string];
    "collapse-on-select"?: boolean;
    "get-a11y-show-month-text"?: (monthName: string) => string;
    "a11y-open-popover-text"?: AttrString;
    "a11y-selected-text"?: AttrString;
    "a11y-range-start-text"?: AttrString;
    "a11y-in-range-text"?: AttrString;
    "a11y-range-end-text"?: AttrString;
    "a11y-separator"?: string;
    "on-change"?: (
        event:
            | { selected: DayISO | null }
            | { rangeStart: DayISO | null; rangeEnd: DayISO | null },
    ) => void;
    "on-invalid-date"?: (event: InvalidDateEvent) => void;
}

export interface Input extends WithNormalizedProps<DateTextboxInput> {}

interface State {
    numMonths: number;
    firstSelected: DayISO | null;
    secondSelected: DayISO | null;
    popover: boolean;
}

class DateTextbox extends Marko.Component<Input, State> {
    declare expander: any;
    declare dropdownUtil: DropdownUtil;

    onCreate() {
        this.state = {
            numMonths: 1,
            firstSelected: null,
            secondSelected: null,
            popover: false,
        };
    }

    onMount() {
        this.expander = new Expander(this.el, {
            hostSelector: ".ebay-date-textbox--main > .icon-btn",
            contentSelector: ".date-textbox__popover",
            expandOnClick: true,
            autoCollapse: true,
        });

        this.dropdownUtil = new DropdownUtil(
            this.el as HTMLElement,
            this.getEl("popover"),
        );
    }

    onDestroy() {
        this.expander?.destroy();
        this.dropdownUtil?.cleanup();
    }

    onInput(input: Input) {
        if (input.value !== undefined) {
            this.state.firstSelected = dateArgToISO(input.value);
        }
        if (input.rangeEnd !== undefined) {
            this.state.secondSelected = dateArgToISO(input.rangeEnd);
        }
        if (!input.range) {
            this.state.secondSelected = null;
        }
    }

    calculateNumMonths() {
        this.state.numMonths =
            document.documentElement.clientWidth < MIN_WIDTH_FOR_DOUBLE_PANE
                ? 1
                : 2;
    }

    handleInputChange(index: number, { value }: { value: string }) {
        let iso = parse(value, this.input.locale);

        if (iso === null) {
            this.emit("invalid-date", { value, index });
            return;
        }

        if (index === 0) {
            this.state.firstSelected = iso;
        } else {
            this.state.secondSelected = iso;
        }
        this.emitSelectedChange();
    }

    openPopover() {
        this.calculateNumMonths();
        this.state.popover = true;
        this.dropdownUtil.show();
    }

    closePopover() {
        this.state.popover = false;
        this.dropdownUtil.hide();
    }

    onPopoverSelect({ iso }: { iso: DayISO }) {
        const { firstSelected, secondSelected } = this.state;

        this.state.firstSelected = iso;

        if (this.input.range) {
            const selected = firstSelected || secondSelected;

            if (firstSelected && secondSelected) {
                // both were selected; reset selection
                this.state.secondSelected = null;
            } else if (selected) {
                // exactly one was selected; figure out the order
                if (selected < iso) {
                    this.state.firstSelected = selected;
                    this.state.secondSelected = iso;
                } else {
                    this.state.secondSelected = selected;
                }
                if (this.input.collapseOnSelect) {
                    this.expander.expanded = false;
                }
            }
        } else if (this.input.collapseOnSelect) {
            this.expander.expanded = false;
        }

        this.emitSelectedChange();
    }

    /**
     * If the cursor is at the end of the input and it makes sense to add a d/m/y separator, add it.
     */
    onInputKeyup({ originalEvent: event }: TextboxEvent) {
        // abort if key wasn't a number
        if (!/^\d$/.test((event as KeyboardEvent).key)) {
            return;
        }

        const input = event.target as HTMLInputElement;
        const { value } = input;

        if (input.selectionStart === value.length) {
            const { o: order, s: sep } = getLocale(this.input.locale);
            let i = 0;
            let start = 0;
            for (let currStart; ~(currStart = value.indexOf(sep[i], start)); ) {
                start = currStart + sep[i].length;
                i++;
            }
            if (value.length - start === (order[i] === "y" ? 4 : 2)) {
                input.value += sep[i] ?? "";
            }
        }
    }

    emitSelectedChange() {
        this.emit(
            "change",
            this.input.range
                ? {
                      rangeStart: this.state.firstSelected,
                      rangeEnd: this.state.secondSelected,
                  }
                : {
                      selected: this.state.firstSelected,
                  },
        );
    }
}

export default DateTextbox;
