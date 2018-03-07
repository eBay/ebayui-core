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
    level: 'page',
    type: 'confirmation'
};
function getInitialState(input) {
    return input;
}
function getTemplateData(state) {
    const level = state.level || defaults.level;
    const headingTag = (level === 'page' && state.headingTag) ? state.headingTag : constants[level].headingTag;

    return {
        mainTag: constants[level].mainTag,
        headingTag: headingTag,
        contentTag: constants[level].contentTag,
        level: level,
        type: state.type || defaults.type,
        ariaText: state.ariaLabelText || '',
        htmlAttributes: processHtmlAttributes(state),
        renderBody: state.renderBody,
        class: state.class || ''
    };
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData
});
