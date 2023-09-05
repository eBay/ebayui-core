// @ts-check

/**
 * Always in `YYYY-MM-DD` format
 * @typedef {`${number}-${number}-${number}`} DayISO
 */

/**
 * @param {string} localeName
 * @return {number} 0 or 7 is Sun, 1 is Mon, -1 or 6 is Sat
 */
export function findFirstDayOfWeek(localeName) {
    // weekInfo only exists on some browsers, so we default to Sunday otherwise
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo

    const locale =
        /** @type {Intl.Locale & { weekInfo?: { firstDay: number } }} */ (
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
    return new Date(iso);
}

/**
 * @param {DayISO} iso
 * @param {number} days
 */
export function offsetISO(iso, days) {
    const date = fromISO(iso);
    date.setUTCDate(date.getUTCDate() + days);
    return toISO(date);
}

/**
 * @param {string | undefined} locale
 */
export function localeOverride(locale) {
    return locale || navigator.language;
}
