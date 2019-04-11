const emitAndFire = require('../../common/emit-and-fire');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleClick(originalEvent) {
        const target = originalEvent.target;

        if (!target.disabled) {
            emitAndFire(this, 'radio-change', {
                originalEvent,
                value: target.value
            });
        }
    }
});
