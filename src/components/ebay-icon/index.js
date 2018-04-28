const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const type = input.type || 'background';
    const isBackground = type === 'background';
    const isInline = type === 'inline';
    const name = input.name;

    // FIXME: hack to include * attributes, because they get mangled in the transformer
    if (isInline) {
        input['*'] = {};
        const nonHtmlAttributes = ['type', 'name', 'class', '*'];
        Object.keys(input).forEach(attributeKey => {
            if (!nonHtmlAttributes.includes(attributeKey)) {
                input['*'][attributeKey] = input[attributeKey];
                delete input[attributeKey];
            }
        });
    }

    return {
        name,
        type,
        isBackground,
        isInline,
        htmlAttributes: processHtmlAttributes(input),
        classes: ['icon', `icon--${name}`, input.class]
    };
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData
});
