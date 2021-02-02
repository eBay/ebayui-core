const loader = require('./loader');

module.exports = {
    isIos() {
        return this.input.url && this.input.url.indexOf('.m3u8') > -1;
    },
    onCreate() {
        this.state = {
            loading: true
        };
    },

    onMount() {
        if (!this.isIos()) {
            this.videoEl = this.getEl('video');
            loader('http://cdn.dashjs.org/v3.1.0/dash.all.min.js').then(() => {
                this.state.loading = false;
                this.player = dashjs.MediaPlayer().create();
                this.player.initialize(this.getEl('video'), this.input.url, true);
            });
        }
    }

};
