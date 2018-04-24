const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getTemplateData(state, input) {
    const type = input.type;
    const name = input.name;

    // adds entry to global require cache, for use with icon-placeholder
    if (type === 'inline') {
        try {
            require(`./internal/${name}.txt`);
        } catch (e) {} // eslint-disable-line no-empty
    }

    return {
        type: input.type,
        name,
        htmlAttributes: processHtmlAttributes(input),
        classes: ['icon', `icon--${name}`, input.class]
    };
}

module.exports = markoWidgets.defineComponent({
    template,
    getTemplateData
});
