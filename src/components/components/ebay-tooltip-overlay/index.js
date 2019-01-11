const template = require('./template.marko');

function getTemplateData(state, data) {
    let overlayTop = data.styleTop;
    let overlayLeft = data.styleLeft;
    let overlayBottom = data.styleBottom;
    let overlayRight = data.styleRight;
    let overlayTransform = '';

    if (!data.styleTop && !data.styleLeft && !data.styleRight && !data.styleBottom) {
        // determine the offsets for each type of location
        switch (data.location) {
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
    }

    const templateData = Object.assign({}, data, {
        overlayStyle: {
            'top': overlayTop,
            'left': overlayLeft,
            'bottom': overlayBottom,
            'right': overlayRight,
            'transform': overlayTransform
        },
        typeRoles: {
            'tourtip': 'region',
            'tooltip': 'tooltip'
        }
    });

    return templateData;
}

function handleCloseButton() {
    this.emit('tooltip-close');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getTemplateData,
    handleCloseButton
});
