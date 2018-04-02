const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const htmlAttributes = processHtmlAttributes(input);
    const inputItems = input.items || [];
    let items = (inputItems).map((item, index) => {
        const itemHtmlAttributes = processHtmlAttributes(item);
        let tag = 'a';
        let ariaCurrent = null;
        const href = item.href || null;
        const current = ((inputItems.length - 1) === index);
        if (current && !href) {
            tag = 'span';
            ariaCurrent = 'page';
        }
        return {
            tag,
            htmlAttributes: itemHtmlAttributes,
            renderBody: item.renderBody,
            href,
            ariaCurrent
        };
    });
    items = Object.keys(items).length > 0 ? items : null;
    return {
        items,
        headingText: input.headingText || '',
        headingLevel: input.headingLevel || 'h2',
        htmlAttributes: htmlAttributes
    };
}
function handleClick(event, el) {
    emitAndFire(this, 'breadcrumb-click', { event, target: event.target, currentTarget: el });
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData,
    handleClick
});
