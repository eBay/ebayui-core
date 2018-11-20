const emitAndFire = require('../../../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    return input;
}

function getTemplateData(state) {
    return state;
}

function handleCloseButton() {
    emitAndFire(this, 'tooltip-close');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleCloseButton
});
