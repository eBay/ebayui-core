const loader = require('./loader');
const { getElements, flagSmallIcon, playIcon } = require('./elements');
const versions = require('./versions.json');
const MAX_RETRIES = 3;

const videoConfig = {
    addBigPlayButton: false,
    addSeekBar: true,
    controlPanelElements: [
        'play_pause',
        'time_and_duration',
        'spacer',
        'mute',
        'volume',
        'overflow_menu',
        'fullscreen',
    ],
    overflowMenuButtons: ['report'],
};

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
        if (!this.input.width && this.video) {
            const { width: containerWidth } = this.containerEl.getBoundingClientRect();
            this.video.setAttribute('width', containerWidth);
        }
    },

    handlePlaying(originalEvent) {
        this.showControls();

        if (this.input.playView === 'fullscreen') {
            this.video.requestFullscreen();
        }
        this.emit('play', { originalEvent, player: this.player });
    },

    handleVolumeChange(originalEvent) {
        this.emit('volumechange', {
            originalEvent,
            volume: this.video.volume,
            muted: this.video.muted,
        });
    },

    showControls() {
        this.ui.configure(videoConfig);

        // Clear overflow button to make it look like a report button
        const moreVertButton = this.el.querySelector('.shaka-overflow-menu-button');
        moreVertButton.classList.remove('material-icons-round');
        moreVertButton.removeChild(moreVertButton.firstChild);
        moreVertButton.setAttribute('aria-label', this.input.a11yReportMenu || 'Report this video');
        flagSmallIcon.renderSync().appendTo(moreVertButton);
    },
    takeAction() {
        switch (this.state.action) {
            case 'play':
                this.video.play();
                break;
            case 'pause':
                this.video.pause();
                break;
            default:
        }
    },

    onInput(input) {
        if (this.video) {
            this.video.setAttribute('width', input.width);
            this.video.volume = input.volume;
            this.video.muted = input.muted;
        }

        // Check if action is changed
        if (this.state.action !== input.action) {
            this.state.action = input.action;
            this.takeAction();
        }
    },

    onCreate() {
        this.state = {
            action: '',
            showLoading: false,
            isLoaded: true,
            failed: false,
        };
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
    },

    _addTextTracks() {
        (this.input.tracks || []).forEach((track) => {
            this.player.addTextTrack(track.src, track.srclang, track.kind);
        });

        const [track] = this.player.getTextTracks();
        if (track) {
            this.player.selectTextTrack(track.id); // => this finds the id and everythings fine but it does nothing
        }
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
                this._addTextTracks();
                this.state.isLoaded = true;
                this.state.failed = false;
            })
            .catch((err) => {
                if (err.code === 7000) {
                    // Load interrupted by another load, just return
                    return;
                } else if (err.code === 11) {
                    // Retry, player is not loaded yet
                    setTimeout(() => this._loadSrc(currentIndex), 0);
                }
                if (nextIndex) {
                    setTimeout(() => this._loadSrc(nextIndex), 0);
                } else {
                    this.state.failed = true;
                    this.state.isLoaded = true;
                    this.emit('load-error', err);
                }
            });
    },

    _attach() {
        const { Report, TextSelection } = getElements(this);
        // eslint-disable-next-line no-undef,new-cap
        this.ui = new shaka.ui.Overlay(
            this.player,
            this.containerEl,
            this.video,
            this.input.reportText || ''
        );

        // eslint-disable-next-line no-undef,new-cap
        shaka.ui.OverflowMenu.registerElement('report', new Report.Factory());

        // eslint-disable-next-line no-undef,new-cap
        shaka.ui.Controls.registerElement('captions', new TextSelection.Factory());

        this.ui.configure({
            addBigPlayButton: true,
            controlPanelElements: [],
            addSeekBar: false,
        });

        // Replace play icon
        if (this.el) {
            const playButton = this.el.querySelector('.shaka-play-button');
            playButton.removeAttribute('icon');
            playIcon.renderSync().appendTo(playButton);
        }
    },

    _loadCDN() {
        const version = this.input.cdnVersion || versions.shaka;
        const cdnBaseUrl = `https://ir.ebaystatic.com/cr/v/c1/ebayui/shaka/v${version}/`;
        const cdnUrl = this.input.cdnUrl || `${cdnBaseUrl}/shaka-player.ui.js`;
        const cssUrl = this.input.cssUrl || `${cdnBaseUrl}/controls.css`;

        loader(cdnUrl, cssUrl)
            .then(() => {
                // eslint-disable-next-line no-undef,new-cap
                shaka.polyfill.installAll();

                // eslint-disable-next-line no-undef,new-cap
                this.player = new shaka.Player(this.video);
                this._attach();

                this._loadSrc();
            })
            .catch((err) => {
                clearTimeout(this.retryTimeout);
                this.retryTimes += 1;
                if (this.retryTimes < MAX_RETRIES) {
                    this.retryTimeout = setTimeout(() => this._loadCDN(cdnUrl), 2000);
                } else {
                    this.state.failed = true;
                    this.state.isLoaded = true;
                    this.emit('load-error', err);
                }
            });
    },

    onMount() {
        this.video = this.getEl('video');
        this.containerEl = this.getEl('container');

        this.video.volume = this.input.volume || 1;
        this.video.muted = this.input.muted || false;

        this._loadVideo();
    },

    onDestroy() {
        if (this.ui) {
            this.ui.destroy();
        }
    },

    _loadVideo() {
        this.state.isLoaded = false;

        if (document.readyState === 'complete') {
            this.loadCDN();
        } else {
            this.subscribeTo(window).once('load', this.loadCDN.bind(this));
        }

        this.handleResize();
    },
};
