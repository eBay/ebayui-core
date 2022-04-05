export default {
    handleClick(originalEvent) {
        this.emit('select', { originalEvent, el: originalEvent.target });
    },
};
