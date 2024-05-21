export interface Locale {
    order: `${"y" | "m" | "d"}${"y" | "m" | "d"}${"y" | "m" | "d"}`;
    sep: string;
    /** 0 is Sunday */
    weekStart: number;
}

/**
 * date-fns formats has special handling per country on whether to
 * pad with `0`, included in the comments to the right of each entry.
 * We unconditionally pad all dates, and since every example here has
 * identical separators we can just keep track of the order and sep.
 */
export default {
    af: { order: "ymd", sep: "/", weekStart: 0 }, // yyyy/MM/dd
    ardz: { order: "mdy", sep: "/", weekStart: 0 }, // MM/dd/yyyy
    areg: { order: "dmy", sep: "/", weekStart: 0 }, // d/MM/y
    arma: { order: "mdy", sep: "/", weekStart: 1 }, // MM/dd/yyyy
    arsa: { order: "mdy", sep: "/", weekStart: 0 }, // MM/dd/yyyy
    artn: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    ar: { order: "dmy", sep: "/", weekStart: 6 }, // dd/MM/yyyy
    az: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.yyyy
    betarask: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    be: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    bg: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    bn: { order: "mdy", sep: "/", weekStart: 0 }, // MM/dd/yyyy
    bs: { order: "dmy", sep: ". ", weekStart: 1 }, // dd. MM. yy.
    ca: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    ckb: { order: "mdy", sep: "/", weekStart: 0 }, // MM/dd/yyyy
    cs: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.yyyy
    cy: { order: "dmy", sep: "/", weekStart: 0 }, // dd/MM/yyyy
    da: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    de: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    el: { order: "dmy", sep: "/", weekStart: 1 }, // d/M/yy
    enau: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    enca: { order: "ymd", sep: "-", weekStart: 0 }, // yyyy-MM-dd
    engb: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    enin: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    ennz: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    enus: { order: "mdy", sep: "/", weekStart: 0 }, // MM/dd/yyyy
    enza: { order: "ymd", sep: "/", weekStart: 0 }, // yyyy/MM/dd
    eo: { order: "ymd", sep: "-", weekStart: 1 }, // yyyy-MM-dd
    es: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    et: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    eu: { order: "ymd", sep: "/", weekStart: 1 }, // yy/MM/dd
    fair: { order: "ymd", sep: "/", weekStart: 6 }, // yyyy/MM/dd
    fi: { order: "dmy", sep: ".", weekStart: 1 }, // d.M.y
    frca: { order: "ymd", sep: "-", weekStart: 0 }, // yy-MM-dd
    frch: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    fr: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    fy: { order: "dmy", sep: "-", weekStart: 1 }, // dd-MM-y
    gd: { order: "mdy", sep: "/", weekStart: 0 }, // MM/dd/yyyy
    gl: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    gu: { order: "dmy", sep: "/", weekStart: 1 }, // d/M/yy
    he: { order: "dmy", sep: ".", weekStart: 0 }, // d.M.y
    hi: { order: "mdy", sep: "/", weekStart: 0 }, // dd/MM/yyyy
    hr: { order: "dmy", sep: ". ", weekStart: 1 }, // dd. MM. y.
    ht: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    hu: { order: "ymd", sep: ". ", weekStart: 1 }, // y. MM. dd.
    hy: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.yyyy
    id: { order: "dmy", sep: "/", weekStart: 1 }, // d/M/yyyy
    is: { order: "dmy", sep: ".", weekStart: 1 }, // d.MM.y
    itch: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    it: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    jahira: { order: "ymd", sep: "/", weekStart: 0 }, // y/MM/dd
    ja: { order: "ymd", sep: "/", weekStart: 0 }, // y/MM/dd
    ka: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    kk: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.yyyy
    km: { order: "dmy", sep: "/", weekStart: 0 }, // dd/MM/yyyy
    kn: { order: "dmy", sep: "/", weekStart: 1 }, // d/M/yy
    ko: { order: "ymd", sep: ".", weekStart: 0 }, // y.MM.dd
    lb: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.yy
    lt: { order: "ymd", sep: "-", weekStart: 1 }, // y-MM-dd
    lv: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y.
    mk: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    mn: { order: "ymd", sep: ".", weekStart: 1 }, // y.MM.dd
    ms: { order: "dmy", sep: "/", weekStart: 1 }, // d/M/yyyy
    mt: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    nb: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    nlbe: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    nl: { order: "dmy", sep: "-", weekStart: 1 }, // dd-MM-y
    nn: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    oc: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    pl: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    ptbr: { order: "dmy", sep: "/", weekStart: 0 }, // dd/MM/yyyy
    pt: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    ro: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.yyyy
    ru: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    se: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    sk: { order: "dmy", sep: ". ", weekStart: 1 }, // d. M. y
    sl: { order: "dmy", sep: ". ", weekStart: 1 }, // d. MM. yy
    sq: { order: "mdy", sep: "/", weekStart: 1 }, // MM/dd/yyyy
    srlatn: { order: "dmy", sep: ". ", weekStart: 1 }, // dd. MM. yy.
    sr: { order: "dmy", sep: ". ", weekStart: 1 }, // dd. MM. yy.
    sv: { order: "ymd", sep: "-", weekStart: 1 }, // y-MM-dd
    ta: { order: "dmy", sep: "/", weekStart: 1 }, // d/M/yy
    te: { order: "dmy", sep: "-", weekStart: 0 }, // dd-MM-yy
    th: { order: "dmy", sep: "/", weekStart: 0 }, // dd/MM/yyyy
    tr: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.yyyy
    ug: { order: "mdy", sep: "/", weekStart: 0 }, // MM/dd/yyyy
    uk: { order: "dmy", sep: ".", weekStart: 1 }, // dd.MM.y
    uzcyrl: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    uz: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/yyyy
    vi: { order: "dmy", sep: "/", weekStart: 1 }, // dd/MM/y
    zhcn: { order: "ymd", sep: "-", weekStart: 1 }, // yy-MM-dd
    zhhk: { order: "ymd", sep: "-", weekStart: 0 }, // yy-MM-dd
    zhtw: { order: "ymd", sep: "-", weekStart: 1 }, // yy-MM-dd
} as {
    [index: string]: Locale;
};
