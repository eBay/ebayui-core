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

module.exports = { handleActionKeydown, handleEscapeKeydown, handleUpDownArrowsKeydown };
