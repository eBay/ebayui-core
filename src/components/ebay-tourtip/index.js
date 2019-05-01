const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    return Object.assign({}, input, {
        pointer: input.pointer || 'bottom',
        htmlAttributes: processHtmlAttributes(input),
        expanded: true
    });
}

function init() {
    this.expander = this.getWidget('base').expander;
    this.expander.expand();
}

function handleCollapse() {
    if (this.expander.isExpanded()) {
        this.expander.collapse();
        emitAndFire(this, 'tooltip-collapse');
    }
}

module.exports = require('marko-widgets').defineComponent({
    template,
    init,
    getInitialState,
    handleCollapse
});
