module.exports = {
    toggleDetails(ev) {
        this.emit('details-toggle', { originalEvent: ev, open: this.getEl('root').open });
    }
};
