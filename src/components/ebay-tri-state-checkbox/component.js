export default {
    onInput(input) {
        this.state = { checked: input.checked || 'false' };
    },
    triggerChange() {
        if (this.state.checked === 'true') {
            this.state.checked = 'false';
        } else if (this.state.checked === 'false' && !this.input.skipMixed) {
            this.state.checked = 'mixed';
        } else {
            this.state.checked = 'true';
        }
    },
    handleChange(ev, el) {
        ev.preventDefault();
        this.triggerChange();
        this.forwardEvent('change', ev, el);
    },
    handleKeydown(ev, el) {
        this.forwardEvent('keydown', ev, el);
    },
    handleFocus(ev, el) {
        this.forwardEvent('focus', ev, el);
    },
    forwardEvent(eventName, originalEvent, el) {
        const value = (el || this.el.querySelector('input')).value;
        const checked = this.state.checked;
        this.emit(`${eventName}`, {
            originalEvent,
            value,
            checked,
        });
    },
};
