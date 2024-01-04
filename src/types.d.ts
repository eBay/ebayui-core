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
}

export {};
