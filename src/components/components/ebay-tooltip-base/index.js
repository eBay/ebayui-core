const Expander = require('makeup-expander');
const emitAndFire = require('../../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    const state = Object.assign({}, input, {
        location: input.location || 'bottom'
    });

    return state;
}

function init() {
    const isHostPresent = this.el.querySelector(`.${this.state.type}__host`);

    if (isHostPresent) {
        this.expander = new Expander(this.el, {
            hostSelector: `.${this.state.type}__host`,
            contentSelector: `.${this.state.type}__overlay`,
            focusManagement: null,
            expandOnFocus: this.state.type === 'tooltip',
            expandOnHover: this.state.type === 'tooltip',
            expandOnClick: this.state.type === 'infotip',
            autoCollapse: this.state.type === 'tooltip'
        });
    }
}

function handleExpand() {
    emitAndFire(this, 'tooltip-expand');
}

function handleCollapse() {
    emitAndFire(this, 'tooltip-collapse');
}

function handleTooltipClose() {
    this.expander.collapse();
    emitAndFire(this, 'tooltip-close');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    init,
    handleExpand,
    handleCollapse,
    handleTooltipClose
});
