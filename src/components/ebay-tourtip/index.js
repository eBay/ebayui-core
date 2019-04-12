const emitAndFire = require('../../common/emit-and-fire');

module.exports = require('marko-widgets').defineComponent({
    template: require("./template.marko"),
    init() {
        this.expander = this.getWidget('base').expander;
        this.expander.expand();
    },
    handleCollapse() {
        if (this.expander.isExpanded()) {
            this.expander.collapse();
            emitAndFire(this, 'tooltip-collapse');
        }
    }
});
