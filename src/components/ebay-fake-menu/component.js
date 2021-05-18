const eventUtils = require('../../common/event-utils');

module.exports = {
    handleItemClick(index, originalEvent, el) {
        this.emitComponentEvent({ eventType: 'select', el, originalEvent, index });
    },

    handleItemKeydown(index, originalEvent, el) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({ eventType: 'keydown', el, originalEvent, index });
        });
    },

    emitComponentEvent({ eventType, el, originalEvent, index }) {
        const eventObj = {
            el,
            originalEvent,
            index,
        };

        this.emit(`${eventType}`, eventObj);
    },
};
