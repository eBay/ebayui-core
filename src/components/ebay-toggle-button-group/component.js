export default class {
    onCreate() {
        this.state = { pressed: {} };
    }

    onInput(input) {
        if (input.pressed) {
            if (Array.isArray(input.pressed)) {
                this.state.pressed = Object.fromEntries(
                    input.pressed.map((i) => [i, true])
                );
            } else {
                this.state.pressed = { [input.pressed]: true };
            }
        }
    }

    handleToggle(index, { originalEvent, pressed }) {
        if (this.input.radio) {
            this.state.pressed = { [index]: pressed };
        } else {
            this.state.pressed = { ...this.state.pressed, [index]: pressed };
        }
        this.emit("change", {
            originalEvent,
            pressed: Object.keys(this.state.pressed)
                .filter((i) => this.state.pressed[i])
                .map((i) => +i),
        });
    }
}
