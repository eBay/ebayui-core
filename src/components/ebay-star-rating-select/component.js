module.exports = {
    onCreate() {
        this.state = {
            value: 0,
        };
    },
    onInput(input) {
        let value = parseInt(input.value, 0) || 0;
        if (value > 5) {
            value = 0;
        }
        this.state.value = input.value;
    },
    handleClick: forwardEvent('change'),
    handleFocus: forwardEvent('focus'),
    handleKeydown: forwardEvent('keydown'),
};

function forwardEvent(eventName) {
    return function (value, originalEvent, el) {
        if (!el.disabled) {
            this.state.value = value;
            this.emit(eventName, {
                originalEvent,
                value: value,
            });
        }
    };
}
