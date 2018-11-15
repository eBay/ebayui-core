const markoWidgets = require('marko-widgets');
const multilineEllipsis = require('../../common/multiline-ellipsis');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');
const pillSelector = 'button.btn--pill, a.fake-btn--pill';

function getInitialState(input) {
    return {
        pressed: input.pressed,
        disabled: Boolean(input.disabled),
        style: input.style,
        class: input.class,
        href: input.href,
        a11yActiveText: input.a11yActiveText || 'Selected',
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    let buttonPillClass;

    if (state.href) {
        buttonPillClass = 'fake-btn--pill';
    } else {
        buttonPillClass = 'btn--pill';
    }

    state.classes = [buttonPillClass, state.class];
    state.priority = (state.pressed ? 'primary' : 'secondary');

    return state;
}

function onRender() {
    // determine whether the content overflows
    multilineEllipsis.truncate(this.el.querySelector(pillSelector));

    const pillBtn = this.el.querySelector(pillSelector);
    const activeTextSpan = pillBtn.querySelector('.pill__active-text');

    if (this.state.href && this.state.pressed && !activeTextSpan) {
        const selectedSpan = document.createElement('span');
        selectedSpan.setAttribute('class', 'pill__active-text clipped');
        selectedSpan.innerHTML = ` - ${this.state.a11yActiveText}`;
        pillBtn.appendChild(selectedSpan);
    } else {
        if (activeTextSpan) {
            pillBtn.removeChild(activeTextSpan);
        }
    }
}

function init() {
    const pillBtn = this.el.querySelector(pillSelector);

    this.subscribeTo(pillBtn).on('click', () => {
        const newPressedState = !this.state.pressed;
        this.setState('pressed', newPressedState);
    });

    this.subscribeTo(pillBtn).on('button-click', (originalEvent) => {
        emitAndFire(this, 'button-click', {
            originalEvent
        });
    });

    this.subscribeTo(pillBtn).on('button-escape', (originalEvent) => {
        emitAndFire(this, 'button-escape', {
            originalEvent
        });
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    onRender,
    init
});
