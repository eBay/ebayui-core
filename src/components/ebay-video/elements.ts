import type EbayVideo from "./component";

/* eslint-disable no-undef,new-cap */
// Have to contain in order to not execute until shaka is downloaded
function getElements(self: EbayVideo) {
    const Report = class extends self.shaka.ui.Element {
        constructor(parent: HTMLElement, controls: any, text: string) {
            super(parent, controls);

            // The actual button that will be displayed
            this.button_ = document.createElement("button");
            this.button_.classList.add("video-player__report-button");

            this.button_.textContent = text || "Report";
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
        declare reportText: string;

        constructor(reportText: string) {
            this.reportText = reportText;
        }

        create(rootElement: HTMLElement, controls: any) {
            return new Report(rootElement, controls, this.reportText);
        }
    };

    const TextSelection = self.shaka.ui.TextSelection;

    TextSelection.Factory = class {
        /** @override */
        create(rootElement: HTMLElement, controls: any) {
            return new self.shaka.ui.TextSelection(rootElement, controls);
        }
    };

    return { Report, TextSelection };
}

export { getElements };
