export default {
    handleCloseButton(originalEvent) {
        this.emit('overlay-close', { originalEvent });
    },
};
