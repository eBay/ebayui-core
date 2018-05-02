const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const classes = ['radio'];
    const childClasses = ['radio__icon', 'radio__icon--inherit'];
    const inputTagClass = 'radio__control';

    if (input.class) {
        classes.push(input.class);
    }

    return {
        classes,
        inputTagClass,
        childClasses,
        disabled: Boolean(input.disabled),
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function handleClick() {
    if (!this.state.disabled) {
        emitAndFire(this, 'radio-change');
    }
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick
});
