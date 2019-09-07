const assign = require('core-js-pure/features/object/assign');
const indexOf = require('core-js-pure/features/array/index-of');
const Expander = require('makeup-expander');
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
        this.expander = new Expander(this.el, {
            hostSelector: '.filter-menu-button__button',
            contentSelector: '.filter-menu-button__menu',
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true
        });
    },
    onBeforeUpdate() {
        this.expander.cancelAsync();
    },
    onDestroy() {
        this.expander.cancelAsync();
    },
    toggleItemChecked(itemEl) {
        const index = indexOf(itemEl.parentNode.children, itemEl);
        const item = this.state.items[index];
        item.checked = !item.checked;
        this.setStateDirty('items');
        this.emitComponentEvent('change', itemEl);
    },
    getCheckedValues() {
        return this.state.items
            .filter(item => item.checked)
            .map(item => item.value);
    },
    handleMenuKeydown({ originalEvent }) {
        eventUtils.handleEscapeKeydown(originalEvent, () => this.expander.collapse());
    },
    handleMenuChange({ el }) {
        this.toggleItemChecked(el);
    },
    handleItemKeydown({ el, originalEvent }) {
        eventUtils.handleActionKeydown(originalEvent, () => this.toggleItemChecked(el));
    },
    handleFooterButtonClick() {
        this.emitComponentEvent('footer-click');
        this.expander.collapse();
    },
    handleFormSubmit({ originalEvent }) {
        this.emitComponentEvent('form-submit', originalEvent);
    },
    handleExpand({ originalEvent }) {
        this.emitComponentEvent('expand', null, originalEvent);
    },
    handleCollapse({ originalEvent }) {
        this.emitComponentEvent('collapse', null, originalEvent);
    },
    emitComponentEvent(eventType, itemEl, originalEvent) {
        switch (eventType) {
            case 'expand':
                this.emit(`filter-menu-button-${eventType}`);
                break;
            case 'form-submit':
            case 'collapse':
                this.emit(`filter-menu-button-${eventType}`, {
                    checked: this.getCheckedValues(),
                    originalEvent
                });
                break;
            case 'change':
            case 'footer-click':
            default:
                this.emit(`filter-menu-button-${eventType}`, {
                    el: itemEl,
                    checked: this.getCheckedValues(),
                    originalEvent
                });
                break;
        }
    }
});
