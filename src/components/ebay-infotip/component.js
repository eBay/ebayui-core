
module.exports = {
    handleExpand() {
        this.emit('tooltip-expand');
    },

    handleOverlayClose() {
        this.getComponent('base').collapse();
    },

    handleCollapse() {
        this.getEl('host').focus();
        this.emit('tooltip-collapse');
    }
};
