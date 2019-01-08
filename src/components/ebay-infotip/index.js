const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    return Object.assign({}, input, {
        location: input.location || 'bottom',
        htmlAttributes: processHtmlAttributes(input),
        hostSelector: '.infotip__host',
        overlaySelector: '.infotip__overlay',
        iconTag: input.iconTag && input.iconTag.renderBody,
        expanded: false,
        expandInit: false
    });
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
    handleExpand,
    handleCollapse,
    infotipCloseButton
});
