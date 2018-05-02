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
        const onFinishTransition = () => {
            this.cancelTransition = undefined;

            if (isTrapped) {
                focusEl.focus();
                bodyScroll.prevent();
                emitAndFire(this, 'dialog-show');
            } else {
                bodyScroll.restore();
                emitAndFire(this, 'dialog-close');
            }
        };

        if (this.cancelTransition) {
            this.cancelTransition();
        }

        if (isTrapped) {
            if (!isFirstRender) {
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
    release.call(this);

    if (this.isTrapped) {
        bodyScroll.restore();
    }
}

function show() {
    this.setState('open', true);
}

function close(ev) {
    if (ev && this.bodyEl.contains(ev.target)) {
        return;
    }

    this.setState('open', false);
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    onRender: trap,
    onBeforeUpdate: release,
    onBeforeDestroy: destroy,
    show,
    close
});
