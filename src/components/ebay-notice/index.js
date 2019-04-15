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
        observer.observeRoot(this, ['hidden'], this.setHidden.bind(this), true);
    },
    onDismiss() {
        this.setHidden(true);
    },
    setHidden(hidden) {
        if (this.state.hidden !== hidden) {
            this.setState('hidden', hidden);
            emitAndFire(this, hidden ? 'notice-close' : 'notice-show');
        }
    }
});
