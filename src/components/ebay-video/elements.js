/* eslint-disable no-undef,new-cap */
const flagIcon = require('../ebay-icon/icons/ebay-report-flag-icon/index.marko');
const flagSmallIcon = require('../ebay-icon/icons/ebay-report-flag-small-icon/index.marko');
const playIcon = require('../ebay-icon/icons/ebay-video-play-icon/index.marko');

function setDisplay(el, show) {
    if (show) {
        el.classList.add('shaka-hidden');
    } else {
        el.classList.remove('shaka-hidden');
    }
}

// Have to contain in order to not execute until shaka is downloaded
function getElements(self) {
    const Report = class extends shaka.ui.Element {
        constructor(parent, controls, text) {
            super(parent, controls);

            // The actual button that will be displayed
            this.button_ = document.createElement('button');

            this.button_.textContent = text || 'Report';
            flagIcon.renderSync().prependTo(this.button_);
            this.parent.appendChild(this.button_);

            this.eventManager.listen(this.button_, 'click', () => {
                self.emit('report');
                controls.hideSettingsMenus();
                controls
                    .getControlsContainer()
                    .querySelector('.shaka-overflow-menu-button')
                    .focus();
            });
        }
    };
    Report.Factory = class {
        create(rootElement, controls, text) {
            return new Report(rootElement, controls, text);
        }
    };

    const ReportMenu = class extends shaka.ui.Element {
        /**
         * @param {!HTMLElement} parent
         * @param {!shaka.ui.Controls} controls
         */
        constructor(parent, controls) {
            super(parent, controls);
            /** @private {!shaka.extern.UIConfiguration} */
            this.config_ = this.controls.getConfig();
            /** @private {HTMLElement} */
            this.controlsContainer_ = this.controls.getControlsContainer();
            /** @private {!Array.<shaka.extern.IUIElement>} */
            this.children_ = [];
            this.addOverflowMenuButton_();
            this.addOverflowMenu_();
            this.createChildren_();
            const backToOverflowMenuButtons = this.controls
                .getVideoContainer()
                .getElementsByClassName('shaka-back-to-overflow-button');
            for (const button of backToOverflowMenuButtons) {
                this.eventManager.listen(button, 'click', () => {
                    // Hide the submenus, display the overflow menu
                    this.controls.hideSettingsMenus();
                    setDisplay(this.overflowMenu_, true);
                    // If there are back to overflow menu buttons, there must be
                    // overflow menu buttons, but oh well
                    if (this.overflowMenu_.childNodes.length) {
                        /** @type {!HTMLElement} */ (this.overflowMenu_.childNodes[0]).focus();
                    }
                    // Make sure controls are displayed
                    // this.controls.computeOpacity();
                });
            }
            this.eventManager.listen(
                this.localization,
                shaka.ui.Localization.LOCALE_UPDATED,
                () => {
                    this.updateAriaLabel_();
                }
            );
            this.eventManager.listen(
                this.localization,
                shaka.ui.Localization.LOCALE_CHANGED,
                () => {
                    this.updateAriaLabel_();
                }
            );
            this.eventManager.listen(this.adManager, shaka.ads.AdManager.AD_STARTED, () => {
                setDisplay(this.overflowMenuButton_, false);
            });
            this.eventManager.listen(this.adManager, shaka.ads.AdManager.AD_STOPPED, () => {
                setDisplay(this.overflowMenuButton_, true);
            });
            this.eventManager.listen(this.controls, 'submenuopen', () => {
                // Hide the main overflow menu if one of the sub menus has
                // been opened.
                setDisplay(this.overflowMenu_, false);
            });
            this.eventManager.listen(this.overflowMenu_, 'touchstart', (event) => {
                this.controls.setLastTouchEventTime(Date.now());
                event.stopPropagation();
            });
            this.eventManager.listen(this.overflowMenuButton_, 'click', () => {
                this.onOverflowMenuButtonClick_();
            });
            this.updateAriaLabel_();
            if (this.ad) {
                // There was already an ad.
                setDisplay(this.overflowMenuButton_, false);
            }
        }
        /** @override */
        release() {
            this.controlsContainer_ = null;
            for (const element of this.children_) {
                element.release();
            }
            this.children_ = [];
            super.release();
        }
        /**
         * @private
         */
        addOverflowMenu_() {
            /** @private {!HTMLElement} */
            this.overflowMenu_ = document.createElement('div');
            this.overflowMenu_.classList.add('shaka-overflow-menu');
            this.overflowMenu_.classList.add('shaka-no-propagation');
            this.overflowMenu_.classList.add('shaka-show-controls-on-mouse-over');
            this.overflowMenu_.classList.add('shaka-hidden');
            this.controlsContainer_.appendChild(this.overflowMenu_);
        }
        /**
         * @private
         */
        addOverflowMenuButton_() {
            /** @private {!HTMLButtonElement} */
            this.overflowMenuButton_ = document.createElement('button');
            this.overflowMenuButton_.classList.add('shaka-overflow-menu-button');
            this.overflowMenuButton_.classList.add('shaka-no-propagation');
            this.overflowMenuButton_.classList.add('material-icons-round');

            flagIcon.renderSync().appendTo(this.overflowMenuButton_);
            //     shaka.ui.Enums.MaterialDesignIcons.OPEN_OVERFLOW;
            this.parent.appendChild(this.overflowMenuButton_);
        }
        /**
         * @private
         */
        createChildren_() {
            this.children_.push(new Report.Factory());
            //   for (const name of this.config_.overflowMenuButtons) {
            //     if (shaka.ui.ReportMenu.elementNamesToFactories_.get(name)) {
            //       const factory =
            //           shaka.ui.ReportMenu.elementNamesToFactories_.get(name);
            //       goog.asserts.assert(this.controls, 'Controls should not be null!');
            //       this.children_.push(factory.create(this.overflowMenu_, this.controls));
            //     } else {
            //       shaka.log.alwaysWarn('Unrecognized overflow menu element requested:',
            //           name);
            //     }
            //   }
        }
        /** @private */
        onOverflowMenuButtonClick_() {
            if (this.controls.anySettingsMenusAreOpen()) {
                this.controls.hideSettingsMenus();
            } else {
                setDisplay(this.overflowMenu_, true);
                // this.controls.computeOpacity();
                // If overflow menu has currently visible buttons, focus on the
                // first one, when the menu opens.
                // const isDisplayed =
                //     (element) => element.classList.contains('shaka-hidden') == false;
                // const Iterables = shaka.util.Iterables;
                //     this.overflowMenu_.childNodes.some, (isDisplayed)=> {
                //         // Focus on the first visible child of the overflow menu
                //         const visibleElements =
                //             Iterables.filter(this.overflowMenu_.childNodes, isDisplayed);
                //   /** @type {!HTMLElement} */ (visibleElements[0]).focus();
                //     }
            }
        }
        /**
         * @private
         */
        updateAriaLabel_() {
            // const LocIds = shaka.ui.Locales.Ids;
            // this.overflowMenuButton_.setAttribute(shaka.ui.Constants.ARIA_LABEL,
            //     this.localization.resolve(LocIds.MORE_SETTINGS));
        }
    };
    /**
     * @implements {shaka.extern.IUIElement.Factory}
     * @final
     */
    ReportMenu.Factory = class {
        /** @override */
        create(rootElement, controls) {
            return new ReportMenu(rootElement, controls);
        }
    };

    return { Report, flagIcon, ReportMenu };
}

module.exports = { getElements, flagSmallIcon, playIcon };
