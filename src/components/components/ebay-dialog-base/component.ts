import * as keyboardTrap from "makeup-keyboard-trap";
import * as screenReaderTrap from "makeup-screenreader-trap";
import type { AttrClass } from "marko/tags-html";
import * as bodyScroll from "../../../common/body-scroll";
import * as eventUtils from "../../../common/event-utils";
import transition from "../../../common/transition";

interface DialogBaseInput extends Omit<Marko.Input<"div">, `on${string}`> {
    "button-position"?: "right" | "left" | "bottom" | "hidden";
    "use-hidden-property"?: boolean;
    "base-el"?: string;
    header?: Marko.AttrTag<
        Marko.Input<`h${number}`> & {
            as?: `h${number}`;
            renderBody?: Marko.Body;
        }
    >;
    "class-prefix"?: string;
    "close-button-text"?: string;
    "close-button-class"?: AttrClass;
    "a11y-close-text"?: string;
    "close-button"?: Marko.Renderable;
    "is-modal"?: boolean;
    "ignore-escape"?: boolean;
    "window-type"?: string;
    "window-class"?: AttrClass;
    top?: Marko.AttrTag<{
        renderBody: Marko.Body;
    }>;
    "main-id"?: string;
    renderBody?: Marko.Body;
    action?: Marko.AttrTag<{
        renderBody: Marko.Body;
    }>;
    footer?: Marko.AttrTag<{
        renderBody?: Marko.Body;
    }>;
    "close-focus"?: string;
    open?: boolean;
    "transition-el"?: "root" | "window";
    focus?: string;
    prevButton?: WithNormalizedProps<
        Omit<Marko.Input<"button">, `on${string}`> & {
            "a11y-text"?: string;
        }
    >;
    "on-open"?: (event: Event) => void;
    "on-close"?: (event: Event) => void;
    "on-scroll"?: (event: Event) => void;
    "on-mouseEnter"?: (event: Event) => void;
    "on-mouseLeave"?: (event: Event) => void;
    "on-prevButtonClick"?: (event: Event) => void;
}

export interface Input extends WithNormalizedProps<DialogBaseInput> {}

interface State {
    open: boolean;
}

class DialogBase extends Marko.Component<Input, State> {
    clickTarget?: HTMLButtonElement | null;
    startEl?: Element | null;
    closeEl?: Element | null;
    windowEl?: Element | null;
    rootEl?: Element | null;
    bodyEl?: Element | null;
    transitionEls?: Element[];
    isTrapped?: boolean;
    restoreTrap?: boolean;
    _prevFocusEl?: Element | null;
    cancelTransition: (() => void) | undefined;
    cancelScrollReset: NodeJS.Timeout | undefined;
    isAnimating?: boolean;

    get useHiddenProperty() {
        return this.input.useHiddenProperty || false;
    }

    trackLastClick(e: MouseEvent) {
        if (
            e.defaultPrevented ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.button !== 0
        ) {
            return;
        }

        let el = e.target as Node | null;
        // Find an <button> element that may have been clicked.
        while (el !== null && el.nodeName !== "BUTTON") {
            el = el.parentNode;
        }
        // Store the button that was clicked.
        this.clickTarget = el as HTMLButtonElement | null;
    }

    getActiveElement(input: Input) {
        let closeFocusEl: HTMLElement | null = null;
        if (input && input.closeFocus) {
            closeFocusEl = document.getElementById(input.closeFocus);
        }
        const el =
            document.activeElement === document.body
                ? this.clickTarget
                : document.activeElement;
        return closeFocusEl || el;
    }

    handleStartClick({ target }: { target: HTMLElement }) {
        this.startEl = target;
    }

    handleScroll() {
        this.emit("scroll");
    }

    handleKeydown(event: KeyboardEvent) {
        eventUtils.handleEscapeKeydown(event, () => {
            this.state.open = false;
        });
    }

    handleDialogClick({
        target,
        clientY,
    }: {
        target: HTMLElement;
        clientY: number;
    }) {
        const { closeEl, windowEl, startEl } = this;

        this.startEl = null;

        if (this.input.buttonPosition === "hidden") {
            return;
        }

        if (windowEl?.contains(startEl ?? null)) {
            // Started on dialog window and user dragged out, don't close
            return;
        }

        // Checks if we clicked inside the white panel of the dialog.
        if (!closeEl?.contains(target) && windowEl?.contains(target)) {
            const { bottom } = windowEl.getBoundingClientRect();
            const { paddingBottom } = getComputedStyle(windowEl);
            const windowBottom = bottom - parseInt(paddingBottom, 10);
            if (clientY < windowBottom) {
                return;
            }
        }

        this.state.open = false;
    }

    handleCloseButtonClick() {
        this.state.open = false;
    }

    onInput(input: Input) {
        input.isModal = input.isModal !== false;
        if (!this.isAnimating) {
            this.state = { open: input.open || false };
        }
    }

    onRender() {
        if (typeof window !== "undefined") {
            this._release();
        }
    }

    onMount() {
        this.rootEl = this.getEl() ?? null;
        this.windowEl = this.getEl("window") ?? null;
        this.closeEl = this.getEl("close") ?? null;
        this.bodyEl = this.getEl("body") ?? null;
        if (this.input.transitionEl === "root") {
            this.transitionEls = [this.rootEl as Element];
        } else if (this.input.transitionEl === "window") {
            this.transitionEls = [this.windowEl as Element];
        } else {
            this.transitionEls = [
                this.windowEl as Element,
                this.rootEl as Element,
            ];
        }
        // Add an event listener to the dialog to fix an issue with Safari not recognizing it as a touch target.
        this.subscribeTo(this.rootEl).on("click", () => {});

        this._trap({
            firstRender: true,
        });
    }

