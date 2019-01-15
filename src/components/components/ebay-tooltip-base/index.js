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

function init() {
    const host = this.el.querySelector(`.${this.state.type}__host`);
    const focusableEls = host && host.childElementCount > 0 ? focusables(host) : focusables(this.el);
    const hostAriaDescribedBy = host && host.hasAttribute('aria-describedby') && host.getAttribute('aria-describedby');
    const isTooltip = this.state.type === 'tooltip';

    if (host) {
        this.expander = new Expander(this.el, {
            hostSelector: `.${this.state.type}__host`,
            contentSelector: `.${this.state.type}__overlay`,
            focusManagement: null,
            expandOnFocus: isTooltip,
            expandOnHover: isTooltip && !this.state.noHover,
            expandOnClick: this.state.type === 'infotip',
            autoCollapse: isTooltip
        });

        if (!hostAriaDescribedBy && this.el.parentElement) {
            host.setAttribute('aria-describedby', `${this.el.parentElement.id}-overlay`);
        }

        if (focusableEls[0]) {
            focusableEls[0].addEventListener('focus', () => this.expander.expand());
            focusableEls[0].addEventListener('blur', () => this.expander.collapse());
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
    init,
    handleExpand,
    handleCollapse,
    handleOverlayClose
});
