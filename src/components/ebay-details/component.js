module.exports = {
    onInput(input) {
        this.state = { open: input.open || false };
    },

    toggleDetails() {
        if (!this.state.open) {
            this.emit('details-open');
        } else {
            this.emit('details-close');
        }
        this.state.open = !this.state.open;
    }
};
