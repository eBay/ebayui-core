const markoWidgets = require('marko-widgets');
const rovingTabindex = require('makeup-roving-tabindex');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

function getInitialState(input) {
    const fake = Boolean(input.fake);
    const index = parseInt(input.index) || 0;
    const headings = (input.headings || []).map(heading => ({
        renderBody: heading.renderBody,
        classes: fake ? heading.class : [heading.class, 'tabs__item'],
        href: heading.href,
        htmlAttributes: processHtmlAttributes(heading)
    }));
    const panels = (input.panels || []).map(panel => ({
        renderBody: panel.renderBody,
        classes: [panel.class, prefix(fake, 'tabs__panel')],
        htmlAttributes: processHtmlAttributes(panel)
    }));

    return {
        index,
        fake,
        headings,
        panels,
        classes: [input.class, prefix(fake, 'tabs')],
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.headingsEl = this.getEl('headings');
    if (!this.state.fake) {
        rovingTabindex.createLinear(this.headingsEl, 'div', { index: 0, autoReset: 0 });
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
    let headingEl = e.target;
    const headingClass = prefix(this.state.fake, 'tabs__item');
    while (!headingEl.classList.contains(headingClass)) {
        headingEl = headingEl.parentNode;
    }

    this.processStateChange(getElementIndex(headingEl));
}

/**
 * Get 0-based index of element within its parent
 * @param {HTMLElement} headingEl
 */
function getElementIndex(headingEl) {
    return Array.prototype.slice.call(headingEl.parentNode.children).indexOf(headingEl);
}

/**
 * Handle accessibility for heading
 * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
 * @param {KeyboardEvent} e
 */
function handleHeadingKeydown(e) {
    eventUtils.handleActionKeydown(e, () => this.handleHeadingClick(e));
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
