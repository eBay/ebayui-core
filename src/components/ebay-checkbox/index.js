
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleChange(originalEvent) {
        this.emit('checkbox-change', {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked
        });
    }
});
