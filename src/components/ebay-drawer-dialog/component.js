const findIndex = require('core-js-pure/features/array/find-index');
const map = require('core-js-pure/features/array/map');
const forEach = require('core-js-pure/features/array/for-each');

module.exports = {
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

        this.touches = map(touches, ({ identifier, pageY }) => ({ identifier, pageY }));
    },

    handleTouchMove(event) {
        if (this.touches.length) {
            forEach(event.changedTouches, (current) => {
                const compare = findIndex(this.touches, (item) => item.identifier === current.identifier);
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
        forEach(event.changedTouches, (current) => {
            const idx = findIndex(this.touches, (item) => item.identifier === current.identifier);
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
    }
};
