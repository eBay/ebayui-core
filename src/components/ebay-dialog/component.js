
module.exports = {
    dialogClose() {
        this.emit('dialog-close');
    },

    dialogShow() {
        this.emit('dialog-show');
    }
};
