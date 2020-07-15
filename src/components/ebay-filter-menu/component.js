const assign = require('core-js-pure/features/object/assign');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabIndex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');
const menuUtils = require('../../common/menu-utils');

module.exports = assign({}, menuUtils, {
    handleRadioClick(index, ev, itemEl) {
        this._toggleItemChecked(index, itemEl);
    },

    handleItemClick(index, ev, itemEl) {
        const targetEv = ev.originalEvent || ev;
        if (this.input.variant !== 'form' || targetEv.target.tagName !== 'INPUT') {
            this._toggleItemChecked(index, itemEl);
        }
    },

    handleItemKeydown(index, ev, itemEl) {
        eventUtils.handleEscapeKeydown(ev, () => {
            // TODO: this event is not documented.
            // Do we need it? (it is only used by the filter-menu-button)
            this._emitComponentEvent('keydown', null, ev);
        });

        if (this.input.variant !== 'form') {
            eventUtils.handleActionKeydown(ev, () => {
                this._toggleItemChecked(index, itemEl);
            });
        }
    },

    handleFooterButtonClick(originalEvent) {
        this._emitComponentEvent('footer-click', null, originalEvent);
    },

    handleFormSubmit(originalEvent) {
        this._emitComponentEvent('form-submit', null, originalEvent);
    },

    onInput(input) {
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

    _toggleItemChecked(index, itemEl) {
        this.toggleChecked(index);
        this._emitComponentEvent('change', itemEl);
    },

    _emitComponentEvent(eventType, el, originalEvent) {
        const checked = this.getCheckedValues();
        const checkedIndex = this.getCheckedIndexes();

        this.emit(`filter-menu-${eventType}`, {
            el,
            checked,
            checkedIndex,
            originalEvent
        });
    },

    _setupMakeup() {
        if (this.input.variant !== 'form') {
            this._rovingTabIndex = rovingTabIndex.createLinear(
                this.getEl('menu'),
                'div',
                { index: this.lastTabIndexPosition || 0 }
            );

            scrollKeyPreventer.add(this.getEl('container'));
        }
    },

    _cleanupMakeup() {
        if (this._rovingTabIndex) {
            this.lastTabIndexPosition = this._rovingTabIndex.index;
            this._rovingTabIndex.destroy();
            this._rovingTabIndex = undefined;
            scrollKeyPreventer.remove(this.getEl('container'));
        }
    }
});
