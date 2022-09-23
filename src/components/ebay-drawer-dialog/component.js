export default {
    setExpandedState(isExpanded) {
        if (isExpanded !== this.state.expanded) {
            this.state.expanded = isExpanded;
            if (isExpanded) {
                this.emit('expanded');
            } else {
                this.emit('collapsed');
            }
        }
    },

    handleExpand() {
        this.setExpandedState(!this.state.expanded);
    },

    handleScroll() {
        this.setExpandedState(true);
    },

    handleTouchStart(event) {
        const touches = event.changedTouches;
        this.touches = [];
        for (let i = 0; i < touches.length; i++) {
            const { identifier, pageY } = touches[i];
            this.touches.push({
                identifier,
                pageY,
            });
        }
    },

    handleTouchMove(event) {
        if (this.touches.length) {
            for (let i = 0; i < event.changedTouches.length; i++) {
                const current = event.changedTouches[i];
                const compare = this.touches.findIndex(
                    (item) => item.identifier === current.identifier
                );
                const diff = current.pageY - this.touches[compare].pageY;

                if (diff > 30) {
                    // Drag down, collpase
                    if (this.state.expanded) {
                        this.setExpandedState(false);
                    } else {
                        this.getComponent('dialog').state.open = false;
                    }
                    this.handleTouchEnd(event);
                } else if (diff < -30) {
                    this.setExpandedState(true);
                    this.handleTouchEnd(event);
                }
            }
        }
    },

    handleTouchEnd(event) {
        for (let i = 0; i < event.changedTouches.length; i++) {
            const current = event.changedTouches[i];
            const idx = this.touches.findIndex((item) => item.identifier === current.identifier);
            if (idx > -1) {
                this.touches.splice(idx, 1);
            }
        }
    },

    onMount() {
        this.touches = [];
    },

    onInput(input) {
        this.state = { expanded: input.expanded || false };
    },
};
