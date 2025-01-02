import type { DayISO } from "./date-utils";
import localeInfo, { LocaleInfo, Locales } from "./locale-info";

export function localeDefault(inputLocale?: string): string {
    if (inputLocale) return inputLocale;
    let locale =
        (typeof navigator !== "undefined" &&
            (navigator.language || (navigator as any).userLanguage)) ||
        "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf(locale);
        return locale;
    } catch (_error) {
        return "en-US";
    }
}

const localeCache = new Map<string | undefined, LocaleInfo>();

export function getLocale(locale?: string): LocaleInfo {
    if (!locale) {
        locale = localeDefault();
    }

    if (localeCache.has(locale)) {
        return localeCache.get(locale) as LocaleInfo;
    }

    let info = { ...localeInfo._ } as LocaleInfo;

    let curr = localeInfo;
    const parts = locale.split("-");
    for (let part of parts) {
        part = part.toLowerCase();
        if (curr[part]) {
            curr = curr[part] as Locales;
            info = { ...info, ...curr._ };
        } else {
            break;
        }
    }

    localeCache.set(locale, info);
    return info;
}

export function parse(value: string, locale?: string): DayISO | null {
    const { o: order, s: sep } = getLocale(locale);

    const parts: string[] = [];
    const firstEnd = value.indexOf(sep[0].trim());
    parts.push(value.slice(0, firstEnd).trim());
    const secondEnd = value.indexOf(sep[1].trim(), firstEnd + 1);
    parts.push(value.slice(firstEnd + 1, secondEnd).trim());
    if (sep[2]) {
        const thirdEnd = value.indexOf(sep[2].trim(), secondEnd + 1);
        parts.push(
            value
                .slice(secondEnd + 1, thirdEnd === -1 ? undefined : thirdEnd)
                .trim(),
        );
    } else {
        parts.push(value.slice(secondEnd + 1).trim());
    }

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

    if (parsed.y < 100) {
        // 2-digit year
        // if year is less than 50, assume 2000s, otherwise 1900s
        if (parsed.y < 50) {
            parsed.y += 2000;
        } else {
            parsed.y += 1900;
        }
    }

    const iso =
        `${padStart(parsed.y, 4)}-${padStart(parsed.m, 2)}-${padStart(parsed.d, 2)}` as DayISO;
    if (isNaN(new Date(iso).getTime())) {
        return null;
    }
    return iso;
}

export function format(date: DayISO, locale?: string) {
    if (!/^\d\d\d\d-\d\d-\d\d$/g.test(date)) {
        return "";
    }

    const { o: order, s: sep } = getLocale(locale);
    const [y, m, d] = date.split("-");
    const parts = { y, m, d };
    let result = "";
    for (let i = 0; i < 3; i++) {
        result += parts[order[i] as "y" | "m" | "d"];
        if (sep[i]) {
            result += sep[i];
        }
    }

    return result;
}

export function placeholder(locale?: string) {
    const { o: order, s: sep, y, m, d } = getLocale(locale);
    const parts = {
        y: `${y}${y}${y}${y}`,
        m: `${m}${m}`,
        d: `${d}${d}`,
    };

    let result = "";
    for (let i = 0; i < 3; i++) {
        result += parts[order[i] as "y" | "m" | "d"];
        if (sep[i]) {
            result += sep[i];
        }
    }

    return result;
}

function padStart(num: number, digits: number) {
    return String(num).slice(-digits).padStart(digits, "0");
}
