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
    // Ensure this transform is only ran once per file.
    const alreadyTransformed = context._ebayUIAttributeTransformed;
    context._ebayUIAttributeTransformed = true;

    if (alreadyTransformed) {
        return;
    }

    // Only runs on top level ebay ui templates (skips demos).
    const isEbayUIComponentFile = COMPONENT_FILES.indexOf(context.filename) !== -1;
    if (!isEbayUIComponentFile) {
        return;
    }

    // Find all elements with `w-bind` and add the data-ebayui attribute.
    let wasTransformed = false;
    const walker = context.createWalker({
        enter(node) {
            if (node.type === 'HtmlElement' && node.hasAttribute('w-bind')) {
                wasTransformed = true;
                node.setAttributeValue('data-ebayui', context.builder.literal(true));
            }
        }
    });

    walker.walk(context.root);

    if (!wasTransformed) {
        throw new Error(`w-bind is required to add the data-ebayui attribute, none found in "${context.filename}".`);
    }
}

module.exports = transform;
