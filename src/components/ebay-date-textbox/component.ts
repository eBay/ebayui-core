import Expander from "makeup-expander";
import { toISO, type DayISO } from "../ebay-calendar/component";

const MIN_WIDTH_FOR_DOUBLE_PANE = 600;

interface DateTextboxInput {
    locale?: string;
    range?: boolean;
    "disable-before"?: Date | number | string;
    "disable-after"?: Date | number | string;
    "disable-weekdays"?: number[];
    "disable-list"?: (Date | number | string)[];
    "input-placeholder-text"?: string | [string, string];
    "get-a11y-show-month-text"?: (monthName: string) => string;
    "a11y-open-popover-text"?: string;
    "a11y-selected-text"?: string;
    "a11y-range-start-text"?: string;
    "a11y-in-range-text"?: string;
    "a11y-range-end-text"?: string;
    "a11y-separator"?: string;
    "on-change"?: (
        event:
            | { selected: DayISO | null }
            | { rangeStart: DayISO | null; rangeEnd: DayISO | null }
    ) => void;
}

export interface Input extends WithNormalizedProps<DateTextboxInput> {}

interface State {
    numMonths: number;
    firstSelected: DayISO | null;
    secondSelected: DayISO | null;
    popover: boolean;
}

export default class extends Marko.Component<Input, State> {
    declare expander: Expander | null;

    onCreate() {
        this.state = {
            numMonths: 1,
            firstSelected: null,
            secondSelected: null,
            popover: false,
        };

        this.calculateNumMonths();
    }

    onMount() {
        this.expander = new Expander(this.el, {
            hostSelector: ".ebay-date-textbox--main > .icon-btn",
            contentSelector: ".date-textbox__popover",
            expandOnClick: true,
            autoCollapse: true,
        });
    }

    onDestroy() {
        this.expander?.destroy();
    }

    onInput(input: Input) {
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
        const valueDate = new Date(value);
        const iso = isNaN(valueDate.getTime()) ? null : toISO(valueDate);
        if (index === 0) {
            this.state.firstSelected = iso;
        } else {
            this.state.secondSelected = iso;
        }
        this.emitSelectedChange();
    }

    openPopover() {
        this.state.popover = true;
    }

    closePopover() {
        this.state.popover = false;
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
            }
        }

        this.emitSelectedChange();
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
                  }
        );
    }
}
