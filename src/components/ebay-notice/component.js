module.exports = {
    handleDismiss() {
        if (!this.state.hidden) {
            this.state.hidden = true;
            this.emit('notice-close');
        }
    },

    onInput(input) {
        this.state = {
            hidden: input.hidden || false
        };
    }
};
