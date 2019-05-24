const emitAndFire = require('../../common/emit-and-fire');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleExpand() {
        emitAndFire(this, 'tooltip-expand');
    },
    handleCollapse() {
        this.getWidget('base').expander.collapse();
        this.getEl('host').focus();
        emitAndFire(this, 'tooltip-collapse');
    }
});
