export default {
    handleCollapse({ originalEvent }) {
        if (this.state.expanded) {
            this.state.expanded = false;
            this.emit('collapse', { originalEvent });
        }
    },

    handleExpand({ originalEvent }) {
        if (!this.state.expanded) {
            this.state.expanded = true;
            this.emit('expand', { originalEvent });
        }
    },
    onInput(input) {
        if (input.open === false || input.open === true) {
            this.state.expanded = input.open;
        }
    },

    onCreate() {
        this.state = {
            expanded: true,
        };
    },
};
