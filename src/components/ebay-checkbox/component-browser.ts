export default {
    handleChange: forwardEvent("change"),
    handleFocus: forwardEvent("focus"),
    handleKeydown: forwardEvent("keydown"),
};

function forwardEvent(eventName: string) {
    return function (originalEvent: Event, el: HTMLInputElement) {
        const value = (el || this.el.querySelector("input")).value;
        const checked = (el || this.el.querySelector("input")).checked;
        this.emit(`${eventName}`, {
            originalEvent,
            value,
            checked,
        });
    };
}
