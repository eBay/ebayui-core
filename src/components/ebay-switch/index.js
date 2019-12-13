module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleChange: forwardEvent('change'),
    handleFocus: forwardEvent('focus'),
    handleBlur: forwardEvent('blur')
});

function forwardEvent(eventName) {
    return function(originalEvent) {
        this.emit(`switch-${eventName}`, {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked
        });
    };
}
