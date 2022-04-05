/* eslint-disable no-undef,new-cap */
const flagIconTemplate = require('../ebay-icon/icons/ebay-report-flag-icon/index.marko');
const playIconTemplate = require('../ebay-icon/icons/ebay-video-play-icon/index.marko');

// Marko 4 workaround
const flagIcon = flagIconTemplate.default || flagIconTemplate;
const playIcon = playIconTemplate.default || playIconTemplate;

// Have to contain in order to not execute until shaka is downloaded
function getElements(self) {
    const Report = class extends shaka.ui.Element {
        constructor(parent, controls, text) {
            super(parent, controls);

            // The actual button that will be displayed
            this.button_ = document.createElement('button');
            this.button_.classList.add('video-player__report-button');

            this.button_.textContent = text || 'Report';
            flagIcon.renderSync().prependTo(this.button_);
            this.parent.appendChild(this.button_);

            this.eventManager.listen(this.button_, 'click', () => {
                self.emit('report');
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

export { getElements, playIcon };
