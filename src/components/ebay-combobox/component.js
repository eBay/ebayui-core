const find = require('core-js-pure/features/array/find');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const elementScroll = require('../../common/element-scroll');
const eventUtils = require('../../common/event-utils');
const safeRegex = require('../../common/build-safe-regex');

module.exports = {
    handleExpand() {
        const selectedEl = this.getEls('options')[
            this.getVisibleOptions().indexOf(this.getSelectedOption())
        ];

        if (selectedEl) {
            elementScroll.scroll(selectedEl);
        }

        this.emit('combobox-expand');
    },

    handleCollapse() {
        this.activeDescendant.reset();
        this.emit('combobox-collapse');
    },

    handleComboboxKeyDown(originalEvent) {
        eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
            originalEvent.preventDefault();

            if (!this.expander.isExpanded()) {
                this.activeDescendant.reset();
                this.expander.expand();
            }
        });

        eventUtils.handleEnterKeydown(originalEvent, () => {
            if (this.expander.isExpanded()) {
                const selectedIndex = this.activeDescendant.index;

                if (selectedIndex !== -1) {
                    this.setSelectedText(this.getVisibleOptions()[selectedIndex].text);
                }

                this.expander.collapse();
            }
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.collapse();
        });
    },

    handleComboboxKeyUp(originalEvent) {
        eventUtils.handleTextInput(originalEvent, () => {
            this.state.currentValue = this.getEl('combobox').value;
            this.once("update", () => {
                // If we have an expander after the update
                // that could mean that new content was made visible.
                // We force the expander open just in case.
                if (this.expander) {
                    this.expander.expand();
                }
            });

            this._emitComboboxEvent('input');
        });
    },

    handleComboboxBlur() {
        if (this.expander.isExpanded()) {
            this.expander.collapse();
        }

        if (this.lastValue !== this.state.currentValue) {
            this.lastValue = this.state.currentValue;
            this._emitComboboxEvent("change");
        }
    },

    handleSelectOption(text) {
        this.setSelectedText(text);
    },

    setSelectedText(text) {
        if (this.state.currentValue !== text) {
            const input = this.getEl('combobox');
            this.state.currentValue = input.value = text;
            // Move cursor to the end of the input.
            input.selectionStart = input.selectionEnd = text.length;
            input.focus();
            this._emitComboboxEvent('select');
        }
    },

    getSelectedOption() {
        return find(
            this.input.options,
            option => option.text === this.state.currentValue
        );
    },

    getVisibleOptions() {
        if (this.input.autocomplete === "none") {
            return this.input.options;
        }


        const currentValueReg = safeRegex(this.state.currentValue);
        return this.input.options.filter(option => currentValueReg.test(option.text || ""));
    },

    hasVisibleOptions() {
        return !this.input.disabled && this.getVisibleOptions().length > 0;
    },

    onInput(input) {
        input.autocomplete = input.autocomplete === 'list' ? 'list' : 'none';
        input.options = input.options || [];
        this.lastValue = input.value;
        this.state = { currentValue: input.value };
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

    _setupMakeup() {
        if (this.hasVisibleOptions()) {
            this.activeDescendant = ActiveDescendant.createLinear(
                this.el,
                this.getEl('combobox'),
                this.getEl('listbox'),
                '[role="option"]', {
                    activeDescendantClassName: 'combobox__option--active',
                    autoInit: -1,
                    autoReset: -1,
                    axis: 'y'
                }
            );

            this.expander = new Expander(this.el, {
                autoCollapse: true,
                expandOnFocus: true,
                expandOnClick: this.input.readonly && !this.input.disabled,
                collapseOnFocusOut: !this.input.readonly,
                contentSelector: '[role="listbox"]',
                hostSelector: '[role="combobox"]',
                expandedClass: 'combobox--expanded',
                simulateSpacebarClick: true
            });
        }
    },

    _cleanupMakeup() {
        if (this.activeDescendant) {
            this.activeDescendant.destroy();
            this.activeDescendant = null;
        }

        if (this.expander) {
            this.expander.cancelAsync();
            this.expander = null;
        }
    },

    _emitComboboxEvent(eventName) {
        this.emit(`combobox-${eventName}`, {
            currentInputValue: this.state.currentValue,
            selectedOption: this.getSelectedOption(),
            options: this.input.options
        });
    },
};
