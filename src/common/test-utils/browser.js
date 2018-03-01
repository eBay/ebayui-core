/**
 * Trigger generic DOM event
 * @param {HTMLElement} el
 * @param {String} type
 * @param {Number} keyCode
 */
function triggerEvent(el, type, keyCode) {
    const event = document.createEvent('Event');
    event.initEvent(type, true, true, null);
    event.keyCode = keyCode;
    el.dispatchEvent(event);
}

module.exports = {
    triggerEvent
};
