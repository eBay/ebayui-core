const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const observer = require('../../common/property-observer');

module.exports = require('marko-widgets').defineComponent({
    template: require("./template.marko"),
    getInitialState(input) {
        return Object.assign({}, input, {
            disabled: input.disabled
        });
    },
    init() {
        observer.observeRoot(this, ['disabled']);
    },
    handleClick(originalEvent) {
        if (!this.state.disabled) {
            emitAndFire(this, 'button-click', { originalEvent });
        }
    },
    /**
     * Handle a11y features
     * https://ebay.gitbooks.io/mindpatterns/content/input/button.html#keyboard
     * @param {MouseEvent} e
     */
    handleKeydown(originalEvent) {
        eventUtils.handleActionKeydown(originalEvent, () => {
            this.handleClick(originalEvent);
        });
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            if (!this.state.disabled) {
                emitAndFire(this, 'button-escape', { originalEvent });
            }
        });
    }
});
