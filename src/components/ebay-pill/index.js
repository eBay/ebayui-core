const markoWidgets = require('marko-widgets');
const multilineEllipsis = require('../../common/multiline-ellipsis');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');
const pillSelector = 'button.btn--pill, a.fake-btn--pill';

function getInitialState(input) {
    return {
        checked: input.checked,
        disabled: Boolean(input.disabled),
        style: input.style,
        class: input.class,
        href: input.href,
        ariaSelectedText: input.ariaSelectedText || 'Selected',
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
    state.priority = (state.checked ? 'primary' : 'secondary');

    return state;
}

function onRender() {
    // determine whether the content overflows
    multilineEllipsis.truncate(this.el.querySelector(pillSelector));

    const pillBtn = this.el.querySelector(pillSelector);
    const selectedTextSpan = pillBtn.querySelector('.pill__selected-text');

    if (this.state.href && this.state.checked && !selectedTextSpan) {
        const selectedSpan = document.createElement('span');
        selectedSpan.setAttribute('class', 'pill__selected-text clipped');
        selectedSpan.innerHTML = ` - ${this.state.ariaSelectedText}`;
        pillBtn.appendChild(selectedSpan);
    } else {
        if (selectedTextSpan) {
            pillBtn.removeChild(selectedTextSpan);
        }
    }
}

function init() {
    const pillBtn = this.el.querySelector(pillSelector);
    pillBtn.addEventListener('click', () => {
        const newCheckedState = !this.state.checked;
        this.setState('checked', newCheckedState);
    });

    pillBtn.addEventListener('button-click', (originalEvent) => {
        emitAndFire(this, 'button-click', {
            originalEvent
        });
    });

    pillBtn.addEventListener('button-escape', (originalEvent) => {
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
