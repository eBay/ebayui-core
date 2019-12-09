const Expander = require('makeup-expander');
const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');
const eventUtils = require('../../common/event-utils');

module.exports = {
    _handleDestroy() {
        if (this.expander) {
            this.expander.cancelAsync();
        }
    },

    get isRadio() {
        return this.type === 'radio';
    },

    isChecked(index) {
        if (this.isRadio) {
            return index === this.state.checkedIndex;
        }
        return this.state.checkedItems[index];
    },

    toggleItemChecked(index, itemEl) {
        if (this.isRadio && index !== this.state.checkedIndex) {
            this.state.checkedIndex = index;
            this.emitComponentEvent({
                index,
                eventType: 'change',
                el: itemEl
            });
        } else if (this.type !== 'radio') {
            this.state.checkedItems[index] = !this.state.checkedItems[index];
            this.setStateDirty('checkedItems');
            this.emitComponentEvent({
                index,
                eventType: this.type === 'fake' || !this.type ? 'select' : 'change',
                el: itemEl
            });
        }

        if (this.rovingTabindex) {
            this.tabindexPosition = findIndex(this.rovingTabindex.filteredItems, el => el.tabIndex === 0);
        }
    },

    getCheckedValues() {
        if (this.isRadio) {
            const item = this.input.items[this.state.checkedIndex] || {};
            return [item.value];
        }
        return this.input.items
            .filter((item, index) => this.state.checkedItems[index])
            .map(item => item.value);
    },

    getCheckedIndexes() {
        if (this.isRadio) {
            return [this.state.checkedIndex];
        }
        return this.input.items
            .map((item, i) => this.state.checkedItems[i] && i)
            .filter(item => item !== false && typeof item !== 'undefined');
    },

    handleItemClick(index, e, itemEl) {
        this.toggleItemChecked(index, itemEl);
    },

    handleMenuKeydown({ el, originalEvent, index }) {
        eventUtils.handleActionKeydown(originalEvent, () => {
            this.handleItemClick(index, originalEvent, el);
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.collapse();
            this.getEl('button').focus();
        });
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

    handleMenuChange({ el, index }) {
        this.toggleItemChecked(index, el);
    },

    handleMenuSelect({ el, originalEvent, index }) {
        this.emitComponentEvent({ eventType: 'select', el, originalEvent, index });
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
                indexes: this.getCheckedIndexes(), // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues() // DEPRECATED in v5
            });
        } else if (isCheckbox || this.isRadio) {
            assign(eventObj, {
                index, // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues() // DEPRECATED in v5
            });
        } else if (eventType !== 'expand' && eventType !== 'collapse') {
            assign(eventObj, {
                index, // DEPRECATED in v5
                checked: [index] // DEPRECATED in v5 (keep but change from indexes to values)
            });
        }

        this.emit(`menu-button-${eventType}`, eventObj);
    },

    onInput(input) {
        this.type = input.type;
        if (this.isRadio) {
            this.state = {
                checkedIndex: (input.items || []).findIndex(item => item.checked || false)
            };
        } else {
            this.state = {
                checkedItems: (input.items || []).map(item => item.checked || false)
            };
        }
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._handleDestroy();
        }
    },

    onMount() {
        this.setExpander();
    },

    onUpdate() {
        this.setExpander();
    },

    onDestroy() {
        this._handleDestroy();
    },

    setExpander() {
        this.expander = new Expander(this.el, {
            hostSelector: '.menu-button__button, .fake-menu-button__button',
            contentSelector: '.menu-button__menu, .fake-menu-button__menu',
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true
        });
    }
};
