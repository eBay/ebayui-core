const findIndex = require('core-js/library/fn/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const observer = require('../../common/property-observer');
const safeRegex = require('../../common/build-safe-regex');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialProps(input) {
        return Object.assign({
            options: []
        }, input);
    },
    getInitialState(input) {
        const autocomplete = input.autocomplete === 'list' ? 'list' : 'none';
        const currentValue = input['*'] && input['*'].value;
        const index = findIndex(input.options, option => option.text === currentValue);

        return Object.assign({}, input, {
            autocomplete,
            selectedIndex: index === -1 ? null : index,
            currentValue
        });
    },
    init() {
        observer.observeRoot(this, ['disabled'], () => {
            this.expander.expandOnClick = !this.state.disabled;
        });

        this.getEls('option').forEach((optionEl, i) => {
            Object.defineProperty(optionEl, 'selected', {
                get: () => this.state.selectedIndex === i,
                set: (value) => this.setSelectedIndex(value ? i : null)
            });
        });
    },
    onRender() {
        const selectedIndex = this.getSelectedIndex(this.state.options, this.state.currentValue);

        if (!this.state.disabled && this.state.options.length) {
            this.activeDescendant = ActiveDescendant.createLinear(
                this.el,
                this.getEl('input'),
                this.getEl('options'),
                '.combobox__option[role=option]', {
                    activeDescendantClassName: 'combobox__option--active',
                    autoInit: selectedIndex === -1 ? -1 : 0,
                    autoReset: -1
                }
            );

            this.expander = new Expander(this.el, {
                autoCollapse: true,
                expandOnFocus: true,
                expandOnClick: this.state.readonly && !this.state.disabled,
                collapseOnFocusOut: !this.state.readonly,
                contentSelector: '.combobox__options',
                hostSelector: '.combobox__control > input',
                expandedClass: 'combobox--expanded',
                simulateSpacebarClick: true
            });
        }

        this.moveCursorToEnd();
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
        this.moveCursorToEnd();
        emitAndFire(this, 'combobox-expand');
    },
    handleCollapse() {
        emitAndFire(this, 'combobox-collapse');
    },
    moveCursorToEnd() {
        const currentInput = this.getEl('input');

        if (currentInput) {
            const len = currentInput.value.length;
            currentInput.setSelectionRange(len, len);
        }
    },
    handleComboboxKeyUp(originalEvent) {
        const optionsEl = this.getEl('options');
        const selectedEl = optionsEl && optionsEl.querySelector('.combobox__option--active');
        let newValue = this.getEl('input').value;

        eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
            if (this.expander && !this.expander.isExpanded() && this.getEls('option').length > 0) {
                this.expander.expand();
            }
            this.moveCursorToEnd();
        });

        eventUtils.handleEnterKeydown(originalEvent, () => {
            newValue = selectedEl && selectedEl.textContent || newValue;
            this.setState('currentValue', newValue);
            this.setSelectedIndex();
            if (selectedEl) {
                this.emitChangeEvent('select');
            }
            this.toggleListbox();
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.collapse();
        });

        eventUtils.handleTextInput(originalEvent, () => {
            this.setState('currentValue', newValue);
            this.setSelectedIndex();
            this.emitChangeEvent();
            this.toggleListbox();
        });
    },
    handleComboboxBlur(evt) {
        const wasClickedOption = this.getEls('option').some(option => option === evt.relatedTarget);

        if (wasClickedOption) {
            this.getEl('input').focus();
        }

        if (this.expander && this.expander.isExpanded() && !wasClickedOption) {
            this.emitChangeEvent('change');
            this.expander.collapse();
        }
    },
    handleOptionClick(evt) {
        const selectedEl = evt.target.nodeName === 'DIV' ? evt.target : evt.target.parentNode;

        this.setState('currentValue', selectedEl.textContent);
        this.setSelectedIndex();
        this.emitChangeEvent('select');
        this.expander.collapse();
    },
    setSelectedIndex(index = 0) {
        const newIndex = index || this.getSelectedIndex(this.state.options, this.state.currentValue);

        this.setState('selectedIndex', newIndex);
    },
    getSelectedIndex(options, value) {
        return findIndex(options, option => option.text === value);
    },
    emitChangeEvent(eventName = 'input') {
        emitAndFire(this, `combobox-${eventName}`, {
            currentInputValue: this.state.currentValue,
            selectedOption: this.state.options[this.state.selectedIndex],
            options: this.state.options
        });
    },
    toggleListbox() {
        const query = this.getEl('input').value;
        const queryReg = safeRegex(query);

        const showListbox =
            (this.state.autocomplete === 'list' && this.state.options.some(option => queryReg.test(option.text)))
            || this.state.autocomplete !== 'none';

        if (!showListbox) {
            this.expander.collapse();
        } else {
            this.expander.expand();
        }
    }
});
