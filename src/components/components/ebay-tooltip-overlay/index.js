module.exports = require('marko-widgets').defineComponent({
    template: require("./template.marko"),
    handleCloseButton() {
        this.emit('overlay-close');
    }
});
