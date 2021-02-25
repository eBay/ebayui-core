const DEFAULT_TIMEOUT_LENGTH = 6000;
module.exports = {
    onInput(input) {
        clearTimeout(this.timeout);
        if (input.open !== false) {
            clearTimeout(this.timeout);
            const timeout = setTimeout(() => {
                this.emit('close');
            }, input.timeout || DEFAULT_TIMEOUT_LENGTH);
            this.timeout = timeout;
        }
    },
    onDestroy() {
        clearTimeout(this.timeout);
    },
};
