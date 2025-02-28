import {
    autoUpdate,
    computePosition,
    shift,
    offset,
    type ReferenceElement,
} from "@floating-ui/dom";

interface DropdownUtilOptions {
    reverse?: boolean;
    strategy?: "absolute" | "fixed";
    offset?: number;
}

export class DropdownUtil {
    declare host: ReferenceElement;
    declare overlay: HTMLElement;
    declare cleanupFn: any;
    declare options: DropdownUtilOptions;

    constructor(
        host: HTMLElement,
        overlay: HTMLElement,
        options?: DropdownUtilOptions,
    ) {
        this.host = host as ReferenceElement;
        this.overlay = overlay as HTMLElement;
        this.options = options ?? {};
    }

    show() {
        this.cleanupFn = autoUpdate(
            this.host,
            this.overlay,
            this.update.bind(this),
        );
    }

    update() {
        computePosition(this.host, this.overlay, {
            placement: this.options.reverse ? "bottom-end" : "bottom-start",
            strategy: this.options.strategy ?? "fixed",
            middleware: [offset(this.options.offset ?? 4), shift()],
        }).then(({ x, y }) => {
            Object.assign(this.overlay.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    }

    cleanup() {
        this.cleanupFn?.();
    }

    hide() {
        if (this.cleanup) this.cleanup();
    }
}
