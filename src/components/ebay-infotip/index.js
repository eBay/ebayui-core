const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    const iconTag = input.iconTag;

    input.location = input.location || 'bottom';
    input.htmlAttributes = processHtmlAttributes(input);
    input.hostSelector = '.infotip__host';
    input.overlaySelector = '.infotip__overlay';
    input.iconTag = iconTag && iconTag.renderBody;
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

function infotipCloseButton() {
    this.handleCollapse();
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleExpand,
    handleCollapse,
    infotipCloseButton
});
