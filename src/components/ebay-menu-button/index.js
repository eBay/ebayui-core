const Expander = require('makeup-expander');
const assign = require('core-js-pure/features/object/assign');
const indexOf = require('core-js-pure/features/array/index-of');
const eventUtils = require('../../common/event-utils');
const NodeListUtils = require('../../common/nodelist-utils');
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
            hostSelector: '.expand-btn',
            contentSelector: '.menu-button__menu, .fake-menu-button__menu',
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true
        });
    },
    onBeforeUpdate() {
        this._handleDestroy();
    },
    onDestroy() {
        this._handleDestroy();
    },
    _handleDestroy() {
        this.expander.cancelAsync();
    },
    toggleItemChecked(itemEl) {
        const itemIndex = indexOf(itemEl.parentNode.children, itemEl);
        const item = this.state.items[itemIndex];

        if (this.state.type === 'radio') {
            this.state.items.forEach((eachItem, i) => {
                if (i !== itemIndex) {
                    eachItem.checked = false;
                }
            });
        }

        item.checked = !item.checked;
        this.setStateDirty('items');
        this.emitComponentEvent({
            eventType: this.state.type !== 'fake' ? 'select' : 'change',
            el: itemEl
        });
    },
    getCheckedValues() {
        return this.state.items
            .filter(item => item.checked)
            .map(item => item.value);
    },
    handleItemClick(e, itemEl) {
        this.toggleItemChecked(itemEl);
    },
    handleMenuKeydown(e, { detail }) {
        eventUtils.handleActionKeydown(e, () => {
            this.handleItemClick(e, detail.el);
        });

        eventUtils.handleEscapeKeydown(e, () => {
            this.buttonEl.focus();
            this.setState('expanded', false);
        });
    },
    handleItemKeypress(e) {
        const itemIndex = NodeListUtils.findNodeWithFirstChar(this.itemEls, e.key);

        if (itemIndex !== -1) {
            this.rovingTabindex.index = itemIndex;
        }
    },
    handleButtonEscape() {
        this.expander.collapse();
    },
    handleExpand() {
        this.emitComponentEvent({ eventType: 'expand' });
    },
    handleCollapse() {
        this.emitComponentEvent({ eventType: 'collapse' });
    },
    handleMenuChange({ el, originalEvent }) {
        this.emitComponentEvent({ eventType: 'change', el, originalEvent });
    },
    handleMenuSelect({ el, originalEvent }) {
        this.emitComponentEvent({ eventType: 'select', el, originalEvent });
    },
    emitComponentEvent({ eventType, el, originalEvent }) {
        this.emit(`menu-button-${eventType}`, {
            el,
            checked: this.getCheckedValues(),
            originalEvent
        });
    }
});
