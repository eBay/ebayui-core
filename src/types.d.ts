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
}

export {};
