import { loader } from '../../common/loader';
import versions from './versions.json';
const MAX_RETRIES = 3;

export default {
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

    _loadCDN() {
        const version = this.input.cdnVersion || versions.modelViewer;
        const cdnBaseUrl = `https://ir.ebaystatic.com/cr/v/c1/ebayui/google-model-viewer/v${version}`;
        const cdnUrl = this.input.cdnUrl || `${cdnBaseUrl}/model-viewer.min.js`;

        loader([cdnUrl], ['model-viewer'])
            .then(() => {
                this.state.isLoaded = true;
                this.state.showLoading = false;
                this.state.failed = false;
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

    _loadViewer() {
        this.state.isLoaded = false;

        if (document.readyState === 'complete') {
            this.loadCDN();
        } else {
            this.subscribeTo(window).once('load', this.loadCDN.bind(this));
        }
    },
};
