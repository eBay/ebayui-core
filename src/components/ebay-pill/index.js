const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

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
    state.pillPriority = (state.checked ? 'primary' : 'secondary');
    return state;
}

function init() {
    const btn = this.el.querySelector('button.btn--pill');
    btn.addEventListener('click', e => {
        const newCheckedState = !this.state.checked;
        this.setState('checked', newCheckedState);
        emitAndFire(this, 'pill-click', e);
    });
}

module.exports = markoWidgets.defineComponent({
    init,
    template,
    getInitialState,
    getTemplateData
});
