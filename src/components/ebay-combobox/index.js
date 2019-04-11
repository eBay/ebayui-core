const findIndex = require('core-js/library/fn/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const observer = require('../../common/property-observer');

const comboboxOptionsId = 'options';
const comboboxInputId = 'input';

const comboboxOptionSelector = '.combobox__option[role=option]';
const comboboxSelectedOptionSelector = '.combobox__option[role=option].combobox__option--active';

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialProps(input) {
        return Object.assign({
            options: []
        }, input);
    },
    getInitialState(input) {
        const newInput = input;
        const index = findIndex(input.options, option => option.selected);
        const currentValue = input.options[index] && input.options[index].text;

        const options = input.options.map(option => {
            option.visible = !!option.selected;
            if (!currentValue) {
                option.visible = true;
            }
            return option;
        });

        newInput.options = options;

        return Object.assign({}, newInput, {
            selectedIndex: index === -1 ? null : index,
            currentValue: currentValue
        });
    },
    init() {
        const optionEls = this.getOptionEls(this.el);

        observer.observeRoot(this, ['disabled'], () => {
            this.expander.expandOnClick = !this.state.disabled;
        });

        const selectedObserverCallback = (optionEl) => {
            this.processAfterStateChange(optionEl);
        };

        this.optionEls = optionEls.forEach((optionEl, i) => {
            observer.observeInner(this, optionEl, 'selected', `options[${i}]`, 'options', selectedObserverCallback);
        });
    },
    onRender() {
        const comboboxInput = this.getEl(comboboxInputId);
        const optionsContainer = this.getEl(comboboxOptionsId);
        const selectedIndex = findIndex(this.state.options, option => option.selected);

        this.activeDescendant = ActiveDescendant.createLinear(
            this.el,
            comboboxInput,
            optionsContainer,
            comboboxOptionSelector, {
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
            contentSelector: `#${optionsContainer.id}`,
            hostSelector: `#${this.getEl(comboboxInputId).id}`,
            expandedClass: 'combobox--expanded',
            simulateSpacebarClick: true
        });

        scrollKeyPreventer.add(this.getEl(comboboxOptionsId));
    },
    onBeforeUpdate() {
        if (this.activeDescendant) {
            this.activeDescendant.destroy();
        }

        if (this.expander) {
            this.expander.cancelAsync();
        }
    },
    onDestroy() {
        this.activeDescendant.destroy();
        this.expander.cancelAsync();
        scrollKeyPreventer.remove(this.getEl(comboboxOptionsId));
    },
    handleExpand() {
        elementScroll.scroll(this.el.querySelector(comboboxSelectedOptionSelector));
        this.moveCursorToEnd();
        emitAndFire(this, 'combobox-expand');
    },
    handleCollapse() {
        this.emitChangeEvent();
        emitAndFire(this, 'combobox-collapse');
    },
    getOptionEls(el) {
        return el.querySelectorAll(comboboxOptionSelector);
    },
    moveCursorToEnd() {
        const currentInput = this.getEl(comboboxInputId);

        if (currentInput) {
            const len = currentInput.value.length;
            currentInput.setSelectionRange(len, len);
        }
    },
    handleComboboxKeyDown(originalEvent) {
        const selectedEl = this.el.querySelector(comboboxSelectedOptionSelector);

        eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
            originalEvent.preventDefault();
        });

        eventUtils.handleEnterKeydown(originalEvent, () => {
            if (selectedEl) {
                this.setState('currentValue', selectedEl.textContent);
            }
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.collapse();
        });

        if (selectedEl) {
            elementScroll.scroll(selectedEl);
        }
    },
    handleComboboxKeyUp(originalEvent) {
        eventUtils.handleTextInput(originalEvent, () => {
            this.filterOptionsDisplay();
        });
        this.emitChangeEvent();
    },
    handleOptionClick(evt) {
        const selectedEl = evt.target.nodeName === 'DIV' ? evt.target : evt.target.parentNode;

        this.setState('currentValue', selectedEl.textContent);

        this.expander.collapse();
        this.emitChangeEvent();
    },
    getVisibleOptions() {
        return this.state.options.filter(option => option.visible);
    },
    emitChangeEvent() {
        const selectedValue =
            this.state.options[this.state.selectedIndex] && this.state.options[this.state.selectedIndex].text;

        emitAndFire(this, 'combobox-change', {
            currentInput: this.getEl(comboboxInputId).value,
            selectedValue: [selectedValue],
            options: this.state.options,
            selectedEl: find(this.state.options, option => option.selected)
        });
    },
    filterOptionsDisplay() {
        const query = this.getEl('input').value;
        let showListbox = false;
        let selectedOption = {};

        const options = this.state.options.map(option => {
            const optionText = option.text;
            const queryRegex = new RegExp(this.escapeRegExp(`${query.trim()}`), 'i');
            const shouldBeVisible = queryRegex.test(optionText);

            if (shouldBeVisible) {
                showListbox = true;
            }

            option.visible = shouldBeVisible;

            if (optionText.toLowerCase() === query.toLowerCase()) {
                selectedOption = option;
                option.selected = true;
            } else {
                option.selected = false;
            }

            return option;
        });

        if (!showListbox) {
            this.expander.collapse();
        } else {
            this.expander.expand();
        }

        this.setState('options', options);
        this.setState('currentValue', query);
        this.setState('selectedOption', selectedOption);
    },
    escapeRegExp(stringToGoIntoTheRegex) {
        return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
});
