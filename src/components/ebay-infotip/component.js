
module.exports = {
    handleExpand() {
        this.emit('tooltip-expand');
    },

    handleCollapse() {
        this.getComponent('base').expander.collapse();
        this.getEl('host').focus();
        this.emit('tooltip-collapse');
    }
};
