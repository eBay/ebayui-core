
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleChange(originalEvent) {
        this.emit('checkbox-change', {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked
        });
    },
    handleFocus: forwardEvent('focus')
});

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        this.emit(`checkbox-${eventName}`, {
            originalEvent,
            value: (el || this.el.querySelector('input')).value
        });
    };
}
