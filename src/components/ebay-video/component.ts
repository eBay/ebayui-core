import { load as shakaLoad } from "@internal/shaka-player";
import type { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import { getElements } from "./elements";
const DEFAULT_SPINNER_TIMEOUT = 2000;

declare global {
    interface Window {
        shaka: any;
    }
}

const eventList = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "encrypted",
    "ended",
    "error",
    "loadstart",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "waiting",
];

const videoConfig = {
    addBigPlayButton: false,
    addSeekBar: true,
    controlPanelElements: [
        "play_pause",
        "current_time",
        "spacer",
        "total_time",
        "captions",
        "mute_popover",
        "report",
        "fullscreen_button",
    ],
};

export interface PlayPauseEvent {
    originalEvent: Event;
    player: any;
}

export interface VolumeEvent {
    originalEvent: Event;
    volume: number;
    muted: boolean;
}

interface VideoInput extends Omit<Marko.HTML.Video, `on${string}`> {
    "play-view"?: "fullscreen" | "inline";
    volume?: number;
    action?: "play" | "pause";
    "volume-slider"?: boolean;
    clip?: any[];
    source: Marko.AttrTag<Marko.HTML.Source>;
    /**
     * @deprecated Use `a11y-report-text` instead
     */
    "report-text"?: AttrString;
    "a11y-report-text"?: AttrString;
    "a11y-mute-text"?: AttrString;
    "a11y-unmute-text"?: AttrString;
    "a11y-fullscreen-text"?: AttrString;
    "a11y-exit-fullscreen-text"?: AttrString;
    "spinner-timeout"?: number;
    thumbnail?: string;
    track?: Marko.AttrTag<Marko.HTML.Track>;
    "error-text"?: AttrString;
    "a11y-play-text"?: AttrString;
    "a11y-load-text"?: AttrString;
    "on-play"?: (event: PlayPauseEvent) => void;
    "on-pause"?: (event: PlayPauseEvent) => void;
    "on-volume-change"?: (event: VolumeEvent) => void;
    "on-load-error"?: (err: Error) => void;
    "shaka-config"?: any;
}

export interface Input extends WithNormalizedProps<VideoInput> {}

interface State {
    played: boolean;
    failed: boolean;
    isLoaded: boolean;
    volumeSlider: boolean;
    action: "play" | "pause" | "";
}

class Video extends Marko.Component<Input, State> {
    declare video: HTMLVideoElement;
    declare root: HTMLElement;
    declare containerEl: HTMLElement;
    declare player: any;
    declare ui: any;
    declare shaka: any;

    isPlaylist(source: Marko.HTML.Source & { src: string }) {
        const type = source.type && source.type.toLowerCase();
        const src = source.src;
        if (type === "dash" || type === "hls") {
            return true;
        } else if (source.src) {
            return (
                src.indexOf(".mpd") === src.length - 5 ||
                src.indexOf(".m3u8") === src.length - 6
            );
        }
        return false;
    }

    handleResize() {
        if (!this.input.width && this.video) {
            const { width: containerWidth } = this.root.getBoundingClientRect();
            this.containerEl.setAttribute("width", containerWidth.toString());
            this.alignSeekbar();
        }
    }

    alignSeekbar() {
        if (this.el) {
            const buttonPanel = this.el.querySelector<HTMLElement>(
                ".shaka-controls-button-panel",
            )!;
            const spacer = buttonPanel.querySelector(".shaka-spacer")!;
            const rangeContainer = this.el.querySelector<HTMLElement>(
                ".shaka-range-container",
            )!;
            const buttonPanelRect = buttonPanel.getBoundingClientRect();
            const spacerRect = spacer.getBoundingClientRect();

            rangeContainer.style.marginRight = `${buttonPanelRect.right - spacerRect.right}px`;
            rangeContainer.style.marginLeft = `${spacerRect.left - buttonPanelRect.left}px`;
        }
    }

    handlePause(originalEvent: Event) {
        // On IOS, the controls force showing up if the video exist fullscreen while playing.
        // This forces the controls to always hide
        this.video.controls = false;

        this.emit("pause", { originalEvent, player: this.player });
        this.alignSeekbar();
    }

    handlePlaying(originalEvent: Event) {
        this.showControls();
        this.alignSeekbar();

        if (this.input.playView === "fullscreen") {
            this.video.requestFullscreen();
        }
        this.state.played = true;
        this.emit("play", { originalEvent, player: this.player });
    }

    handleVolumeChange(originalEvent: Event) {
        this.emit("volume-change", {
            originalEvent,
            volume: this.video.volume,
            muted: this.video.muted,
        });
    }

    handleError(err: Error) {
        this.state.failed = true;
        this.state.isLoaded = true;

        if (this.ui) {
            this.ui.configure({
                addBigPlayButton: false,
            });
        }
        this.emit("load-error", err);
    }

