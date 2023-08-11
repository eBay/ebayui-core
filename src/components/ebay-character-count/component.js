export default class extends Marko.Component {
    onCreate(input) {
        this.state = {
            count: this.countFromValue(input.value),
        };
    }

    onInput(input) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.state.count = this.countFromValue(input.value);
            this.emit("change", {
                count: this.state.count,
                inputAriaLive: this.state.count >= input.max ? "polite" : "off",
            });
        }, 500);
    }

    countFromValue(value) {
        if (typeof value === "string") {
            // use iterator to account for emojis and other multi-char symbols
            return [...value].length;
        }
        if (typeof value === "number") {
            return value;
        }
        return 0;
    }
}
