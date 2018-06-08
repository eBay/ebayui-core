const markoWidgets = require('marko-widgets');
const keyboardTrap = require('makeup-keyboard-trap');
const screenReaderTrap = require('makeup-screenreader-trap');
const bodyScroll = require('../../common/body-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const observer = require('../../common/property-observer');
const processHtmlAttributes = require('../../common/html-attributes');
const transition = require('../../common/transition');
const template = require('./template.marko');

function init() {
    this.dialogEl = this.getEl('dialog');
    this.windowEl = this.getEl('window');
    this.closeEl = this.getEl('close');
    this.bodyEl = this.getEl('body');
    this.transitionEls = [this.windowEl, this.dialogEl];
    observer.observeRoot(this, ['open']);
    // Add an event listener to the dialog to fix an issue with Safari not recognizing it as a touch target.
    this.subscribeTo(this.dialogEl).on('click', () => {});
}

function getInitialState(input) {
    const { open = false, type, focus, ariaLabelClose } = input;
    return {
        open,
        type,
        focus,
        ariaLabelClose,
        class: input.class,
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    const { open, type, ariaLabelClose, htmlAttributes } = state;
    const dialogClass = [state.class, 'dialog'];
    const windowClass = ['dialog__window'];

    if (type) {
        windowClass.push(`dialog__window--${type}`);
    }

    switch (type) {
        case 'left':
        case 'right':
            windowClass.push('dialog__window--slide');
            dialogClass.push('dialog--mask-fade-slow');
            break;
        case 'full':
            windowClass.push('dialog__window--fade');
            dialogClass.push('dialog--no-mask');
            break;
        case 'fill':
        default:
            windowClass.push('dialog__window--fade');
            dialogClass.push('dialog--mask-fade');
            break;
    }

    return {
        open,
        type,
        ariaLabelClose,
        dialogClass,
        windowClass,
        htmlAttributes
    };
}

/**
 * Ensures that if a component is supposed to be trapped that this is
 * trapped after rendering.
 */
function trap(opts) {
    const { isTrapped: wasTrapped, restoreTrap } = this;
    const isTrapped = this.isTrapped = this.state.open;
    const isFirstRender = (opts && opts.firstRender);
    const wasToggled = isTrapped !== wasTrapped;
    const focusEl = (this.state.focus && document.getElementById(this.state.focus)) || this.closeEl;

    if (restoreTrap || (isTrapped && !wasTrapped)) {
        screenReaderTrap.trap(this.dialogEl);
        keyboardTrap.trap(this.dialogEl);
    }

    // Ensure focus is set and body scroll prevented on initial render.
    if (isFirstRender && isTrapped) {
        focusEl.focus();
        bodyScroll.prevent();
    }

    if (wasToggled) {
        cancelAsync.call(this);
        const onFinishTransition = () => {
            this.cancelTransition = undefined;

            if (isTrapped) {
                focusEl.focus();
                emitAndFire(this, 'dialog-show');
            } else {
                bodyScroll.restore();
                emitAndFire(this, 'dialog-close');

                // Reset dialog scroll position lazily to avoid jank.
                // Note since the dialog is not in the dom at this point none of the scroll methods will work.
                this.cancelScrollReset = setTimeout(() => {
                    this.el.replaceChild(this.dialogEl, this.dialogEl);
                    this.cancelScrollReset = undefined;
                }, 20);
            }
        };

        if (isTrapped) {
            if (!isFirstRender) {
                bodyScroll.prevent();
                this.cancelTransition = transition({
                    el: this.dialogEl,
                    className: 'dialog--show',
                    waitFor: this.transitionEls
                }, onFinishTransition);
            }

            this.dialogEl.removeAttribute('hidden');
        } else {
            if (!isFirstRender) {
                this.cancelTransition = transition({
                    el: this.dialogEl,
                    className: 'dialog--hide',
                    waitFor: this.transitionEls
                }, onFinishTransition);
            }

            this.dialogEl.setAttribute('hidden', '');
        }
    }
}

/**
 * Releases the trap before each render and on destroy so
 * that Marko can update normally without the inserted dom nodes.
 */
function release() {
    if (this.isTrapped) {
        this.restoreTrap = this.state.open;
        screenReaderTrap.untrap(this.dialogEl);
        keyboardTrap.untrap(this.dialogEl);
    } else {
        this.restoreTrap = false;
    }
}

function destroy() {
    cancelAsync.call(this);
    release.call(this);

    if (this.isTrapped) {
        bodyScroll.restore();
    }
}

function show() {
    this.setState('open', true);
}

function close() {
    this.setState('open', false);
}

function handleDialogClick({ target, clientY }) {
    const { closeEl, windowEl } = this;

    // Checks if we clicked inside the white panel of the dialog.
    if (!closeEl.contains(target) && windowEl.contains(target)) {
        const { bottom } = windowEl.getBoundingClientRect();
        const { paddingBottom } = getComputedStyle(windowEl);
        const windowBottom = bottom - parseInt(paddingBottom, 10);
        if (clientY < windowBottom) {
            return;
        }
    }

    this.close();
}

function cancelAsync() {
    if (this.cancelScrollReset) {
        clearTimeout(this.cancelScrollReset);
        this.cancelScrollReset = undefined;
    }

    if (this.cancelTransition) {
        this.cancelTransition();
        this.cancelTransition = undefined;
    }
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    onRender: trap,
    onBeforeUpdate: release,
    onBeforeDestroy: destroy,
    handleDialogClick,
    handleCloseButtonClick: close,
    show,
    close
});
