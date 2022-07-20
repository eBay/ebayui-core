module.exports = {
    onCreate() {
        this.state = {
            dismissed: false,
        };
    },
    handleDismissClick: forwardEvent('dismiss'),
    handleDismissKeydown: forwardEvent('dismiss'),
};

function forwardEvent(eventName) {
    return function (value, originalEvent) {
        this.state.dismissed = true;
        this.emit(eventName, {
            originalEvent,
            value: value,
        });
    };
}
