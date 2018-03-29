const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

const constants = {
    'inline': {
        headingTag: 'span',
        contentTag: 'span',
        mainTag: 'div'
    },
    'page': {
        headingTag: 'h2',
        contentTag: 'div',
        mainTag: 'section'
    }
};

const defaults = {
    type: 'page',
    status: 'priority',
    hidden: false,
    dismissible: false
};

function getInitialState(input) {
    const hidden = defaults.hidden;
    const type = input.type || defaults.type;
    const headingTag = (type === 'page' && input.headingLevel) ? `h${input.headingLevel}` : constants[type].headingTag;
    const status = input.status || defaults.status;
    const dismissible = (input.dismissible && type === 'page') || defaults.dismissible;

    return {
        mainTag: constants[type].mainTag,
        headingTag: headingTag,
        contentTag: constants[type].contentTag,
        dismissible,
        type,
        status,
        hidden,
        ariaText: input.ariaText || '',
        ariaLabelClose: input.ariaLabelClose || '',
        htmlAttributes: processHtmlAttributes(input),
        mainClass: [`${type}-notice`, `${type}-notice--${status}`, input.class],
        headingClass: `${type}-notice__status`,
        contentClass: `${type}-notice__content`
    };
}
function getTemplateData(state) {
    return state;
}

function init() {
    observer.observeRoot(this, ['hidden'], () => {
        this.processAfterStateChange();
    });
}
/**
 * Common processing after data change via both UI and API
 */
function processAfterStateChange() {
    if (this.state.hidden) {
        emitAndFire(this, 'notice-hide');
    } else {
        emitAndFire(this, 'notice-show');
    }
}

function onDismiss() {
    this.setState('hidden', true);
    this.processAfterStateChange();
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    processAfterStateChange,
    onDismiss
});
