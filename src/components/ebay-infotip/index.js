const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    return Object.assign({}, input, {
        pointer: input.pointer || 'bottom',
        htmlAttributes: processHtmlAttributes(input),
        hostSelector: '.infotip__host',
        overlaySelector: '.infotip__overlay',
        iconTag: input.iconTag && input.iconTag.renderBody
    });
}

function init() {
    this.baseWidget = this.getWidget('base');
}

function handleExpand() {
    emitAndFire(this, 'tooltip-expand');
}

function handleCollapse() {
    this.baseWidget.expander.collapse();
    this.el.querySelector('button.infotip__host').focus();
    emitAndFire(this, 'tooltip-collapse');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    init,
    handleExpand,
    handleCollapse
});
