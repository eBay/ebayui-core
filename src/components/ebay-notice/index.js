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
    hidden: false
};

function getInitialState(input) {
    const hidden = input.hidden || defaults.hidden;
    const type = input.type || defaults.type;
    const headingTag = (type === 'page' && input.headingLevel) ? `h${input.headingLevel}` : constants[type].headingTag;
    const status = input.status || defaults.status;

    return {
        mainTag: constants[type].mainTag,
        headingTag: headingTag,
        contentTag: constants[type].contentTag,
        type,
        status,
        hidden,
        ariaText: input.ariaText || '',
        htmlAttributes: processHtmlAttributes(input),
        renderBody: input.renderBody,
        mainClass: [`${type}-notice`, `${type}-notice--${status}`, input.class],
        headingClass: `${type}-notice__status`,
        contentClass: `${type}-notice__content`
    };
}
function getTemplateData(state) {
    return state;
}

function init() {
    observer.observeRoot(this, ['hidden']);
}

function onDismiss() {
    this.setState('hidden', true);
    emitAndFire(this, 'notice-dismissed');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    onDismiss
});
