const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');
const defined = {};
let rootSvg;

function init() {
    // Create a hidden svg to store all symbols on startup.
    if (!rootSvg) {
        rootSvg = document.createElement('svg');
        rootSvg.hidden = true;
        document.body.insertBefore(rootSvg, document.body.firstChild);
    }

    // If there were any symbols rendered then we move them to the svg above after rendering them.
    const defs = this.getEl('defs');
    const symbol = defs && defs.querySelector('symbol');

    if (symbol) {
        // Here we get the name of the symbol by removing the `icon-` part.
        // We then mark this symbol as `defined` so that no other `ebay-icons` render it.
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
        // Here we check if we should render the inline svg symbol.
        // Server side we store a flag in `out` to check if the symbol was rendered.
        // Client side we check the `defined` object to see if the symbol is already present in root svg.
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
        classes: input.noSkinClasses ? [input.class] : ['icon', `icon--${name}`, input.class]
    };
}

module.exports = markoWidgets.defineComponent({
    init,
    template,
    getTemplateData
});
