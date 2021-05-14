module.exports = {
    handleCloseButton(originalEvent) {
        this.emit('overlay-close', { originalEvent });
    },
};
