const loader = require('./loader');
const versions = require('./versions.json');
require('regenerator-runtime');
const MAX_RETIRES = 3;

module.exports = {
    isPlaylist(source) {
        const type = source.type && source.type.toLowerCase();
        const src = source.src;
        if (type === 'dash' || type === 'hls') {
            return true;
        } else if (source.src) {
            return (
                src.indexOf('.mpd') === src.length - 5 || src.indexOf('.m3u8') === src.length - 6
            );
        }
        return false;
    },

    handleResize() {
        if (!this.input.width) {
            const { width: containerWidth } = this.containerEl.getBoundingClientRect();
            this.state.width = containerWidth;
        }
    },

    handleFullscreen() {
        this.video.requestFullscreen();
    },

    onInput(input) {
        this.state.width = input.width;
    },

    onCreate() {
        this.state = {
            showLoading: false,
            isLoaded: true,
            failed: false,
            width: 'auto',
        };
    },

    handleError(originalEvent) {
        this.emit('error', { originalEvent });
        this.state.failed = true;
        this.state.isLoaded = true;
    },

    loadCDN(immediate) {
        const _timeout =
            window.requestIdleCallback ||
            function (handler) {
                const startTime = Date.now();

                return setTimeout(() => {
                    handler({
                        didTimeout: false,
                        timeRemaining: function () {
                            return Math.max(0, 50.0 - (Date.now() - startTime));
                        },
                    });
                }, 1);
            };

        const _cancel =
            window.cancelIdleCallback ||
            function (id) {
                clearTimeout(id);
            };

        this.retryTimes = 0;
        this.state.failed = false;
        this.state.isLoaded = false;

        _cancel(this.loadDelay);
        if (!immediate) {
            this.state.showLoading = false;
            this.loadDelay = _timeout(() => this._loadCDN(), { timeout: 100 });
        } else {
            this.state.showLoading = true;
            this._loadCDN();
        }
        this._loadCDN();
    },

    _loadSrc(index) {
        const currentIndex = index || 0;
        const src = this.input.sources[currentIndex];
        let nextIndex;
        if (src && this.input.sources.length > currentIndex + 1) {
            nextIndex = currentIndex + 1;
        }
        this.player
            .load(src.src)
            .then(() => {
                this.state.isLoaded = true;
            })
            .catch(() => {
                if (nextIndex) {
                    this._loadSrc(nextIndex);
                } else {
                    this.state.failed = true;
                    this.state.isLoaded = true;
                }
            });
    },

    _loadCDN() {
        const version = this.input.cdnVersion || versions.shaka;
        const cdnUrl =
            this.input.cdnUrl ||
            `https://ir.ebaystatic.com/cr/v/c1/ebayui/shaka/v${version}/shaka-player.compiled.js`;
        loader(cdnUrl)
            .then(async () => {
                this.video = this.getEl('video');
                // eslint-disable-next-line no-undef,new-cap
                this.player = new shaka.Player(this.video);
                this._loadSrc();
            })
            .catch(() => {
                clearTimeout(this.retryTimeout);
                this.retryTimes += 1;
                if (this.retryTimes < MAX_RETIRES) {
                    this.retryTimeout = setTimeout(() => this._loadCDN(cdnUrl), 2000);
                } else {
                    this.state.failed = true;
                    this.state.isLoaded = true;
                }
            });
    },

    onMount() {
        this.state.isLoaded = false;
        this.videoEl = this.getEl('video');
        this.containerEl = this.getEl('container');

        if (document.readyState === 'complete') {
            this.loadCDN();
        } else {
            this.subscribeTo(window).once('load', this.loadCDN.bind(this));
        }

        this.handleResize();
    },
};
