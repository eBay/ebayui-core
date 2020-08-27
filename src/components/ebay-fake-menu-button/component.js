const Expander = require('makeup-expander');
const eventUtils = require('../../common/event-utils');

module.exports = {
    handleMenuKeydown({ el, originalEvent, index }) {
        eventUtils.handleActionKeydown(originalEvent, () => {
            this.handleMenuSelect(index, originalEvent, el);
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

    handleMenuSelect({ el, originalEvent, index }) {
        this.emitComponentEvent({ eventType: 'select', el, originalEvent, index });
    },
    handleMousedown({ el, originalEvent }) {
        this.emitComponentEvent({ eventType: 'mousedown', el, originalEvent });
    },
    emitComponentEvent({ eventType, el, originalEvent, index }) {
        const eventObj = {
            el,
            originalEvent,
            index
        };
        this.emit(`${eventType}`, eventObj);
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
            hostSelector: '.fake-menu-button__button',
            contentSelector: '.fake-menu-button__menu',
            focusManagement: 'interactive',
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
};
