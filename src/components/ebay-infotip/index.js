const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    return Object.assign({}, input, {
        location: input.location || 'bottom',
        htmlAttributes: processHtmlAttributes(input),
        hostSelector: '.infotip__host',
        overlaySelector: '.infotip__overlay',
        iconTag: input.iconTag && input.iconTag.renderBody
    });
}

function handleExpand() {
    emitAndFire(this, 'tooltip-expand');
}

function handleCollapse() {
    emitAndFire(this, 'tooltip-collapse');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    handleExpand,
    handleCollapse
});
