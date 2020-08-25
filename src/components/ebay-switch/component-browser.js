
module.exports = {
    handleChange(originalEvent) {
        this.emit('change', {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked
        });
    }
};
