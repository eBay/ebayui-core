
module.exports = {
    handleExpand() {
        this.emit('tooltip-expand');
    },

    handleCollapse() {
        this.getEl('host').focus();
        this.emit('tooltip-collapse');
    }
};
