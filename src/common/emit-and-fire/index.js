/**
 * Emit marko event and fire custom event on the root element
 * @param {Object} widget
 * @param {String} eventName
 * @param {Object} eventArg
 */
function emitAndFire(widget, eventName, eventArg) {
    const originalEmit = widget.emit;
    let event;
    if (window.CustomEvent) {
        event = new CustomEvent(eventName, { detail: eventArg });
    } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, eventArg);
    }
    widget.el.dispatchEvent(event);
    originalEmit.call(widget, eventName, eventArg);
}

module.exports = emitAndFire;
