const Expander = require('makeup-expander');
const emitAndFire = require('../../../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    input.location = input.location || 'bottom';

    return input;
}

function getTemplateData(state) {
    return state;
}

function init() {
    const isHostPresent = this.el.querySelector(`.${this.state.type}__host`);

    if (isHostPresent) {
        this.expander = new Expander(this.el, {
            hostSelector: `.${this.state.type}__host`,
            contentSelector: `.${this.state.type}__overlay`,
            focusManagement: this.state.type === 'tourtip' ? null : 'focusable',
            expandOnFocus: this.state.type === 'tooltip',
            expandOnHover: this.state.type === 'tooltip',
            expandOnClick: this.state.type === 'infotip',
            autoCollapse: this.state.type === 'tooltip'
        });
    }

    this.alignOverlay();
}

function handleExpand() {
    this.alignOverlay();
    this.setState('expanded', true);
    emitAndFire(this, 'tooltip-expand');
}

function handleCollapse() {
    this.setState('expanded', false);
    emitAndFire(this, 'tooltip-collapse');
}

function handleTooltipClose() {
    this.setState('expanded', false);
    this.expander.collapse();
    emitAndFire(this, 'tooltip-close');
}

function alignOverlay() {
    const overlay = this.el.querySelector(`.${this.state.type}__overlay`);

    if (!overlay) {
        return;
    }

    if (this.state.styleTop || this.state.styleLeft || this.state.styleRight || this.state.styleBottom) {
        overlay.style.left = this.state.styleLeft;
        overlay.style.right = this.state.styleRight;
        overlay.style.top = this.state.styleTop;
        overlay.style.bottom = this.state.styleBottom;

        return;
    }

    let overlayLeft;
    let overlayRight;
    let overlayTop;
    let overlayBottom;
    let overlayTransform;

    // determine the offsets for each type of location
    switch (this.state.location) {
        case 'left':
            overlayTransform = 'translateX(16px) translateY(-50%)';
            overlayLeft = '100%';
            overlayRight = 'auto';
            overlayTop = '50%';
            overlayBottom = 'auto';
            break;
        case 'left-top':
            overlayTransform = 'translateX(16px)';
            overlayLeft = '100%';
            overlayRight = 'auto';
            overlayTop = '-8px';
            overlayBottom = 'auto';
            break;
        case 'left-bottom':
            overlayTransform = 'translateX(16px)';
            overlayLeft = '100%';
            overlayRight = 'auto';
            overlayTop = 'auto';
            overlayBottom = '-8px';
            break;
        case 'right':
            overlayTransform = 'translateX(-16px) translateY(-50%)';
            overlayLeft = 'auto';
            overlayRight = '100%';
            overlayTop = '50%';
            overlayBottom = 'auto';
            break;
        case 'right-top':
            overlayTransform = 'translateX(-16px)';
            overlayLeft = 'auto';
            overlayRight = '100%';
            overlayTop = '-8px';
            overlayBottom = 'auto';
            break;
        case 'right-bottom':
            overlayTransform = 'translateX(-16px)';
            overlayLeft = 'auto';
            overlayRight = '100%';
            overlayTop = 'auto';
            overlayBottom = '-8px';
            break;
        case 'top':
            overlayTransform = 'translateX(-50%)';
            overlayLeft = '50%';
            overlayRight = 'auto';
            overlayTop = 'calc(100% + 16px)';
            overlayBottom = 'auto';
            break;
        case 'top-left':
            overlayLeft = '0px';
            overlayRight = 'auto';
            overlayTop = 'calc(100% + 16px)';
            overlayBottom = 'auto';
            break;
        case 'top-right':
            overlayLeft = 'auto';
            overlayRight = '0px';
            overlayTop = 'calc(100% + 16px)';
            overlayBottom = 'auto';
            break;
        case 'bottom-right':
            overlayLeft = 'auto';
            overlayRight = '0px';
            overlayTop = 'auto';
            overlayBottom = 'calc(100% + 16px)';
            break;
        case 'bottom-left':
            overlayLeft = '0px';
            overlayRight = 'auto';
            overlayTop = 'auto';
            overlayBottom = 'calc(100% + 16px)';
            break;
        case 'bottom':
        default:
            overlayTransform = 'translateX(-50%)';
            overlayLeft = '50%';
            overlayRight = 'auto';
            overlayTop = 'auto';
            overlayBottom = 'calc(100% + 16px)';
            break;
    }

    overlay.style.left = overlayLeft;
    overlay.style.right = overlayRight;
    overlay.style.top = overlayTop;
    overlay.style.bottom = overlayBottom;
    overlay.style.transform = overlayTransform;
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    handleExpand,
    handleCollapse,
    handleTooltipClose,
    alignOverlay
});
