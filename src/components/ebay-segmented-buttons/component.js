export default {
    onCreate() {
        this.state = {
            selectedIndex: 0,
        };
    },

    onInput(input) {
        let selectedIndex = (input.buttons || []).findIndex(
            (button) => button.selected
        );
        if (selectedIndex === -1) {
            selectedIndex = 0;
        }
        this.state.selectedIndex = selectedIndex;
    },
    onButtonClick(index, ev) {
        if (index !== this.state.selectedIndex) {
            this.state.selectedIndex = index;
            this.emit("change", {
                index,
                value: (this.input.buttons[index] || {}).value,
                originalEvent: ev,
            });
        }
    },
};
