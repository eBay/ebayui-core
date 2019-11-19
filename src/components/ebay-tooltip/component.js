
module.exports = {
    handleExpand() {
        this.emit('tooltip-expand');
    },

    handleCollapse() {
        this.emit('tooltip-collapse');
    }
};
