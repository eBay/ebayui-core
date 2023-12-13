import Expander from "makeup-expander";
import focusables from "makeup-focusables";

interface TooptipBaseInput {
    open?: boolean;
    toJSON?: () => Object;
    type: string;
    "no-hover"?: boolean;
    "overlay-style"?: string;
    "overlay-id"?: string;
    "render-body"?: Marko.Renderable;
    "on-base-expand"?: (event: { originalEvent: Event }) => void;
    "on-base-collapse"?: (event: { originalEvent: Event }) => void;
}
export interface Input extends WithNormalizedProps<TooptipBaseInput> {}

class TooltipBase extends Marko.Component<Input> {
    declare action: "expand" | "collapse" | null;
    declare _expander: any;
    declare cancelFocus: ReturnType<typeof focusables>;

    handleExpand() {
        this.emit("base-expand");
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
    }

    _setupBaseTooltip() {
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
    }
}

export default TooltipBase;
