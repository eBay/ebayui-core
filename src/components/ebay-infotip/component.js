export default {
    onInput(input) {
        this.state = {
            open: input.open || false,
        };
    },

    setOpen(isOpen) {
        if (this.input.variant === 'modal') {
            this.state.open = isOpen;
        }
    },

    handleExpand() {
        this.setOpen(true);
        this.emit('expand');
    },

    handleOverlayClose() {
        this.getComponent('base').collapse();
    },

    isExpanded() {
        return this.getComponent('base').isExpanded();
    },

    expand() {
        this.getComponent('base').expand();
    },

    collapse() {
        this.getComponent('base').collapse();
    },

    handleCollapse() {
        this.setOpen(false);

        this.getEl('host').focus();
        this.emit('collapse');
    },
};
