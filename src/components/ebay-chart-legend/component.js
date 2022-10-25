module.exports = {
    onCreate() {
        this.state = {
            focusIndex: -1,
        };
    },
    onInput(input) {
        this.state.focusIndex = input.focusIndex !== undefined ? input.focusIndex : -1;
    },
    handleFocus(e) {
        const id =
            e.target.getAttribute('data-id') !== null
                ? parseInt(e.target.getAttribute('data-id'), 10)
                : -1;
        this.emit('focus', id);
    },
    handleBlur() {
        this.emit('blur');
    },
};
