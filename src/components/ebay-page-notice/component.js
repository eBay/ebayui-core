export default class {
    onCreate() {
        this.state = { dismissed: false };
    }

    onInput(input) {
        this.state = { dismissed: input.dismissed || false };
    }

    onDismiss() {
        this.state.dismissed = true;
        this.emit('dismiss');
    }
}
