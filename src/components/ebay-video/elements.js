/* eslint-disable no-undef,new-cap */
const flagIcon = require('../ebay-icon/icons/ebay-attention-icon/index.marko');

// Have to contain in order to not execute until shaka is downloaded
function getElements(self) {
    const Report = class extends shaka.ui.Element {
        constructor(parent, controls) {
            super(parent, controls);

            // The actual button that will be displayed
            this.button_ = document.createElement('button');

            this.button_.textContent = 'Report';
            flagIcon.renderSync().prependTo(this.button_);
            this.parent.appendChild(this.button_);

            this.eventManager.listen(this.button_, 'click', () => {
                self.emit('report');
                controls.hideSettingsMenus();
            });
        }
    };
    Report.Factory = class {
        create(rootElement, controls) {
            return new Report(rootElement, controls);
        }
    };

    return { Report };
}

module.exports = { getElements };
