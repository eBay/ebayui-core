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
    this.host = this.el.querySelector(`.${this.state.type}__host`);
    const hostAriaDescribedBy = this.host &&
        this.host.hasAttribute('aria-describedby') &&
        this.host.getAttribute('aria-describedby');
    const isTooltip = this.state.type === 'tooltip';

    if (this.host) {
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
            this.host.setAttribute('aria-describedby', `${this.el.parentElement.id}-overlay`);
        }
    }

    this.expand = () => {
        this.expander.expand();
    };

    this.collapse = () => {
        this.expander.collapse();
    };
}

function onRender() {
    this.curFocusable = this.host && this.host.childElementCount > 0 ?
        focusables(this.host)[0] :
        focusables(this.el)[0];

    if (this.curFocusable) {
        this.curFocusable.addEventListener('focus', this.expand);
        this.curFocusable.addEventListener('blur', this.collapse);
    }
}

function onBeforeUpdate() {
    if (this.curFocusable) {
        this.curFocusable.removeEventListener('focus', this.expand);
        this.curFocusable.removeEventListener('blur', this.collapse);
    }
}

function onDestroy() {
    if (this.curFocusable) {
        this.curFocusable.removeEventListener('focus', this.expand);
        this.curFocusable.removeEventListener('blur', this.collapse);
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
    onRender,
    onBeforeUpdate,
    onDestroy,
    handleExpand,
    handleCollapse,
    handleOverlayClose
});
