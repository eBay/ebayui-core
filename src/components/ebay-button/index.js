const assign = require('core-js-pure/features/object/assign');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const observer = require('../../common/property-observer');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialState(input) {
        return assign({}, input, {
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
    handleKeydown(originalEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            if (!this.state.disabled) {
                emitAndFire(this, 'button-escape', { originalEvent });
            }
        });
    }
});
