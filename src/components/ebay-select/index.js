const markoWidgets = require('marko-widgets');
const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const listboxOptionsClass = 'listbox__options';
const listboxExpanderClass = 'listbox__control';
const listboxHostSelector = `.${listboxExpanderClass} > input`;
const listboxBtnClass = 'listbox__control';
const listboxOptionSelector = '.listbox__option[role=option]';

function getInitialState(input) {
    const options = (input.options || []).map(option => {
        const classes = [option.class];
        const selected = option.selected;

        return {
            classes,
            value: option.value,
            label: option.label,
            selected: Boolean(selected),
            htmlAttributes: processHtmlAttributes(option),
            renderBody: option.renderBody
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
        grow: input.grow,
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    const listboxClass = ['listbox', state.class];
    const btnClass = [listboxBtnClass];
    const optionsClass = [listboxOptionsClass];

    return {
        class: listboxClass,
        btnClass,
        optionsClass,
        name: state.name,
        selectedOption: state.selected,
        options: state.options,
        grow: state.grow,
        htmlAttributes: state.htmlAttributes
    };
}

function init() {
    const optionEls = this.el.querySelectorAll(listboxOptionSelector);

    if (this.state.options && this.state.options.length > 0) {
        this.expander = new Expander(this.el, {
            autoCollapse: true,
            click: true,
            contentSelector: `.${listboxOptionsClass}`,
            hostSelector: listboxHostSelector,
            hostContainerClass: `${listboxBtnClass}`,
            spacebar: true
        });

        observer.observeRoot(this, ['selected'], (index) => {
            this.processAfterStateChange(optionEls[index]);
        });

        const selectedObserverCallback = (optionEl) => {
            this.processAfterStateChange(optionEl);
        };

        this.optionEls = optionEls.forEach((optionEl, i) => {
            observer.observeInner(this, optionEl, 'selected', `options[${i}]`, 'options', selectedObserverCallback);
        });

        scrollKeyPreventer.add(this.el.querySelector(listboxHostSelector));
        scrollKeyPreventer.add(this.el.querySelector(`.${listboxOptionsClass}`));
    }
}

function handleExpand() {
    emitAndFire(this, 'listbox-expand');
}

function handleCollapse() {
    emitAndFire(this, 'listbox-collapse');
}

/**
 * Handle mouse click for option
 * @param {MouseEvent} event
 */
function handleOptionClick(event) {
    this.processAfterStateChange(event.target);
    this.expander.collapse();
    this.el.querySelector(listboxHostSelector).focus();
}

/**
 * Handle selection of options when the listbox is closed
 * https://ebay.gitbooks.io/mindpatterns/content/input/listbox.html#keyboard
 * @param {KeyboardEvent} event
 */
function handleListboxKeyDown(event) {
    eventUtils.handleUpDownArrowsKeydown(event, () => {
        const currentSelectedIndex = this.state.options.findIndex(option => option.selected);
        const options = clearListboxSelections(this.state.options);
        const optionEls = this.el.querySelectorAll(listboxOptionSelector);
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
        this.processAfterStateChange(optionEls[selectElementIndex]);
    });

    eventUtils.handleEscapeKeydown(event, () => {
        this.expander.collapse();
        this.el.querySelector(listboxHostSelector).focus();
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
    let options = this.clearListboxSelections(this.state.options);

    options = options.map(option => {
        if (option.value === newOptionSelectedValue) {
            option.selected = true;
            this.setState('selected', option);
        }
        return option;
    });

    this.setState('options', options);
}

/**
 * Resets all options to un-selected
 * @param {Array} options
 */
function clearListboxSelections(options) {
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
    handleListboxKeyDown,
    processAfterStateChange,
    setSelectedOption,
    clearListboxSelections
});
