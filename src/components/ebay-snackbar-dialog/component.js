const DEFAULT_TIMEOUT_LENGTH = 6000;
module.exports = {
    onInput(input) {
        if (input.open === true || input.open === false) {
            this.state.open = input.open;
            clearTimeout(this.timeout);
        }
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
    onCreate() {
        this.state = { open: true };
    },
};
