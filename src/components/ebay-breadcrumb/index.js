module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    handleClick(originalEvent) {
        this.emit('breadcrumb-select', { originalEvent, el: originalEvent.target });
    }
});
