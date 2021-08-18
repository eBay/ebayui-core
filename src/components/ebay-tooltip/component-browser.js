const eventUtils = require('../../common/event-utils');

module.exports = {
    handleKeydown(e) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.getComponent('base').collapse();
        });
    },
};
