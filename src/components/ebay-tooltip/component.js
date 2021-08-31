const eventUtils = require('../../common/event-utils');

module.exports = {
    onInput() {
        this.state = {
            open: false,
        };
    },
    handleExpand() {
        this.state.open = true;
        this.emit('expand');
    },
    handleCollapse() {
        this.state.open = false;
        this.emit('collapse');
    },
    handleKeydown(e) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.getComponent('base').collapse();
        });
    },
};
