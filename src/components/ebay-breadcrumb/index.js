const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const eventUtils = require('../../common/event-utils');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const inputItems = input.items || [];
    const hijax = input.hijax || false;
    const items = inputItems.map((item, index) => {
        let ariaCurrent = null;
        let role;
        const href = item.href || null;
        const current = (inputItems.length - 1 === index);
        let shouldHandleClick = true;
        if (current && !href) {
            ariaCurrent = 'location';
            shouldHandleClick = false;
        }
        if (hijax && href) {
            role = 'button';
        }
        return {
            htmlAttributes: processHtmlAttributes(item),
            class: item.class,
            style: item.style,
            renderBody: item.renderBody,
            role,
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
        hijax,
        a11yHeadingText: input.a11yHeadingText || '',
        a11yHeadingTag: input.a11yHeadingTag || 'h2'
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
