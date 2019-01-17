const Expander = require('makeup-expander');
const focusables = require('makeup-focusables');
const emitAndFire = require('../../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    const state = Object.assign({}, input, {
        pointer: input.pointer || 'bottom',
        noHover: input.noHover || false
    });

    return state;
}

function onRender() {
    const hostClass = `${this.state.type}__host`;
    const hostSelector = `.${hostClass}`;

    this.curFocusable = focusables(this.el)[0];

    if (this.curFocusable) {
        this.curFocusable.classList.add(hostClass);
    }

    this.host = this.el.querySelector(hostSelector);

    const hostAriaDescribedBy = this.host &&
        this.host.hasAttribute('aria-describedby') &&
        this.host.getAttribute('aria-describedby');
    const isTooltip = this.state.type === 'tooltip';

    if (this.host) {
        this.expander = new Expander(this.el, {
            hostSelector: hostSelector,
            hostContainerClass: `${this.state.type}`,
            contentSelector: `.${this.state.type}__overlay`,
            focusManagement: null,
            expandOnFocus: isTooltip,
            expandOnHover: isTooltip && !this.state.noHover,
            expandOnClick: this.state.type === 'infotip',
            autoCollapse: isTooltip
        });

        if (!hostAriaDescribedBy && this.el.parentElement) {
            this.host.setAttribute('aria-describedby', `${this.el.parentElement.id}-overlay`);
        }
    }
}

function handleExpand() {
    this.emit('base-expand');
}

function handleCollapse() {
    this.emit('base-collapse');
}

function handleOverlayClose() {
    this.expander.collapse();
    emitAndFire(this, 'tooltip-close');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    onRender,
    handleExpand,
    handleCollapse,
    handleOverlayClose
});
