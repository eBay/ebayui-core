import Expander from 'makeup-expander';
import * as eventUtils from '../../common/event-utils';
import menuUtils from '../../common/menu-utils';

export default Object.assign({}, menuUtils, {
    handleMenuKeydown({ originalEvent }) {
        eventUtils.handleEscapeKeydown(originalEvent, () => (this._expander.expanded = false));
    },

    handleMenuChange({ checkedIndex, el, originalEvent, index, currentChecked }) {
        // TODO: the event data from the filter-menu should probably
        // change to include which items are checked not just the values.
        this.toggleChecked(checkedIndex);
        this._emitComponentEvent('change', originalEvent, { el, index, currentChecked });
    },

    handleFooterButtonClick() {
        this._emitComponentEvent('footer-click');
        this._expander.expanded = false;
    },

    handleFormSubmit({ originalEvent }) {
        this._emitComponentEvent('form-submit', originalEvent);
    },

    handleExpand({ originalEvent }) {
        this._emitComponentEvent('expand', originalEvent);
    },

    handleCollapse({ originalEvent }) {
        this.getEl('button').focus();
        this._emitComponentEvent('collapse', originalEvent);
    },

    onInput(input) {
        input.items = input.items || [];
        this.state = this.getInputState(input);
    },

    onMount() {
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _emitComponentEvent(eventType, originalEvent, args) {
        const { el, index, currentChecked } = args || {};
        switch (eventType) {
            case 'expand':
                this.emit(eventType);
                break;
            case 'change':
            case 'collapse':
            case 'form-submit':
            case 'footer-click': {
                const checked = this.getCheckedValues();
                this.emit(eventType, {
                    el,
                    checked,
                    originalEvent,
                    index,
                    currentChecked,
                });
                break;
            }
            default:
                break;
        }
    },

    _setupMakeup() {
        this._expander = new Expander(this.getEl('container'), {
            hostSelector: '.filter-menu-button__button',
            contentSelector: '.filter-menu-button__menu',
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        });
    },

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.destroy();
            this._expander = undefined;
        }
    },
});
