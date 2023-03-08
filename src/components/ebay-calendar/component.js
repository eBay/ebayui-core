// @ts-check

const DAY_UPDATE_KEYMAP = {
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowDown: 7,
    ArrowUp: -7,
};

/**
 * Always in `YYYY-MM-DD` format
 * @typedef {String} DayISO
 * @typedef {{
 *   navigable?: boolean,
 *   interactive?: boolean,
 *   numMonths?: number,
 *   locale?: string,
 *   range?: boolean,
 *   selected?: Date | [Date, Date],
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
        };
    }

    /**
     * @param {Input} input
     */
    onInput(input) {
        if (input.selected) {
            // If no selected times are visible, snap the view to the first one
            const selectedISOs = (
                Array.isArray(input.selected) ? input.selected : [input.selected]
            ).map((date) => toISO(date));
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
    }

    /**
     * @param {DayISO} time
     */
    onDaySelect(time) {
        this.emit('select', { iso: time });
    }

    /**
     * @param {DayISO} time
     */
    onDayFocus(time) {
        this.state.focusISO = this.state.tabindexISO = time;
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
            // find new tabindex date
            const currDate = fromISO(this.state.tabindexISO);
            let newISO = toISO(
                new Date(
                    currDate.getFullYear(),
                    currDate.getMonth(),
                    currDate.getDate() + dayChange
                )
            );
            // check for edges of calendar
            const firstVisibleISO = this.getFirstVisibleISO();
            const lastVisibleISO = this.getLastVisibleISO();
            if (newISO < firstVisibleISO) {
                if (this.input.navigable) this.state.offset--;
                else newISO = firstVisibleISO;
            } else if (newISO > lastVisibleISO) {
                if (this.input.navigable) this.state.offset++;
                else newISO = lastVisibleISO;
            }
            this.state.tabindexISO = newISO;
            // After UI updates, focus on the new tabindex date
            setTimeout(() => {
                /** @type {HTMLButtonElement | undefined} */ (this.getEl(`day-${newISO}`))?.focus();
            });
        }
        this.emit('keydown', event);
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

    prevMonth() {
        this.state.offset--;
        const lastVisibleISO = this.getLastVisibleISO();
        if (this.state.tabindexISO > lastVisibleISO) {
            this.state.tabindexISO = lastVisibleISO;
        }
    }

    nextMonth() {
        this.state.offset++;
        const firstVisibleISO = this.getFirstVisibleISO();
        if (this.state.tabindexISO < firstVisibleISO) {
            this.state.tabindexISO = firstVisibleISO;
        }
    }

    /**
     * @param {Input} input
     */
    calculateRangeDisplay(input = this.input) {
        if (input.selected && input.range) {
            // Determine range display (state.rangeStart-state.rangeEnd)
            let iso1, iso2;
            if (Array.isArray(input.selected)) {
                [iso1, iso2] = input.selected.map((date) => toISO(date));
            } else if (this.state.focusISO) {
                const selectedISO = toISO(input.selected);
                iso1 = selectedISO;
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
 * @param {Date} date
 * @returns {DayISO}
 */
export function toISO(date) {
    return date.toISOString().slice(0, 10);
}

/**
 * @param {DayISO} iso
 */
export function fromISO(iso) {
    const [year, month, day] = iso.split('-');
    return new Date(+year, +month - 1, +day);
}

/**
 * @param {string | undefined} locale
 */
export function localeOverride(locale) {
    if (locale) return locale;

    return navigator.language;
}
