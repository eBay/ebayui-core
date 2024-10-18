import type { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import {
    dateArgToISO,
    fromISO,
    getWeekdayInfo,
    offsetISO,
    toISO,
    toLocalISO,
    type DayISO,
} from "../../common/dates/date-utils";
import { localeDefault } from "../../common/dates";

const DAY_UPDATE_KEYMAP = {
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowDown: 7,
    ArrowUp: -7,
};

interface CalendarInput {
    navigable?: boolean;
    interactive?: boolean;
    "num-months"?: number;
    locale?: string;
    range?: boolean;
    selected?: DayISO | [DayISO, DayISO];
    todayISO?: Date | number | string;
    "disable-before"?: Date | number | string;
    "disable-after"?: Date | number | string;
    "disable-weekdays"?: number[];
    "disable-list"?: (Date | number | string)[];
    "link-builder"?: (iso: string) => string | false | null | undefined;
    "get-a11y-show-month-text"?: (monthName: string) => string;
    "a11y-selected-text"?: AttrString;
    "a11y-range-start-text"?: AttrString;
    "a11y-in-range-text"?: AttrString;
    "a11y-range-end-text"?: AttrString;
    "a11y-today-text"?: AttrString;
    "a11y-disabled-text"?: AttrString;
    "a11y-separator"?: string;
    "on-select"?: (event: { iso: DayISO }) => void;
    "on-focus"?: (event: { iso: DayISO }) => void;
    "on-month-change"?: (event: { iso: DayISO }) => void;
}

export interface Input extends WithNormalizedProps<CalendarInput> {}

interface State {
    todayISO?: DayISO;
    tabindexISO: DayISO;
    offset: number;
    firstDayOfWeek: number;
    weekdayLabels: string[];
    focusISO: DayISO | null;
    rangeStart: DayISO | null;
    rangeEnd: DayISO | null;
    baseISO: DayISO;
    disableBefore: DayISO | null;
    disableAfter: DayISO | null;
    disableWeekdays: number[];
    disableList: DayISO[];
}

class Calendar extends Marko.Component<Input, State> {
    declare locale?: string;

    onCreate(input: Input) {
        this.locale = input.locale;
        const { firstDayOfWeek, weekdayLabels } = getWeekdayInfo(input.locale);
        const todayISO = toLocalISO(new Date());
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

    onInput(input: Input) {
        if (input.locale !== this.locale) {
            this.locale = input.locale;
            const { firstDayOfWeek, weekdayLabels } = getWeekdayInfo(
                input.locale,
            );
            this.state.firstDayOfWeek = firstDayOfWeek;
            this.state.weekdayLabels = weekdayLabels;
        }
        if (input.todayISO) {
            const newTodayISO = toISO(new Date(input.todayISO));
            this.state.todayISO = newTodayISO;
            this.state.baseISO = newTodayISO;
            this.state.tabindexISO = newTodayISO;
        }
        if (input.selected) {
            // If no selected times are visible, snap the view to the first one
            const selectedISOs = Array.isArray(input.selected)
                ? input.selected
                : [input.selected];
            const currFirstISO = this.getFirstVisibleISO();
            const currLastISO = this.getLastVisibleISO(input);
            const selectedTimeInView = selectedISOs.find(
                (time) => time >= currFirstISO && time <= currLastISO,
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
        this.state.disableList = input.disableList?.map(dateArgToISO) ?? [];
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
        while (
            this.state.disableAfter &&
            this.getMonthDate(
                this.state.offset + (input.numMonths || 1) - 1,
            ).toISOString() > this.state.disableAfter
        ) {
            this.state.offset--;
        }
    }

    isDisabled(iso: DayISO) {
        return (
            (this.state.disableBefore && iso < this.state.disableBefore) ||
            (this.state.disableAfter && iso > this.state.disableAfter) ||
            this.state.disableWeekdays.includes(fromISO(iso).getUTCDay()) ||
            this.state.disableList.includes(iso)
        );
    }

    onDaySelect(day: DayISO) {
        this.emit("select", { iso: day });
    }

    onDayFocus(day: DayISO) {
        this.state.focusISO = this.state.tabindexISO = day;
        this.calculateRangeDisplay();
    }

    onDayBlur() {
        this.state.focusISO = null;
        this.calculateRangeDisplay();
    }

    onKeyDown(event: KeyboardEvent) {
        const dayChange =
            DAY_UPDATE_KEYMAP[event.key as keyof typeof DAY_UPDATE_KEYMAP];
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

    getMonthDate(offset: number) {
        const baseDate = fromISO(this.state.baseISO);
        const date = new Date(
            Date.UTC(
                baseDate.getUTCFullYear(),
                baseDate.getUTCMonth() + offset,
            ),
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
                    0,
                ),
            ),
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

    monthTitle(date: Date) {
        const formatter = new Intl.DateTimeFormat(
            localeDefault(this.input.locale),
            {
                month: "long",
                year: "numeric",
            },
        );
        return formatter.format(
            new Date(date.getUTCFullYear(), date.getUTCMonth()),
        );
    }

    prevMonth(focus?: boolean) {
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

        this.emit("month-change", {
            iso: toISO(this.getMonthDate(this.state.offset)),
        });

        return true;
    }

    nextMonth(focus?: boolean) {
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

        this.emit("month-change", {
            iso: toISO(
                this.getMonthDate(
                    this.state.offset + (this.input.numMonths || 1),
                ),
            ),
        });

        return true;
    }

    setTabindexAndFocus(iso: DayISO) {
        this.state.tabindexISO = iso;
        // After UI updates, focus on the new tabindex date
        setTimeout(() => (this.getEl(iso) as HTMLElement)?.focus());
    }

    calculateRangeDisplay(input: Input = this.input) {
        if (input.selected && input.range) {
            // Determine range display (state.rangeStart-state.rangeEnd)
            let iso1: DayISO | undefined, iso2: DayISO | undefined;
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
        } else {
            // We can't display a range, so ensure that no range is highlighted
            this.state.rangeStart = this.state.rangeEnd = null;
        }
    }

    isInRange(iso: DayISO) {
        if (!this.state.rangeStart || !this.state.rangeEnd)
            // range doesn't exist
            return false;
        if (iso < this.state.rangeStart || iso > this.state.rangeEnd)
            // date is outside of range
            return false;

        return true;
    }
}

export default Calendar;
