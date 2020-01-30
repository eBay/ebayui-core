const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const elementScroll = require('../../common/element-scroll');
const eventUtils = require('../../common/event-utils');
const safeRegex = require('../../common/build-safe-regex');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialProps(input) {
        return assign({
            options: []
        }, input);
    },
    getInitialState(input) {
        const autocomplete = input.autocomplete === 'list' ? 'list' : 'none';
        const currentValue = input.value;
        const index = findIndex(input.options, option => option.text === currentValue);

        return assign({}, input, {
            autocomplete,
            selectedIndex: index === -1 ? null : index,
            currentValue
        });
    },
    init() {
        this.changeValue = this.state.currentValue;
    },
    onRender() {
        const wasExpanded = this.expanded || false;
        const isExpanded = this.expanded = this.state.expanded;
        const wasToggled = isExpanded !== wasExpanded;

        this.inputEl = this.el.querySelector('input');

        if (!this.state.disabled && this.state.options.length > 0) {
            this.activeDescendant = ActiveDescendant.createLinear(
                this.el,
                this.inputEl,
                this.getEl('options'),
                '.combobox__option[role=option]', {
                    activeDescendantClassName: 'combobox__option--active',
                    autoInit: -1,
                    autoReset: -1,
                    axis: 'y',
                    autoScroll: true
                }
            );

            this.expander = new Expander(this.el, {
                autoCollapse: true,
                expandOnFocus: true,
                expandOnClick: this.state.readonly && !this.state.disabled,
                collapseOnFocusOut: !this.state.readonly,
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
    onBeforeUpdate() {
        this._handleDestroy();
    },
    onDestroy() {
        this._handleDestroy();
    },
    _handleDestroy() {
        if (this.activeDescendant) {
            this.activeDescendant.destroy();
        }

        if (this.expander) {
            this.expander.cancelAsync();
        }
    },
    handleExpand() {
        const index = this.getSelectedIndex(this.state.options, this.state.currentValue);
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
        let newValue = this.inputEl.value;

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

                this.inputEl.value = newValue;
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
        const newValue = this.inputEl.value;

        eventUtils.handleTextInput(originalEvent, () => {
            this.activeDescendant.reset();
            this.inputEl.value = newValue;
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
            this.inputEl.focus();
        }

        if (this.expander && this.expander.isExpanded() && !wasClickedOption) {
            this.expander.collapse();
        }

        // We are setting it this way because change DOM events do not trigger from
        // setting values here because it rerenders the input which makes it in a clean state
        if (this.changeValue !== this.state.currentValue) {
            this.changeValue = this.state.currentValue;
            this.emitComboboxEvent('change');
        }
    },
    handleOptionMouseDown() {
        this.optionClicked = true;
    },
    handleOptionClick(evt) {
        const selectedEl = evt.target.nodeName === 'DIV' ? evt.target : evt.target.parentNode;
        const selectedValue = selectedEl.textContent;

        this.optionClicked = false;

        this.inputEl.value = selectedValue;
        this.setState('currentValue', selectedValue);
        this.setSelectedIndex();
        this.emitComboboxEvent('select');
        this.expander.collapse();
    },
    setSelectedIndex(index = 0) {
        const newIndex = index || this.getSelectedIndex(this.state.options, this.state.currentValue);

        this.setState('selectedIndex', newIndex);
    },
    getSelectedIndex(options, value) {
        return findIndex(options, option => option.text === value);
    },
    emitComboboxEvent(eventName = 'input') {
        this.emit(`combobox-${eventName}`, {
            currentInputValue: this.state.currentValue,
            selectedOption: this.state.options[this.state.selectedIndex],
            options: this.state.options
        });
    },
    toggleListbox() {
        const query = this.inputEl.value;
        const queryReg = safeRegex(query);

        const showListbox =
            (this.state.autocomplete === 'list' && this.state.options.some(option => queryReg.test(option.text)))
            || this.state.autocomplete === 'none';

        if (this.expander) {
            if (!showListbox) {
                this.expander.collapse();
            } else {
                this.expander.expand();
            }
        }
    }
});
