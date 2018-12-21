const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    input.location = input.location || 'bottom';
    input.htmlAttributes = processHtmlAttributes(input);
    input.hostSelector = '.tooltip__host';
    input.overlaySelector = '.tooltip__overlay';
    input.expanded = false;
    input.expandInit = false;

    return input;
}

function getTemplateData(state) {
    return state;
}

function handleExpand() {
    this.setState('expanded', true);
    emitAndFire(this, 'tooltip-expand');
}

function handleCollapse() {
    this.setState('expanded', false);
    emitAndFire(this, 'tooltip-collapse');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleExpand,
    handleCollapse
});
