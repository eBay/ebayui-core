export default class {
    onInput(input) {
        this.state = { pressed: !!input.pressed };
    }

    handleClick(ev) {
        this.state.pressed = !this.state.pressed;
        this.emit("toggle", {
            originalEvent: ev,
            pressed: this.state.pressed,
        });
    }
}
