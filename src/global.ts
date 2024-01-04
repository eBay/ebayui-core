type KebabToCamel<T> = T extends `${infer A}-${infer B}`
    ? `${A}${Capitalize<KebabToCamel<B>>}`
    : T;

export type WithNormalizedProps<T> = T & {
    [K in keyof T as K extends `on-${infer Event}`
        ? `on${Capitalize<Event>}`
        : KebabToCamel<K>]: T[K];
};
