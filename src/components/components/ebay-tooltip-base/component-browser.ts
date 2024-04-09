import Expander from "makeup-expander";
import focusables from "makeup-focusables";
import {
    autoUpdate,
    flip,
    computePosition,
    shift,
    offset,
    arrow,
    type Placement,
    inline,
} from "@floating-ui/dom";
import { pointerStyles } from "./constants";
import type { WithNormalizedProps } from "../../../global";

interface TooptipBaseInput {
    open?: boolean;
    type: string;
    offset?: number;
    "no-hover"?: boolean;
    "overlay-style"?: string;
    "overlay-id"?: string;
    "render-body"?: Marko.Renderable;
    placement?: Placement;
    "no-flip"?: boolean;
    "not-inline"?: boolean;
    "no-shift"?: boolean;
    pointer?: keyof typeof pointerStyles;
    "on-base-expand"?: (event: { originalEvent: Event }) => void;
    "on-base-collapse"?: (event: { originalEvent: Event }) => void;
}
export interface Input extends WithNormalizedProps<TooptipBaseInput> {}

class TooltipBase extends Marko.Component<Input> {
    declare action: "expand" | "collapse" | null;
    declare _expander: any;
    declare cancelFocus: ReturnType<typeof focusables>;
    declare hostEl: HTMLElement | null;
    declare overlayEl: HTMLElement | null;
    declare arrowEl: HTMLElement | null;
    declare cleanup: (() => void) | undefined;

    handleExpand() {
        this.emit("base-expand");
        if (this.hostEl && this.overlayEl) {
            this.updateTip();
        }
    }

    handleCollapse() {
        this.emit("base-collapse");
    }

    onMount() {
        this._setupBaseTooltip();
    }

    onUpdate() {
        this._setupBaseTooltip();
    }

    onInput(input: Input) {
        if (input.open === true) {
            this.action = "expand";
        } else if (input.open === false) {
            this.action = "collapse";
        }
    }

    onRender() {
        if (typeof window !== "undefined") {
            this._cleanupMakeup();
        }
    }

    collapse() {
        this._expander.expanded = false;
    }

    expand() {
        this._expander.expanded = true;
    }

    isExpanded() {
        return this._expander.expanded;
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _setupExpander(host: Element | null | undefined, hostSelector: string) {
        const { input } = this;
        const { type } = input;
        const container = this.getEl("container");
        const isTooltip = type === "tooltip";
        const isInfotip = type === "infotip";
        const isTourtip = type === "tourtip";
        const expanderEl = container?.getElementsByClassName(type)[0];

        if (host && !isTourtip) {
            this._expander = new Expander(expanderEl, {
                hostSelector: hostSelector,
                contentSelector: `.${type}__overlay`,
                expandedClass: `${type}--expanded`,
                focusManagement: null,
                expandOnFocus: isTooltip,
                expandOnHover: isTooltip && !input.noHover,
                expandOnClick: isInfotip,
                autoCollapse: isTooltip,
            });

            if (isTooltip && !host.hasAttribute("aria-describedby")) {
                host.setAttribute("aria-describedby", input.overlayId!);
            }
        }
        if (this.hostEl && this.overlayEl) {
            this.updateTip();
            this.cleanup = autoUpdate(
                this.hostEl,
                this.overlayEl,
                this.update.bind(this),
            );
        }
    }

    updateTip() {
        computePosition(
            this.hostEl as HTMLElement,
            this.overlayEl as HTMLElement,
            {
                placement:
                    this.input.placement ||
                    pointerStyles[this.input.pointer ?? "bottom"],
                middleware: [
                    offset(this.input.offset || 6),
                    !this.input.notInline && inline(),
                    !this.input.noFlip && flip(),
                    !this.input.noShift && shift(),
                    arrow({
                        element: this.arrowEl as HTMLElement,
                        padding: 20,
                    }),
                ],
            },
        ).then(({ x, y, placement, middlewareData }) => {
            Object.assign(this.overlayEl?.style || {}, {
                left: `${x}px`,
                top: `${y}px`,
            });

            // Accessing the data
            const arrowX = middlewareData.arrow?.x;
            const arrowY = middlewareData.arrow?.y;

            const staticSide = {
                top: "bottom",
                strategy: "fixed",
                right: "left",
                bottom: "top",
                left: "right",
            }[placement.split("-")[0]];

            Object.assign(this.arrowEl?.style || {}, {
                left: arrowX != null ? `${arrowX}px` : "",
                top: arrowY != null ? `${arrowY}px` : "",
                right: "",
                bottom: "",
                [staticSide || ""]: "-4px",
            });
        });
    }

    _setupBaseTooltip() {
        const { type } = this.input;
        const hostClass = `${type}__host`;
        const hostSelector = `.${hostClass}`;

        this.hostEl = this.el?.querySelector(hostSelector) || null;
        this.overlayEl = this.el?.querySelector(`.${type}__overlay`) || null;
        this.arrowEl = this.el?.querySelector(`.${type}__pointer`) || null;

        if (this.input.type !== "dialog--mini") {
            this._setupMakeup();
        }
        if (this.action && this._expander) {
            if (this.action === "expand") {
                this.expand();
            } else if (this.action === "collapse") {
                this.collapse();
            }
            this.action = null;
        }
    }

    _setupMakeup() {
        const { input } = this;
        const { type } = input;
        const container = this.getEl("container");
        const hostClass = `${type}__host`;
        const hostSelector = `.${hostClass}`;
        let host = container?.querySelector(hostSelector);

        if (!host) {
            if (this.cancelFocus) {
                this.cancelFocus();
            }

            this.cancelFocus = focusables(
                container,
                false,
                (curFocusables: any) => {
                    const curFocusable = curFocusables[0];
                    if (curFocusable) {
                        host = curFocusable;

                        if (!curFocusable.classList.contains(hostClass)) {
                            curFocusable.classList.add(hostClass);
                        }
                    }
                    this._setupExpander(host, hostSelector);
                },
            );
        } else {
            this._setupExpander(host, hostSelector);
        }
    }

    _cleanupMakeup() {
        if (this.cancelFocus) {
            this.cancelFocus();
        }

        if (this._expander) {
            this._expander.destroy();
            this._expander = undefined;
        }
        if (this.cleanup) {
            this.cleanup();
            this.cleanup = undefined;
        }
    }
}

export default TooltipBase;
