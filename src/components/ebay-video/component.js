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

    onCreate() {
        this.state = {
            showLoading: false,
            isLoaded: false,
            failed: false,
            width: 'auto'
        };
    },

    handleError(originalEvent) {
        this.emit('error', { originalEvent });
        this.state.failed = true;
        this.state.isLoaded = true;
    },

    loadCDN(immediate) {
        const _timeout = window.requestIdleCallback || function(handler) {
            const startTime = Date.now();

            return setTimeout(() => {
                handler({
                    didTimeout: false,
                    timeRemaining: function() {
                        return Math.max(0, 50.0 - (Date.now() - startTime));
                    }
                });
            }, 1);
        };

        const _cancel = window.cancelIdleCallback || function(id) {
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
        let src = this.input.src;
        let nextIndex;
        if (Array.isArray(this.input.src)) {
            src = this.input.src[currentIndex];
            if (src && this.input.src.length > currentIndex + 1) {
                nextIndex = currentIndex + 1;
            }
        }
        this.player.load(src).then(() => {
            this.state.isLoaded = true;
        }).catch(() => {
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
        const cdnUrl = this.input.cdnUrl || `https://ir.ebaystatic.com/cr/v/c1/ebayui/shaka/v${version}/shaka-player.compiled.js`;
        loader(cdnUrl).then(async() => {
            // eslint-disable-next-line no-undef,new-cap
            this.player = new shaka.Player(this.getEl('video'));
            this._loadSrc();
        }).catch(() => {
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
        this.videoEl = this.getEl('video');
        this.containerEl = this.getEl('container');

        if (document.readyState === 'complete') {
            this.loadCDN();
        } else {
            this.subscribeTo(window).once('load', this.loadCDN.bind(this));
        }

        this.handleResize();
    }

};
