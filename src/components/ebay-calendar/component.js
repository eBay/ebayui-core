// @ts-check

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
 * }} Input
 * @typedef {{
 *   todayISO: DayISO,
 *   tabindexISO: DayISO,
 *   offset: number,
 *   firstDayOfWeek: number,
 *   weekdayLabels: string[],
 *   focusISO: DayISO | undefined,
 *   rangeStart: DayISO | undefined,
 *   rangeEnd: DayISO | undefined,
 *   baseISO: DayISO,
 *   disableBefore: DayISO | undefined,
 *   disableAfter: DayISO | undefined,
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
        const { firstDayOfWeek, weekdayLabels } = getWeekdayInfo(localeOverride(input.locale));
        const todayISO = toISO(new Date());
        this.state = {
            focusISO: undefined,
            baseISO: todayISO,
            tabindexISO: todayISO,
            todayISO,
            offset: 0,
            firstDayOfWeek,
            weekdayLabels,
            rangeStart: undefined,
            rangeEnd: undefined,
            disableBefore: undefined,
            disableAfter: undefined,
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
            const selectedISOs = Array.isArray(input.selected) ? input.selected : [input.selected];
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
            this.state.tabindexISO = this.getFirstActiveISO(input);
        }
    }

    /**
     * @param {DayISO} iso
     */
    isDisabled(iso) {
        return (
            (this.state.disableBefore && iso < this.state.disableBefore) ||
            (this.state.disableAfter && iso > this.state.disableAfter) ||
            this.state.disableWeekdays.includes(fromISO(iso).getDay()) ||
            this.state.disableList.includes(iso)
        );
    }

    /**
     * @param {DayISO} day
     */
    onDaySelect(day) {
        this.emit('select', { iso: day });
    }

    /**
     * @param {DayISO} day
     */
    onDayFocus(day) {
        this.state.focusISO = this.state.tabindexISO = day;
        this.calculateRangeDisplay();
    }

    onDayBlur() {
        this.state.focusISO = undefined;
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

                this.emit('focus', { iso: this.state.tabindexISO });
            }
        } else {
            switch (event.key) {
                case 'PageUp':
                    this.prevMonth(true);
                    break;
                case 'PageDown':
                    this.nextMonth(true);
                    break;
                case 'Home':
                    this.setTabindexAndFocus(this.getFirstActiveISO());
                    this.emit('focus', { iso: this.state.tabindexISO });
                    break;
                case 'End':
                    this.setTabindexAndFocus(this.getLastActiveISO());
                    this.emit('focus', { iso: this.state.tabindexISO });
                    break;
                default:
            }
        }
    }

    /**
     * @param {number} offset
     */
    getMonthDate(offset) {
        const baseDate = fromISO(this.state.baseISO);
        return new Date(baseDate.getFullYear(), baseDate.getMonth() + offset);
    }

    getFirstVisibleISO() {
        return toISO(this.getMonthDate(this.state.offset));
    }

    getLastVisibleISO(input = this.input) {
        const baseDate = fromISO(this.state.baseISO);
        return toISO(
            new Date(
                baseDate.getFullYear(),
                baseDate.getMonth() + this.state.offset + (input.numMonths || 1),
                0
            )
        );
    }

    getFirstActiveISO(input = this.input) {
        let iso = this.getFirstVisibleISO();
        const lastVisible = this.getLastVisibleISO(input);
        while (iso <= lastVisible && this.isDisabled(iso)) {
            iso = offsetISO(iso, 1);
        }
        return iso;
    }

    getLastActiveISO(input = this.input) {
        let iso = this.getLastVisibleISO(input);
        const firstVisible = this.getFirstVisibleISO();
        while (iso >= firstVisible && this.isDisabled(iso)) {
            iso = offsetISO(iso, -1);
        }
        return iso;
    }

    /**
     * @param {Date} date
     */
    monthTitle(date) {
        const formatter = new Intl.DateTimeFormat(localeOverride(this.input.locale), {
            month: 'long',
            year: 'numeric',
        });
        return formatter.format(date);
    }

    /**
     * @param {boolean | void} focus
     */
    prevMonth(focus) {
        if (this.state.disableBefore && this.getFirstVisibleISO() <= this.state.disableBefore) {
            return false;
        }

        this.state.offset--;
        let newTabindexISO = this.state.tabindexISO;
        const lastActiveISO = this.getLastActiveISO();
        if (this.state.tabindexISO > lastActiveISO) {
            newTabindexISO = this.state.tabindexISO = lastActiveISO;
        }
        if (focus) {
            this.setTabindexAndFocus(newTabindexISO);
        }

        this.emit('month', { iso: toISO(this.getMonthDate(this.state.offset)) });

        return true;
    }

    /**
     * @param {boolean | void} focus
     */
    nextMonth(focus) {
        if (this.state.disableAfter && this.getLastVisibleISO() >= this.state.disableAfter) {
            return false;
        }

        this.state.offset++;
        let newTabindexISO = this.state.tabindexISO;
        const firstActiveISO = this.getFirstActiveISO();
        if (this.state.tabindexISO < firstActiveISO) {
            newTabindexISO = this.state.tabindexISO = firstActiveISO;
        }
        if (focus) {
            this.setTabindexAndFocus(newTabindexISO);
        }

        this.emit('month', {
            iso: toISO(this.getMonthDate(this.state.offset + (this.input.numMonths || 1))),
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
            /** @type {HTMLButtonElement | undefined} */ (this.getEl(iso))?.focus();
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
                [iso1, iso2] = input.selected;
            } else if (this.state.focusISO) {
                iso1 = input.selected;
                iso2 = this.state.focusISO;
            }
            if (iso1 && iso2) {
                if (iso1 < iso2) {
                    this.state.rangeStart = iso1;
                    this.state.rangeEnd = iso2;
                } else {
                    this.state.rangeStart = iso2;
                    this.state.rangeEnd = iso1;
                }
            } else {
                this.state.rangeStart = this.state.rangeEnd = undefined;
            }
        }
    }
}

