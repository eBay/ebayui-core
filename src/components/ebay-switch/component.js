
module.exports = {
    handleChange(originalEvent) {
        this.emit('switch-change', {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked
        });
    }
};
