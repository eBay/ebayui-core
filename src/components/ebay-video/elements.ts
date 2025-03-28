import type EbayVideo from "./component";

/**
 * Builds a time string, e.g., 01:04:23, from |displayTime|.
 *
 * @param {number} displayTime (in seconds)
 * @param {boolean} showHour
 * @return {string}
 */
function buildTimeString(displayTime: any, showHour: any) {
    const h = Math.floor(displayTime / 3600);
    const m = Math.floor((displayTime / 60) % 60);
    let s: any = Math.floor(displayTime % 60);
    if (s < 10) {
        s = "0" + s;
    }
    let text = m + ":" + s;
    if (showHour) {
        if (m < 10) {
            text = "0" + text;
        }
        text = h + ":" + text;
    }
    return text;
}

/**
 * Depending on the value of display, sets/removes the css class of element to
 * either display it or hide it.
 *
 * @param {Element} element
 * @param {boolean} display
 */
function setDisplay(element: any, display: any) {
    if (!element) {
        return;
    }

    if (display) {
        // Removing a non-existent class doesn't throw, so, even if
        // the element is not hidden, this should be fine.
        element.classList.remove("shaka-hidden");
    } else {
        element.classList.add("shaka-hidden");
    }
}

/* eslint-disable no-undef,new-cap */
// Have to contain in order to not execute until shaka is downloaded
function getElements(self: EbayVideo) {
    self.shaka.ui.Utils = self.shaka.ui.Utils || {
        setDisplay,
        buildTimeString,
    };
    const Report = class extends self.shaka.ui.Element {
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);

            if (!self.input.reportText || !self.input.a11yReportText) {
                return;
            }

            // The actual button that will be displayed
            this.button_ = document.createElement("button");
            this.button_.classList.add("video-player__report-button");

            const flagIcon = self
                .getComponent("flag-icon")!
                .el!.cloneNode(true);
            this.button_.prepend(flagIcon);
            this.parent.appendChild(this.button_);

            this.eventManager.listen(this.button_, "click", () => {
                self.emit("report");
            });
        }
    };
    Report.Factory = class {
        create(rootElement: HTMLElement, controls: any) {
            return new Report(rootElement, controls);
        }
    };

    const TextSelection = self.shaka.ui.TextSelection;

    TextSelection.Factory = class {
        /** @override */
        create(rootElement: HTMLElement, controls: any) {
            return new self.shaka.ui.TextSelection(rootElement, controls);
        }
    };

    /**
     * @extends {shaka.ui.Element}
     * @final
     * @export
     */
    const CurrentTime = class extends self.shaka.ui.Element {
        /**
         * @param {!HTMLElement} parent
         * @param {!shaka.ui.Controls} controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** @type {!HTMLButtonElement} */
            this.currentTime_ = document.createElement("button");
            this.currentTime_.classList.add("shaka-current-time");
            this.currentTime_.disabled = true;
            this.setValue_("0:00");
            this.parent.appendChild(this.currentTime_);
            this.eventManager.listen(this.currentTime_, "click", () => {
                // Jump to LIVE if the user clicks on the current time.
                if (this.player.isLive()) {
                    this.video.currentTime = this.player.seekRange().end;
                }
            });
            this.eventManager.listen(
                this.controls,
                "timeandseekrangeupdated",
                () => {
                    this.updateTime_();
                },
            );
            this.eventManager.listen(this.player, "trackschanged", () => {
                this.onTracksChanged_();
            });
        }
        /**
         * @param {string} value
         * @private
         */
        setValue_(value: any) {
            // To avoid constant updates to the DOM, which makes debugging more
            // difficult, only set the value if it has changed.  If we don't do this
            // check, the DOM updates constantly, this element flashes in the debugger
            // in Chrome, and you can't make changes in the CSS panel.
            if (value != this.currentTime_.textContent) {
                this.currentTime_.textContent = value;
            }
        }
        /** @private */
        updateTime_() {
            const isSeeking = this.controls.isSeeking();
            let displayTime = this.controls.getDisplayTime();
            const seekRange = this.player.seekRange();
            const seekRangeSize = seekRange.end - seekRange.start;
            if (!isFinite(seekRangeSize)) {
                this.setValue_(
                    this.localization.resolve(self.shaka.ui.Locales.Ids.LIVE),
                );
            } else if (this.player.isLive()) {
                // The amount of time we are behind the live edge.
                const behindLive = Math.floor(seekRange.end - displayTime);
                displayTime = Math.max(0, behindLive);
                const showHour = seekRangeSize >= 3600;
                // Consider "LIVE" when less than 1 second behind the live-edge.  Always
                // show the full time string when seeking, including the leading '-';
                // otherwise, the time string "flickers" near the live-edge.
                // The button should only be clickable when it's live stream content, and
                // the current play time is behind live edge.
                if (displayTime >= 1 || isSeeking) {
                    this.setValue_(
                        "- " + buildTimeString(displayTime, showHour),
                    );
                } else {
                    this.setValue_(
                        this.localization.resolve(
                            self.shaka.ui.Locales.Ids.LIVE,
                        ),
                    );
                }
            } else {
                const showHour = seekRangeSize >= 3600;
                const currentTime = Math.max(0, displayTime - seekRange.start);
                let value = buildTimeString(currentTime, showHour);
                this.setValue_(value);
            }
        }
        /**
         * Set the aria label to be 'Live' when the content is live stream.
         * @private
         */
        onTracksChanged_() {
            if (this.player.isLive()) {
                const ariaLabel = self.shaka.ui.Locales.Ids.SKIP_TO_LIVE;
                this.currentTime_.ariaLabel =
                    this.localization.resolve(ariaLabel);
            }
        }
    };
    /**
     * @implements {shaka.extern.IUIElement.Factory}
     * @final
     */
    CurrentTime.Factory = class {
        /** @override */
        create(rootElement: HTMLElement, controls: any) {
            return new CurrentTime(rootElement, controls);
        }
    };

    /**
     * @extends {shaka.ui.Element}
     * @final
     * @export
     */
    const TotalTime = class extends self.shaka.ui.Element {
        /**
         * @param {!HTMLElement} parent
         * @param {!shaka.ui.Controls} controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** @type {!HTMLButtonElement} */
            this.currentTime_ = document.createElement("button");
            this.currentTime_.classList.add("shaka-current-time");
            this.currentTime_.disabled = true;
            this.parent.appendChild(this.currentTime_);
            this.eventManager.listen(
                this.controls,
                "timeandseekrangeupdated",
                () => {
                    this.updateTime_();
                },
            );
            this.eventManager.listen(this.player, "trackschanged", () => {
                this.onTracksChanged_();
            });
        }
        /**
         * @param {string} value
         * @private
         */
        setValue_(value: any) {
            // To avoid constant updates to the DOM, which makes debugging more
            // difficult, only set the value if it has changed.  If we don't do this
            // check, the DOM updates constantly, this element flashes in the debugger
            // in Chrome, and you can't make changes in the CSS panel.
            if (value != this.currentTime_.textContent) {
                this.currentTime_.textContent = value;
            }
        }
        /** @private */
        updateTime_() {
            const seekRange = this.player.seekRange();
            const seekRangeSize = seekRange.end - seekRange.start;
            if (isFinite(seekRangeSize) && seekRangeSize) {
                const showHour = seekRangeSize >= 3600;
                this.setValue_(buildTimeString(seekRangeSize, showHour));
            }
        }

        /**
         * Set the aria label to be 'Live' when the content is live stream.
         * @private
         */
        onTracksChanged_() {
            if (this.player.isLive()) {
                const ariaLabel = self.shaka.ui.Locales.Ids.SKIP_TO_LIVE;
                this.currentTime_.ariaLabel =
                    this.localization.resolve(ariaLabel);
            }
        }
    };
    /**
     * @implements {shaka.extern.IUIElement.Factory}
     * @final
     */
    TotalTime.Factory = class {
        /** @override */
        create(rootElement: HTMLElement, controls: any) {
            return new TotalTime(rootElement, controls);
        }
    };

    const MuteButton = class extends self.shaka.ui.Element {
        /**
         * @param {!HTMLElement} parent
         * @param {!shaka.ui.Controls} controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** @private {!HTMLButtonElement} */
            this.button_ = document.createElement("button");
            this.button_.classList.add("shaka-mute-button");
            this.button_.classList.add("shaka-tooltip");

            this.audioOff = self
                .getComponent("audio-off-icon")!
                .el!.cloneNode(true);

            this.audioHigh = self
                .getComponent("audio-high-icon")!
                .el!.cloneNode(true);

            /** @private {!HTMLElement} */
            this.icon_ = this.audioOff.cloneNode(true);
            this.button_.appendChild(this.icon_);
            /** @private {!HTMLElement} */
            this.currentState_ = document.createElement("span");
            this.currentState_.classList.add("shaka-current-selection-span");
            this.parent.appendChild(this.button_);
            this.updateIcon_();
            this.eventManager.listen(this.button_, "click", () => {
                if (!this.video.muted && this.video.volume == 0) {
                    this.video.volume = 1;
                } else {
                    this.video.muted = !this.video.muted;
                }
            });
            this.eventManager.listen(this.video, "volumechange", () => {
                this.updateIcon_();
            });
        }
        /**
         * @private
         */
        updateIcon_() {
            const icon =
                this.video.muted || this.video.volume == 0
                    ? this.audioOff
                    : this.audioHigh;
            this.button_.childNodes[0].replaceWith(icon);
        }
    };
    /**
     * @implements {shaka.extern.IUIElement.Factory}
     * @final
     */
    MuteButton.Factory = class {
        /** @override */
        create(rootElement: HTMLElement, controls: any) {
            return new MuteButton(rootElement, controls);
        }
    };

    /**
     * @extends {shaka.ui.Element}
     * @final
     * @export
     */
    const FullscreenButton = class extends self.shaka.ui.Element {
        /**
         * @param {!HTMLElement} parent
         * @param {!shaka.ui.Controls} controls
         */
        constructor(parent: HTMLElement, controls: any) {
            super(parent, controls);
            /** @private {HTMLMediaElement} */
            this.localVideo_ = this.controls.getLocalVideo();

            this.fullscreenIcon = self
                .getComponent("expand-icon")!
                .el!.cloneNode(true);
            this.exitFullscreenIcon = self
                .getComponent("contract-icon")!
                .el!.cloneNode(true);

            /** @private {!HTMLButtonElement} */
            this.button_ = document.createElement("button");
            this.button_.classList.add("shaka-fullscreen-button");
            this.button_.classList.add("shaka-tooltip");
            this.checkSupport_();
            this.button_.appendChild(this.fullscreenIcon);
            this.parent.appendChild(this.button_);
            this.eventManager.listen(this.button_, "click", async () => {
                await this.controls.toggleFullScreen();
            });
            this.eventManager.listen(document, "fullscreenchange", () => {
                this.updateIcon_();
            });
            this.eventManager.listen(this.localVideo_, "loadedmetadata", () => {
                this.checkSupport_();
            });
            this.eventManager.listen(this.localVideo_, "loadeddata", () => {
                this.checkSupport_();
            });
        }
        /**
         * @private
         */
        checkSupport_() {
            // Don't show the button if fullscreen is not supported
            if (!this.controls.isFullScreenSupported()) {
                this.button_.classList.add("shaka-hidden");
            } else {
                this.button_.classList.remove("shaka-hidden");
            }
        }
        /**
         * @private
         */
        updateIcon_() {
            const icon = this.controls.isFullScreenEnabled()
                ? this.exitFullscreenIcon
                : this.fullscreenIcon;
            this.button_.childNodes[0].replaceWith(icon);
        }
    };
    /**
     * @implements {shaka.extern.IUIElement.Factory}
     * @final
     */
    FullscreenButton.Factory = class {
        /** @override */
        create(rootElement: HTMLElement, controls: any) {
            return new FullscreenButton(rootElement, controls);
        }
    };

    return {
        Report,
        MuteButton,
        CurrentTime,
        TotalTime,
        FullscreenButton,
        TextSelection,
    };
}

export { getElements };
