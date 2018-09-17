const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const selectOptionSelector = 'select > option';

function getInitialState(input) {
    const options = (input.options || []).map(option => {
        const selected = option.selected;

        return {
            htmlAttributes: processHtmlAttributes(option),
            class: option.class,
            style: option.style,
            value: option.value,
            text: option.text,
            selected: Boolean(selected)
        };
    });

    const selectedOption = options.filter(option => option.selected)[0] || options[0];

    if (options.length > 0 && selectedOption.value === options[0].value) {
        options[0].selected = true;
    }

    return {
        htmlAttributes: processHtmlAttributes(input),
        class: input.class,
        style: input.style,
        options,
        selected: selectedOption,
        borderless: Boolean(input.borderless),
        disabled: Boolean(input.disabled)
    };
}

function getTemplateData(state) {
    const selectClass = ['select', state.class];

    if (state.borderless) {
        selectClass.push('select--borderless');
    }

    return {
        htmlAttributes: state.htmlAttributes,
        class: selectClass,
        style: state.style,
        selectedOption: state.selected,
        options: state.options,
        disabled: state.disabled
    };
}

function init() {
    const optionEls = this.el.querySelectorAll(selectOptionSelector);

    const selectedIndexObserverCallback = (selectedIndex) => {
        if (optionEls[selectedIndex]) {
            this.processAfterStateChange(optionEls[selectedIndex]);
        } else {
            console.error('Please provide a valid index.');
        }
    };

    const valueObserverCallback = (optionValue) => {
        const optionFind = (option) => option.value.toString() === optionValue.toString();
        const newOptionSelected = this.state.options.find(optionFind);
        let optionIndex;

        if (newOptionSelected) {
            this.state.options.map((option, i) => {
                if (option.value === newOptionSelected.value) {
                    optionIndex = i;
                }
            });

            this.processAfterStateChange(optionEls[optionIndex]);
        }
    };

    if (this.state.options && this.state.options.length > 0) {
        observer.observeRoot(this, ['selectedIndex'], selectedIndexObserverCallback);
        observer.observeRoot(this, ['value'], valueObserverCallback);
    }
}

/**
 * Common processing after data change via both UI and API
 * @param {HTMLElement} el
 */
function processAfterStateChange(el) {
    const optionValue = el.value;
    const optionIndex = Array.prototype.slice.call(el.parentNode.children).indexOf(el);
    this.setSelectedOption(optionValue);
    emitAndFire(this, 'select-change', {
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
    const optionFind = (option) => option.value.toString() === optionValue.toString();
    const newOptionSelected = this.state.options.find(optionFind);
    const newOptionSelectedValue = newOptionSelected && newOptionSelected.value;
    let options = this.state.options;

    options = options.map((option, i) => {
        if (option.value === newOptionSelectedValue) {
            option.selected = true;
            this.setState('selectedIndex', i);
            this.setState('value', option.value);
        } else {
            option.selected = false;
        }
        return option;
    });
    this.setState('options', options);
    this.update();
}

function optionChanged(e) {
    this.setSelectedOption(e.target.value);
    const optionIndex = e.target.selectedIndex;
    const optionEls = this.el.querySelectorAll(selectOptionSelector);
    emitAndFire(this, 'select-change', {
        index: optionIndex,
        selected: [e.target.value],
        el: optionEls[optionIndex]
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    processAfterStateChange,
    setSelectedOption,
    optionChanged
});
