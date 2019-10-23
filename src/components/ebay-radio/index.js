
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleClick: forwardEvent('change'),
    handleFocus: forwardEvent('focus')
});

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        if (eventName !== 'change' || (eventName === 'change' && !el.disabled)) {
            this.emit(`radio-${eventName}`, {
                originalEvent,
                value: (el || this.el.querySelector('input')).value
            });
        }
    };
}
