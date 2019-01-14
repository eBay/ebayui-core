const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    const noHover = !!input.noHover || false;

    return Object.assign({}, input, {
        pointer: input.pointer || 'bottom',
        htmlAttributes: processHtmlAttributes(input),
        hostSelector: '.tourtip__host',
        overlaySelector: '.tourtip__overlay',
        noHover
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
