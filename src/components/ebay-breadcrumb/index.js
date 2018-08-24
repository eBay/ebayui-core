const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const inputItems = input.items || [];
    const items = inputItems.map((item, index) => {
        let ariaCurrent = null;
        const { href } = item;
        const current = (inputItems.length - 1 === index);
        let shouldHandleClick = true;
        if (current && !href) {
            ariaCurrent = 'location';
            shouldHandleClick = false;
        }

        return {
            htmlAttributes: processHtmlAttributes(item),
            class: item.class,
            style: item.style,
            renderBody: item.renderBody,
            href,
            ariaCurrent,
            shouldHandleClick
        };
    });
    return {
        htmlAttributes: processHtmlAttributes(input),
        classes: ['breadcrumb', input.class],
        style: input.style,
        items,
        a11yHeadingText: input.a11yHeadingText || '',
        a11yHeadingTag: input.a11yHeadingTag || 'h2'
    };
}

function handleClick(originalEvent) {
    emitAndFire(this, 'breadcrumb-select', { originalEvent, el: originalEvent.target });
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData,
    handleClick
});
