const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const comboboxOptionSelector = 'select > option';

function getInitialState(input) {
    const options = (input.options || []).map(option => {
        const selected = option.selected;

        return {
            class: option.class,
            value: option.value,
            label: option.label,
            selected: Boolean(selected),
            htmlAttributes: processHtmlAttributes(option)
        };
    });

    const selectedOption = options.filter(option => option.selected)[0] || options[0];

    if (options.length > 0 && selectedOption.value === options[0].value) {
        options[0].selected = true;
    }

    return {
        name: input.name,
        class: input.class,
        options,
        selected: selectedOption,
        borderless: Boolean(input.borderless),
        disabled: Boolean(input.disabled),
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    const selectClass = ['select', state.class];

    if (state.borderless) {
        selectClass.push('select--borderless');
    }

    return {
        class: selectClass,
        name: state.name,
        selectedOption: state.selected,
        options: state.options,
        disabled: state.disabled,
        htmlAttributes: state.htmlAttributes
    };
}

function init() {
    const optionEls = this.el.querySelectorAll(comboboxOptionSelector);

    if (this.state.options && this.state.options.length > 0) {
        observer.observeRoot(this, ['selected'], (index) => {
            this.processAfterStateChange(optionEls[index]);
        });

        const selectedObserverCallback = (optionEl) => {
            this.processAfterStateChange(optionEl);
        };

        this.optionEls = optionEls.forEach((optionEl, i) => {
            observer.observeInner(this, optionEl, 'selected', `options[${i}]`, 'options', selectedObserverCallback);
        });
    }
}

/**
 * Common processing after data change via both UI and API
 * @param {HTMLElement} el
 */
function processAfterStateChange(el) {
    const optionValue = el.dataset.optionValue;
    const optionIndex = Array.prototype.slice.call(el.parentNode.children).indexOf(el);
    this.setSelectedOption(optionValue);
    emitAndFire(this, 'listbox-change', {
        index: optionIndex,
        selected: [optionValue],
        el
    });
}

/**
 * Will set the appropriate value for the option in state, view, and the hidden form select, and emit an event
 * @param {String} optionValue
 */
function setSelectedOption(optionValue) {
    const newOptionSelected = this.state.options.filter(option => option.value.toString() === optionValue)[0];
    const newOptionSelectedValue = newOptionSelected && newOptionSelected.value;
    let options = this.clearComboboxSelections(this.state.options);

    options = options.map(option => {
        if (option.value === newOptionSelectedValue) {
            option.selected = true;
            this.setState('selected', option);
            this.update();
        }
        return option;
    });

    this.setState('options', options);
}

/**
 * Resets all options to un-selected
 * @param {Array} options
 */
function clearComboboxSelections(options) {
    return options.map(option => {
        option.selected = false;
        return option;
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    processAfterStateChange,
    setSelectedOption,
    clearComboboxSelections
});
