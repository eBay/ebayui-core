const loader = require('./loader');
const versions = require('./versions.json');
const MAX_RETIRES = 3;

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
        this.state.isLoaded = false;

        this._loadCDN();
    },

    _loadCDN() {
        const version = this.input.cdnVersion || versions.dashjs;
        const cdnUrl = this.input.cdnUrl || `https://ir.ebaystatic.com/cr/v/c1/ebayui/dashjs/v${version}/dashjs.min.js`;
        loader(cdnUrl).then(() => {
            // eslint-disable-next-line no-undef,new-cap
            this.player = dashjs.MediaPlayer().create();
            this.player.initialize(this.getEl('video'), this.input.src, !!this.input.autoplay);
            this.state.isLoaded = true;
        }).catch(() => {
            clearTimeout(this.retryTimeout);
            this.retryTimes += 1;
            if (this.retryTimes < MAX_RETIRES) {
                this.retryTimeout = setTimeout(() => this._loadCDN(cdnUrl), 1000);
            } else {
                this.state.failed = true;
                this.state.isLoaded = true;
            }
        });
    },

    onMount() {
        this.videoEl = this.getEl('video');
        this.containerEl = this.getEl('container');

        if (!this.checkFormat()) {
            if (document.readyState === 'complete') {
                this.loadCDN();
            } else {
                this.subscribeTo(window).once('load', this.loadCDN.bind(this));
            }
        } else {
            this.state.isLoaded = true;
        }

        this.handleResize();
    }

};
