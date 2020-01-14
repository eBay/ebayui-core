const rovingTabindex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');

module.exports = {
    /**
     * Handle a11y for heading
     * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
     * @param {KeyboardEvent} event
     * @param {HTMLDivElement} el
     */
    handleHeadingKeydown(dataIndex, event) {
        eventUtils.handleActionKeydown(event, () => {
            event.preventDefault();
            this._setIndex(dataIndex);
        });

        eventUtils.handleArrowsKeydown(event, () => {
            event.preventDefault();

            const { input, state } = this;
            const len = input.headings.length;
            const keyCode = event.charCode || event.keyCode;
            const direction = keyCode === 37 || keyCode === 38 ? -1 : 1;
            const index = (state.index + len + direction) % len;
            this.getEl(`tabs-${index}`).focus();

            if (!input.activation || input.activation === 'auto') {
                this._setIndex(index);
            }
        });
    },

    handleHeadingClick(index) {
        this._setIndex(index);
    },

    onCreate() {
        this.state = { index: 0 };
    },

    onInput(input) {
        const { state } = this;
        input.headings = input.headings || [];
        input.panels = input.panels || [];

        if (!isNaN(input.index)) {
            state.index = parseInt(input.index, 10) % (input.headings.length || 1);
        }
    },

    onMount() {
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _setIndex(index) {
        const { state } = this;

        if (index !== state.index) {
            state.index = index;
            this.emit('tab-select', { index });
        }
    },

    _setupMakeup() {
        const { input, state } = this;

        if (!input.fake) {
            this._linearRovingTabindex = rovingTabindex.createLinear(
                this.getEl('headings'),
                '.tabs__item',
                {
                    index: state.index,
                    wrap: true
                }
            );
        }
    },

    _cleanupMakeup() {
        if (this._rovingTabIndex) {
            this._rovingTabIndex.destroy();
            this._rovingTabIndex = undefined;
        }
    }
};
