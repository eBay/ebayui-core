
module.exports = {
    handleCollapse() {
        if (this._expander.isExpanded()) {
            this._expander.collapse();
            this.emit('collapse');
        }
    },

    onMount() {
        this._expander = this.getComponent('base')._expander;
        this._expander.expand();
    }
};
