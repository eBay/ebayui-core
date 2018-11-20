const emitAndFire = require('../../../../common/emit-and-fire');
const overlayUtils = require('../../utils/overlay');
const template = require('./template.marko');

function getInitialState(input) {
    return input;
}

function getTemplateData(state) {
    return state;
}

function init() {
    overlayUtils.initOverlay(this);
}

function handleExpand() {
    overlayUtils.alignOverlay(
        this.el.querySelector(`.${this.state.type}__overlay`),
        this.state.location,
        {
            styleTop: this.state.styleTop,
            styleLeft: this.state.styleLeft,
            styleRight: this.state.styleRight,
            styleBottom: this.state.styleBottom
        }
    );
    emitAndFire(this, 'tooltip-expand');
}

function handleCollapse() {
    emitAndFire(this, 'tooltip-collapse');
}

function infotipCloseButton() {
    emitAndFire(this, 'tooltip-close');
    this.setState('expanded', false);
    overlayUtils.closeOverlay(this);
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    handleExpand,
    handleCollapse,
    infotipCloseButton
});
