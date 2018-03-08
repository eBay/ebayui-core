const processHtmlAttributes = require('../../common/html-attributes');
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
    status: 'confirmation'
};

function getTemplateData(state, input) {
    const type = input.type || defaults.type;
    const headingTag = (type === 'page' && input.headingLevel) ? `h${input.headingLevel}` : constants[type].headingTag;
    const status = input.status || defaults.status;

    return {
        mainTag: constants[type].mainTag,
        headingTag: headingTag,
        contentTag: constants[type].contentTag,
        type,
        status,
        ariaText: input.ariaText || '',
        htmlAttributes: processHtmlAttributes(input),
        renderBody: input.renderBody,
        mainClass: [`${type}-notice`, `${type}-notice--${status}`, input.class],
        headingClass: `${type}-notice__status`,
        contentClass: `${type}-notice__content`
    };
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getTemplateData
});
