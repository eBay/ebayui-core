import Expander from 'makeup-expander';
import * as scrollKeyPreventer from 'makeup-prevent-scroll-keys';
import { scroll } from '../../common/element-scroll';
import * as eventUtils from '../../common/event-utils';

export default {
    handleExpand() {
        scroll(this.getEls('options')[this.state.selectedIndex]);
        this.emit('expand');
    },
    handleCollapse() {
        this.emit('collapse');
    },

    /**
     * Handle mouse click for option
     * @param {MouseEvent} event
     * @param {HTMLDivElement} el
     */
    handleOptionClick(index) {
        this._setSelectedIndex(index);
        this.expander.expanded = false;
        this.getEl('combobox').focus();
    },
    /**
     * Handle selection of options when the combobox is closed
     * https://ebay.gitbooks.io/mindpatterns/content/input/listbox.html#keyboard
     * @param {KeyboardEvent} originalEvent
     */
    handleComboboxKeyDown(originalEvent) {
        eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
            const code = originalEvent.charCode || originalEvent.keyCode;
            const direction = code === 40 /* down */ ? 1 : -1;
            this._setSelectedIndex(
                Math.max(
                    0,
                    Math.min(this.input.options.length - 1, this.state.selectedIndex + direction)
                )
            );
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.expanded = false;
            this.getEl('combobox').focus();
        });
    },

    onInput(input) {
        input.options = input.options || [];
        this.state = {
            selectedIndex: Math.max(
                0,
                input.options.findIndex((option) => option.selected)
            ),
        };
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

    _setSelectedIndex(index) {
        if (index !== this.state.selectedIndex) {
            const el = this.getEls('options')[index];
            this.state.selectedIndex = index;
            scroll(el);
            this.emit('change', {
                index,
                selected: [this.input.options[index].value],
                el,
            });
        }
    },

    _setupMakeup() {
        if (this.input.options.length > 0) {
            this.expander = new Expander(this.el, {
                autoCollapse: true,
                expandOnClick: !this.input.disabled,
                contentSelector: '[role="listbox"]',
                hostSelector: '[role="combobox"]',
                expandedClass: 'combobox--expanded',
                simulateSpacebarClick: true,
            });

            scrollKeyPreventer.add(this.getEl('combobox'));
            scrollKeyPreventer.add(this.getEl('listbox'));
        }
    },

    _cleanupMakeup() {
        if (this.expander) {
            this.expander.destroy();
            this.expander = null;

            scrollKeyPreventer.remove(this.getEl('combobox'));
            scrollKeyPreventer.remove(this.getEl('listbox'));
        }
    },
};
