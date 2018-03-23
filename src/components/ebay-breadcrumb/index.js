const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

const constants = {
    'currentTag': 'span',
    'anchorTag': 'a',
    'ariaCurrentLabel': 'aria-current',
    'ariaCurrentValue': 'page',
    'classAttr': 'class',
    'classAttrValue': 'current',
    'hrefAttr': 'href',
    'navSrcAttr': 'navsrc',
    '_spAttr': '_sp'
};
function getTemplateData(state, input) {
    const htmlAttributes = processHtmlAttributes(input);
    let items = (input.items || []).map((item) => {
        const itemHtmlAttributes = processHtmlAttributes(item);
        let tag = constants.anchorTag;
        const href = item.href || '';
        const current = Boolean(item.current);
        const navSrc = item.navSrc || '';
        const _sp = item._sp || '';
        if (!current && !href) {
            return null;
        }
        if (current) {
            tag = constants.currentTag;
            itemHtmlAttributes[constants.classAttr] = constants.classAttrValue;
            itemHtmlAttributes[constants.ariaCurrentLabel] = constants.ariaCurrentValue;
        } else {
            itemHtmlAttributes[constants.hrefAttr] = href;
            if (navSrc) {
                itemHtmlAttributes[constants.navSrcAttr] = navSrc;
            }
            if (_sp) {
                itemHtmlAttributes[constants._spAttr] = _sp;
            }
        }
        return {
            tag: tag,
            htmlAttributes: itemHtmlAttributes,
            renderBody: item.renderBody
        };
    });
    items = Object.keys(items).length > 0 ? items : null;
    return {
        items: items,
        ariaLabel: input.ariaLabel || '',
        htmlAttributes: htmlAttributes
    };
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData
});
