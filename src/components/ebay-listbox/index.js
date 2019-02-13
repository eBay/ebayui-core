const markoWidgets = require('marko-widgets');
const Expander = require('makeup-expander');
const ActiveDescendant = require('makeup-active-descendant');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const listboxOptionsClass = 'listbox__options';
const listboxExpanderClass = 'listbox__control';
const listboxHostSelector = `.${listboxExpanderClass}`;
const listboxBtnClass = 'listbox__control';
const listboxOptionSelector = '.listbox__option[role=option]';
const listboxSelectedOptionSelector = '.listbox__option[role=option].listbox__option--active';

function getInitialState(input) {
    const options = (input.options || []).map(option => ({
        htmlAttributes: processHtmlAttributes(option),
        class: [option.class, (option.selected && 'listbox__option--active')],
        style: option.style,
        value: option.value,
        text: option.text,
        selected: Boolean(option.selected),
        renderBody: option.renderBody
    }));

    const selectedOption = options.filter(option => option.selected)[0] || options[0];

    if (options.length > 0 && selectedOption.value === options[0].value) {
        options[0].selected = true;
        options[0].class.push('listbox__option--active');
    }

    return {
        htmlAttributes: processHtmlAttributes(input),
        class: input.class,
        style: input.style,
        name: input.name,
        options,
        selected: selectedOption,
        grow: input.grow,
        disabled: input.disabled,
        borderless: Boolean(input.borderless)
    };
}

function getTemplateData(state) {
    const listboxClass = ['listbox', state.class];
    const btnClass = [listboxBtnClass];
    const optionsClass = [listboxOptionsClass];

    if (state.borderless) {
        btnClass.push('expand-btn--borderless');
    }

    return {
        htmlAttributes: state.htmlAttributes,
        class: listboxClass,
        style: state.style,
        btnClass,
        optionsClass,
        name: state.name,
        selectedOption: state.selected,
        options: state.options,
        grow: state.grow,
        disabled: state.disabled
    };
}

function init() {
    const optionEls = this.el.querySelectorAll(listboxOptionSelector);
    const selectedOptionIndex = this.state.options.findIndex(option => option.selected);

    if (this.state.options && this.state.options.length > 0) {
        this.activeDescendant = ActiveDescendant.createLinear(
            this.el,
            this.el.querySelector(listboxHostSelector),
            this.el.querySelector(`.${listboxOptionsClass}`),
            listboxOptionSelector, {
                activeDescendantClassName: 'listbox__option--active',
                autoInit: (selectedOptionIndex || 0),
                autoReset: null
            },
        );

        this.expander = new Expander(this.el, {
            autoCollapse: true,
            expandOnClick: !this.state.disabled,
            contentSelector: `.${listboxOptionsClass}`,
            hostSelector: listboxHostSelector,
            expandedClass: 'listbox--expanded',
            focusManagement: 'content',
            simulateSpacebarClick: true
        });

        this.el.addEventListener('activeDescendantChange', handleListboxChange.bind(this));

        observer.observeRoot(this, ['selected'], (index) => {
            this.processAfterStateChange(optionEls[index]);
        });

        observer.observeRoot(this, ['disabled'], () => {
            this.expander.expandOnClick = !this.state.disabled;
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
    elementScroll.scroll(this.el.querySelector(listboxSelectedOptionSelector));
    emitAndFire(this, 'listbox-expand');
}

function handleCollapse() {
    emitAndFire(this, 'listbox-collapse');
}

function handleListboxChange(event) {
    const options = clearListboxSelections(this.state.options);
    const optionEls = this.el.querySelectorAll(listboxOptionSelector);
    const selectElementIndex = event.detail.toIndex;

    options[selectElementIndex].selected = true;
    this.setState('options', options);
    this.processAfterStateChange(optionEls[selectElementIndex]);
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
    handleListboxChange,
    processAfterStateChange,
    setSelectedOption,
    clearListboxSelections
});
