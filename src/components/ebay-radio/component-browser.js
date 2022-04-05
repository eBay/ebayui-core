export default {
    handleClick: forwardEvent('change'),
    handleFocus: forwardEvent('focus'),
    handleKeydown: forwardEvent('keydown'),
};

function forwardEvent(eventName) {
    return function (originalEvent, el) {
        if (!el.disabled) {
            this.emit(eventName, {
                originalEvent,
                value: (el || this.el.querySelector('input')).value,
            });
        }
    };
}
