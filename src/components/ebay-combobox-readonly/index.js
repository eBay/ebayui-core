const markoWidgets = require('marko-widgets');
const Expander = require('makeup-expander');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

const comboboxOptionsClass = 'combobox__listbox';
const comboboxExpanderClass = 'combobox__control';
const comboboxHostSelector = `.${comboboxExpanderClass} > input`;
const comboboxBtnClass = 'combobox__control';
const comboboxSelectedOptionSelector = '.combobox__option[role=option][aria-selected=true]';

function getInitialState(input) {
    const options = (input.options || []).map(option => ({
        htmlAttributes: processHtmlAttributes(option, [
            "class",
            "style",
            "value",
            "text",
            "selected"
        ]),
        class: option.class,
        style: option.style,
        value: option.value,
        text: option.text,
        selected: Boolean(option.selected),
        renderBody: option.renderBody
    }));

    const selectedOption = options.filter(option => option.selected)[0] || options[0];

    if (options.length > 0 && selectedOption.value === options[0].value) {
        options[0].selected = true;
    }

    return {
        htmlAttributes: processHtmlAttributes(input, [
            "class",
            "style",
            "name",
            "value",
            "text",
            "options",
            "disabled",
            "borderless"
        ]),
        class: input.class,
        style: input.style,
        name: input.name,
        options,
        selected: selectedOption,
        disabled: input.disabled,
        borderless: Boolean(input.borderless)
    };
}

function getTemplateData(state) {
    const comboboxClass = ['combobox', state.class];
    const btnClass = [comboboxBtnClass];
    const optionsClass = [comboboxOptionsClass];

    if (state.borderless) {
        btnClass.push('combobox__control--borderless');
    }

    return {
        htmlAttributes: state.htmlAttributes,
        class: comboboxClass,
        style: state.style,
        btnClass,
        optionsClass,
        name: state.name,
        selectedOption: state.selected,
        options: state.options,
        disabled: state.disabled
    };
}

function init() {
    if (this.state.options && this.state.options.length > 0) {
        this.expander = new Expander(this.el, {
            autoCollapse: true,
            expandOnClick: !this.state.disabled,
            contentSelector: `.${comboboxOptionsClass}`,
            hostSelector: comboboxHostSelector,
            expandedClass: 'combobox--expanded',
            simulateSpacebarClick: true
        });

        scrollKeyPreventer.add(this.el.querySelector(comboboxHostSelector));
        scrollKeyPreventer.add(this.el.querySelector(`.${comboboxOptionsClass}`));
    }
}

function handleExpand() {
    elementScroll.scroll(this.el.querySelector(comboboxSelectedOptionSelector));
    this.emit('combobox-expand');
}

function handleCollapse() {
    this.emit('combobox-collapse');
}

/**
 * Handle mouse click for option
 * @param {MouseEvent} event
 */
function handleOptionClick(event) {
    let el;

    // find the element with the data
    // start with the target element
    if (event.target.dataset.optionValue) {
        el = event.target;
    // check up the tree one level (in case option text or status was clicked)
    } else if (event.target.parentNode.dataset.optionValue) {
        el = event.target.parentNode;
    }

    this.processAfterStateChange(el);
    this.expander.collapse();
    this.el.querySelector(comboboxHostSelector).focus();
}

/**
 * Handle selection of options when the combobox is closed
 * https://ebay.gitbooks.io/mindpatterns/content/input/listbox.html#keyboard
 * @param {KeyboardEvent} event
 */
function handleComboboxKeyDown(event) {
    eventUtils.handleUpDownArrowsKeydown(event, () => {
        const currentSelectedIndex = findIndex(this.state.options, option => option.selected);
        const options = clearComboboxSelections(this.state.options);
        let selectElementIndex = currentSelectedIndex;

        switch (event.charCode || event.keyCode) {
            // down
            case 40:
                selectElementIndex = traverseOptions(options, currentSelectedIndex, 1);
                break;
            // up
            case 38:
                selectElementIndex = traverseOptions(options, currentSelectedIndex, -1);
                break;
            default:
                break;
        }

        options[selectElementIndex].selected = true;

        this.setState('options', options);
        this.processAfterStateChange(this.getEl('combobox__listbox').children[selectElementIndex]);
    });

    eventUtils.handleEscapeKeydown(event, () => {
        this.expander.collapse();
        this.el.querySelector(comboboxHostSelector).focus();
    });
}

/**
 * Traverse the options forward or backward for the next/prev option
 * @param {Array} options
 * @param {Number} currentIndex
 * @param {Number} distance
 * @returns {Number}
 */
function traverseOptions(options, currentIndex, distance) {
    let goToIndex = currentIndex;

    if (distance < 0 && currentIndex !== 0) {
        goToIndex = (currentIndex + options.length + distance) % options.length;
    } else if (distance > 0 && currentIndex !== (options.length - 1)) {
        goToIndex = (currentIndex + distance) % options.length;
    }

    return goToIndex;
}

/**
 * Common processing after data change via both UI and API
 * @param {HTMLElement} el
 */
function processAfterStateChange(el) {
    const optionValue = el.dataset.optionValue;
    const optionIndex = Array.prototype.slice.call(el.parentNode.children).indexOf(el);
    this.setSelectedOption(optionValue);
    elementScroll.scroll(el);
    this.emit('combobox-change', {
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
    handleExpand,
    handleCollapse,
    handleOptionClick,
    handleComboboxKeyDown,
    processAfterStateChange,
    setSelectedOption,
    clearComboboxSelections
});
