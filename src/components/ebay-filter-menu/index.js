const assign = require('core-js-pure/features/object/assign');
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
    onRender() {
        this.contentEl = this.el.querySelector('.filter-menu__menu, .filter-menu-button__menu');

        if (this.state.withButton) {
            this.contentEl = this.el;
        }

        if (this.state.variant !== 'form') {
            this.rovingTabindex = rovingTabindex.createLinear(
                this.contentEl.querySelector('[role="menu"]'), 'div',
                { index: 0, autoReset: null }
            );

            scrollKeyPreventer.add(this.contentEl);
        }
    },
    onBeforeUpdate() {
        this.rovingTabindex.destroy();
        scrollKeyPreventer.remove(this.contentEl);
    },
    onDestroy() {
        this.rovingTabindex.destroy();
        scrollKeyPreventer.remove(this.contentEl);
    },
    setCheckedItem(itemIndex, itemEl) {
        const item = this.state.items[itemIndex];

        if (item) {
            this.state.items[itemIndex].checked = !item.checked;
            this.setStateDirty('items');
            this.emitComponentEvent('change', itemEl);
        }
    },
    getCheckedItems() {
        return this.state.items
            .filter(item => item.checked)
            .map(item => item.value);
    },
    handleItemClick(e, itemEl) {
        this.setCheckedItem(this.getItemElementIndex(itemEl), itemEl);
    },
    handleItemKeydown(e, itemEl) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.emitComponentEvent('keydown', null, e);
        });

        if (this.state.variant !== 'form') {
            eventUtils.handleActionKeydown(e, () => {
                this.setCheckedItem(this.getItemElementIndex(itemEl), itemEl);
            });
        }
    },
    handleFooterButtonClick(originalEvent) {
        this.emitComponentEvent('footer-click', null, originalEvent);
    },
    handleFormSubmit(originalEvent) {
        this.emitComponentEvent('form-submit', null, originalEvent);
    },
    getItemElementIndex(itemEl) {
        return Array.prototype.slice.call(itemEl.parentNode.children).indexOf(itemEl);
    },
    emitComponentEvent(eventType, itemEl, originalEvent) {
        this.emit(`filter-menu-${eventType}`, {
            el: itemEl,
            checked: this.getCheckedItems(),
            originalEvent
        });
    }
});
