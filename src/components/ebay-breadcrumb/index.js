const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const eventUtils = require('../../common/event-utils');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const inputItems = input.items || [];
    const hijax = input.hijax || false;
    let items = (inputItems).map((item, index) => {
        const itemHtmlAttributes = processHtmlAttributes(item);
        let tag = 'a';
        let ariaCurrent = null;
        let role;
        const href = item.href || null;
        const current = ((inputItems.length - 1) === index);
        if (current && !href) {
            tag = 'span';
            ariaCurrent = 'page';
        }
        if (hijax) {
            role = 'button';
        }
        return {
            tag,
            role,
            htmlAttributes: itemHtmlAttributes,
            renderBody: item.renderBody,
            href,
            ariaCurrent
        };
    });
    items = Object.keys(items).length > 0 ? items : null;
    return {
        items,
        hijax,
        classes: ['breadcrumb', input.class],
        headingText: input.headingText || '',
        headingLevel: input.headingLevel || 'h2',
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getInitialState({ hijax }) {
    return { hijax };
}

function handleClick(originalEvent) {
    eventUtils.preventDefaultIfHijax(originalEvent, this.state.hijax);
    emitAndFire(this, 'breadcrumb-select', { originalEvent, el: originalEvent.target });
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData,
    getInitialState,
    handleClick
});
