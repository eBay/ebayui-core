
module.exports = {
    handleChange: forwardEvent('change'),
    handleFocus: forwardEvent('focus')
};

function forwardEvent(eventName) {
    return function(originalEvent) {
        this.emit(`${eventName}`, {
            originalEvent,
            value: this.getEl('input').value,
            checked: this.getEl('input').checked
        });
    };
}
