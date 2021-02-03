const loader = require('./loader');
const versions = require('./versions.json');

module.exports = {
    isIos() {
        return this.input.src && this.input.src.indexOf('.m3u8') > -1;
    },
    onCreate() {
        this.state = {
            loading: true
        };
    },

    onMount() {
        if (!this.isIos()) {
            this.videoEl = this.getEl('video');
            loader(`http://cdn.dashjs.org/v${versions.dashjs}/dash.all.min.js`).then(() => {
                this.state.loading = false;
                this.player = dashjs.MediaPlayer().create();
                this.player.initialize(this.getEl('video'), this.input.src, true);
            });
        } else {
            this.state.loading = false;
        }
    }

};
