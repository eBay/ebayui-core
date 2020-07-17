const Expander = require('makeup-expander');
const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');
const eventUtils = require('../../common/event-utils');
const menuUtils = require('../../common/menu-utils');

module.exports = assign({}, menuUtils, {
    toggleItemChecked(index, itemEl) {
        // This needs to be at start since toggleChecked swaps the checkedIndex
        // and then the right events will not fire correctly
        const shouldEmitRadio = this.isRadio() && index !== this.state.checkedIndex;
        this.toggleChecked(index);

        if (shouldEmitRadio) {
            if (this.input.collapseOnSelect) {
                this.expander.collapse();
            }
            this.emitComponentEvent({
                index,
                eventType: 'change',
                el: itemEl
            });
        } else if (this.type !== 'radio') {
            if (this.input.collapseOnSelect) {
                this.expander.collapse();
            }
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

    handleItemClick(index, e, itemEl) {
        this.toggleItemChecked(index, itemEl);
    },

    handleMenuKeydown({ el, originalEvent, index }) {
        eventUtils.handleActionKeydown(originalEvent, () => {
            this.handleItemClick(index, originalEvent, el);
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.collapse();
            this.focus();
        });
    },

    focus() {
        this.getEl('button').focus();
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
    handleMousedown({ el, originalEvent }) {
        this.emitComponentEvent({ eventType: 'mousedown', el, originalEvent });
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
        } else if (isCheckbox || this.isRadio()) {
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
        this.state = this.getInputState(input);
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    },

    onMount() {
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _setupMakeup() {
        // In expander we set focusManagement to interactive for fake menu
        // This is related to setting the tabindex=-1 on menu-button div container for fake menu
        // In Safari and Firefox when clicking on a button/anchor focus is triggered on
        // the closest element with tabindex=-1 if there are any above it.
        // This would cause the menu to close before events are fired

        this.expander = new Expander(this.el, {
            hostSelector: '.menu-button__button, .fake-menu-button__button',
            contentSelector: '.menu-button__menu, .fake-menu-button__menu',
            focusManagement: this.input.type === 'fake' ? 'interactive' : 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true
        });
    },

    _cleanupMakeup() {
        if (this.expander) {
            this.expander.cancelAsync();
        }
    }
});
