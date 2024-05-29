import type { DayISO } from "./date-utils";
import locales from "./locales";
export { locales };

export function localeDefault(locale?: string) {
    if (locale) return locale;
    if (typeof navigator !== "undefined") return navigator.language;
    return "en-US";
}

export function getLocale(locale?: string) {
    return (
        locales[localeDefault(locale).replace(/\W/g, "").toLowerCase()] ??
        locales["enus"]
    );
}

export function parse(date: string, locale?: string): DayISO | null {
    const { order, sep } = getLocale(locale);

    const parts = date.split(sep.trim());

    if (parts.length !== 3) {
        return null;
    }

    const parsed = {} as { y: number; m: number; d: number };
    for (const i in parts) {
        const num = parseInt(parts[i]);
        if (isNaN(num)) {
            return null;
        }
        parsed[order[i] as "y" | "m" | "d"] = num;
    }

    return `${padStart(parsed.y, 4)}-${padStart(parsed.m, 2)}-${padStart(parsed.d, 2)}` as DayISO;
}

export function format(date: DayISO, locale?: string) {
    if (!/^\d\d\d\d-\d\d-\d\d$/g.test(date)) {
        return "";
    }

    const { order, sep } = getLocale(locale);
    const [y, m, d] = date.split("-");
    const parts = { y, m, d };

    return [...order].map((char) => parts[char as "y" | "m" | "d"]).join(sep);
}

function padStart(num: number, digits: number) {
    return String(num).slice(-digits).padStart(digits, "0");
}
