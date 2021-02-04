const loader = require('./loader');
const versions = require('./versions.json');

module.exports = {
    handleResize() {
        if (!this.input.width) {
            const { width: containerWidth } = this.containerEl.getBoundingClientRect();
            this.state.width = containerWidth;
        }
    },

    onInput(input) {
        this.state.width = input.width;
    },

    checkFormat() {
        if (this.input.format === 'mpd') {
            return false;
        } else if (this.input.format === 'm3u8') {
            return true;
        }
        return this.input.src && this.input.src.indexOf('.m3u8') > -1;
    },

    onCreate() {
        this.state = {
            isLoaded: false,
            failed: false,
            width: 'auto'
        };
    },

    loadCDN() {
        this.retryTimes = 0;
        this.state.failed = false;

        this._loadCDN();
    },

    async _loadCDN() {
        const version = this.input.cdnVersion || versions.dashjs;
        const cdnUrl = this.input.cdnUrl || `http://cdn.dashjs.org/v${version}/dash.all.min.js`;

        try {
            await loader(cdnUrl);
            this.player = dashjs.MediaPlayer().create();
            this.player.initialize(this.getEl('video'), this.input.src, !!this.input.autoplay);
            this.state.isLoaded = true;
        } catch (e) {
            clearTimeout(this.retry);
            this.retryTimes += 1;
            if (this.retryTimes < 3) {
                this.retry = setTimeout(() => this._loadCDN(cdnUrl), 1000);
            } else {
                this.state.failed = true;
            }
        }
    },

    onMount() {
        this.videoEl = this.getEl('video');
        this.containerEl = this.getEl('container');

        if (!this.checkFormat()) {
            this.loadCDN();
        } else {
            this.state.isLoaded = true;
        }

        this.handleResize();
    }

};
