import FloatingLabel from "makeup-floating-label";

export default class {
    onCreate() {
        this.state = { charCount: 0, value: null };
    }

    onMount() {
        this._setupMakeup();
    }

    onInput(input) {
        this.state.value = input.value;
    }

    onUpdate() {
        this._setupMakeup();
    }

    focus() {
        this.getEl("input").focus();
    }

    _setupMakeup() {
        // TODO: makeup-floating-label should be updated so that we can remove the event listeners.
        // It probably makes more sense to just move this functionality into Marko though.
        if (this.input.floatingLabel) {
            if (this._floatingLabel) {
                this._floatingLabel.refresh();
                this.emit("floating-label-init");
            } else if (document.readyState === "complete") {
                if (this.el) {
                    this._floatingLabel = new FloatingLabel(this.el);
                    this.emit("floating-label-init");
                }
            } else {
                this.subscribeTo(window).once(
                    "load",
                    this._setupMakeup.bind(this)
                );
            }
        }
    }

    updateCharCount(el) {
        // debounce
        clearTimeout(this._charCountTimeout);
        this._charCountTimeout = setTimeout(() => {
            this.state.charCount = el.value.length;
            this.state.value = el.value;
            this.emit("char-count", {
                value: el.value,
                count: this.state.charCount,
            });
        }, 500);
    }

    forwardCharEvent(eventName, originalEvent, el) {
        this.updateCharCount(el);
        this.state.value = el.value;
        this.forwardEvent(eventName, originalEvent, el);
    }

    forwardEvent(eventName, originalEvent, el) {
        this.emit(eventName, {
            originalEvent,
            value: (el || this.el?.querySelector("input, textarea"))?.value,
        });
    }
}
