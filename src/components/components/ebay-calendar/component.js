/**
 * @typedef {{
 *   header: boolean,
 *   interactive: boolean,
 *   date: Date,
 *   locale: string,
 *   today: Date,
 *   isRange: boolean,
 *   firstSelected: Date | undefined,
 *   secondSelected: Date | undefined,
 *   focusDate: Date | undefined,
 *   tabindexDate: Date
 * }} Input
 */

export default class {
    /**
     * @param {Date} date
     */
    onDaySelect(date) {
        this.emit('select', { date });
    }

    /**
     * @param {Date} date
     */
    onDayFocus(date) {
        this.emit('focus', { date });
    }

    onDayBlur() {
        this.emit('blur');
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        this.emit('keydown', event);
    }
}

/**
 * @param {Input} param0
 */
export function getMonthTitle({ locale, date }) {
    const formatter = new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
}

/**
 * @param {number} firstDayOfWeek
 * @param {Date} firstDay
 */
export function generateMonthGrid(firstDayOfWeek, firstDay) {
    const numEmptyDays = (firstDay.getDay() - firstDayOfWeek + 7) % 7;
    // The date of the last day in the month is the same as the number of days in the month
    const numDaysInMonth = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0).getDate();

    const dateGrid = [Array(numEmptyDays).fill(undefined)];
    for (let i = 1; i <= numDaysInMonth; i++) {
        if (dateGrid.at(-1).length === 7) {
            dateGrid.push([]);
        }
        dateGrid.at(-1).push(new Date(firstDay.getFullYear(), firstDay.getMonth(), i));
    }

    return dateGrid;
}

/**
 * @param {Input} param0
 */
export function findVisibleRange({ isRange, firstSelected, secondSelected, focusDate }) {
    let showRange = isRange;
    let rangeStart, rangeEnd;

    if (firstSelected && secondSelected) {
        rangeStart = firstSelected;
        rangeEnd = secondSelected;
    } else if (showRange) {
        const singleSelectedDate = firstSelected || secondSelected;
        if (singleSelectedDate === undefined || focusDate === undefined) {
            showRange = false;
        } else if (focusDate < singleSelectedDate) {
            rangeStart = focusDate;
            rangeEnd = singleSelectedDate;
        } else {
            rangeStart = singleSelectedDate;
            rangeEnd = focusDate;
        }
    }

    return { showRange, rangeStart, rangeEnd };
}

/**
 * @param {string} localeName
 * @return {number} 0 or 7 is Sun, 1 is Mon, -1 or 6 is Sat
 */
export function findFirstDayOfWeek(localeName) {
    const locale = new Intl.Locale(localeName);
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
