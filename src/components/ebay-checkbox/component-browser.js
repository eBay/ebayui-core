export default {
    handleChange: forwardEvent('change'),
    handleFocus: forwardEvent('focus'),
    handleKeydown: forwardEvent('keydown'),
};

function forwardEvent(eventName) {
    return function (originalEvent, el) {
        const value = (el || this.el.querySelector('input')).value;
        const checked = (el || this.el.querySelector('input')).checked;
        this.emit(`${eventName}`, {
            originalEvent,
            value,
            checked,
        });
    };
}
