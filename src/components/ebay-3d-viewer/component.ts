import type { AttrClass } from "marko/tags-html";
import { CDNLoader } from "../../common/cdn";

interface ViewerInput {
    "cdn-url"?: string;
    version?: string;
    class?: AttrClass;
    "a11y-text"?: string;
    src?: string;
    "error-text"?: string;
    "a11y-start-text"?: string;
    "a11y-load-text"?: string;
    // TODO: import types from @google/model-viewer instead of
    // listing manually from https://modelviewer.dev/docs
    poster?: string;
    loading?: "auto" | "lazy" | "eager";
    reveal?: "auto" | "manual";
    "with-credentials"?: boolean;
    "on-load-error"?: (err: CustomEvent) => void;
    "on-load"?: () => void;
    "on-progress"?: () => void;
    "on-model-visibility"?: () => void;
    "on-poster-dismissed"?: () => void;
    "on-render-scale"?: () => void;
}

export interface Input extends WithNormalizedProps<ViewerInput> {}

interface State {
    showLoading: boolean;
    isLoaded: boolean;
    failed: boolean;
}

export default class extends Marko.Component<Input, State> {
    declare cdnLoader: CDNLoader;
    declare viewer: HTMLElement;

    handleError(err: CustomEvent) {
        this.state.failed = true;
        this.state.isLoaded = true;
        this.emit("load-error", err);
    }

    onCreate() {
        this.state = {
            showLoading: false,
            isLoaded: true,
            failed: false,
        };

        this.cdnLoader = new CDNLoader(this as any, {
            key: "modelViewer",
            types: ["module"],
            files: ["model-viewer.min.js"],
            setLoading: (value) => {
                this.state.showLoading = value;
            },
            handleError: this.handleError.bind(this),
            handleSuccess: this.handleSuccess.bind(this),
        });
    }

    handleSuccess() {
        this.state.isLoaded = true;
        this.state.showLoading = false;
        this.state.failed = false;
    }

    onMount() {
        this.viewer = this.getEl("3d-viewer");
        this._loadViewer();
    }

    _loadViewer() {
        this.state.failed = false;
        this.state.isLoaded = false;

        this.cdnLoader
            .setOverrides(
                this.input.cdnUrl ? [this.input.cdnUrl] : undefined,
                this.input.version,
            )
            .mount();
    }
}
