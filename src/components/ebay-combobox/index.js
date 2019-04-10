const markoWidgets = require('marko-widgets');
const find = require('core-js/library/fn/array/find');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const comboboxOptionsId = 'combobox__options';
const comboboxInputId = 'combobox__input';

const comboboxOptionSelector = '.combobox__option[role=option]';
const comboboxSelectedOptionSelector = '.combobox__option[role=option].combobox__option--active';

function getInitialState(input) {
    let options = (input.options || []).map(option => ({
        htmlAttributes: processHtmlAttributes(option),
        class: option.class,
        style: option.style,
        value: option.value || option.text,
        text: option.text,
        selected: Boolean(option.selected),
        renderBody: option.renderBody,
        visible: Boolean(option.selected)
    }));

    const selectedOption = find(options, option => option.selected);
    const selectedOptionText = selectedOption && selectedOption.text;

    if (!selectedOptionText) {
        options = options.map(option => {
            option.visible = true;
            return option;
        });
    }

    return {
        htmlAttributes: processHtmlAttributes(input),
        class: input.class,
        style: input.style,
        name: input.name,
        options,
        selectedOption,
        grow: input.grow,
        disabled: input.disabled,
        borderless: Boolean(input.borderless)
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    const optionEls = getOptionEls(this.el);

    observer.observeRoot(this, ['disabled'], () => {
        this.expander.expandOnClick = !this.state.disabled;
    });

    const selectedObserverCallback = (optionEl) => {
        this.processAfterStateChange(optionEl);
    };

    this.optionEls = optionEls.forEach((optionEl, i) => {
        observer.observeInner(this, optionEl, 'selected', `options[${i}]`, 'options', selectedObserverCallback);
    });
}

function onRender() {
    if (this.state.options && this.state.options.length > 0) {
        const activeDescendantFocusEl = this.getEl(comboboxInputId);
        const activeDescendantOwnedEl = this.getEl(comboboxOptionsId);

        this.activeDescendant = ActiveDescendant.createLinear(
            this.el,
            activeDescendantFocusEl,
            activeDescendantOwnedEl,
            comboboxOptionSelector, {
                activeDescendantClassName: 'combobox__option--active',
                autoInit: -1,
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

        scrollKeyPreventer.add(this.getEl(comboboxOptionsId));
    }
}

function onBeforeUpdate() {
    if (this.activeDescendant) {
        this.activeDescendant.destroy();
    }

    if (this.expander) {
        this.expander.cancelAsync();
    }
}

function onDestroy() {
    this.activeDescendant.destroy();
    this.expander.cancelAsync();
    scrollKeyPreventer.remove(this.getEl(comboboxOptionsId));
}

function handleExpand() {
    elementScroll.scroll(this.el.querySelector(comboboxSelectedOptionSelector));
    this.moveCursorToEnd();
    emitAndFire(this, 'combobox-expand');
}

function handleCollapse() {
    let matchedOption;
    const options = this.state.options.map(option => {
        const valueCheck = this.state.selectedOption.text.toLowerCase() === option.text.toLowerCase();
        option.selected = valueCheck;
        if (valueCheck) {
            matchedOption = option;
        }

        return option;
    });

    this.setState('options', options);
    this.setState('selectedOption', matchedOption);

    if (matchedOption) {
        this.emitChangeEvent(null, this.state.selectedOption.text);
    }

    emitAndFire(this, 'combobox-collapse');
}

function getOptionEls(el) {
    return el.querySelectorAll(comboboxOptionSelector);
}

function moveCursorToEnd() {
    const currentInput = this.getEl(comboboxInputId);

    if (currentInput) {
        const len = currentInput.value.length;
        currentInput.setSelectionRange(len, len);
    }
}

function handleComboboxKeyDown(originalEvent) {
    const selectedEl = this.el.querySelector(comboboxSelectedOptionSelector);
    const currentInput = this.getEl(comboboxInputId);

    eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
        originalEvent.preventDefault();
    });

    eventUtils.handleEnterKeydown(originalEvent, () => {
        if (selectedEl) {
            currentInput.value = selectedEl.textContent;
        }
    });

    eventUtils.handleEscapeKeydown(originalEvent, () => {
        this.expander.collapse();
    });

    if (selectedEl) {
        elementScroll.scroll(selectedEl);
    }
}

function handleComboboxKeyUp(evt) {
    const newValue = evt.target.value;
    const keyCode = evt.charCode || evt.keyCode;
    if ([13, 27, 38, 40].indexOf(keyCode) === -1) {
        this.filterOptionsDisplay(newValue);
    }
    this.emitChangeEvent(null, event.target);
}

function handleOptionClick(evt) {
    const selectedEl = evt.target.nodeName === 'DIV' ? evt.target : evt.target.parentNode;
    const currentInput = this.getEl(comboboxInputId);

    currentInput.value = selectedEl.textContent;

    this.expander.collapse();
    this.emitChangeEvent(selectedEl, currentInput);
}

function getVisibleOptions() {
    return this.state.options.filter(option => option.visible);
}

function emitChangeEvent(selectedEl, currentInput) {
    const optionValue = selectedEl ? selectedEl.dataset.optionValue : '';
    const options = this.getVisibleOptions();

    emitAndFire(this, 'combobox-change', {
        currentInput: currentInput && currentInput.value,
        selectedValue: [optionValue],
        options,
        selectedEl
    });
}

function filterOptionsDisplay(query) {
    let showListbox = false;

    const options = this.state.options.map(option => {
        const optionText = option.text;
        const queryRegex = new RegExp(escapeRegExp(`${query.trim()}`), 'i');
        const shouldBeVisible = queryRegex.test(optionText);

        if (shouldBeVisible) {
            showListbox = true;
        }

        option.visible = shouldBeVisible;
        return option;
    });

    if (!showListbox) {
        this.expander.collapse();
    } else {
        this.expander.expand();
    }

    this.setState('options', options);
    this.setState('selectedOption', { text: query });
}

function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    onRender,
    onBeforeUpdate,
    onDestroy,
    handleExpand,
    handleCollapse,
    moveCursorToEnd,
    handleComboboxKeyDown,
    handleComboboxKeyUp,
    handleOptionClick,
    getVisibleOptions,
    emitChangeEvent,
    filterOptionsDisplay
});
