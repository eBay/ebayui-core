import * as scrollKeyPreventer from 'makeup-prevent-scroll-keys';
import { createLinear } from 'makeup-roving-tabindex';
import * as eventUtils from '../../common/event-utils';
import menuUtils from '../../common/menu-utils';

export default Object.assign({}, menuUtils, {
    resetIndex() {
        this._rovingTabIndex.index = 0;
        this.lastTabIndexPosition = 0;
    },

    handleRadioClick(index, ev, itemEl) {
        this._toggleItemChecked(index, ev, itemEl);
    },

    handleItemClick(index, ev, itemEl) {
        const targetEv = ev.originalEvent || ev;
        if (this.input.variant !== 'form' || targetEv.target.tagName !== 'INPUT') {
            this._toggleItemChecked(index, ev, itemEl);
        }
    },

    handleItemKeydown(index, ev, itemEl) {
        eventUtils.handleEscapeKeydown(ev, () => {
            // TODO: this event is not documented.
            // Do we need it? (it is only used by the filter-menu-button)
            this._emitComponentEvent('keydown', ev, { index });
        });

        if (this.input.variant !== 'form') {
            eventUtils.handleActionKeydown(ev, () => {
                this._toggleItemChecked(index, ev, itemEl);
            });
        }
    },

    handleFooterButtonClick(originalEvent) {
        this._emitComponentEvent('footer-click', originalEvent);
    },

    handleFormSubmit(originalEvent) {
        this._emitComponentEvent('form-submit', originalEvent);
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

    _toggleItemChecked(index, originalEvent, el) {
        if (this.isDisabled(index)) {
            return;
        }
        this.toggleChecked(index);
        this._emitComponentEvent('change', originalEvent, { el, index });
    },

    _emitComponentEvent(eventType, originalEvent, args) {
        const { el, index } = args || {};
        const checked = this.getCheckedValues();
        const checkedIndex = this.getCheckedIndexes();
        const currentChecked = this.isChecked(index);

        this.emit(`${eventType}`, {
            el,
            checked,
            checkedIndex,
            originalEvent,
            index,
            currentChecked,
        });
    },

    _setupMakeup() {
        if (this.input.variant !== 'form') {
            this._rovingTabIndex = createLinear(this.getEl('menu'), 'div', {
                index: this.lastTabIndexPosition || 0,
            });

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
    },
});
