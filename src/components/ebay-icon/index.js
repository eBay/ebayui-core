const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');
const defined = {};
let rootSvg;

function init() {
    if (!rootSvg) {
        rootSvg = document.createElement('svg');
        rootSvg.hidden = true;
        document.body.insertBefore(rootSvg, document.body.firstChild);
    }

    const defs = this.bodyEl;

    if (defs) {
        const symbol = defs.firstChild;
        defined[symbol.id.slice(5)] = true;
        rootSvg.appendChild(symbol);
        defs.parentNode.removeChild(defs);
    }
}

function getTemplateData(state, input, out) {
    const type = input.type || 'background';
    const isBackground = type === 'background';
    const isInline = type === 'inline';
    const accessibilityText = input.accessibilityText;
    const name = input.name;
    let titleId;
    let accessibilityAttributes;
    let renderDefs;

    if (isInline) {
        const lookupName = `rendered_ebay_icon_${name}`;
        renderDefs = !out[lookupName] && !defined[name];
        out[lookupName] = true;

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
        renderDefs,
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
    init,
    template,
    getTemplateData
});
