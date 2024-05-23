import { getLocale, localeDefault } from ".";

export type DayISO = `${number}-${number}-${number}`;

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

export function getWeekdayInfo(localeName?: string) {
    localeName = localeDefault(localeName);
    const locale = getLocale(localeName);
    const firstDayOfWeek = locale.weekStart;

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
    const date = toISO(new Date(arg));
    return /^\d\d\d\d-\d\d-\d\d$/g.test(date) ? date : undefined;
}

export function toISO(date: Date): DayISO {
    return date.toISOString().slice(0, 10) as DayISO;
}

export function fromISO(iso: DayISO) {
    return new Date(iso);
}

export function offsetISO(iso: DayISO, days: number) {
    const date = fromISO(iso);
    date.setUTCDate(date.getUTCDate() + days);
    return toISO(date);
}
