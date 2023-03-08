// @ts-check

import Expander from 'makeup-expander';
import { fromISO } from '../ebay-calendar/component';

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
 * }} Input
 * @typedef {{
 *   numMonths: number;
 *   date: Date | undefined;
 *   popover: boolean;
 * }} State
 * @extends {Marko.Component<Input, State>}
 */
export default class extends Marko.Component {
    calculateNumMonths() {
        this.state.numMonths =
            document.documentElement.clientWidth < MIN_WIDTH_FOR_DOUBLE_PANE ? 1 : 2;
    }

    /**
     * @param {{
     *   originalEvent: Event,
     *   value: string,
     * }} param0
     */
    handleInputChange({ value }) {
        const valueDate = new Date(value);
        this.state.date = isNaN(valueDate.getTime()) ? undefined : new Date(value);
        // TODO: Should trigger update when it is _already_ undefined and value is an invalid date
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
        this.state.date = fromISO(iso);
    }

    onCreate() {
        this.state = {
            numMonths: 1,
            date: undefined,
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
