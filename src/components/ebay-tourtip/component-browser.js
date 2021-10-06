module.exports = {
    handleCollapse({ originalEvent }) {
        if (this._expander.expanded) {
            this._expander.expanded = false;
            this.emit('collapse', { originalEvent });
        }
    },

    handleExpand({ originalEvent }) {
        if (!this._expander.expanded) {
            this._expander.expanded = true;
            this.emit('expand', { originalEvent });
        }
    },

    onMount() {
        this._expander = this.getComponent('base')._expander;
        this._expander.expanded = true;
    },
};
