const fs = require('fs');
const path = require('path');
const COMPONENT_DIR = path.join(__dirname, '../../../components');
const COMPONENT_FILES = fs
    .readdirSync(COMPONENT_DIR)
    .map(entry => path.join(COMPONENT_DIR, entry, 'template.marko'));

/**
 * Transform to add the `data-ebayui` attribute to top level elements for all components.
 *
 * @param {Object} el
 * @param {Object} context
 */
function transform(el, context) {
    // Only runs on top level ebay ui templates (skips demos).
    const isEbayUIComponentFile = COMPONENT_FILES.indexOf(context.filename) !== -1;

    if (isEbayUIComponentFile) {
        context.root.forEachChild(child => {
            if (child.type === 'HtmlElement' && child.hasAttribute('w-bind')) {
                child.setAttributeValue('data-ebayui', context.builder.literal(true));
            }
        });
    }
}

module.exports = transform;
