const headerRegExp = /^h[1-6]$/;

/**
 * @description
 * Changes @heading content if wrapped with <h[1-6]> to be unrapped
 */

function migrator(el, context) {
    const walker = context.createWalker({
        enter(node) {
            if (node.tagName === '@header') {
                // Iterate only once in caes there are multiple tags
                let foundH2 = false;
                node.forEachChild((child) => {
                    const tag = child.tagName;
                    if (!foundH2 && headerRegExp.test(tag)) {
                        foundH2 = true;
                        const isDefault = tag === 'h2';
                        const message = isDefault ? `<@header>` : `<@header as="${tag}">`;

                        context.deprecate(
                            `${tag} is no longer needed in dialog @header. Use ${message}Title</@header> instead`);

                        node.argument = child.argument;
                        node.params = child.params;
                        child.forEachAttribute((attr) => {
                            node.setAttributeValue(attr.name, attr.value);
                        });

                        if (!isDefault) {
                            node.setAttributeValue('as', context.builder.literal(tag));
                        }
                        child.forEachChild(currentNode => child.insertSiblingBefore(currentNode));
                        child.detach();
                    }
                });
            }
        }
    });
    walker.walk(el);
}

module.exports = migrator;
