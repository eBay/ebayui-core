
module.exports = {
    handleChange: forwardEvent('change'),
    handleFocus: forwardEvent('focus')
};

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        let value;
        let checked;
        if (this.input.mixed) {
            value = 'mixed';
            checked = 'mixed'
        } else {
            value = (el || this.el.querySelector('input')).value
            checked = (el || this.el.querySelector('input')).checked
        }
        this.emit(`${eventName}`, {
            originalEvent,
            value,
            checked
        });
    };
}
