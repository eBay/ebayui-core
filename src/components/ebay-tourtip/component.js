
module.exports = {
    handleCollapse() {
        if (this.expander.isExpanded()) {
            this.expander.collapse();
            this.emit('tooltip-collapse');
        }
    },

    onMount() {
        this.expander = this.getComponent('base').expander;
        this.expander.expand();
    }
};
