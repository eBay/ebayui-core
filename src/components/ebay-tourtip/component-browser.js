module.exports = {
    handleCollapse({ originalEvent }) {
        if (this._expander.expanded) {
            this._expander.expanded = false;
            this.emit('collapse', { originalEvent });
        }
    },

    onMount() {
        this._expander = this.getComponent('base')._expander;
        this._expander.expanded = true;
    },
};
