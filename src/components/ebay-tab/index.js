const markoWidgets = require('marko-widgets');
const rovingTabindex = require('makeup-roving-tabindex');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    // TODO: enforce max of one selected item
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

    const itemIndex = getItemElementIndex(itemEl);
    if (itemIndex !== -1) {
        this.state.items.forEach((item, i) => { item.selected = itemIndex === i; });
        this.state.panels.forEach((panel, i) => { panel.hidden = itemIndex !== i; });
        this.setStateDirty('items');
        this.setStateDirty('panels');

        emitAndFire(this, 'tab-select'); // FIXME: dont emit event if already selected
    }
}

function getItemElementIndex(itemEl) {
    return Array.prototype.slice.call(itemEl.parentNode.children).indexOf(itemEl);
}

/**
 * Handle accessibility for item (is not handled by makeup)
 * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
 * @param {KeyboardEvent} e
 */
function handleItemKeydown(e) {
    eventUtils.handleActionKeydown(e, () => {
        this.handleItemClick(e);
    });

    eventUtils.handleEscapeKeydown(e, () => {
        this.buttonEl.focus();
        this.setState('expanded', false);
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    handleItemClick,
    handleItemKeydown
});
