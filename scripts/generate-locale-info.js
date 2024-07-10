import fs from "fs";
import weekData from "cldr-core/supplemental/weekData.json" with { type: "json" };
import availableLocales from "cldr-core/availableLocales.json" with { type: "json" };
import defaultContent from "cldr-core/defaultContent.json" with { type: "json" };

const output = {
    _: {
        y: "Y",
        m: "M",
        d: "D",
        o: "ymd",
        s: ["-", "-"],
        w: 0,
    },
};

const firstDays = weekData.supplemental.weekData.firstDay;
const dayNums = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
};

const modernLocales = availableLocales.availableLocales.modern;
const defaultCountries = Object.fromEntries(
    defaultContent.defaultContent.map((locale) => {
        const index = locale.lastIndexOf("-");
        return [locale.slice(0, index), locale.slice(index + 1)];
    }),
);

const dirPath = "node_modules/cldr-dates-full/main";
const files = fs.readdirSync(dirPath);

for (const locale of files) {
    if (!modernLocales.includes(locale)) {
        continue;
    }
    const parts = locale.split("-");
    let editing = output;
    for (const part of parts) {
        editing[part.toLowerCase()] ??= {};
        editing = editing[part.toLowerCase()];
    }
    editing._ ??= {};
    editing = editing._;

    const dateFields = JSON.parse(
        fs.readFileSync(`${dirPath}/${locale}/dateFields.json`),
    );
    const caGeneric = JSON.parse(
        fs.readFileSync(`${dirPath}/${locale}/ca-generic.json`),
    );

    const getLetter = (time) =>
        dateFields.main[locale].dates.fields[time].displayName
            .charAt(0)
            .toUpperCase();
    editing.y = getLetter("year-narrow");
    editing.m = getLetter("month-narrow");
    editing.d = getLetter("day-narrow");
    const { order, seps } = formatFromAvailable(
        caGeneric.main[locale].dates.calendars.generic.dateTimeFormats
            .availableFormats,
    );
    editing.o = order;
    editing.s = seps;
    if (parts[1] && firstDays[parts[1]]) {
        editing.w = dayNums[firstDays[parts[1]]];
    } else if (
        defaultCountries[locale] &&
        firstDays[defaultCountries[locale]]
    ) {
        editing.w = dayNums[firstDays[defaultCountries[locale]]];
    } else {
        editing.w = 0;
    }
}

function formatFromAvailable(availableFormats) {
    let { yyyyMd } = availableFormats;
    yyyyMd = yyyyMd.replace(/G/g, "").trim().toLowerCase();
    let order = "";
    const seps = [];
    for (const char of yyyyMd) {
        if (char === "y" || char === "m" || char === "d") {
            if (!order.length || order[order.length - 1] !== char) {
                order += char;
                seps.push("");
            }
        } else {
            seps[seps.length - 1] += char;
        }
    }
    if (seps.at(-1) === "") {
        seps.pop();
    }

    return { order, seps };
}

/**
 * if any child `_` matches _exactly_ with its parent's `_`, prune it
 */
function pruneDuplication(obj, parent, parentKey) {
    if (typeof obj === "object" && obj !== null) {
        for (const key in obj) {
            if (
                typeof obj[key] === "object" &&
                obj[key] !== null &&
                key !== "_"
            ) {
                pruneDuplication(obj[key], obj, key);
            }
        }
    }
    if (parent) {
        if (JSON.stringify(obj._) === JSON.stringify(parent._)) {
            delete parent[parentKey];
        } else if (parent._) {
            for (const field in obj._) {
                if (
                    JSON.stringify(obj._[field]) ===
                    JSON.stringify(parent._[field])
                ) {
                    delete obj._[field];
                }
            }
        }
    }
}

pruneDuplication(output);

/**
 * Manual Overrides
 */
output.uz._.s = [".", "."];
output.hy._.s = [".", "."];
output.bg._.s = [".", "."];
output.ar._.s = ["/", "/"];
delete output.ar._.d;
delete output.ar._.m;
delete output.ar._.y;
output.yo._.d = "ọ";
output.fr.ca._ = { w: 0 };

fs.writeFileSync(
    "src/common/dates/locale-info.ts",
    `// GENERATED FILE - DO NOT MODIFY
// Information pulled from cldr-core, see \`scripts/generate-date-info.js\` for more details

export interface LocaleInfo {
    /** order of year, month, and day in date format */
    o: \`\${"y" | "m" | "d"}\${"y" | "m" | "d"}\${"y" | "m" | "d"}\`;
    /** separators between year, month, and day */
    s: string[];
    /** first day of week, 0 is Sunday */
    w: number;
    /** letter representing day */
    d: string;
    /** letter representing month */
    m: string;
    /** letter representing year */
    y: string;
}

export interface Locales {
    _: Partial<LocaleInfo>;
    [country: string]: Locales | Partial<LocaleInfo>;
}

export default ${JSON.stringify(output)} as Locales;`,
);
