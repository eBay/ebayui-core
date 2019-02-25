const markoWidgets = require('marko-widgets');
const ActiveDescendant = require('makeup-active-descendant');
const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
// const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const comboboxOptionsClass = 'combobox__options';
const comboboxExpanderClass = 'combobox__control';
const comboboxHostSelector = `.${comboboxExpanderClass} > input`;
const comboboxBtnClass = 'combobox__control';
const comboboxOptionSelector = '.combobox__option[role=option]';
const comboboxSelectedOptionSelector = '.combobox__option[role=option].combobox__option--active';

function getInitialState(input) {
    let options = (input.options || []).map(option => ({
        htmlAttributes: processHtmlAttributes(option),
        class: option.class,
        style: option.style,
        value: option.value,
        text: option.text,
        selected: Boolean(option.selected),
        renderBody: option.renderBody,
        visible: Boolean(option.selected)
    }));

    const selectedOption = options.find(option => option.selected);
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
        grow: input.grow,
        disabled: input.disabled,
        borderless: Boolean(input.borderless),
        showListbox: true
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
        grow: state.grow,
        disabled: state.disabled,
        showListbox: state.showListbox
    };
}

function init() {
    const optionEls = getOptionEls(this.el);
    const selectedOptionIndex = this.state.options.findIndex(option => option.selected);
    const activeDescendantFocusEl = this.el.querySelector(comboboxHostSelector);
    const activeDescendantOwnedEl = this.el.querySelector(`.${comboboxOptionsClass}`);

    if (this.state.options && this.state.options.length > 0) {
        this.activeDescendant = ActiveDescendant.createLinear(
            this.el,
            activeDescendantFocusEl,
            activeDescendantOwnedEl,
            comboboxOptionSelector, {
                activeDescendantClassName: 'combobox__option--active',
                autoInit: (selectedOptionIndex || 0),
                autoReset: null
            }
        );

        // this.el.addEventListener('activeDescendantChange', handleComboboxChange.bind(this));

        this.expander = new Expander(this.el, {
            autoCollapse: true,
            expandOnFocus: true,
            expandOnClick: this.state.readonly && !this.state.disabled,
            collapseOnFocusOut: !this.state.readonly,
            contentSelector: `.${comboboxOptionsClass}`,
            hostSelector: comboboxHostSelector,
            expandedClass: 'combobox--expanded',
            simulateSpacebarClick: true
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

        scrollKeyPreventer.add(this.el.querySelector(`.${comboboxOptionsClass}`));
    }
}

function handleExpand() {
    elementScroll.scroll(this.el.querySelector(comboboxSelectedOptionSelector));
    this.moveCursorToEnd();
    emitAndFire(this, 'combobox-expand');
}

function handleCollapse() {
    emitAndFire(this, 'combobox-collapse');
}

function getOptionEls(el) {
    return el.querySelectorAll(comboboxOptionSelector);
}

function moveCursorToEnd() {
    const currentInput = this.el.querySelector(`${comboboxHostSelector}[type="text"]`);

    if (currentInput) {
        const len = currentInput.value.length;
        currentInput.setSelectionRange(len, len);
    }
}

function handleComboboxKeyDown(evt) {
    // do something with evt
    return evt;
}

function handleComboboxKeyUp(evt) {
    const newValue = evt.target.value;
    // this.setState('selectedOptionText', newValue);
    this.filterOptionsDisplay(newValue);
}

function filterOptionsDisplay(query) {
    let showListbox = false;

    const options = this.state.options.map(option => {
        const optionText = option.text;
        const queryRegex = new RegExp(`${query}`, 'i');
        const shouldBeVisible = queryRegex.test(optionText);
        // const foundText = optionText.match(queryRegex);
        // const splitQueryFromString = optionText.split(queryRegex);

        if (shouldBeVisible) {
            showListbox = true;
        }

        // option.foundText = foundText;
        // option.preFoundText = splitQueryFromString[0];
        // option.postFoundText = splitQueryFromString[1];
        option.visible = shouldBeVisible;
        return option;
    });

    this.setState('showListbox', showListbox);
    this.setState('options', options);
    this.update();
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    handleExpand,
    handleCollapse,
    moveCursorToEnd,
    handleComboboxKeyDown,
    handleComboboxKeyUp,
    filterOptionsDisplay
});
