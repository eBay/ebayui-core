module.exports = {
    onInput(input) {
        this.isOpen = input.open;
    },
    onUpdate() {
        this.isOpen = this.getEl('root').open;
    },
    toggleDetails(ev) {
        if (this.isOpen !== this.getEl('root').open) {
            this.isOpen = this.getEl('root').open;
            this.emit('details-toggle', { originalEvent: ev, open: this.getEl('root').open });
        }
    },
    clickDetails(ev) {
        this.emit('details-click', { originalEvent: ev });
    }
};
