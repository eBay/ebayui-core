import * as keyboardTrap from 'makeup-keyboard-trap';
import * as screenReaderTrap from 'makeup-screenreader-trap';
import * as bodyScroll from '../../../common/body-scroll';
import * as eventUtils from '../../../common/event-utils';
import transition from '../../../common/transition';

export default {
    get useHiddenProperty() {
        return this.input.useHiddenProperty || false;
    },

    trackLastClick(e) {
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
            return;
        }

        let el = e.target;
        // Find an <button> element that may have been clicked.
        while (el !== null && el.nodeName !== 'BUTTON') {
            el = el.parentNode;
        }
        // Store the button that was clicked.
        this.clickTarget = el;
    },

    getActiveElement(input) {
        let closeFocusEl;
        if (input && input.closeFocus) {
            closeFocusEl = document.getElementById(input.closeFocus);
        }
        const el =
            document.activeElement === document.body ? this.clickTarget : document.activeElement;
        return closeFocusEl || el;
    },

    handleStartClick({ target }) {
        this.startEl = target;
    },

    handleScroll() {
        this.emit('scroll');
    },

    handleKeydown(event) {
        eventUtils.handleEscapeKeydown(event, () => {
            this.state.open = false;
        });
    },

    handleDialogClick({ target, clientY }) {
        const { closeEl, windowEl, startEl } = this;

        this.startEl = null;

        if (this.input.buttonPosition === 'hidden') {
            return;
        }

        if (windowEl.contains(startEl)) {
            // Started on dialog window and user dragged out, don't close
            return;
        }

        // Checks if we clicked inside the white panel of the dialog.
        if (!closeEl.contains(target) && windowEl.contains(target)) {
            const { bottom } = windowEl.getBoundingClientRect();
            const { paddingBottom } = getComputedStyle(windowEl);
            const windowBottom = bottom - parseInt(paddingBottom, 10);
            if (clientY < windowBottom) {
                return;
            }
        }

        this.state.open = false;
    },

    handleCloseButtonClick() {
        this.state.open = false;
    },

    onInput(input) {
        input.isModal = input.isModal !== false;
        this.state = { open: input.open || false };
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._release();
        }
    },

    onMount() {
        this.rootEl = this.getEl();
        this.windowEl = this.getEl('window');
        this.closeEl = this.getEl('close');
        this.bodyEl = this.getEl('body');
        if (this.input.transitionEl === 'root') {
            this.transitionEls = [this.rootEl];
        } else if (this.input.transitionEl === 'window') {
            this.transitionEls = [this.windowEl];
        } else {
            this.transitionEls = [this.windowEl, this.rootEl];
        }
        // Add an event listener to the dialog to fix an issue with Safari not recognizing it as a touch target.
        this.subscribeTo(this.rootEl).on('click', () => {});

        this._trap({
            firstRender: true,
        });
    },

    onUpdate() {
        this._trap({
            firstRender: false,
        });
    },

    _triggerFocus(focusEl) {
        if (this.input.isModal && focusEl) {
            focusEl.focus();
        }
    },

    _triggerBodyScroll(prevent) {
        if (this.input.isModal) {
            if (prevent) {
                bodyScroll.prevent();
            } else {
                bodyScroll.restore();
            }
        }
    },

    onDestroy() {
        this._cancelAsync();
        this._release();

        if (this.isTrapped) {
            this._triggerBodyScroll(false);
        }
    },

    _getTrapCallback(restoreTrap, isTrapped, wasTrapped) {
        const willTrap = this.input.isModal && (restoreTrap || (isTrapped && !wasTrapped));
        const useHiddenProperty = this.useHiddenProperty;

        return () => {
            if (willTrap) {
                screenReaderTrap.trap(this.el, { useHiddenProperty });
                if (!useHiddenProperty) {
                    keyboardTrap.trap(this.windowEl);
                }
            }
        };
    },

    /**
     * Ensures that if a component is supposed to be trapped that this is
     * trapped after rendering.
     */
    _trap(opts) {
        const { isTrapped: wasTrapped, restoreTrap } = this;
        const isTrapped = (this.isTrapped = this.state.open);
        const isFirstRender = opts && opts.firstRender;
        const wasToggled = isTrapped !== wasTrapped;
        const focusEl =
            (this.input.focus && document.getElementById(this.input.focus)) || this.closeEl;
        const runTraps = this._getTrapCallback(restoreTrap, isTrapped, wasTrapped);

        // Ensure focus is set and body scroll prevented on initial render.
        if (isFirstRender && this.input.isModal && isTrapped) {
            this._prevFocusEl = this.getActiveElement(this.input);
            this._triggerFocus(focusEl);
            this._triggerBodyScroll(true);
        }
        if (wasToggled) {
            this._cancelAsync();
            const onFinishTransition = () => {
                this.cancelTransition = undefined;
                runTraps();

                if (isTrapped) {
                    this.rootEl.removeAttribute('hidden');
                    this._triggerFocus(focusEl);
                    this.emit('open');
                } else {
                    this._triggerBodyScroll(false);
                    const activeElement = this.getActiveElement();
                    this.rootEl.setAttribute('hidden', '');
                    this.emit('close');

                    if (
                        // Skip restoring focus if the focused element was changed via the dialog-close event
                        activeElement === this.getActiveElement() &&
                        // Skip restoring focus if the previously focused element was removed from the DOM.
                        document.documentElement.contains(this._prevFocusEl)
                    ) {
                        this._prevFocusEl.focus();
                    }

                    // Reset dialog scroll position lazily to avoid jank.
                    // Note since the dialog is not in the dom at this point none of the scroll methods will work.
                    this.cancelScrollReset = setTimeout(() => {
                        this.rootEl.parentNode.replaceChild(this.rootEl, this.rootEl);
                        this.cancelScrollReset = undefined;
                    }, 20);
                }
            };

            if (isTrapped) {
                if (!isFirstRender) {
                    this._prevFocusEl = this.getActiveElement(this.input);
                    this._triggerBodyScroll(true);
                    this.cancelTransition = transition(
                        {
                            el: this.rootEl,
                            className: `${this.input.classPrefix}--show`,
                            waitFor: this.transitionEls,
                        },
                        onFinishTransition
                    );
                } else {
                    this.rootEl.removeAttribute('hidden');
                    runTraps();
                }
            } else {
                if (!isFirstRender) {
                    this.cancelTransition = transition(
                        {
                            el: this.rootEl,
                            className: `${this.input.classPrefix}--hide`,
                            waitFor: this.transitionEls,
                        },
                        onFinishTransition
                    );
                } else {
                    this.rootEl.setAttribute('hidden', '');
                }
            }
        } else if (restoreTrap) {
            // In the case where the page rerendered, attach all traps again
            runTraps();
        }
    },

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
    },

    _cancelAsync() {
        if (this.cancelScrollReset) {
            clearTimeout(this.cancelScrollReset);
            this.cancelScrollReset = undefined;
        }

        if (this.cancelTransition) {
            this.cancelTransition();
            this.cancelTransition = undefined;
        }
    },
};
