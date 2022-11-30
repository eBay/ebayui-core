/**
 * @typedef {{
 *   date: Date,
 *   locale: string,
 *   weekdayLabels: string[] | undefined
 *   firstDayOfWeek: number,
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
export function getMonthDisplayName({ locale, date }) {
    const formatter = new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
}

/**
 * @param {Input} param0
 */
export function getDayLabelFormatter({ locale }) {
    return new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        weekday: 'long',
    });
}

/**
 * @param {Input} param0
 */
export function generateDateGrid({ firstDayOfWeek, date }) {
    const numEmptyDays = (date.getDay() - firstDayOfWeek + 7) % 7;
    // The date of the last day in the month is the same as the number of days in the month
    const numDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const dateGrid = [Array(numEmptyDays).fill(undefined)];
    for (let i = 1; i <= numDaysInMonth; i++) {
        if (dateGrid.at(-1).length === 7) {
            dateGrid.push([]);
        }
        dateGrid.at(-1).push(new Date(date.getFullYear(), date.getMonth(), i));
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
