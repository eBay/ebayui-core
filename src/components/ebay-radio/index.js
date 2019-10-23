
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleClick(originalEvent) {
        const target = originalEvent.target;

        if (!target.disabled) {
            this.emit('radio-change', {
                originalEvent,
                value: target.value
            });
        }
    },
    handleFocus: forwardEvent('focus')
});

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        this.emit(`radio-${eventName}`, {
            originalEvent,
            value: (el || this.el.querySelector('input')).value
        });
    };
}
