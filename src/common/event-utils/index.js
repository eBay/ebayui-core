/**
 * Generic keydown handler used by more specific cases
 * @param {Array} keyCodes: List of acceptable keyCodes
 * @param {KeyboardEvent} e
 * @param {Function} callback
 */
function handleKeydown(keyCodes, e, callback) {
    const keyCode = e.charCode || e.keyCode;
    if (keyCodes.indexOf(keyCode) !== -1) {
        callback();
    }
}

// space and enter keys
function handleActionKeydown(e, callback) {
    handleKeydown([32, 13], e, callback);
}

function handleEscapeKeydown(e, callback) {
    handleKeydown([27], e, callback);
}

function handleUpDownArrowsKeydown(e, callback) {
    handleKeydown([38, 40], e, callback);
}

function preventDefaultIfHijax(e, hijax) {
    if (hijax) {
        e.preventDefault();
    }
}

const handlers = [];
function addEventListener(_, handler) {
    if (handlers.length === 0) {
        window.addEventListener('resize', handleResize);
    }
    handlers.push(handler);
}
function removeEventListener(_, handler) {
    if (handlers.length === 1) {
        window.removeEventListener('resize', handleResize);
    }
    handlers.splice(handlers.indexOf(handler), 1);
}
function handleResize(ev) {
    window.removeEventListener('resize', handleResize);
    (window.requestAnimationFrame || window.setTimeout)(() => {
        if (handlers.length) {
            handlers.forEach(handler => handler(ev));
            window.addEventListener('resize', handleResize);
        }
    }, 16);
}

module.exports = {
    handleActionKeydown,
    handleEscapeKeydown,
    handleUpDownArrowsKeydown,
    preventDefaultIfHijax,
    resizeUtil: {
        addEventListener,
        removeEventListener
    }
};
