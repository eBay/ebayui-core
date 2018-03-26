const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

const constants = {
    'currentTag': 'span',
    'anchorTag': 'a',
    'ariaCurrentLabel': 'aria-current',
    'ariaCurrentValue': 'page',
    'classAttr': 'class',
    'classAttrValue': 'current',
    'hrefAttr': 'href'
};
function getTemplateData(state, input) {
    const htmlAttributes = processHtmlAttributes(input);
    const items = input.items || [];
    let transformedItems = (items).map((item, index) => {
        const itemHtmlAttributes = processHtmlAttributes(item);
        let tag = constants.anchorTag;
        const href = item.href || '';
        const current = ((items.length - 1) === index);
        if (!current && !href) {
            return null;
        }
        if (current && !href) {
            tag = constants.currentTag;
            itemHtmlAttributes[constants.classAttr] = constants.classAttrValue;
            itemHtmlAttributes[constants.ariaCurrentLabel] = constants.ariaCurrentValue;
        } else {
            itemHtmlAttributes[constants.hrefAttr] = href;
        }
        return {
            tag: tag,
            htmlAttributes: itemHtmlAttributes,
            renderBody: item.renderBody
        };
    });
    transformedItems = Object.keys(transformedItems).length > 0 ? transformedItems : null;
    return {
        items: transformedItems,
        ariaLabel: input.ariaLabel || '',
        htmlAttributes: htmlAttributes,
        preventDefault: input.preventDefault
    };
}
function handleClick() {
    emitAndFire(this, 'breadcrumb-click');
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData,
    handleClick: handleClick
});
