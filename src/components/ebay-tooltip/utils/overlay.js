const Expander = require('makeup-expander');

function initOverlay(widget) {
    const isHostPresent = widget.el.querySelector(`.${widget.state.type}__host`);

    if (isHostPresent) {
        widget.expander = new Expander(widget.el, {
            hostSelector: `.${widget.state.type}__host`,
            contentSelector: `.${widget.state.type}__overlay`,
            focusManagement: widget.state.type === 'tourtip' ? null : 'focusable',
            expandOnFocus: widget.state.type === 'tooltip',
            expandOnHover: widget.state.type === 'tooltip',
            expandOnClick: widget.state.type === 'infotip',
            autoCollapse: widget.state.type === 'tooltip'
        });
    }
}

function alignOverlay(overlay, location, styles) {
    if (!overlay) {
        return;
    }

    if (styles.styleTop || styles.styleLeft || styles.styleRight || styles.styleBottom) {
        overlay.style.left = styles.styleLeft;
        overlay.style.right = styles.styleRight;
        overlay.style.top = styles.styleTop;
        overlay.style.bottom = styles.styleBottom;

        return;
    }

    let overlayLeft;
    let overlayRight;
    let overlayTop;
    let overlayBottom;
    let overlayTransform;

    // determine the offsets for each type of location
    switch (location) {
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

function closeOverlay(widget) {
    widget.expander.collapse();
}

module.exports = { initOverlay, alignOverlay, closeOverlay };
