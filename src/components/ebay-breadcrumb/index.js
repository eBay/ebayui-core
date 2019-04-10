const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');

module.exports = markoWidgets.defineComponent({
    template: require('./template.marko'),
    handleClick(originalEvent) {
        emitAndFire(this, 'breadcrumb-select', { originalEvent, el: originalEvent.target });
    }
});
