/**
 * @description
 * Migrates each notice to different types
 */

// Types of buttons that if they are direct children of root will be wrapped in footer
const buttonTypes = ['ebay-button', 'ebay-menu-button'];

function setAttribute(el, oldName, newName) {
    if (el.hasAttribute(oldName)) {
        const attribute = el.getAttribute(oldName);
        attribute.name = newName;
    }
}

function migrator(el, context) {
    const type = el.hasAttribute('type') && el.getAttributeValue('type').value;

    if (type === 'inline') {
        context.deprecate('<ebay-notice type="inline"/> has been renamed to <ebay-inline-notice>');
        el.setTagName('ebay-inline-notice');
    } else if (type === 'section') {
        context.deprecate('<ebay-notice type="section"/> has been renamed to <ebay-section-notice>');
        el.setTagName('ebay-section-notice');
    } else if (type === 'window') {
        context.deprecate('<ebay-notice type="window"/> has been renamed to <ebay-window-notice>');
        el.setTagName('ebay-window-notice');
    } else {
        // Default is page notice
        context.deprecate('<ebay-notice/> has been renamed to <ebay-page-notice>');
        el.setTagName('ebay-page-notice');
    }

    setAttribute(el, 'a11y-heading-text', 'attyText');
    const walker = context.createWalker({
        enter(node) {
            if (node.tagName === 'ebay-notice-content') {
                context.deprecate(
                    'ebay-notice-content is no longer supported. Add content in render body'
                );

                node.forEachChild((child) => {
                    node.insertSiblingBefore(child);
                });
                node.detach();
            } else if (buttonTypes.indexOf(node.tagName) > -1 && node.parentNode === el) {
                // Wrap with footer

                node.detach();
                const footerTag = context.createNodeForEl('@footer');
                footerTag.appendChild(node);
                el.appendChild(footerTag);
            }
        }
    });
    walker.walk(el);
}

module.exports = migrator;
