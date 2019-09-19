const assign = require('core-js-pure/features/object/assign');
const indexOf = require('core-js-pure/features/array/index-of');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return assign({}, input, {
            items: (input.items || []).map(item => assign({}, item))
        });
    },
    onRender({ firstRender }) {
        this.contentEl = this.getEl('content') || this.el;

        if (firstRender) {
            this.tabindexPosition = 0;
        }

        if (this.state.variant !== 'form') {
            this.rovingTabindex = rovingTabindex.createLinear(
                this.getEl('menu'), 'div',
                { index: this.tabindexPosition, autoReset: null }
            );

            scrollKeyPreventer.add(this.contentEl);
        }
    },
    onBeforeUpdate() {
        this._handleDestroy();
    },
    onDestroy() {
        this._handleDestroy();
    },
    _handleDestroy() {
        if (this.state.variant !== 'form') {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
    },
    toggleItemChecked(itemEl) {
        const itemIndex = indexOf(itemEl.parentNode.children, itemEl);
        const item = this.state.items[itemIndex];
        item.checked = !item.checked;
        this.setStateDirty('items');
        this.emitComponentEvent('change', itemEl);
        this.tabindexPosition = findIndex(this.rovingTabindex.filteredItems, el => el.tabIndex === 0);
    },
    getCheckedValues() {
        return this.state.items
            .filter(item => item.checked)
            .map(item => item.value);
    },
    handleItemClick(e, itemEl) {
        this.toggleItemChecked(itemEl);
    },
    handleItemKeydown(e, itemEl) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.emitComponentEvent('keydown', null, e);
        });

        if (this.state.variant !== 'form') {
            eventUtils.handleActionKeydown(e, () => this.toggleItemChecked(itemEl));
        }
    },
    handleFooterButtonClick(originalEvent) {
        this.emitComponentEvent('footer-click', null, originalEvent);
    },
    handleFormSubmit(originalEvent) {
        this.emitComponentEvent('form-submit', null, originalEvent);
    },
    emitComponentEvent(eventType, itemEl, originalEvent) {
        this.emit(`filter-menu-${eventType}`, {
            el: itemEl,
            checked: this.getCheckedValues(),
            originalEvent
        });
    }
});
