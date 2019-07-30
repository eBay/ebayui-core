
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleExpand() {
        this.emit('tooltip-expand');
    },
    handleCollapse() {
        this.emit('tooltip-collapse');
    }
});
