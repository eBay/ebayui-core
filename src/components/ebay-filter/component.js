export default {
    handleButtonClick(originalEvent) {
        if (!this.input.disabled) {
            const selected = !this.state.selected;
            this.state.selected = selected;
            this.emit('click', {
                selected,
                originalEvent,
            });
        }
    },

    onInput(input) {
        this.state = {
            selected: input.selected || false,
        };
    },
};
