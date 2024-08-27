import { loader } from "../loader";
import { versions } from "./versions";
const MAX_RETRIES = 3;

interface CDNLoaderConfig {
    key: string;
    files: string[];
    types: string[];
    setLoading: (loading: boolean) => void;
    handleSuccess: () => void;
    handleError: (err: any) => void;
    stagger?: boolean;
}
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
    self: any;
    retryTimes: number;
    setLoading: (loading: boolean) => void;
    handleError: (err: Error) => void;
    handleSuccess: () => void;
    files: string[];
    types: string[];
    key: string;
    stagger: boolean;
    cdnFiles?: string[];
    url?: string;
    isLoaded?: boolean;
    loadDelay?: number | NodeJS.Timeout;
    retryTimeout?: NodeJS.Timeout;

    constructor(
        self: CDNLoader,
        {
            key,
            files,
            types,
            setLoading,
            handleSuccess,
            handleError,
            stagger,
        }: CDNLoaderConfig,
    ) {
        this.self = self;
        this.retryTimes = 0;
        this.setLoading = setLoading;
        this.handleError = handleError;
        this.handleSuccess = handleSuccess;
        this.files = files;
        this.types = types;
        this.key = key;
        this.stagger = !!stagger;
        this._setFiles();
    }

    setOverrides(overrides?: string[], version?: string) {
        this._setFiles(overrides, version);

        return this;
    }

    _setFiles(overrides?: string[], version?: string) {
        this.cdnFiles = [];
        this.url = `https://ir.ebaystatic.com/cr/v/c1/ebayui/${this.key}/v${
            version || versions[this.key as keyof typeof versions]
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
            function (handler: Function, arg: { timeout: number }) {
                return setTimeout(() => {
                    handler();
                }, arg.timeout);
            };

        const _cancel =
            window.cancelIdleCallback ||
            function (id: NodeJS.Timeout) {
                clearTimeout(id);
            };

        this.retryTimes = 0;
        this.setLoading(false);

        _cancel(this.loadDelay as NodeJS.Timeout & number);
        this.setLoading(true);
        this.loadDelay = _timeout(() => this._loadCDN(), { timeout: 100 });
    }

    _catchError(err: Error) {
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
        loader(this.cdnFiles ?? [], this.types, this.stagger)
            .then(() => {
                console.log('succ');
                this.setLoading(false);
                this.handleSuccess();
            })
            .catch((err: Error) => {
                console.log(err);
                this._catchError(err);
            });
    }
}
