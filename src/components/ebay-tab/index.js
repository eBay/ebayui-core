const markoWidgets = require('marko-widgets');
const rovingTabindex = require('makeup-roving-tabindex');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

function getInitialState(input) {
    const fake = Boolean(input.fake);
    const activation = input.activation === 'manual' ? 'manual' : 'auto';
    const index = parseInt(input.index) || 0;
    const headings = (input.headings || []).map(heading => ({
        htmlAttributes: processHtmlAttributes(heading),
        classes: fake ? heading.class : [heading.class, 'tabs__item'],
        style: heading.style,
        renderBody: heading.renderBody,
        href: heading.href
    }));
    const panels = (input.panels || []).map(panel => ({
        htmlAttributes: processHtmlAttributes(panel),
        classes: [panel.class, prefix(fake, 'tabs__panel')],
        style: panel.style,
        renderBody: panel.renderBody
    }));

    return {
        htmlAttributes: processHtmlAttributes(input),
        classes: [input.class, prefix(fake, 'tabs')],
        style: input.style,
        index,
        activation,
        fake,
        headings,
        panels
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.headingsEl = this.getEl('headings');
    if (!this.state.fake) {
        const linearRovingTabindex = rovingTabindex.createLinear(this.headingsEl, 'div', { index: this.state.index });
        linearRovingTabindex.wrap = true;
    }
    observer.observeRoot(this, ['index'], index => this.processStateChange(parseInt(index)), true);
}

/**
 * Common processing of index change via both UI and API
 * @param {Number} index
 */
function processStateChange(index) {
    if (index >= 0 && index < this.state.headings.length && index !== this.state.index) {
        this.setState('index', index);
        emitAndFire(this, 'tab-select', { index });
    }
}

/**
 * Handle mouse click on heading
 * @param {MouseEvent} e
 */
function handleHeadingClick(e) {
    this.processStateChange(getElementIndex(getHeadingEl(e, this.state.fake)));
}

/**
 * Get heading element from event
 * @param {Event} e
 * @param {Boolean} isFake - If the tabs are fake
 */
function getHeadingEl(e, isFake) {
    let headingEl = e.target;
    const headingClass = prefix(isFake, 'tabs__item');
    while (!headingEl.classList.contains(headingClass)) {
        headingEl = headingEl.parentNode;
    }
    return headingEl;
}

/**
 * Get 0-based index of element within its parent
 * @param {HTMLElement} headingEl
 */
function getElementIndex(headingEl) {
    return Array.prototype.slice.call(headingEl.parentNode.children).indexOf(headingEl);
}

/**
 * Handle a11y for heading
 * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
 * @param {KeyboardEvent} e
 */
function handleHeadingKeydown(e) {
    eventUtils.handleLeftRightArrowsKeydown(e, () => {
        e.preventDefault();
        let index = getElementIndex(getHeadingEl(e, this.state.fake));
        const maxIndex = this.headingsEl.children.length - 1;
        const keyCode = e.charCode || e.keyCode;
        if (keyCode === 37) index = index === 0 ? maxIndex : index - 1;
        if (keyCode === 39) index = index === maxIndex ? 0 : index + 1;

        this.headingsEl.children[index].focus();
        if (this.state.activation === 'auto') this.processStateChange(index);
    });
    eventUtils.handleActionKeydown(e, () => {
        e.preventDefault();
        this.handleHeadingClick(e);
    });
}

/**
 * Helper to prefix a class based on fake status
 * @param {Boolean} fake
 * @param {String} c
 */
function prefix(fake, c) {
    return (fake ? 'fake-' : '') + c;
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    processStateChange,
    handleHeadingClick,
    handleHeadingKeydown
});
