// @ts-check

import Expander from "makeup-expander";
import { toISO } from "../ebay-calendar/component";

const MIN_WIDTH_FOR_DOUBLE_PANE = 600;

/**
 * @typedef {import('../ebay-calendar/component').DayISO} DayISO
 * @typedef {{
 *   locale?: string,
 *   range?: boolean,
 *   disableBefore?: Date | number | string,
 *   disableAfter?: Date | number | string,
 *   disableWeekdays?: number[],
 *   disableList?: (Date | number | string)[],
 *   inputPlaceholderText?: string | [string, string],
 *   getA11yShowMonthText?: (monthName: string) => string,
 *   a11yOpenPopoverText?: string,
 *   a11ySelectedText?: string,
 *   a11yRangeStartText?: string,
 *   a11yInRangeText?: string,
 *   a11yRangeEndText?: string,
 *   a11ySeparator?: string,
 * }} Input
 * @typedef {{
 *   numMonths: number,
 *   firstSelected: DayISO | null,
 *   secondSelected: DayISO | null,
 *   popover: boolean,
 * }} State
 * @extends {Marko.Component<Input, State>}
 */
export default class extends Marko.Component {
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
        this.expander = new Expander(/** @type {HTMLElement} */ (this.el), {
            hostSelector: ".ebay-date-textbox--main > .icon-btn",
            contentSelector: ".date-textbox__popover",
            expandOnClick: true,
            autoCollapse: true,
        });
    }

    onDestroy() {
        this.expander?.destroy();
    }

    /**
     * @param {Input} input
     */
    onInput(input) {
        if (!input.range) {
            this.state.secondSelected = null;
        }
    }

    calculateNumMonths() {
        if (typeof document !== "undefined") {
            this.state.numMonths =
                document.documentElement.clientWidth < MIN_WIDTH_FOR_DOUBLE_PANE
                    ? 1
                    : 2;
        }
    }

    /**
     * @param {number} index
     * @param {{
     *   originalEvent: Event,
     *   value: string,
     * }} param1
     */
    handleInputChange(index, { value }) {
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

    /**
     * @param {{ iso: DayISO }} param0
     */
    onPopoverSelect({ iso }) {
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
