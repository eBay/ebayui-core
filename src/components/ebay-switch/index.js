const emitAndFire = require('../../common/emit-and-fire');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleChange(originalEvent) {
        emitAndFire(this, 'switch-change', {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked
        });
    }
});
