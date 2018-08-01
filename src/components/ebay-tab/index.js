const markoWidgets = require('marko-widgets');
const rovingTabindex = require('makeup-roving-tabindex');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

function getInitialState(input) {
    const fake = Boolean(input.fake);
    const index = parseInt(input.index) || 0;

    const items = (input.items || []).map(item => ({
        renderBody: item.renderBody,
        classes: fake ? item.class : [item.class, 'tabs__item'],
        href: item.href,
        htmlAttributes: processHtmlAttributes(item)
    }));
    const panels = (input.panels || []).map(panel => ({
        renderBody: panel.renderBody,
        classes: [panel.class, fake ? 'fake-tabs__panel' : 'tabs__panel'],
        htmlAttributes: processHtmlAttributes(panel)
    }));

    return {
        index,
        fake,
        items,
        panels,
        classes: [input.class, fake ? 'fake-tabs' : 'tabs'],
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.itemsEl = this.getEl('items');
    if (!this.state.fake) {
        rovingTabindex.createLinear(this.itemsEl, 'div', { index: 0, autoReset: 0 });
    }
    observer.observeRoot(this, ['index'], (itemIndex) => {
        this.processAfterStateChange(parseInt(itemIndex));
    }, true);
}

function processAfterStateChange(itemIndex) {
    if (itemIndex >= 0 && itemIndex < this.state.items.length && itemIndex !== this.state.index) {
        this.setState('index', itemIndex);
        emitAndFire(this, 'tab-select', { index: itemIndex });
    }
}

/**
 * Handle mouse click on item
 * @param {MouseEvent} e
 */
function handleItemClick(e) {
    let itemEl = e.target;
    while (!itemEl.classList.contains(this.state.fake ? 'fake-tabs__item' : 'tabs__item')) {
        itemEl = itemEl.parentNode;
    }

    this.processAfterStateChange(getItemElementIndex(itemEl));
}

function getItemElementIndex(itemEl) {
    return Array.prototype.slice.call(itemEl.parentNode.children).indexOf(itemEl);
}

/**
 * Handle accessibility for item
 * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
 * @param {KeyboardEvent} e
 */
function handleItemKeydown(e) {
    eventUtils.handleActionKeydown(e, () => {
        this.handleItemClick(e);
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    processAfterStateChange,
    handleItemClick,
    handleItemKeydown
});
