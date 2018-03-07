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
    const model = {};
    model.level = state.level || defaults.level;
    model.type = state.type || defaults.type;
    const level = model.level;
    const headingTag = (level === 'page') ?
        (state.headingTag || constants[level].headingTag) : constants[level].headingTag;

    model.mainTag = constants[level].mainTag;
    model.headingTag = headingTag;
    model.contentTag = constants[level].contentTag;
    model.level = state.level || defaults.level;
    model.type = state.type || defaults.type;
    model.ariaText = state.ariaLabelText || '';
    model.htmlAttributes = processHtmlAttributes(state);
    model.renderBody = state.renderBody;
    model.class = state.class || '';

    return model;
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData
});
