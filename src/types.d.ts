declare global {
    namespace Marko {
        interface HTMLAttributes {
            'on-expander-expand'?: (event: CustomEvent) => void;
            'on-expander-collapse'?: (event: CustomEvent) => void;
        }
    }
}

export {};
