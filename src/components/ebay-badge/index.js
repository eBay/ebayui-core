const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const number = Number(input.number);
    const imgRole = (input.type !== 'menu' && input.type !== 'icon');
    const showBadge = !isNaN(number);

    return {
        showBadge,
        htmlAttributes: processHtmlAttributes(input),
        class: [`badge`, input.class],
        style: input.style,
        imgRole,
        number
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
