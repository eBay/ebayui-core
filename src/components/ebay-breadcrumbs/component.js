module.exports = {
    handleClick(originalEvent) {
        // TODO remove since non plural is deprecated
        this.emit('breadcrumb-select', { originalEvent, el: originalEvent.target });
        this.emit('breadcrumbs-select', { originalEvent, el: originalEvent.target });
    }
};
