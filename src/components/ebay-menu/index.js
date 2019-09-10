const assign = require('core-js-pure/features/object/assign');
const indexOf = require('core-js-pure/features/array/index-of');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
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
    onRender({ firstRender }) {
        this.contentEl = this.getEl('menu');

        if (firstRender) {
            this.tabindexPosition = 0;
        }

        if (this.state.type !== 'fake') {
            this.rovingTabindex = rovingTabindex.createLinear(this.contentEl, 'div', {
                index: this.tabindexPosition, autoReset: null
            });

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
        if (this.state.type !== 'fake') {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
    },
    toggleItemChecked(itemEl) {
        const itemIndex = indexOf(itemEl.parentNode.children, itemEl);
        const item = this.state.items[itemIndex];
        const currentIndex = this.state.items.findIndex(radioItem => radioItem.checked);

        if (this.state.type === 'radio' && itemIndex !== currentIndex) {
            this.state.items.forEach((eachItem, i) => {
                eachItem.checked = i === itemIndex;
            });

            this.setStateDirty('items');
            this.emitComponentEvent({
                eventType: 'change',
                el: itemEl
            });
        } else if (this.state.type !== 'radio') {
            item.checked = !item.checked;
            this.setStateDirty('items');
            this.emitComponentEvent({
                eventType: this.state.type === 'fake' || !this.state.type ? 'select' : 'change',
                el: itemEl
            });
        }

        if (this.rovingTabindex) {
            this.tabindexPosition = findIndex(this.rovingTabindex.filteredItems, el => el.tabIndex === 0);
        }
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
            this.emitComponentEvent({ eventType: 'keydown', originalEvent: e });
        });

        eventUtils.handleActionKeydown(e, () => this.toggleItemChecked(itemEl));
    },
    handleItemKeypress({ key }) {
        const itemIndex = NodeListUtils.findNodeWithFirstChar(this.getEls('item'), key);

        if (itemIndex !== -1) {
            this.tabindexPosition = this.rovingTabindex.index = itemIndex;
        }
    },
    emitComponentEvent({ eventType, el, originalEvent }) {
        this.emit(`menu-${eventType}`, {
            el,
            checked: this.getCheckedValues(),
            originalEvent
        });
    }
});
