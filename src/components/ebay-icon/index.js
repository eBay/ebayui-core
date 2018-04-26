const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const name = input.name;

    return {
        name,
        type: input.type || 'background',
        htmlAttributes: processHtmlAttributes(input),
        classes: ['icon', `icon--${name}`, input.class]
    };
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData
});
