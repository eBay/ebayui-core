const markoWidgets = require('marko-widgets');
const keyboardTrap = require('makeup-keyboard-trap');
const screenReaderTrap = require('makeup-screenreader-trap');
const emitAndFire = require('../../common/emit-and-fire');
const observer = require('../../common/property-observer');
const processHtmlAttributes = require('../../common/html-attributes');
const transition = require('../../common/transition');
const template = require('./template.marko');

function init() {
    this.dialogEl = this.getEl('dialog');
    this.closeEl = this.getEl('close');
    this.maskEl = this.getEl('mask');
    observer.observeRoot(this, ['open']);
    // Add an event listener to the mask to fix an issue with Safari not recognizing it as a touch target.
    this.subscribeTo(this.maskEl).on('click', () => {});
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
    const maskClass = ['dialog__mask'];

    if (type) {
        windowClass.push(`dialog__window--${type}`);
    }

    switch (type) {
        case 'left':
        case 'right':
            windowClass.push('dialog__window--slide');
            maskClass.push('dialog__mask--fade-slow');
            break;
        case 'full':
        case 'fill':
        default:
            windowClass.push('dialog__window--fade');
            maskClass.push('dialog__mask--fade');
            break;
    }

    return {
        open,
        type,
        ariaLabelClose,
        dialogClass,
        windowClass,
        maskClass,
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
        // Prevent body scrolling when a modal is open.
        document.body.style.overflow = 'hidden';
    }

    // Ensure focus on initial render.
    if (isFirstRender && isTrapped) {
        focusEl.focus();
    }

    if (wasToggled) {
        const onFinishTransition = () => {
            this.cancelTransition = undefined;

            if (isTrapped) {
                focusEl.focus();
                emitAndFire(this, 'dialog-show');
            } else {
                emitAndFire(this, 'dialog-close');
            }
        };

        if (this.cancelTransition) {
            this.cancelTransition();
        }

        if (isTrapped) {
            if (!isFirstRender) {
                this.cancelTransition = transition(this.dialogEl, 'dialog--show', onFinishTransition);
            }

            this.dialogEl.removeAttribute('hidden');
        } else {
            if (!isFirstRender) {
                this.cancelTransition = transition(this.dialogEl, 'dialog--hide', onFinishTransition);
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
        // Restore body scrolling.
        document.body.style.overflow = 'auto'; // Auto instead of null/undefined for ie.
        if (document.body.getAttribute('style') === 'overflow: auto;') {
            // Remove style attribute if all that's left is the default overflow style.
            document.body.removeAttribute('style');
        }
    } else {
        this.restoreTrap = false;
    }
}

function show() {
    this.setState('open', true);
}

function close() {
    this.setState('open', false);
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    onRender: trap,
    onBeforeUpdate: release,
    onBeforeDestroy: release,
    show,
    close
});
