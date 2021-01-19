const mediaPlayer = require('dashjs').MediaPlayer;

module.exports = {
    isIos() {
        return this.input.url && this.input.url.indexOf('.m3u8') > -1;
    },

    onMount() {
        if (!this.isIos()) {
            this.videoEl = this.getEl('video');

            this.player = mediaPlayer().create();
            this.player.initialize(this.getEl('video'), this.input.url, true);
        }
    }
};
