const attributeTranformer = require('../attribute-tags/index');

/**
 * @param {Object} el
 * @param {Object} context
 */
function transform(el, context) {
    el.setTagName(el.tagName.replace(/^(.*)-separator$/, '$1-item'));
    el.setAttributeValue('isSeparator', context.builder.literalTrue());
    attributeTranformer(el, context);
}

module.exports = transform;
