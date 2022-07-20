import * as scrollKeyPreventer from 'makeup-prevent-scroll-keys';
import { createLinear } from 'makeup-roving-tabindex';
import typeahead from 'makeup-typeahead';
import * as eventUtils from '../../common/event-utils';
import menuUtils from '../../common/menu-utils';

const TYPEAHEAD_TIMEOUT_LENGTH = 1300;

export default Object.assign({}, menuUtils, {
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
                originalEvent,
            });
        } else if (this.type !== 'radio') {
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

    handleItemClick(index, originalEvent, itemEl) {
        this.toggleItemChecked(index, originalEvent, itemEl);
    },

    handleItemKeydown(index, originalEvent, itemEl) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({ eventType: 'keydown', originalEvent, index });
        });

        eventUtils.handleActionKeydown(originalEvent, () =>
            this.toggleItemChecked(index, originalEvent, itemEl)
        );
    },

    handleItemKeypress({ key }) {
        const itemIndex = this.getTypeaheadIndex(
            this.getEl('menu').children,
            key,
            this.input.typeaheadTimeoutLength || TYPEAHEAD_TIMEOUT_LENGTH
        );

        if (itemIndex !== -1) {
            this.tabindexPosition = this.rovingTabindex.index = itemIndex;
        }
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
                index,
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
        } else {
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

        this.rovingTabindex = createLinear(this.contentEl, 'div', {
            index: this.tabindexPosition,
            autoReset: null,
        });

        scrollKeyPreventer.add(this.contentEl);

        const { getIndex: getTypeaheadIndex, destroy: destroyTypeahead } = typeahead();
        this.getTypeaheadIndex = getTypeaheadIndex;
        this.destroyTypeahead = destroyTypeahead;
    },

    _cleanupMakeup() {
        if (this.rovingTabindex) {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
        if (this.destroyTypeahead) {
            this.destroyTypeahead();
        }
    },
});
