const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');
const menuUtils = require('../../common/menu-utils');
const NodeListUtils = require('../../common/nodelist-utils');

module.exports = assign({}, menuUtils, {

    toggleItemChecked(index, originalEvent, itemEl) {
        // This needs to be at start since toggleChecked swaps the checkedIndex
        // and then the right events will not fire correctly
        const shouldEmitRadio = this.isRadio() && index !== this.state.checkedIndex;
        this.toggleChecked(index);

        if (shouldEmitRadio) {
            this.emitComponentEvent({
                index,
                eventType: 'change',
                el: itemEl,
                originalEvent
            });
        } else if (this.type !== 'radio') {
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

    handleItemClick(index, originalEvent, itemEl) {
        this.toggleItemChecked(index, originalEvent, itemEl);
    },

    handleItemKeydown(index, originalEvent, itemEl) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({ eventType: 'keydown', originalEvent, index });
        });

        eventUtils.handleActionKeydown(originalEvent, () => this.toggleItemChecked(index, originalEvent, itemEl));
    },

    handleItemKeypress({ key }) {
        const itemIndex = NodeListUtils.findNodeWithFirstChar(this.getEl('menu').children, key);

        if (itemIndex !== -1) {
            this.tabindexPosition = this.rovingTabindex.index = itemIndex;
        }
    },

    emitComponentEvent({ eventType, el, originalEvent, index }) {
        const checkedIndexes = this.getCheckedIndexes();
        const isCheckbox = this.type === 'checkbox';

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
        } else if (isCheckbox || this.isRadio()) {
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
        this.state = this.getInputState(input);
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    },

    onMount() {
        this.tabindexPosition = 0;
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _setupMakeup() {
        this.contentEl = this.getEl('menu');

        if (this.type !== 'fake') {
            this.rovingTabindex = rovingTabindex.createLinear(this.contentEl, 'div', {
                index: this.tabindexPosition, autoReset: null
            });

            scrollKeyPreventer.add(this.contentEl);
        }
    },

    _cleanupMakeup() {
        if (this.type !== 'fake' && this.rovingTabindex) {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
    }
});
