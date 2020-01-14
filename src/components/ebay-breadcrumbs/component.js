module.exports = {
    handleClick(originalEvent) {
        this.emit('breadcrumb-select', { originalEvent, el: originalEvent.target });
    }
};
