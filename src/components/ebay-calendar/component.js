// @ts-check

import {
    dateArgToISO,
    fromISO,
    getWeekdayInfo,
    localeOverride,
    offsetISO,
    toISO,
} from "./date-utils";

const DAY_UPDATE_KEYMAP = {
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowDown: 7,
    ArrowUp: -7,
};

/**
 * Always in `YYYY-MM-DD` format
 * @typedef {`${number}-${number}-${number}`} DayISO
 */

/**
 * @typedef {{
 *   navigable?: boolean,
 *   interactive?: boolean,
 *   numMonths?: number,
 *   locale?: string,
 *   range?: boolean,
 *   selected?: DayISO | [DayISO, DayISO],
 *   disableBefore?: Date | number | string,
 *   disableAfter?: Date | number | string,
 *   disableWeekdays?: number[],
 *   disableList?: (Date | number | string)[],
 *   linkBuilder?: (iso: string) => string | false | null | undefined,
 *   getA11yShowMonthText?: (monthName: string) => string,
 *   a11ySelectedText?: string,
 *   a11yRangeStartText?: string,
 *   a11yInRangeText?: string,
 *   a11yRangeEndText?: string,
 *   a11yTodayText?: string,
 *   a11yDisabledText?: string,
 *   a11ySeparator?: string,
 * }} Input
 * @typedef {{
 *   todayISO: DayISO,
 *   tabindexISO: DayISO,
 *   offset: number,
 *   firstDayOfWeek: number,
 *   weekdayLabels: string[],
 *   focusISO: DayISO | null,
 *   rangeStart: DayISO | null,
 *   rangeEnd: DayISO | null,
 *   baseISO: DayISO,
 *   disableBefore: DayISO | null,
 *   disableAfter: DayISO | null,
 *   disableWeekdays: number[],
 *   disableList: DayISO[],
 * }} State
 * @extends {Marko.Component<Input, State>}
 */
export default class extends Marko.Component {
    /**
     * @param {Input} input
     */
    onCreate(input) {
        const { firstDayOfWeek, weekdayLabels } = getWeekdayInfo(
            localeOverride(input.locale)
        );
        const todayISO = toISO(new Date());
        this.state = {
            focusISO: null,
            baseISO: todayISO,
            tabindexISO: todayISO,
            todayISO,
            offset: 0,
            firstDayOfWeek,
            weekdayLabels,
            rangeStart: null,
            rangeEnd: null,
            disableBefore: null,
            disableAfter: null,
            disableWeekdays: [],
            disableList: [],
        };
    }

    /**
     * @param {Input} input
     */
    onInput(input) {
        if (input.selected) {
            // If no selected times are visible, snap the view to the first one
            const selectedISOs = Array.isArray(input.selected)
                ? input.selected
                : [input.selected];
            const currFirstISO = this.getFirstVisibleISO();
            const currLastISO = this.getLastVisibleISO(input);
            const selectedTimeInView = selectedISOs.find(
                (time) => time >= currFirstISO && time <= currLastISO
            );
            if (selectedTimeInView === undefined) {
                this.state.baseISO = this.state.tabindexISO = selectedISOs[0];
                this.state.offset = 0;
            }
        }
        this.calculateRangeDisplay(input);

        // handle changes regarding disabled dates
        this.state.disableBefore = dateArgToISO(input.disableBefore);
        this.state.disableAfter = dateArgToISO(input.disableAfter);
        this.state.disableWeekdays = input.disableWeekdays ?? [];
        this.state.disableList = /** @type {DayISO[]} */ (
            input.disableList?.map(dateArgToISO) ?? []
        );
        if (this.isDisabled(this.state.tabindexISO)) {
            // The current tabindex is disabled, so we have to find a new one
            const firstActive = this.getFirstActiveISO(input);
            if (firstActive) {
                // This month has active days, so we can use the first one
                this.state.tabindexISO = firstActive;
            } else if (
                this.state.disableBefore &&
                this.state.tabindexISO < this.state.disableBefore
            ) {
                // This month has no active days and the start of _possible_ dates is in the future, so we change months to the start of possible dates
                this.state.baseISO = this.state.disableBefore;
                this.state.offset = 0;
                this.state.tabindexISO =
                    this.getFirstActiveISO(input) ?? this.state.disableBefore;
            } else if (
                this.state.disableAfter &&
                this.state.tabindexISO > this.state.disableAfter
            ) {
                // This month has no active days and the end of _possible_ dates is in the past, so we change months to the end of possible dates
                this.state.baseISO = this.state.disableAfter;
                this.state.offset = 0;
                this.state.tabindexISO =
                    this.getFirstActiveISO(input) ?? this.state.disableAfter;
            } else {
                // This may be reached in very specific edge cases, such as when the user has disabled all days in the current month manually
                // In this case, we leave the tabindex and position as is. This is a fall-through case.
            }
        }
    }

