
module.exports = {
    handleChange: forwardEvent('change'),
    handleFocus: forwardEvent('focus')
};

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        this.emit(`${eventName}`, {
            originalEvent,
            value: (el || this.el.querySelector('input')).value,
            checked: (el || this.el.querySelector('input')).checked
        });
    };
}
