const observer = require('../../common/property-observer');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return Object.assign({}, input, {
            hidden: input.hidden || false
        });
    },
    init() {
        observer.observeRoot(this, ['hidden'], this.setHidden.bind(this));
    },
    onDismiss() {
        this.setHidden(true);
    },
    setHidden(hidden) {
        this.setState("hidden", hidden);

        if (this.isDirty()) {
            emitAndFire(this, hidden ? 'notice-close' : 'notice-show');
        }
    }
});
