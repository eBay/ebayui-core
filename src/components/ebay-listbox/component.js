const findIndex = require('core-js-pure/features/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');

module.exports = {
    elementScroll() {
        elementScroll.scroll(this.getEls('option')[this.state.selectedIndex]);
    },

    handleMouseDown() {
        this.wasClicked = true;
    },

    handleListboxChange(event) {
        const selectedIndex = parseInt(event.detail.toIndex, 10);
        const el = this.getEls('option')[selectedIndex];
        const option = this.input.options[selectedIndex];
        const wasClicked = this.wasClicked;

        elementScroll.scroll(el);

        if (this.wasClicked) {
            this.wasClicked = false;
        }

        if (this.state.selectedIndex !== selectedIndex) {
            this.state.selectedIndex = selectedIndex;
            this.once('update', () => {
                this.emit('listbox-change', {
                    index: selectedIndex,
                    selected: [option.value],
                    el,
                    wasClicked
                });
            });
        }
    },

    onCreate() {
        this.state = {
            selectedIndex: 0
        };
    },

    onInput(input) {
        const { state } = this;
        input.options = input.options || [];
        state.selectedIndex = Math.max(0, findIndex(input.options, option => option.selected));
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

    _setupMakeup() {
        const { input, state } = this;

        if (input.options.length && !input.disabled) {
            const container = this.getEl('options');
            const optionsContainer = this.getEl('options');
            this._activeDescendant = ActiveDescendant.createLinear(
                container,
                optionsContainer,
                optionsContainer,
                '.listbox__option[role=option]',
                {
                    activeDescendantClassName: 'listbox__option--active',
                    autoInit: state.selectedIndex,
                    autoReset: null
                }
            );

            scrollKeyPreventer.add(optionsContainer);
        }
    },

    _cleanupMakeup() {
        if (this._activeDescendant) {
            this._activeDescendant.destroy();
            this._activeDescendant = undefined;
        }
    }
};
