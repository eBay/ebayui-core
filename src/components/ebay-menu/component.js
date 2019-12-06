const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');

module.exports = {
    _handleDestroy() {
        if (this.type !== 'fake' && this.rovingTabindex) {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
    },

    toggleItemChecked(index, originalEvent, itemEl) {
        const currentIndex = this.state.checkedItems.findIndex(checked => checked);

        if (this.type === 'radio' && index !== currentIndex) {
            this.setState('checkedItems', this.state.checkedItems.map((item, i) => i === index));
            this.emitComponentEvent({
                index,
                eventType: 'change',
                el: itemEl,
                originalEvent
            });
        } else if (this.type !== 'radio') {
            this.state.checkedItems[index] = !this.state.checkedItems[index];
            this.setStateDirty('checkedItems');
            this.emitComponentEvent({
                index,
                eventType: this.type === 'fake' || !this.type ? 'select' : 'change',
                el: itemEl,
                originalEvent
            });
        }

        if (this.rovingTabindex) {
            this.tabindexPosition = findIndex(this.rovingTabindex.filteredItems, el => el.tabIndex === 0);
        }
    },

    getCheckedValues() {
        return this.input.items
            .filter((item, index) => this.state.checkedItems[index])
            .map(item => item.value);
    },

    getCheckedIndexes() {
        return this.input.items
            .map((item, i) => this.state.checkedItems[i] && i)
            .filter(item => item !== false && typeof item !== 'undefined');
    },

    handleItemClick(index, originalEvent, itemEl) {
        this.toggleItemChecked(index, originalEvent, itemEl);
    },

    handleItemKeydown(index, originalEvent, itemEl) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({ eventType: 'keydown', originalEvent, index });
        });

        eventUtils.handleActionKeydown(originalEvent, () => this.toggleItemChecked(index, originalEvent, itemEl));
    },

    handleItemKeypress(index) {
        this.tabindexPosition = this.rovingTabindex.index = index;
    },

    emitComponentEvent({ eventType, el, originalEvent, index }) {
        const checkedIndexes = this.getCheckedIndexes();
        const isCheckbox = this.type === 'checkbox';
        const isRadio = this.type === 'radio';

        const eventObj = {
            el,
            originalEvent
        };

        if (isCheckbox && checkedIndexes.length > 1) {
            assign(eventObj, {
                index,
                indexes: this.getCheckedIndexes(), // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues() // DEPRECATED in v5
            });
        } else if (isCheckbox || isRadio) {
            assign(eventObj, {
                index, // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues() // DEPRECATED in v5
            });
        } else {
            assign(eventObj, {
                index, // DEPRECATED in v5
                checked: [index] // DEPRECATED in v5 (keep but change from indexes to values)
            });
        }

        this.emit(`menu-${eventType}`, eventObj);
    },

    onInput(input) {
        this.type = input.type;
        this.state = {
            checkedItems: (input.items || []).map(item => item.checked || false)

        };
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._handleDestroy();
        }
    },

    onMount() {
        this.tabindexPosition = 0;
        this.setContent();
    },

    onUpdate() {
        this.setContent();
    },

    setContent() {
        this.contentEl = this.getEl('menu');

        if (this.type !== 'fake') {
            this.rovingTabindex = rovingTabindex.createLinear(this.contentEl, 'div', {
                index: this.tabindexPosition, autoReset: null
            });

            scrollKeyPreventer.add(this.contentEl);
        }
    },

    onDestroy() {
        this._handleDestroy();
    }
};
