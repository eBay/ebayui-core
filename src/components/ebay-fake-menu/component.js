import * as eventUtils from '../../common/event-utils';
import menuUtils from '../../common/menu-utils';

export default Object.assign({}, menuUtils, {
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

    onInput(input) {
        this.items = (input.items || []).filter((item) => !item.separator);
    },
});
