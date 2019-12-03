const findIndex = require('core-js-pure/features/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const elementScroll = require('../../common/element-scroll');
const eventUtils = require('../../common/event-utils');
const safeRegex = require('../../common/build-safe-regex');

module.exports = {
    handleExpand() {
        const index = this.getSelectedIndex(this.input.options, this.state.currentValue);
        elementScroll.scroll(this.getEls('option')[index]);
        this.emit('combobox-expand');
        this.setState('expanded', true);
    },

    handleCollapse() {
        this.activeDescendant.reset();
        this.emit('combobox-collapse');
        this.setState('expanded', false);
    },

    handleComboboxKeyDown(originalEvent) {
        const optionsEl = this.getEl('options');
        const selectedEl = optionsEl && optionsEl.querySelector('.combobox__option--active');
        let newValue = this.getEl('input').value;

        eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
            originalEvent.preventDefault();

            if (this.expander && !this.expander.isExpanded() && this.getEls('option').length > 0) {
                this.activeDescendant.reset();
                this.expander.expand();
            }
        });

        eventUtils.handleEnterKeydown(originalEvent, () => {
            if (this.expander.isExpanded()) {
                newValue = selectedEl && selectedEl.textContent || newValue;

                this.getEl('input').value = newValue;
                this.setState('currentValue', newValue);
                this.setSelectedIndex();
                if (selectedEl) {
                    this.emitComboboxEvent('select');
                }
                this.expander.collapse();
            }
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.collapse();
        });
    },

    handleComboboxKeyUp(originalEvent) {
        const newValue = this.getEl('input').value;

        eventUtils.handleTextInput(originalEvent, () => {
            this.valueChanged = this.getEl('input').value !== newValue;

            this.activeDescendant.reset();
            this.getEl('input').value = newValue;
            this.setState('currentValue', newValue);
            this.setSelectedIndex();
            this.emitComboboxEvent();
            if (this.expander) {
                this.toggleListbox();
            }
        });
    },

    handleComboboxBlur() {
        const wasClickedOption = this.optionClicked;

        if (wasClickedOption) {
            this.getEl('input').focus();
        }

        if (this.expander && this.expander.isExpanded() && !wasClickedOption) {
            this.expander.collapse();
        }

        if (this.valueChanged) {
            this.emitComboboxEvent('change');
            this.valueChanged = false;
        }
    },

    handleOptionMouseDown() {
        this.optionClicked = true;
    },

    handleOptionClick(evt) {
        const selectedEl = evt.target.nodeName === 'DIV' ? evt.target : evt.target.parentNode;
        const selectedValue = selectedEl.textContent;

        this.optionClicked = false;
        this.valueChanged = this.getEl('input').value !== selectedValue;

        this.getEl('input').value = selectedValue;
        this.setState('currentValue', selectedValue);
        this.setSelectedIndex();
        this.emitComboboxEvent('select');
        this.expander.collapse();
    },

    setSelectedIndex(index = 0) {
        const newIndex = index || this.getSelectedIndex(this.input.options, this.state.currentValue);

        this.setState('selectedIndex', newIndex);
    },

    getSelectedIndex(options, value) {
        return findIndex(options, option => option.text === value);
    },

    emitComboboxEvent(eventName = 'input') {
        this.emit(`combobox-${eventName}`, {
            currentInputValue: this.state.currentValue,
            selectedOption: this.input.options[this.state.selectedIndex],
            options: this.input.options
        });
    },

    toggleListbox() {
        const query = this.getEl('input').value;
        const queryReg = safeRegex(query);

        const showListbox =
            (this.input.autocomplete === 'list' && this.input.options.some(option => queryReg.test(option.text)))
            || this.input.autocomplete === 'none';

        if (this.expander) {
            if (!showListbox) {
                this.expander.collapse();
            } else {
                this.expander.expand();
            }
        }
    },

    onInput(input) {
        const index = findIndex(input.options || [], option => option.text === input.value);
        input.autocomplete = input.autocomplete === 'list' ? 'list' : 'none';

        this.state = {
            expanded: false,
            selectedIndex: index === -1 ? null : index,
            currentValue: input.value
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
        const wasExpanded = this.expanded || false;
        const isExpanded = this.expanded = this.state.expanded;
        const wasToggled = isExpanded !== wasExpanded;

        if (!this.input.disabled && this.input.options && this.input.options.length > 0) {
            this.activeDescendant = ActiveDescendant.createLinear(
                this.el,
                this.getEl('input'),
                this.getEl('options'),
                '.combobox__option[role=option]', {
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
                contentSelector: '.combobox__listbox',
                hostSelector: '.combobox__control > input',
                expandedClass: 'combobox--expanded',
                simulateSpacebarClick: true
            });

            if (wasToggled) {
                if (isExpanded) {
                    this.expander.expand();
                } else {
                    this.expander.collapse();
                }
            }
        }
    },

    _cleanupMakeup() {
        if (this.activeDescendant) {
            this.activeDescendant.destroy();
        }

        if (this.expander) {
            this.expander.cancelAsync();
        }
    }
};
