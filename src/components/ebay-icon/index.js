const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const type = input.type || 'background';
    const isBackground = type === 'background';
    const isInline = type === 'inline';
    const accessibilityText = input.accessibilityText;
    const name = input.name;
    let titleId;
    let accessibilityAttributes;

    if (isInline) {
        if (accessibilityText) {
            titleId = `icon-title-${Math.random().toString(36).substr(2, 9)}`;
            accessibilityAttributes = { 'aria-labelled-by': titleId, role: 'img' };
        } else {
            accessibilityAttributes = { 'aria-hidden': 'true' };
        }
    }

    return {
        name,
        type,
        isBackground,
        isInline,
        accessibilityText,
        accessibilityAttributes,
        titleId,
        htmlAttributes: processHtmlAttributes(input),
        classes: ['icon', `icon--${name}`, input.class]
    };
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData
});
