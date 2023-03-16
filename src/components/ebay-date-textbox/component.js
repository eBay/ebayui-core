// @ts-check

import Expander from 'makeup-expander';
import { toISO } from '../ebay-calendar/component';

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
 *   getA11yShowMonthText?: (monthName: string) => string,
 *   a11yRangeStartText?: string,
 *   a11yInRangeText?: string,
 *   a11yRangeEndText?: string,
 * }} Input
 * @typedef {{
 *   numMonths: number,
 *   firstSelected: DayISO | undefined,
 *   secondSelected: DayISO | undefined,
 *   popover: boolean,
 * }} State
 * @extends {Marko.Component<Input, State>}
 */
export default class extends Marko.Component {
    calculateNumMonths() {
        this.state.numMonths =
            document.documentElement.clientWidth < MIN_WIDTH_FOR_DOUBLE_PANE ? 1 : 2;
    }

    /**
     * @param {Input} input
     */
    onInput(input) {
        if (!input.range) {
            this.state.secondSelected = undefined;
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
        const iso = isNaN(valueDate.getTime()) ? undefined : toISO(valueDate);
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
        if (this.input.range) {
            if (this.state.firstSelected && this.state.secondSelected) {
                this.state.firstSelected = iso;
                this.state.secondSelected = undefined;
            } else {
                const selected = this.state.firstSelected || this.state.secondSelected;
                if (!selected) {
                    this.state.firstSelected = iso;
                } else if (selected < iso) {
                    this.state.firstSelected = selected;
                    this.state.secondSelected = iso;
                } else {
                    this.state.firstSelected = iso;
                    this.state.secondSelected = selected;
                }
            }
        } else {
            this.state.firstSelected = iso;
        }
        this.emitSelectedChange();
    }

    emitSelectedChange() {
        this.emit(
            'change',
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

    onCreate() {
        this.state = {
            numMonths: 1,
            firstSelected: undefined,
            secondSelected: undefined,
            popover: false,
        };

        this.calculateNumMonths();
        document.addEventListener('resize', this.calculateNumMonths);
    }

    onMount() {
        this.expander = new Expander(/** @type {HTMLElement} */ (this.el), {
            hostSelector: '.ebay-date-textbox--main > .icon-btn',
            contentSelector: '.date-textbox__popover',
            expandOnClick: true,
            autoCollapse: true,
        });
    }

    onDestroy() {
        document.removeEventListener('resize', this.calculateNumMonths);
        this.expander?.destroy();
    }
}
