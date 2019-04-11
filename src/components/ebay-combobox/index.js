const findIndex = require('core-js/library/fn/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const observer = require('../../common/property-observer');
const safeRegex = require('../../common/build-safe-regex');

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
        const index = findIndex(input.options, option => option.selected);
        const currentValue = input.options[index] && input.options[index].text;

        return Object.assign({}, input, {
            selectedIndex: index === -1 ? null : index,
            currentValue: currentValue
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
        const comboboxInput = this.getEl(comboboxInputId);
        const optionsContainer = this.getEl(comboboxOptionsId);
        const selectedIndex = findIndex(this.state.options, option => option.selected);

        if (this.state.options.length) {
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
        }

        scrollKeyPreventer.add(this.getEl(comboboxOptionsId));
    },
    onBeforeUpdate() {
        if (this.activeDescendant) {
            this.activeDescendant.destroy();
        }

        if (this.expander) {
            this.expander.cancelAsync();
        }

        scrollKeyPreventer.remove(this.getEl(comboboxOptionsId));
    },
    onDestroy() {
        this.activeDescendant.destroy();
        this.expander.cancelAsync();
        scrollKeyPreventer.remove(this.getEl(comboboxOptionsId));
    },
    handleExpand() {
        elementScroll.scroll(this.getEls('option')[this.state.selectedIndex]);
        this.moveCursorToEnd();
        emitAndFire(this, 'combobox-expand');
    },
    handleCollapse() {
        this.emitChangeEvent();
        emitAndFire(this, 'combobox-collapse');
    },
    moveCursorToEnd() {
        const currentInput = this.getEl(comboboxInputId);

        if (currentInput) {
            const len = currentInput.value.length;
            currentInput.setSelectionRange(len, len);
        }
    },
    handleComboboxKeyDown(originalEvent) {
        const selectedEl = this.getEls('option')[this.state.selectedIndex];

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
        const queryReg = safeRegex(query);

        const showListbox = this.state.options.some(option => queryReg.test(option.text));

        if (!showListbox) {
            this.expander.collapse();
        } else {
            this.expander.expand();
        }

        this.setState('currentValue', query);
    }
});
