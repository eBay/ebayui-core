
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleExpand() {
        this.emit('tooltip-expand');
    },
    handleCollapse() {
        this.getWidget('base').expander.collapse();
        this.getEl('host').focus();
        this.emit('tooltip-collapse');
    }
});
