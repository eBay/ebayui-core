let rootSvg;

module.exports = require('marko-widgets').defineWidget({
    init() {
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
                rootSvg.appendChild(symbol);
            }
        }
    }
});
