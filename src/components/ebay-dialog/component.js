const keyboardTrap = require('makeup-keyboard-trap');
const screenReaderTrap = require('makeup-screenreader-trap');
const bodyScroll = require('../../common/body-scroll');
const transition = require('../../common/transition');

module.exports = {
    handleStartClick({ target }) {
        this.startEl = target;
    },

    handleDialogClick({ target, clientY }) {
        const { closeEl, windowEl, startEl } = this;

        this.startEl = null;
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
        this.transitionEls = [this.windowEl, this.rootEl];
        // Add an event listener to the dialog to fix an issue with Safari not recognizing it as a touch target.
        this.subscribeTo(this.rootEl).on('click', () => {});

        this._trap({
            firstRender: true
        });
    },

    onUpdate() {
        this._trap({
            firstRender: false
        });
    },

    onDestroy() {
        this._cancelAsync();
        this._release();

        if (this.isTrapped) {
            bodyScroll.restore();
        }
    },

    /**
     * Ensures that if a component is supposed to be trapped that this is
     * trapped after rendering.
     */
    _trap(opts) {
        const { isTrapped: wasTrapped, restoreTrap } = this;
        const isTrapped = this.isTrapped = this.state.open;
        const isFirstRender = (opts && opts.firstRender);
        const wasToggled = isTrapped !== wasTrapped;
        const focusEl = (this.state.focus && document.getElementById(this.state.focus)) || this.closeEl;

        if (restoreTrap || (isTrapped && !wasTrapped)) {
            screenReaderTrap.trap(this.windowEl);
            keyboardTrap.trap(this.windowEl);
        }

        // Ensure focus is set and body scroll prevented on initial render.
        if (isFirstRender && isTrapped) {
            this._prevFocusEl = document.activeElement;
            focusEl.focus();
            bodyScroll.prevent();
        }

        if (wasToggled) {
            this._cancelAsync();
            const onFinishTransition = () => {
                this.cancelTransition = undefined;

                if (isTrapped) {
                    focusEl.focus();
                    this.emit('dialog-show');
                } else {
                    bodyScroll.restore();
                    const activeElement = document.activeElement;
                    this.emit('dialog-close');

                    if (
                        // Skip restoring focus if the focused element was changed via the dialog-close event
                        activeElement === document.activeElement &&
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
                    this._prevFocusEl = document.activeElement;
                    bodyScroll.prevent();
                    this.cancelTransition = transition({
                        el: this.rootEl,
                        className: 'dialog--show',
                        waitFor: this.transitionEls
                    }, onFinishTransition);
                }

                this.rootEl.removeAttribute('hidden');
            } else {
                if (!isFirstRender) {
                    this.cancelTransition = transition({
                        el: this.rootEl,
                        className: 'dialog--hide',
                        waitFor: this.transitionEls
                    }, onFinishTransition);
                }

                this.rootEl.setAttribute('hidden', '');
            }
        }
    },

    /**
     * Releases the trap before each render and on destroy so
     * that Marko can update normally without the inserted dom nodes.
     */
    _release() {
        if (this.isTrapped) {
            this.restoreTrap = this.state.open;
            screenReaderTrap.untrap(this.windowEl);
            keyboardTrap.untrap(this.windowEl);
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
    }
};
