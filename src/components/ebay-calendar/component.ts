/** Always in `YYYY-MM-DD` format */
export type DayISO = `${number}-${number}-${number}`;

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
    "disable-before"?: Date | number | string;
    "disable-after"?: Date | number | string;
    "disable-weekdays"?: number[];
    "disable-list"?: (Date | number | string)[];
    "link-builder"?: (iso: string) => string | false | null | undefined;
    "get-a11y-show-month-text"?: (monthName: string) => string;
    "a11y-selected-text"?: string;
    "a11y-range-start-text"?: string;
    "a11y-in-range-text"?: string;
    "a11y-range-end-text"?: string;
    "a11y-today-text"?: string;
    "a11y-disabled-text"?: string;
    "a11y-separator"?: string;
    "on-select"?: (event: { iso: DayISO }) => void;
    "on-focus"?: (event: { iso: DayISO }) => void;
    "on-month-change"?: (event: { iso: DayISO }) => void;
}

export interface Input extends WithNormalizedProps<CalendarInput> {}

interface State {
    todayISO: DayISO;
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

export default class extends Marko.Component<Input, State> {
    onCreate(input: Input) {
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

    onInput(input: Input) {
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
        this.state.disableList =
            /** @type {DayISO[]} */ input.disableList?.map(dateArgToISO) ?? [];
        if (this.isDisabled(this.state.tabindexISO)) {
            this.state.tabindexISO = this.getFirstActiveISO(input);
        }
    }

    isDisabled(iso: DayISO) {
        return (
            (this.state.disableBefore && iso < this.state.disableBefore) ||
            (this.state.disableAfter && iso > this.state.disableAfter) ||
            this.state.disableWeekdays.includes(fromISO(iso).getDay()) ||
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
                case "Home":
                    this.setTabindexAndFocus(this.getFirstActiveISO());
                    this.emit("focus", { iso: this.state.tabindexISO });
                    break;
                case "End":
                    this.setTabindexAndFocus(this.getLastActiveISO());
                    this.emit("focus", { iso: this.state.tabindexISO });
                    break;
                default:
            }
        }
    }

    getMonthDate(offset: number) {
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
                baseDate.getMonth() +
                    this.state.offset +
                    (input.numMonths || 1),
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

    monthTitle(date: Date) {
        const formatter = new Intl.DateTimeFormat(
            localeOverride(this.input.locale),
            {
                month: "long",
                year: "numeric",
            }
        );
        return formatter.format(date);
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
        if (this.state.tabindexISO > lastActiveISO) {
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
        if (this.state.tabindexISO < firstActiveISO) {
            newTabindexISO = this.state.tabindexISO = firstActiveISO;
        }
        if (focus) {
            this.setTabindexAndFocus(newTabindexISO);
        }

        this.emit("month-change", {
            iso: toISO(
                this.getMonthDate(
                    this.state.offset + (this.input.numMonths || 1)
                )
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

/**
 * @return {number} 0 or 7 is Sun, 1 is Mon, -1 or 6 is Sat
 */
export function findFirstDayOfWeek(localeName: string): number {
    // weekInfo only exists on some browsers, so we default to Sunday otherwise
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo

    const locale = new Intl.Locale(localeName) as Intl.Locale & {
        weekInfo?: { firstDay: number };
    };
    if (locale.weekInfo) {
        return locale.weekInfo.firstDay;
    }
    return 0;
}

export function getWeekdayInfo(localeName: string) {
    const firstDayOfWeek = findFirstDayOfWeek(localeName);

    const weekdayLabelFormatter = new Intl.DateTimeFormat(localeName, {
        weekday: "short",
    });
    const weekday = new Date(2022, 9, 2 + firstDayOfWeek); // October 2, 2022 was a Sunday
    const weekdayLabels = [...Array(7)].map(() => {
        const dayLabel = weekdayLabelFormatter.format(weekday);
        weekday.setDate(weekday.getDate() + 1);
        return dayLabel;
    });

    return { firstDayOfWeek, weekdayLabels };
}

export function dateArgToISO(arg: DateConstructor["arguments"]) {
    if (!arg) return undefined;
    if (/^\d\d\d\d-\d\d-\d\d$/g.test(arg)) return arg;
    return toISO(new Date(arg));
}

export function toISO(date: Date): DayISO {
    return date.toISOString().slice(0, 10) as DayISO;
}

export function fromISO(iso: DayISO) {
    const [year, month, day] = iso.split("-");
    return new Date(+year, +month - 1, +day);
}

export function offsetISO(iso: DayISO, days: number) {
    const curr = fromISO(iso);
    return toISO(
        new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() + days)
    );
}

export function localeOverride(locale?: string) {
    return locale || navigator.language;
}
