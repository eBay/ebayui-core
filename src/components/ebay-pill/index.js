const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const multilineEllipsis = require('../../common/multiline-ellipsis');
const template = require('./template.marko');
const pillSelector = 'button.btn--pill';

function getInitialState(input) {
    return {
        htmlAttributes: processHtmlAttributes(input),
        checked: input.checked,
        disabled: input.disabled,
        style: input.style,
        href: input.href
    };
}

function getTemplateData(state) {
    state.priority = (state.checked ? 'primary' : 'secondary');
    return state;
}

function onRender() {
    // determine whether the content overflows
    multilineEllipsis.truncate(this.el.querySelector(pillSelector));
}

function init() {
    this.el.querySelector(pillSelector).addEventListener('click', () => {
        const newCheckedState = !this.state.checked;
        this.setState('checked', newCheckedState);
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    onRender,
    init
});
