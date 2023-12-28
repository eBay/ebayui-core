declare global {
    namespace Marko {
        interface HTMLAttributes {
            /* makeup */
            "on-expander-expand"?: (event: any) => void;
            "on-expander-collapse"?: (event: any) => void;
            "on-activeDescendantChange"?: (event: any) => void;
            "overlay-style"?: string;
            /* shaka-player */
            "no-controls"?: boolean;
        }
    }

    // TODO: Find or make types for the `shaka-player` package
    const shaka: any;
    namespace shaka {}

    type WithNormalizedProps<T> = T & {
        [K in keyof T as K extends `on-${infer Event}`
            ? `on${Capitalize<Event>}`
            : KebabToCamel<K>]: T[K];
    };
}

type KebabToCamel<T> = T extends `${infer A}-${infer B}`
    ? `${A}${Capitalize<KebabToCamel<B>>}`
    : T;

export {};
