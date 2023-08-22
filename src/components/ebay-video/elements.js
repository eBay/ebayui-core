/* eslint-disable no-undef,new-cap */
// Have to contain in order to not execute until shaka is downloaded
function getElements(self) {
    const Report = class extends shaka.ui.Element {
        constructor(parent, controls, text) {
            super(parent, controls);

            // The actual button that will be displayed
            this.button_ = document.createElement("button");
            this.button_.classList.add("video-player__report-button");

            this.button_.textContent = text || "Report";
            const flagIcon = self.getComponent("flag-icon").el.cloneNode(true);
            this.button_.prepend(flagIcon);
            this.parent.appendChild(this.button_);

            this.eventManager.listen(this.button_, "click", () => {
                self.emit("report");
            });
        }
    };
    Report.Factory = class {
        constructor(reportText) {
            this.reportText = reportText;
        }

        create(rootElement, controls) {
            return new Report(rootElement, controls, this.reportText);
        }
    };

    const TextSelection = shaka.ui.TextSelection;

    TextSelection.Factory = class {
        /** @override */
        create(rootElement, controls) {
            return new shaka.ui.TextSelection(rootElement, controls);
        }
    };

    return { Report, TextSelection };
}

export { getElements };
