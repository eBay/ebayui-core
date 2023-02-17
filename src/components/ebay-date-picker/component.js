/**
 * @typedef {{
 *   today?: Date,
 *   locale?: string,
 *   range?: boolean,
 *   selected?: Date,
 *   rangeStart?: Date,
 *   rangeEnd?: Date,
 * }} Input
 */

const DAY_UPDATE_KEYMAP = {
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowDown: 7,
    ArrowUp: -7,
};

export default class {
    /** @type {Input} */
    input;

    /**
     * @param {Input} input
     */
    onCreate(input) {
        const today = floorDay(input.today ?? new Date());
        this.state = {
            today: today,
            offset: 0,
            firstSelected: floorDay(input.range ? input.rangeStart : input.selected),
            secondSelected: floorDay(input.rangeEnd),
            focusDate: undefined,
            tabindexDate: today,
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
            this.state.today = floorDay(input.today ?? new Date());
        }
    }

    onPrevious() {
        this.state.offset--;
        this.state.tabindexDate = new Date(
            this.state.tabindexDate.getFullYear(),
            this.state.tabindexDate.getMonth() - 1,
            this.state.tabindexDate.getDate()
        );
    }

    onNext() {
        this.state.offset++;
        this.state.tabindexDate = new Date(
            this.state.tabindexDate.getFullYear(),
            this.state.tabindexDate.getMonth() + 1,
            this.state.tabindexDate.getDate()
        );
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

        this.state.tabindexDate = date;
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

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const dayChange = DAY_UPDATE_KEYMAP[event.key];
        if (dayChange) {
            // Change date of tabindex
            this.state.tabindexDate = new Date(
                this.state.tabindexDate.getFullYear(),
                this.state.tabindexDate.getMonth(),
                this.state.tabindexDate.getDate() + dayChange
            );
            // Check if moving to date outside of range
            if (this.state.tabindexDate < this.getFirstVisibleDate()) {
                this.state.offset--;
            } else if (this.state.tabindexDate > this.getLastVisibleDate()) {
                this.state.offset++;
            }
            // After UI updates, focus on the new tabindex date
            setTimeout(() =>
                this.getComponent(`month-${floorMonth(this.state.tabindexDate).getTime()}`)
                    .getEl(`day-${floorDay(this.state.tabindexDate).getTime()}`)
                    .focus()
            );
        }
    }

    getFirstVisibleDate() {
        return getMonthWithOffset(this.state.today, this.state.offset);
    }

    getLastVisibleDate() {
        return new Date(
            this.state.today.getFullYear(),
            this.state.today.getMonth() + this.state.offset + (this.input.numActiveMonths || 2),
            0
        );
    }
}

/**
 * @param {Date | undefined} date
 */
export function floorDay(date) {
    return date && new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * @param {Date | undefined} date
 */
export function floorMonth(date) {
    return date && new Date(date.getFullYear(), date.getMonth());
}

/**
 * @param {Date} today
 * @param {number} offset
 */
export function getMonthWithOffset(today, offset) {
    return new Date(today.getFullYear(), today.getMonth() + offset);
}
