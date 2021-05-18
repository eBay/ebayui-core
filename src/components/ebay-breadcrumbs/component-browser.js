module.exports = {
    handleClick(originalEvent) {
        this.emit('select', { originalEvent, el: originalEvent.target });
    },
};
