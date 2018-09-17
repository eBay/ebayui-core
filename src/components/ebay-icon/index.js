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
    }
}

function getTemplateData(state, input, out) {
    const type = input.type || 'background';
    const isBackground = type === 'background';
    const isInline = type === 'inline';
    const a11yText = input.a11yText;
    const name = input.name;
    let titleId;
    let a11yAttributes;
    let renderDefs;

    if (isInline) {
        // Here we check if we should render the inline svg symbol.
        // Server side we store a flag in `out` to check if the symbol was rendered.
        // Client side we check the `defined` object to see if the symbol is already present in root svg.
        const lookupName = `rendered_ebay_icon_${name}`;
        renderDefs = !out[lookupName] && !defined[name];
        out[lookupName] = true;

        if (a11yText) {
            titleId = `icon-title-${Math.random().toString(36).substr(2, 9)}`;
            a11yAttributes = { 'aria-labelled-by': titleId, role: 'img' };
        } else {
            a11yAttributes = { 'aria-hidden': 'true' };
        }
    }

    return {
        htmlAttributes: processHtmlAttributes(input),
        classes: input.noSkinClasses ? [input.class] : ['icon', `icon--${name}`, input.class],
        themes: input._themes,
        style: input.style,
        name,
        type,
        renderDefs,
        isBackground,
        isInline,
        a11yText,
        a11yAttributes,
        titleId
    };
}

module.exports = markoWidgets.defineComponent({
    init,
    template,
    getTemplateData
});
