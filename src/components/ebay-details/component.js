module.exports = {
    onUpdate() {
        this.getEl('root').open = this.input.open;
    },
    toggleDetails(ev) {
        this.emit('details-toggle', { originalEvent: ev, open: this.getEl('root').open });
    }
};
