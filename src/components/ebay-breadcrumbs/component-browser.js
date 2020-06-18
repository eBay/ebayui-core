module.exports = {
    handleClick(originalEvent) {
        this.emit('breadcrumbs-select', { originalEvent, el: originalEvent.target });
    }
};
