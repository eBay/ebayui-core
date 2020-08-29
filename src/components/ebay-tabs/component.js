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
            const len = input.tabs.length;
            const keyCode = event.charCode || event.keyCode;
            const direction = keyCode === 37 || keyCode === 38 ? -1 : 1;
            const current = (state.current + len + direction) % len;
            this.getEl(`tabs-${current}`).focus();

            if (!input.activation || input.activation === 'auto') {
                this._setIndex(current);
            }
        });
    },

    handleHeadingClick(current) {
        this._setIndex(current);
    },

    onCreate() {
        this.state = { current: 0 };
    },

    onInput(input) {
        const { state } = this;
        input.tabs = input.tabs || [];
        input.panels = input.panels || [];

        if (!isNaN(input.current)) {
            state.current = parseInt(input.current, 10) % (input.tabs.length || 1);
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

    _setIndex(current) {
        const { state } = this;

        if (current !== state.current) {
            state.current = current;
            this.emit('select', { current });
        }
    },

    _setupMakeup() {
        const { input, state } = this;

        if (!input.fake) {
            this._linearRovingTabindex = rovingTabindex.createLinear(
                this.getEl('tabs'),
                '.tabs__item',
                {
                    index: state.current,
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