/**
 * @param {string} localeName
 * @return {number} 0 or 7 is Sun, 1 is Mon, -1 or 6 is Sat
 */
export function findFirstDayOfWeek(localeName) {
    // weekInfo only exists on some browsers, so we default to Sunday otherwise
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo

    const locale = /** @type {Intl.Locale & { weekInfo?: { firstDay: number } }} */ (
        new Intl.Locale(localeName)
    );
    if (locale.weekInfo) {
        return locale.weekInfo.firstDay;
    }
    return 0;
}

/**
 * @param {string} localeName
 */
export function getWeekdayInfo(localeName) {
    const firstDayOfWeek = findFirstDayOfWeek(localeName);

    const weekdayLabelFormatter = new Intl.DateTimeFormat(localeName, {
        weekday: 'short',
    });
    const weekday = new Date(2022, 9, 2 + firstDayOfWeek); // October 2, 2022 was a Sunday
    const weekdayLabels = [...Array(7)].map(() => {
        const dayLabel = weekdayLabelFormatter.format(weekday);
        weekday.setDate(weekday.getDate() + 1);
        return dayLabel;
    });

    return { firstDayOfWeek, weekdayLabels };
}

/**
 * @param {DateConstructor["arguments"]} arg
 */
export function dateArgToISO(arg) {
    if (!arg) return undefined;
    if (/^\d\d\d\d-\d\d-\d\d$/g.test(arg)) return arg;
    return toISO(new Date(arg));
}

/**
 * @param {Date} date
 * @returns {DayISO}
 */
export function toISO(date) {
    return /** @type {DayISO} */ (date.toISOString().slice(0, 10));
}

/**
 * @param {DayISO} iso
 */
export function fromISO(iso) {
    const [year, month, day] = iso.split('-');
    return new Date(+year, +month - 1, +day);
}

/**
 * @param {DayISO} iso
 * @param {number} days
 */
export function offsetISO(iso, days) {
    const curr = fromISO(iso);
    return toISO(new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() + days));
}

/**
 * @param {string | undefined} locale
 */
export function localeOverride(locale) {
    return locale || navigator.language;
}
