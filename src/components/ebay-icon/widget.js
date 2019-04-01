const markoWidgets = require('marko-widgets');
const defined = window.$ebayIcons = window.$ebayIcons || {};
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

    if (defs) {
        const symbol = defs.querySelector('symbol');
        defs.parentNode.removeChild(defs);

        if (symbol) {
            // Here we get the name of the symbol by removing the `icon-` part.
            // We then mark this symbol as `defined` so that no other `ebay-icons` render it.
            defined[symbol.id.slice(5)] = true;
            rootSvg.appendChild(symbol);
        }
    }
}

module.exports = markoWidgets.defineWidget({
    init
});
