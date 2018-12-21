const processHtmlAttributes = require('../../../../common/html-attributes');
const emitAndFire = require('../../../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    input.location = input.location || 'bottom';
    input.htmlAttributes = processHtmlAttributes(input);
    input.hostSelector = '.tourtip__host';
    input.overlaySelector = '.tourtip__overlay';
    input.expanded = true;

    return input;
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.setState('expandInit', true);
}

function handleCollapse() {
    this.setState('expanded', false);
    emitAndFire(this, 'tooltip-collapse');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    handleCollapse
});
