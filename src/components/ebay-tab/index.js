const markoWidgets = require('marko-widgets');
const rovingTabindex = require('makeup-roving-tabindex');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

function getInitialState(input) {
    // TODO: enforce max of one initial selected item
    // TODO: select first item if none selected
    const items = (input.items || []).map(item => ({
        renderBody: item.renderBody,
        selected: Boolean(item.selected),
        classes: [item.class, 'tabs__item'],
        htmlAttributes: processHtmlAttributes(item)
    }));
    const panels = (input.panels || []).map((panel, i) => ({
        renderBody: panel.renderBody,
        hidden: items[i] && !items[i].selected, // FIXME: ensure this is present
        classes: [panel.class, 'tabs__panel'],
        htmlAttributes: processHtmlAttributes(panel)
    }));

    return {
        items,
        panels,
        classes: [input.class, 'tabs'],
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.itemsEl = this.getEl('items');
    rovingTabindex.createLinear(this.itemsEl, 'div', { index: 0, autoReset: 0 });
    const selectedObserverCallback = (itemEl) => {
        this.processAfterStateChange(getItemElementIndex(itemEl));
    };
    this.itemsEl.querySelectorAll('.tabs__item').forEach((itemEl, i) => {
        observer.observeInner(this, itemEl, 'selected', `items[${i}]`, 'items', selectedObserverCallback);
    });
}

function processAfterStateChange(itemIndex) {
    // TODO: select first item if none selected
    if (itemIndex !== -1 && itemIndex !== this.getSelectedIndex()) {
        this.setSelectedIndex(itemIndex);
        emitAndFire(this, 'tab-select', { index: itemIndex });
    }
}

function setSelectedIndex(index) {
    this.state.items.forEach((item, i) => { item.selected = index === i; });
    this.state.panels.forEach((panel, i) => { panel.hidden = index !== i; });
    this.setStateDirty('items');
    this.setStateDirty('panels');
}

/**
 * Handle mouse click on item
 * @param {MouseEvent} e
 */
function handleItemClick(e) {
    let itemEl = e.target;
    while (!itemEl.classList.contains('tabs__item')) {
        itemEl = itemEl.parentNode;
    }

    this.processAfterStateChange(getItemElementIndex(itemEl));
}

function getItemElementIndex(itemEl) {
    return Array.prototype.slice.call(itemEl.parentNode.children).indexOf(itemEl);
}

// TODO: find/filter?
function getSelectedIndex() {
    let selectedIndex;
    this.state.items.some((item, i) => {
        if (item.selected) {
            selectedIndex = i;
            return true;
        }
    });
    return selectedIndex;
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
    getSelectedIndex,
    setSelectedIndex,
    handleItemClick,
    handleItemKeydown
});
