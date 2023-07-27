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
        if (this.input.variant === "radio") {
            // radio buttons may not be deselected, so `pressed` is not necessary
            this.state.pressed = { [index]: true };
        } else if (this.input.variant === "radio-toggle") {
            this.state.pressed = { [index]: pressed };
        } else {
            // act as a normal checkbox
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