    /**
     * @param {DayISO} iso
     */
    isDisabled(iso) {
        return (
            (this.state.disableBefore && iso < this.state.disableBefore) ||
            (this.state.disableAfter && iso > this.state.disableAfter) ||
            this.state.disableWeekdays.includes(fromISO(iso).getUTCDay()) ||
            this.state.disableList.includes(iso)
        );
    }

    /**
     * @param {DayISO} day
     */
    onDaySelect(day) {
        this.emit("select", { iso: day });
    }

    /**
     * @param {DayISO} day
     */
    onDayFocus(day) {
        this.state.focusISO = this.state.tabindexISO = day;
        this.calculateRangeDisplay();
    }

    onDayBlur() {
        this.state.focusISO = null;
        this.calculateRangeDisplay();
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const dayChange = DAY_UPDATE_KEYMAP[event.key];
        if (dayChange) {
            event.preventDefault();
            // find new tabindex iso, skipping up to 7 disabled cells
            let tries = 7;
            let iso = this.state.tabindexISO;
            do {
                iso = offsetISO(iso, dayChange);
            } while (tries-- > 0 && this.isDisabled(iso));
            if (tries > 0) {
                // check for edges of calendar
                const firstVisibleISO = this.getFirstVisibleISO();
                const lastVisibleISO = this.getLastVisibleISO();
                if (iso < firstVisibleISO) {
                    if (this.input.navigable) this.prevMonth();
                    else iso = firstVisibleISO;
                } else if (iso > lastVisibleISO) {
                    if (this.input.navigable) this.nextMonth();
                    else iso = lastVisibleISO;
                }
                this.setTabindexAndFocus(iso);

                this.emit("focus", { iso: this.state.tabindexISO });
            }
        } else {
            switch (event.key) {
                case "PageUp":
                    this.prevMonth(true);
                    break;
                case "PageDown":
                    this.nextMonth(true);
                    break;
                case "Home": {
                    const firstActiveISO = this.getFirstActiveISO();
                    if (firstActiveISO) {
                        this.setTabindexAndFocus(firstActiveISO);
                        this.emit("focus", { iso: this.state.tabindexISO });
                    }
                    break;
                }
                case "End": {
                    const lastActiveISO = this.getLastActiveISO();
                    if (lastActiveISO) {
                        this.setTabindexAndFocus(lastActiveISO);
                        this.emit("focus", { iso: this.state.tabindexISO });
                    }
                    break;
                }
                default:
            }
        }
    }

