
module.exports = {
    onInput(input) {
        this.state = {
            open: input.open || false
        };
    },

    setOpen(isOpen) {
        if (this.input.modal) {
            this.state.open = isOpen;
        }
    },

    handleExpand() {
        this.setOpen(true);
        this.emit('tooltip-expand');
    },

    handleOverlayClose() {
        this.getComponent('base').collapse();
    },

    handleCollapse() {
        this.setOpen(false);

        this.getEl('host').focus();
        this.emit('tooltip-collapse');
    }
};
