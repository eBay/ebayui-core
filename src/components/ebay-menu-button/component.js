import Expander from 'makeup-expander';
import * as eventUtils from '../../common/event-utils';
import menuUtils from '../../common/menu-utils';

export default Object.assign({}, menuUtils, {
    toggleItemChecked(index, itemEl, originalEvent) {
        // This needs to be at start since toggleChecked swaps the checkedIndex
        // and then the right events will not fire correctly
        const shouldEmitRadio = this.isRadio() && index !== this.state.checkedIndex;
        this.toggleChecked(index);

        if (shouldEmitRadio) {
            if (this.input.collapseOnSelect) {
                this.expander.expanded = false;
            }
            this.emitComponentEvent({
                index,
                eventType: 'change',
                el: itemEl,
                originalEvent,
            });
        } else if (this.type !== 'radio') {
            if (this.input.collapseOnSelect) {
                this.expander.expanded = false;
            }
            this.emitComponentEvent({
                index,
                eventType: !this.type ? 'select' : 'change',
                el: itemEl,
                originalEvent,
            });
        }

        if (this.rovingTabindex) {
            this.tabindexPosition = this.rovingTabindex.filteredItems.findIndex(
                (el) => el.tabIndex === 0
            );
        }
    },

    handleItemClick(index, e, itemEl) {
        this.toggleItemChecked(index, itemEl, e);
    },

    handleMenuKeydown({ el, originalEvent, index }) {
        eventUtils.handleActionKeydown(originalEvent, () => {
            this.handleItemClick(index, originalEvent, el);
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.expanded = false;
            this.focus();
        });
    },

    focus() {
        this.getComponent('button').el.focus();
    },

    handleButtonEscape() {
        this.expander.expanded = false;
    },

    handleExpand() {
        this.emitComponentEvent({ eventType: 'expand' });
    },

    handleCollapse() {
        this.emitComponentEvent({ eventType: 'collapse' });
    },

    handleMenuChange({ el, originalEvent, index }) {
        this.toggleItemChecked(index, el, originalEvent);
    },

    handleMenuSelect({ el, originalEvent, index }) {
        if (this.input.collapseOnSelect) {
            this.expander.expanded = false;
        }

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
            originalEvent,
        };

        if (isCheckbox && checkedIndexes.length > 1) {
            Object.assign(eventObj, {
                indexes: this.getCheckedIndexes(), // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues(), // DEPRECATED in v5
            });
        } else if (isCheckbox || this.isRadio()) {
            Object.assign(eventObj, {
                index, // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues(), // DEPRECATED in v5
            });
        } else if (eventType !== 'expand' && eventType !== 'collapse') {
            Object.assign(eventObj, {
                index, // DEPRECATED in v5
                checked: [index], // DEPRECATED in v5 (keep but change from indexes to values)
            });
        }

        this.emit(`${eventType}`, eventObj);
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
        this.expander = new Expander(this.el, {
            hostSelector: '.menu-button__button',
            contentSelector: '.menu-button__menu',
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        });
    },

    _cleanupMakeup() {
        if (this.expander) {
            this.expander.destroy();
        }
    },
});
