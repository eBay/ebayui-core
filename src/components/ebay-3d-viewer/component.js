import { loader } from '../../common/loader';
const MAX_RETRIES = 3;

export default {
    get cdnBaseUrl() {
        const version = this.input.cdnVersion || '1.1.4';
        return `https://ir.ebaystatic.com/cr/v/c1/ebay-dist-${version}/`;
    },

    handleError(err) {
        this.state.failed = true;
        this.state.isLoaded = true;
        this.emit('load-error', err);
    },

    onCreate() {
        this.state = {
            showLoading: false,
            isLoaded: true,
            failed: false,
        };
    },

    loadCDN(immediate) {
        const _timeout =
            window.requestIdleCallback ||
            function (handler, arg) {
                return setTimeout(() => {
                    handler();
                }, arg.timeout);
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

    attachViewer() {
        const self = this;
        if (window.RestARViewer) {
            const {
                defaultDistance = 5.5,
                maxDistance = 5.5,
                minDistance = 4.0,
                fov = 45,
                minPolarAngle = 0.3,
                maxPolarAngle = 1.3,
                dampingFactor = 0.12,
            } = this.input;

            const allowViewBottom = !this.input.noAllowViewButtom;
            const autoRotate = !this.input.noAutoRotate;
            const mouseMoveFollow = !this.input.noMouseMoveFollow;
            const animatedPlacement = !this.input.noAnimatedPlacement;

            // eslint-disable-next-line no-undef,new-cap
            this.rest = RestARViewer({
                workerElementID: 'restar-worker',
                chunksFolder: this.cdnBaseUrl,
                element: this.viewer, // container to add 3DViewer
                assetID: this.input.assetId, // asset ID value
                camera: {
                    defaultDistance,
                    maxDistance,
                    minDistance,
                    fov,
                    minPolarAngle,
                    maxPolarAngle,
                    dampingFactor,
                    allowViewBottom,
                    autoRotate,
                    mouseMoveFollow,
                    animatedPlacement,
                },
                onError(error) {
                    // On error callback
                    self.handleError(error);
                },
                onTrackEvent(action) {
                    // On user action callback
                    self.emit('action', action);
                },
            });
        }
    },

    _loadCDN() {
        const cdnUrl = this.input.cdnUrl || `${this.cdnBaseUrl}/restar.viewer.js`;
        const workerUrl = this.input.cssUrl || `${this.cdnBaseUrl}/restar.worker.js`;

        loader([cdnUrl, workerUrl], ['src', 'restar-worker'])
            .then(() => {
                this.attachViewer();
            })
            .catch((err) => {
                clearTimeout(this.retryTimeout);
                this.retryTimes += 1;
                if (this.retryTimes < MAX_RETRIES) {
                    this.retryTimeout = setTimeout(() => this._loadCDN(), 2000);
                } else {
                    this.handleError(err);
                }
            });
    },

    onMount() {
        this.viewer = this.getEl('3d-viewer');
        this._loadViewer();
    },

    onUpdate() {
        this.attachViewer();
    },

    _loadViewer() {
        this.state.isLoaded = false;

        if (document.readyState === 'complete') {
            this.loadCDN();
        } else {
            this.subscribeTo(window).once('load', this.loadCDN.bind(this));
        }
    },
};
