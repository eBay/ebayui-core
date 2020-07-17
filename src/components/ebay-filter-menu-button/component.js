const assign = require('core-js-pure/features/object/assign');
const Expander = require('makeup-expander');
const eventUtils = require('../../common/event-utils');
const menuUtils = require('../../common/menu-utils');

module.exports = assign({}, menuUtils, {
    handleMenuKeydown({ originalEvent }) {
        eventUtils.handleEscapeKeydown(originalEvent, () => this._expander.collapse());
    },

    handleMenuChange({ checkedIndex, el, originalEvent }) {
        // TODO: the event data from the filter-menu should probably
        // change to include which items are checked not just the values.
        this.toggleChecked(checkedIndex);
        this._emitComponentEvent('change', el, originalEvent);
    },

    handleFooterButtonClick() {
        this._emitComponentEvent('footer-click');
        this._expander.collapse();
    },

    handleFormSubmit({ originalEvent }) {
        this._emitComponentEvent('form-submit', originalEvent);
    },

    handleExpand({ originalEvent }) {
        this._emitComponentEvent('expand', null, originalEvent);
    },

    handleCollapse({ originalEvent }) {
        this._emitComponentEvent('collapse', null, originalEvent);
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

    _emitComponentEvent(eventType, el, originalEvent) {
        switch (eventType) {
            case 'expand':
                this.emit(`filter-menu-button-${eventType}`);
                break;
            case 'change':
            case 'collapse':
            case 'form-submit':
            case 'footer-click': {
                const checked = this.getCheckedValues();
                this.emit(`filter-menu-button-${eventType}`, {
                    el,
                    checked,
                    originalEvent
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
            alwaysDoFocusManagement: true
        });
    },

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.cancelAsync();
            this._expander = undefined;
        }
    }
});
