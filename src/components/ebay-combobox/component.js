const find = require('core-js-pure/features/array/find');
const ActiveDescendant = require('makeup-active-descendant');
const FloatingLabel = require('makeup-floating-label');
const Expander = require('makeup-expander');
const elementScroll = require('../../common/element-scroll');
const eventUtils = require('../../common/event-utils');
const safeRegex = require('../../common/build-safe-regex');

module.exports = {
    focus() {
        this.getEl('combobox').focus();
    },

    handleFocus() {
        this._emitComboboxEvent('focus');
    },

    isExpanded() {
        return this.expander.isExpanded();
    },

    collapse() {
        return this.expander.collapse();
    },

    handleButtonClick(originalEvent) {
        this.buttonClicked = true;
        this.emit('button-click', { originalEvent });
    },

    handleActiveDescendantChange(ev) {
        if (this.listSelection === 'automatic') {
            const selected = this._getVisibleOptions()[ev.detail.toIndex];
            // Set textbox value to selected, don't update state since it messes up active descendant
            this.getEl('combobox').value = selected.text;
        }
    },

    setSelectedView() {
        const current = this._getVisibleOptions().indexOf(this._getSelectedOption());
        this.activeDescendant.index = current;
        const selectedEl = this.getEls('options')[current];
        if (selectedEl) {
            elementScroll.scroll(selectedEl);
        }
    },

    handleExpand() {
        if (this.state.viewAllOptions) {
            this.setSelectedView();
        } else {
            this.state.viewAllOptions = true;
            this.once('update', () => {
                this.setSelectedView();
            });
        }
        this.emit('expand');
    },

    handleCollapse() {
        this.activeDescendant.reset();
        this.emit('collapse');
    },

    handleComboboxClick(e) {
        if (e.target === document.activeElement && this.expander && !this.isExpanded()) {
            this.expander.expand();
        }
    },

    handleComboboxKeyDown(originalEvent) {
        eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
            originalEvent.preventDefault();

            if (this.expander && !this.expander.isExpanded()) {
                this.activeDescendant.reset();
                this.expander.expand();
            }
        });

        eventUtils.handleEnterKeydown(originalEvent, () => {
            if (this.expander.isExpanded()) {
                const selectedIndex = this.activeDescendant.index;

                if (selectedIndex !== -1) {
                    this._setSelectedText(this._getVisibleOptions()[selectedIndex].text);
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
            this.once('update', () => {
                // If we have an expander after the update
                // that could mean that new content was made visible.
                // We force the expander open just in case.
                if (this.expander) {
                    this.expander.expand();
                }
            });
            this.state.viewAllOptions = false;

            this._emitComboboxEvent('input-change');
        });
    },

    handleComboboxBlur() {
        const wasClickedOption = this.optionClicked;

        if (wasClickedOption) {
            this.focus();
        }

        if (
            this.expander &&
            this.expander.isExpanded() &&
            !wasClickedOption &&
            !this.buttonClicked
        ) {
            this.expander.collapse();
        }

        this.buttonClicked = false;

        if (
            this.listSelection === 'automatic' &&
            this.getEl('combobox').value !== this.state.currentValue
        ) {
            this.state.currentValue = this.getEl('combobox').value;
        }

        if (this.lastValue !== this.state.currentValue) {
            this.lastValue = this.state.currentValue;
            this._emitComboboxEvent('change');
        }
    },

    handleSelectOption(text) {
        this._setSelectedText(text);
    },

    handleFloatingLabelInit() {
        this._emitComboboxEvent('floating-label-init');
    },

    onInput(input) {
        this.autocomplete = input.autocomplete === 'list' ? 'list' : 'none';
        this.listSelection = input.listSelection === 'manual' ? 'manual' : 'automatic';
        input.options = input.options || [];
        this.lastValue = input.value;
        this.state = {
            currentValue: this.lastValue,
            viewAllOptions: (this.state && this.state.viewAllOptions) || true,
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

    _setupMakeup() {
        if (this._hasVisibleOptions()) {
            this.activeDescendant = ActiveDescendant.createLinear(
                this.el,
                this.getEl('combobox'),
                this.getEl('listbox'),
                '[role="option"]',
                {
                    activeDescendantClassName: 'combobox__option--active',
                    autoInit: -1,
                    autoReset: -1,
                    axis: 'y',
                    autoScroll: true,
                }
            );

            this.expander = new Expander(this.el, {
                autoCollapse: true,
                expandOnFocus: true,
                collapseOnFocusOut: !this.input.readonly && !this.input.button,
                contentSelector: '[role="listbox"]',
                hostSelector: '[role="combobox"]',
                expandedClass: 'combobox--expanded',
                simulateSpacebarClick: true,
            });
        }
        // TODO: makeup-floating-label should be updated so that we can remove the event listeners.
        // It probably makes more sense to just move this functionality into Marko though.
        if (this.input.floatingLabel) {
            if (this._floatingLabel) {
                this._floatingLabel.refresh();
                this.handleFloatingLabelInit();
            } else if (document.readyState === 'complete') {
                if (this.el) {
                    this._floatingLabel = new FloatingLabel(this.el);
                    this.handleFloatingLabelInit();
                }
            } else {
                this.subscribeTo(window).once('load', this._setupMakeup.bind(this));
            }
        }
    },

    _cleanupMakeup() {
        if (this.activeDescendant) {
            this.activeDescendant.reset();
            this.activeDescendant.destroy();
            this.activeDescendant = null;
        }

        if (this.expander) {
            this.expander.cancelAsync();
            this.expander = null;
        }
    },

    _setSelectedText(text) {
        if (this.state.currentValue !== text) {
            const input = this.getEl('combobox');
            this.state.currentValue = input.value = text;
            // Move cursor to the end of the input.
            input.selectionStart = input.selectionEnd = text.length;
            input.focus();
            this._emitComboboxEvent('select');
        }
    },

    _getSelectedOption() {
        return find(this.input.options, (option) => option.text === this.state.currentValue);
    },

    _getVisibleOptions() {
        if (this.autocomplete === 'none' || this.state.viewAllOptions) {
            return this.input.options;
        }

        const currentValueReg = safeRegex(this.state.currentValue);
        return this.input.options.filter(
            (option) => currentValueReg.test(option.text || '') || option.sticky
        );
    },

    _hasVisibleOptions() {
        return !this.input.disabled && this._getVisibleOptions().length > 0;
    },

    _emitComboboxEvent(eventName) {
        this.emit(`${eventName}`, {
            currentInputValue: this.state.currentValue,
            selectedOption: this._getSelectedOption(),
            options: this.input.options,
        });
    },
};
