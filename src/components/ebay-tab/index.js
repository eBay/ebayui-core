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
        classes: [panel.class, prefix(fake, 'tabs__panel')],
        htmlAttributes: processHtmlAttributes(panel)
    }));

    return {
        index,
        fake,
        items,
        panels,
        classes: [input.class, prefix(fake, 'tabs')],
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
    observer.observeRoot(this, ['index'], index => this.processStateChange(parseInt(index)), true);
}

/**
 * Common processing of index change via both UI and API
 * @param {Number} index
 */
function processStateChange(index) {
    if (index >= 0 && index < this.state.items.length && index !== this.state.index) {
        this.setState('index', index);
        emitAndFire(this, 'tab-select', { index });
    }
}

/**
 * Handle mouse click on item
 * @param {MouseEvent} e
 */
function handleItemClick(e) {
    let itemEl = e.target;
    const itemClass = prefix(this.state.fake, 'tabs__item');
    while (!itemEl.classList.contains(itemClass)) {
        itemEl = itemEl.parentNode;
    }

    this.processStateChange(getItemElementIndex(itemEl));
}

/**
 * Get 0-based index of element within its parent
 * @param {HTMLElement} itemEl
 */
function getItemElementIndex(itemEl) {
    return Array.prototype.slice.call(itemEl.parentNode.children).indexOf(itemEl);
}

/**
 * Handle accessibility for item
 * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
 * @param {KeyboardEvent} e
 */
function handleItemKeydown(e) {
    eventUtils.handleActionKeydown(e, () => this.handleItemClick(e));
}

/**
 * Helper to prefix a class based on fake status
 * @param {Boolean} fake
 * @param {String} c
 */
function prefix(fake, c) {
    return (fake ? 'fake-' : '') + c;
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    processStateChange,
    handleItemClick,
    handleItemKeydown
});
