/**
 * @typedef {{
 *   open: boolean,
 *   today?: Date,
 *   numActiveMonths?: 1 | 2,
 *   locale?: string,
 *   range?: boolean,
 *   selected?: Date,
 *   rangeStart?: Date,
 *   rangeEnd?: Date,
 * }} Input
 */

export default class {
    /** @type {Input} */
    input;

    /**
     * @param {Input} input
     */
    onCreate(input) {
        this.state = {
            offset: 0,
            firstSelected: floorDay(input.range ? input.rangeStart : input.selected),
            secondSelected: floorDay(input.rangeEnd),
            focusDate: undefined,
        };
    }

    /**
     * @param {Input} input
     */
    onInput(input) {
        // update state
        if (this.state) {
            const firstSelected = floorDay(input.range ? input.rangeStart : input.selected);
            const secondSelected = floorDay(input.rangeEnd);
            this.state.firstSelected = firstSelected ?? this.state.firstSelected;
            this.state.secondSelected = secondSelected ?? this.state.secondSelected;
        }
    }

    onPrevious() {
        this.state.offset--;
    }

    onNext() {
        this.state.offset++;
    }

    /**
     * @param {{ date: Date}}
     */
    onDaySelect({ date }) {
        const event = {};

        if (this.input.range) {
            if (this.state.firstSelected && this.state.secondSelected) {
                this.state.firstSelected = undefined;
                this.state.secondSelected = undefined;
            }
            const singleSelected = this.state.firstSelected || this.state.secondSelected;
            if (singleSelected) {
                if (date < singleSelected) {
                    this.state.firstSelected = date;
                    this.state.secondSelected = singleSelected;
                } else {
                    this.state.firstSelected = singleSelected;
                    this.state.secondSelected = date;
                }
            } else {
                this.state.firstSelected = date;
            }
            event.firstSelected = this.state.firstSelected;
            event.secondSelected = this.state.secondSelected;
        } else {
            this.input.rangeEnd = undefined;
            this.state.firstSelected = date;
            event.selected = this.state.firstSelected;
        }

        this.emit('change', event);
    }

    /**
     * @param {{ date: Date }}
     */
    onDayFocus({ date }) {
        this.state.focusDate = date;
    }

    onDayBlur() {
        this.state.focusDate = undefined;
    }
}

/**
 * @param {Date} date
 */
export function floorDay(date) {
    if (date === undefined) return undefined;
    const dateObj = new Date(date);
    return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
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
