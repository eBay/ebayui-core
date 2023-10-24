import { loader } from "../loader";
import versions from "./versions.json";
const MAX_RETRIES = 3;

/**
 * @config object with the following (all are required)
 * string key : the key to lookup both in versions and CDN url
 * [] files : The files to lookup in the CDN
 * [] types :  The Types of files for CDN loader (see common/loader)
 * function setLoaded(boolean) : sets the is loaded state
 * function handleSuccess() : when cdn is succsssfully loaded
 * function handleError(err) : when the cdn loading fails
 * boolean stagger :  (optional) if all promises should be staggered or executed in any order
 */
export class CDNLoader {
    constructor(
        self,
        { key, files, types, setLoading, handleSuccess, handleError, stagger }
    ) {
        this.self = self;
        this.retryTimes = 0;
        this.setLoading = setLoading;
        this.handleError = handleError;
        this.handleSuccess = handleSuccess;
        this.files = files;
        this.types = types;
        this.key = key;
        this.stagger = stagger;
        this._setFiles();
    }

    setOverrides(overrides, version) {
        this._setFiles(overrides, version);

        return this;
    }

    _setFiles(overrides, version) {
        this.cdnFiles = [];
        this.url = `https://ir.ebaystatic.com/cr/v/c1/ebayui/${this.key}/v${
            version || versions[this.key]
        }`;
        for (let i = 0; i < this.files.length; i++) {
            if (overrides && overrides[i]) {
                this.cdnFiles[i] = overrides[i];
            } else {
                this.cdnFiles[i] = `${this.url}/${this.files[i]}`;
            }
        }
    }

    mount() {
        this.isLoaded = false;

        if (document.readyState === "complete") {
            this.loadCDN();
        } else {
            this.self.subscribeTo(window).once("load", this.loadCDN.bind(this));
        }
    }

    loadCDN() {
        const _timeout =
            // eslint-disable-next-line compat/compat
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
        this.setLoading(false);

        _cancel(this.loadDelay);
        this.setLoading(true);
        this.loadDelay = _timeout(() => this._loadCDN(), { timeout: 100 });
    }

    _catchError(err) {
        clearTimeout(this.retryTimeout);
        this.retryTimes += 1;
        if (this.retryTimes < MAX_RETRIES) {
            this.retryTimeout = setTimeout(() => this._loadCDN(), 2000);
        } else {
            this.setLoading(false);
            this.handleError(err);
        }
    }

    _loadCDN() {
        loader(this.cdnFiles, this.types, this.stagger)
            .then(() => {
                this.setLoading(false);
                this.handleSuccess();
            })
            .catch((err) => {
                this._catchError(err);
            });
    }
}