    showControls() {
        const copyConfig = Object.assign({}, videoConfig);
        copyConfig.controlPanelElements = [...videoConfig.controlPanelElements];
        if (this.state.volumeSlider === true) {
            const insertAt =
                copyConfig.controlPanelElements.length - 2 > 0
                    ? copyConfig.controlPanelElements.length - 2
                    : copyConfig.controlPanelElements.length;
            copyConfig.controlPanelElements.splice(insertAt, 0, "volume");
        }
        this.ui.configure(copyConfig);
        this.video.controls = false;
    }
    takeAction() {
        switch (this.state.action) {
            case "play":
                this.video.play();
                break;
            case "pause":
                this.video.pause();
                break;
            default:
        }
    }

    onInput(input: Input) {
        if (this.video) {
            if (input.width || input.height) {
                this.containerEl.style.width = `${input.width}px`;
            }
            this.video.volume = input.volume ?? 0;
            this.video.muted = !!input.muted;
        }

        // Check if action is changed
        if (this.state.action !== input.action) {
            this.state.action = input.action ?? "";
            this.takeAction();
        }
        if (input.volumeSlider === true) {
            this.state.volumeSlider = input.volumeSlider;
        }
    }

    onCreate() {
        this.state = {
            volumeSlider: false,
            action: "",
            isLoaded: true,
            failed: false,
            played: false,
        };
    }

    _addTextTracks() {
        (this.input.clip || []).forEach((track) => {
            this.player.addTextTrack(track.src, track.srclang, track.kind);
        });

        const [track] = this.player.getTextTracks();
        if (track) {
            this.player.selectTextTrack(track.id); // => this finds the id and everythings fine but it does nothing
        }
    }

    _loadSrc(index?: number) {
        const currentIndex = index || 0;
        const sources = [...this.input.source];
        const src = sources[currentIndex];
        let nextIndex: number;
        if (src && sources.length > currentIndex + 1) {
            nextIndex = currentIndex + 1;
        }

        this.player
            .load(src.src)
            .then(() => {
                this._addTextTracks();
                this.state.isLoaded = true;
                this.state.failed = false;
            })
            .catch((err: Error & { code: number }) => {
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
                    this.handleError(err);
                }
            });
    }

    _attach() {
        const {
            Report,
            CurrentTime,
            TotalTime,
            MuteButton,
            FullscreenButton,
            TextSelection,
        } = getElements(this);
        // eslint-disable-next-line no-undef,new-cap
        this.ui = new this.shaka.ui.Overlay(
            this.player,
            this.containerEl,
            this.video,
        );

        if (document?.documentElement?.lang) {
            this.ui
                .getControls()
                .getLocalization()
                .changeLocale([document.documentElement.lang]);
        }

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement("report", new Report.Factory());

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "current_time",
            new CurrentTime.Factory(),
        );

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "total_time",
            new TotalTime.Factory(),
        );

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "mute_popover",
            new MuteButton.Factory(),
        );

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "fullscreen_button",
            new FullscreenButton.Factory(),
        );

        // eslint-disable-next-line no-undef,new-cap
        this.shaka.ui.Controls.registerElement(
            "captions",
            new TextSelection.Factory(),
        );

        this.ui.configure({
            addBigPlayButton: true,
            controlPanelElements: [],
            addSeekBar: false,
        });

        // Replace play icon
        if (this.el) {
            const playIcon =
                this.getComponent("play-icon")!.el!.cloneNode(true);
            const playButton =
                this.el.querySelector<HTMLElement>(".shaka-play-button")!;
            playButton.removeAttribute("icon");
            playButton.appendChild(playIcon);

            const shakaSpinner =
                this.el.querySelector<HTMLElement>(".shaka-spinner");
            if (shakaSpinner) {
                setTimeout(() => {
                    shakaSpinner.hidden = true;
                }, this.input.spinnerTimeout || DEFAULT_SPINNER_TIMEOUT);
            }
        }
    }

    handleSuccess() {
        // eslint-disable-next-line no-undef,new-cap
        this.shaka.polyfill.installAll();

        // eslint-disable-next-line no-undef,new-cap
        this.player = new this.shaka.Player(this.video);
        this.player.configure(this.input.shakaConfig || {});
        this._attach();

        this._loadSrc();
    }

    onMount() {
        this.root = this.getEl("root");
        this.video = this.root.querySelector("video")!;
        this.containerEl = this.root.querySelector(".video-player__container")!;
        this.video.volume = this.input.volume || 1;
        this.video.muted = this.input.muted !== false;

        this.subscribeTo(this.video)
            .on("playing", this.handlePlaying.bind(this))
            .on("pause", this.handlePause.bind(this))
            .on("volumechange", this.handleVolumeChange.bind(this));

        eventList.forEach((eventName) => {
            this.subscribeTo(this.video).on(eventName, (e) =>
                this.emit(eventName, e),
            );
        });

        this._loadVideo();
    }

    onDestroy() {
        if (this.ui) {
            this.ui.destroy();
        }
    }

    _loadVideo() {
        this.state.failed = false;
        this.state.isLoaded = false;
        shakaLoad()
            .then((shaka: any) => {
                this.shaka = shaka.default || shaka;
                window.shaka = this.shaka; // Set global object for some components to access

                this.handleSuccess();
            })
            .catch((e: Error) => {
                console.log(e);
                this.handleError(e);
            });
    }
}

export default Video;
