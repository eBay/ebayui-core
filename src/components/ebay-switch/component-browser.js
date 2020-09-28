
module.exports = {
    handleChange(originalEvent) {
        if (!this.input.disabled) {
            this.emit('change', {
                originalEvent,
                value: originalEvent.target.value,
                checked: originalEvent.target.checked
            });
        }
    }
};
