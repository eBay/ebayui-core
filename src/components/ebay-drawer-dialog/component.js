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
        this.touches = Array.prototype.map.call(touches, ({ identifier, pageY }) => ({
            identifier,
            pageY,
        }));
    },

    handleTouchMove(event) {
        if (this.touches.length) {
            event.changedTouches.forEach((current) => {
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
            });
        }
    },

    handleTouchEnd(event) {
        event.changedTouches.forEach((current) => {
            const idx = this.touches.findIndex((item) => item.identifier === current.identifier);
            if (idx > -1) {
                this.touches.splice(idx, 1);
            }
        });
    },

    onMount() {
        this.touches = [];
    },

    onInput(input) {
        this.state = { expanded: input.expanded || false };
    },
};
