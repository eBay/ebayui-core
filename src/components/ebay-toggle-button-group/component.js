export default class {
    onCreate() {
        this.state = { pressed: {} };
    }

    onInput(input) {
        this.state.pressed = Object.fromEntries(
            input.buttons.map(({ pressed }, i) => [i, !!pressed])
        );
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
