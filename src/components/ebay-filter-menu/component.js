const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');

module.exports = {
    _handleDestroy() {
        if (this.state.variant !== 'form' && this.rovingTabindex) {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
    },

    toggleItemChecked(index, itemEl) {
        const item = this.state.items[index];
        item.checked = !item.checked;
        this.setStateDirty('items');
        this.emitComponentEvent('change', itemEl);
        if (this.rovingTabIndex) {
            this.tabindexPosition = findIndex(this.rovingTabindex.filteredItems, el => el.tabIndex === 0);
        }
    },

    getCheckedValues() {
        return this.state.items
            .filter(item => item.checked)
            .map(item => item.value);
    },

    handleItemClick(index, e, itemEl) {
        this.toggleItemChecked(index, itemEl);
    },

    handleItemKeydown(index, e, itemEl) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.emitComponentEvent('keydown', null, e);
        });

        if (this.state.variant !== 'form') {
            eventUtils.handleActionKeydown(e, () => this.toggleItemChecked(index, itemEl));
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
    },

    onInput(input) {
        this.state = assign({}, input, {
            items: (input.items || []).map(item => assign({}, item))
        });
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._handleDestroy();
        }
    },

    onMount() {
        this.onRenderLegacy({
            firstRender: true
        });
    },

    onUpdate() {
        this.onRenderLegacy({
            firstRender: false
        });
    },

    onDestroy() {
        this._handleDestroy();
    },

    onRenderLegacy({ firstRender }) {
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
    }
};
