const assign = require('core-js-pure/features/object/assign');
const indexOf = require('core-js-pure/features/array/index-of');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');
const NodeListUtils = require('../../common/nodelist-utils');

module.exports = {
    _handleDestroy() {
        if (this.state.type !== 'fake' && this.rovingTabindex) {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
    },

    toggleItemChecked(originalEvent, itemEl) {
        const itemIndex = indexOf(itemEl.parentNode.children, itemEl);
        const item = this.state.items[itemIndex];
        const currentIndex = this.state.items.findIndex(radioItem => radioItem.checked);

        if (this.state.type === 'radio' && itemIndex !== currentIndex) {
            this.state.items.forEach((eachItem, i) => {
                eachItem.checked = (i === itemIndex);
            });

            this.setStateDirty('items');
            this.emitComponentEvent({
                eventType: 'change',
                el: itemEl,
                originalEvent
            });
        } else if (this.state.type !== 'radio') {
            item.checked = !item.checked;
            this.setStateDirty('items');
            this.emitComponentEvent({
                eventType: this.state.type === 'fake' || !this.state.type ? 'select' : 'change',
                el: itemEl,
                originalEvent
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

    getCheckedIndexes() {
        return this.state.items
            .map((item, i) => item.checked && i)
            .filter(item => item !== false && typeof item !== 'undefined');
    },

    handleItemClick(originalEvent, itemEl) {
        this.toggleItemChecked(originalEvent, itemEl);
    },

    handleItemKeydown(originalEvent, itemEl) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({ eventType: 'keydown', originalEvent });
        });

        eventUtils.handleActionKeydown(originalEvent, () => this.toggleItemChecked(originalEvent, itemEl));
    },

    handleItemKeypress({ key }) {
        const itemIndex = NodeListUtils.findNodeWithFirstChar(this.getEl('menu').children, key);

        if (itemIndex !== -1) {
            this.tabindexPosition = this.rovingTabindex.index = itemIndex;
        }
    },

    emitComponentEvent({ eventType, el, originalEvent }) {
        const checkedIndexes = this.getCheckedIndexes();
        const itemIndex = el && indexOf(el.parentNode.children, el);
        const isCheckbox = this.state.type === 'checkbox';
        const isRadio = this.state.type === 'radio';

        const eventObj = {
            el,
            originalEvent
        };

        if (isCheckbox && checkedIndexes.length > 1) {
            assign(eventObj, {
                indexes: this.getCheckedIndexes(), // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues() // DEPRECATED in v5
            });
        } else if (isCheckbox || isRadio) {
            assign(eventObj, {
                index: itemIndex, // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues() // DEPRECATED in v5
            });
        } else {
            assign(eventObj, {
                index: itemIndex, // DEPRECATED in v5
                checked: [itemIndex] // DEPRECATED in v5 (keep but change from indexes to values)
            });
        }

        this.emit(`menu-${eventType}`, eventObj);
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
    }
};
