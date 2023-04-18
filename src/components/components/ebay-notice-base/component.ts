module.exports = {
    handleDismissClick: forwardEvent('dismiss'),
    handleDismissKeydown: forwardEvent('dismiss'),
};

function forwardEvent(eventName: string) {
    return function (value: unknown, originalEvent: Event) {
        this.emit(eventName, {
            originalEvent,
            value: value,
        });
    };
}
