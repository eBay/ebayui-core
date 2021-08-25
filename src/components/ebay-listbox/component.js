const ActiveDescendant = require('makeup-active-descendant');
const elementScroll = require('../../common/element-scroll');
const eventUtils = require('../../common/event-utils');

module.exports = {
    get isAutoSelection() {
        return this.input.listSelection === 'auto';
    },

    elementScroll() {
        elementScroll.scroll(this.getEls('option')[this.state.selectedIndex]);
    },

    handleChange(index, wasClicked) {
        if (this.state.selectedIndex !== index) {
            const option = this.input.options[index];
            const el = this.getEls('option')[index];
            this.state.selectedIndex = index;
            this.once('update', () => {
                this.emit('change', {
                    index,
                    selected: [option.value],
                    el,
                    wasClicked,
                });
            });
        }
    },

    handleClick(index) {
        this.handleChange(index, true);
    },

    handleMouseDown() {
        this.wasClicked = true;
    },

    handleKeyDown(originalEvent) {
        eventUtils.handleActionKeydown(originalEvent, () =>
            this.handleChange(this._activeDescendant.index, false)
        );
    },

    handleListboxChange(event) {
        const selectedIndex = parseInt(event.detail.toIndex, 10);
        const el = this.getEls('option')[selectedIndex];
        const wasClicked = this.wasClicked;

        elementScroll.scroll(el);

        if (this.wasClicked) {
            this.wasClicked = false;
        }
        this.handleChange(selectedIndex, wasClicked);
    },

    onCreate() {
        this.state = {
            selectedIndex: 0,
        };
    },

    onInput(input) {
        const { state } = this;
        input.options = input.options || [];
        state.selectedIndex = Math.max(
            0,
            input.options.findIndex((option) => option.selected)
        );
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
                    autoReset: null,
                    autoScroll: !this.isAutoSelection,
                }
            );
        }
    },

    _cleanupMakeup() {
        if (this._activeDescendant) {
            this._activeDescendant.destroy();
            this._activeDescendant = undefined;
        }
    },
};
