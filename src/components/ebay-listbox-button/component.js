const Expander = require('makeup-expander');
const findIndex = require('core-js-pure/features/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');

module.exports = {
    handleExpand() {
        elementScroll.scroll(this.getEls('option')[this.state.selectedIndex]);
        this.emit('listbox-expand');
    },

    handleCollapse() {
        this.emit('listbox-collapse');
    },

    handleMouseDown() {
        this.wasClicked = true;
    },

    handleListboxChange(event) {
        const selectedIndex = parseInt(event.detail.toIndex, 10);
        const el = this.getEls('option')[selectedIndex];
        const option = this.input.options[selectedIndex];

        elementScroll.scroll(el);

        if (this.wasClicked) {
            this._expander.collapse();
            this.wasClicked = false;
        }

        if (this.state.selectedIndex !== selectedIndex) {
            this.state.selectedIndex = selectedIndex;
            this.once('update', () => {
                this.emit('listbox-change', {
                    index: selectedIndex,
                    selected: [option.value],
                    el
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
            const container = this.getEl('container');
            const optionsContainer = this.getEl('options');
            this._activeDescendant = ActiveDescendant.createLinear(
                container,
                optionsContainer,
                optionsContainer,
                '.listbox-button__option[role=option]',
                {
                    activeDescendantClassName: 'listbox-button__option--active',
                    autoInit: state.selectedIndex,
                    autoReset: null
                }
            );

            this._expander = new Expander(container, {
                autoCollapse: true,
                expandOnClick: true,
                simulateSpacebarClick: true,
                contentSelector: '.listbox-button__listbox',
                hostSelector: '.listbox-button__control',
                expandedClass: 'listbox-button--expanded',
                focusManagement: 'content'
            });

            scrollKeyPreventer.add(this.getEl('button'));
            scrollKeyPreventer.add(optionsContainer);
        }
    },

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.cancelAsync();
            this._expander = undefined;
        }

        if (this._activeDescendant) {
            this._activeDescendant.destroy();
            this._activeDescendant = undefined;
        }
    }
};
