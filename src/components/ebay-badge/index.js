const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    return {
        htmlAttributes: processHtmlAttributes(input),
        class: [`badge`, input.class],
        style: input.style,
        type: input.type,
        number: Number(input.number) || 0,
        a11yText: input.a11yText || ''
    };
}
function getTemplateData(state) {
    if (state.number > 99) {
        state.displayText = '99+';
    } else {
        state.displayText = state.number;
    }

    return state;
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData
});