    onUpdate() {
        this._trap({
            firstRender: false,
        });
    }

    _triggerFocus(focusEl: HTMLElement) {
        if (this.input.isModal && focusEl) {
            focusEl.focus();
        }
    }

    _triggerBodyScroll(prevent: boolean) {
        if (this.input.isModal) {
            if (prevent) {
                bodyScroll.prevent();
            } else {
                bodyScroll.restore();
            }
        }
    }

    onDestroy() {
        this._cancelAsync();
        this._release();

        if (this.isTrapped) {
            this._triggerBodyScroll(false);
        }
    }

    _getTrapCallback(
        restoreTrap: boolean,
        isTrapped: boolean,
        wasTrapped: boolean,
    ) {
        const willTrap =
            this.input.isModal && (restoreTrap || (isTrapped && !wasTrapped));
        const useHiddenProperty = this.useHiddenProperty;

        return () => {
            if (willTrap) {
                screenReaderTrap.trap(this.el, { useHiddenProperty });
                if (!useHiddenProperty) {
                    keyboardTrap.trap(this.windowEl);
                }
            }
        };
    }

    /**
     * Ensures that if a component is supposed to be trapped that this is
     * trapped after rendering.
     */
    _trap(opts: { firstRender: boolean }) {
        const { isTrapped: wasTrapped, restoreTrap } = this;
        const isTrapped = (this.isTrapped = this.state.open);
        const isFirstRender = opts && opts.firstRender;
        const wasToggled = isTrapped !== wasTrapped;
        const focusEl =
            (this.input.focus && document.getElementById(this.input.focus)) ||
            this.closeEl;
        const runTraps = this._getTrapCallback(
            restoreTrap ?? false,
            isTrapped,
            wasTrapped ?? false,
        );

        // Ensure focus is set and body scroll prevented on initial render.
        if (isFirstRender && this.input.isModal && isTrapped) {
            this._prevFocusEl = this.getActiveElement(this.input);
            focusEl && this._triggerFocus(focusEl as HTMLElement);
            this._triggerBodyScroll(true);
        }
        if (wasToggled) {
            this._cancelAsync();
            const onFinishTransition = () => {
                this.cancelTransition = undefined;
                runTraps();

                if (isTrapped) {
                    this.rootEl?.removeAttribute("hidden");
                    this._triggerFocus(focusEl as HTMLElement);
                    this.emit("open");
                    this.isAnimating = false;
                } else {
                    this._triggerBodyScroll(false);
                    const activeElement = this.getActiveElement(this.input);
                    this.rootEl?.setAttribute("hidden", "");
                    this.emit("close");
                    this.isAnimating = false;

                    if (
                        // Skip restoring focus if the focused element was changed via the dialog-close event
                        activeElement === this.getActiveElement(this.input) &&
                        // Skip restoring focus if the previously focused element was removed from the DOM.
                        document.documentElement.contains(
                            this._prevFocusEl ?? null,
                        )
                    ) {
                        (this._prevFocusEl as HTMLElement)?.focus();
                    }

                    // Reset dialog scroll position lazily to avoid jank.
                    // Note since the dialog is not in the dom at this point none of the scroll methods will work.
                    this.cancelScrollReset = setTimeout(() => {
                        this.rootEl?.parentNode?.replaceChild(
                            this.rootEl,
                            this.rootEl,
                        );
                        this.cancelScrollReset = undefined;
                    }, 20);
                }
            };

            if (isTrapped) {
                if (!isFirstRender) {
                    this._prevFocusEl = this.getActiveElement(this.input);
                    this._triggerBodyScroll(true);
                    this.isAnimating = true;
                    this.cancelTransition = transition(
                        {
                            el: this.rootEl as HTMLElement,
                            className: `${this.input.classPrefix}--show`,
                            waitFor: this.transitionEls ?? [],
                        },
                        onFinishTransition,
                    );
                } else {
                    this.isAnimating = false;
                    this.rootEl?.removeAttribute("hidden");
                    runTraps();
                }
            } else {
                if (!isFirstRender) {
                    this.isAnimating = true;
                    this.cancelTransition = transition(
                        {
                            el: this.rootEl as HTMLElement,
                            className: `${this.input.classPrefix}--hide`,
                            waitFor: this.transitionEls ?? [],
                        },
                        onFinishTransition,
                    );
                } else {
                    this.isAnimating = false;
                    this.rootEl?.setAttribute("hidden", "");
                }
            }
        } else if (restoreTrap) {
            // In the case where the page rerendered, attach all traps again
            runTraps();
        }
    }

    /**
     * Releases the trap before each render and on destroy so
     * that Marko can update normally without the inserted dom nodes.
     * Only releases on isModal dialogs
     */
    _release() {
        if (this.isTrapped && this.input.isModal) {
            this.restoreTrap = this.state.open;
            screenReaderTrap.untrap(this.el);
            if (!this.useHiddenProperty) {
                keyboardTrap.untrap(this.windowEl);
            }
        } else {
            this.restoreTrap = false;
        }
    }

    _cancelAsync() {
        if (this.cancelScrollReset) {
            clearTimeout(this.cancelScrollReset);
            this.cancelScrollReset = undefined;
        }

        if (this.cancelTransition) {
            this.cancelTransition();
            this.cancelTransition = undefined;
        }
    }
}

export default DialogBase;
