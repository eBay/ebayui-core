const Expander = require('makeup-expander');
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
    const isHostPresent = this.el.querySelector(`.${this.state.type}__host`);
    const isTooltip = this.state.type === 'tooltip';

    if (isHostPresent) {
        this.expander = new Expander(this.el, {
            hostSelector: `.${this.state.type}__host`,
            contentSelector: `.${this.state.type}__overlay`,
            focusManagement: null,
            expandOnFocus: isTooltip,
            expandOnHover: isTooltip && !this.state.noHover,
            expandOnClick: this.state.type === 'infotip',
            autoCollapse: isTooltip
        });
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
