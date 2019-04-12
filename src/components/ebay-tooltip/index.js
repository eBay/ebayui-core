const emitAndFire = require('../../common/emit-and-fire');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleExpand() {
        emitAndFire(this, 'tooltip-expand');
    },
    handleCollapse() {
        emitAndFire(this, 'tooltip-collapse');
    }
});
