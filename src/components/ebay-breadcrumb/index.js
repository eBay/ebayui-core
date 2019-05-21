const emitAndFire = require('../../common/emit-and-fire');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleClick(originalEvent) {
        emitAndFire(this, 'breadcrumb-select', { originalEvent, el: originalEvent.target });
    }
});
