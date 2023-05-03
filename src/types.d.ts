declare global {
    namespace Marko {
        interface HTMLAttributes {
            'on-expander-expand'?: (event: any) => void;
            'on-expander-collapse'?: (event: any) => void;
            'on-activeDescendantChange'?: (event: any) => void;
        }
    }
}

export {};