    /**
     * @param {number} offset
     */
    getMonthDate(offset) {
        const baseDate = fromISO(this.state.baseISO);
        const date = new Date(
            Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth() + offset)
        );
        return date;
    }

    getFirstVisibleISO() {
        return toISO(this.getMonthDate(this.state.offset));
    }

    getLastVisibleISO(input = this.input) {
        const baseDate = fromISO(this.state.baseISO);
        return toISO(
            new Date(
                Date.UTC(
                    baseDate.getUTCFullYear(),
                    baseDate.getUTCMonth() +
                        this.state.offset +
                        (input.numMonths || 1),
                    0
                )
            )
        );
    }

    getFirstActiveISO(input = this.input) {
        let iso = this.getFirstVisibleISO();
        const lastVisible = this.getLastVisibleISO(input);
        while (iso <= lastVisible && this.isDisabled(iso)) {
            iso = offsetISO(iso, 1);
        }
        return iso > lastVisible ? null : iso;
    }

    getLastActiveISO(input = this.input) {
        let iso = this.getLastVisibleISO(input);
        const firstVisible = this.getFirstVisibleISO();
        while (iso >= firstVisible && this.isDisabled(iso)) {
            iso = offsetISO(iso, -1);
        }
        return iso < firstVisible ? null : iso;
    }

    /**
     * @param {Date} date
     */
    monthTitle(date) {
        const formatter = new Intl.DateTimeFormat(
            localeOverride(this.input.locale),
            {
                month: "long",
                year: "numeric",
            }
        );
        return formatter.format(
            new Date(date.getUTCFullYear(), date.getUTCMonth())
        );
    }

    /**
     * @param {boolean | void} focus
     */
    prevMonth(focus) {
        if (
            this.state.disableBefore &&
            this.getFirstVisibleISO() <= this.state.disableBefore
        ) {
            return false;
        }

        this.state.offset--;
        let newTabindexISO = this.state.tabindexISO;
        const lastActiveISO = this.getLastActiveISO();
        if (lastActiveISO && this.state.tabindexISO > lastActiveISO) {
            newTabindexISO = this.state.tabindexISO = lastActiveISO;
        }
        if (focus) {
            this.setTabindexAndFocus(newTabindexISO);
        }

        this.emit("month", {
            iso: toISO(this.getMonthDate(this.state.offset)),
        });

        return true;
    }

    /**
     * @param {boolean | void} focus
     */
    nextMonth(focus) {
        if (
            this.state.disableAfter &&
            this.getLastVisibleISO() >= this.state.disableAfter
        ) {
            return false;
        }

        this.state.offset++;
        let newTabindexISO = this.state.tabindexISO;
        const firstActiveISO = this.getFirstActiveISO();
        if (firstActiveISO && this.state.tabindexISO < firstActiveISO) {
            newTabindexISO = this.state.tabindexISO = firstActiveISO;
        }
        if (focus) {
            this.setTabindexAndFocus(newTabindexISO);
        }

        this.emit("month", {
            iso: toISO(
                this.getMonthDate(
                    this.state.offset + (this.input.numMonths || 1)
                )
            ),
        });

        return true;
    }

    /**
     * @param {DayISO} iso
     */
    setTabindexAndFocus(iso) {
        this.state.tabindexISO = iso;
        // After UI updates, focus on the new tabindex date
        setTimeout(() => {
            /** @type {HTMLButtonElement | undefined} */ (
                this.getEl(iso)
            )?.focus();
        });
    }

    /**
     * @param {Input} input
     */
    calculateRangeDisplay(input = this.input) {
        if (input.selected && input.range) {
            // Determine range display (state.rangeStart-state.rangeEnd)
            let iso1, iso2;
            if (Array.isArray(input.selected)) {
                // Two elements are selected, we can use them as the ends of the range.
                [iso1, iso2] = input.selected;
            } else if (this.state.focusISO) {
                // One element is selected and the user is focused on a date,
                // so we use the selected component and the focus date instead
                iso1 = input.selected;
                iso2 = this.state.focusISO;
            }

            if (iso1 && iso2) {
                // Both ends of the range are valid, figure out which is first
                if (iso1 < iso2) {
                    this.state.rangeStart = iso1;
                    this.state.rangeEnd = iso2;
                } else {
                    this.state.rangeStart = iso2;
                    this.state.rangeEnd = iso1;
                }
            } else {
                // We can't display a range, so ensure that no range is highlighted
                this.state.rangeStart = this.state.rangeEnd = null;
            }
        }
    }

    /**
     * @param {DayISO} iso
     */
    isInRange(iso) {
        if (!this.state.rangeStart || !this.state.rangeEnd)
            // range doesn't exist
            return false;
        if (iso < this.state.rangeStart || iso > this.state.rangeEnd)
            // date is outside of range
            return false;

        return true;
    }
}
