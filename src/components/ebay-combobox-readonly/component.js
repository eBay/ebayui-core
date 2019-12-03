const Expander = require('makeup-expander');
const findIndex = require('core-js-pure/features/array/find-index');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const eventUtils = require('../../common/event-utils');

module.exports = {
    handleExpand() {
        elementScroll.scroll(this.getEls("options")[this.state.selectedIndex]);
        this.emit('combobox-expand');
    },
    handleCollapse() {
        this.emit('combobox-collapse');
    },

    /**
     * Handle mouse click for option
     * @param {MouseEvent} event
     * @param {HTMLDivElement} el
     */
    handleOptionClick(index) {
        this.setSelectedIndex(index);
        this.expander.collapse();
        this.getEl("combobox").focus();
    },
    /**
     * Handle selection of options when the combobox is closed
     * https://ebay.gitbooks.io/mindpatterns/content/input/listbox.html#keyboard
     * @param {KeyboardEvent} originalEvent
     */
    handleComboboxKeyDown(originalEvent) {
        eventUtils.handleUpDownArrowsKeydown(originalEvent, () => {
            const code = originalEvent.charCode || originalEvent.keyCode;
            const direction = code ===  40 /* down */ ? 1 : -1;
            this.setSelectedIndex(
                Math.max(
                    0,
                    Math.min(
                        this.input.options.length - 1,
                        this.state.selectedIndex + direction
                    )
                )
            );
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.collapse();
            this.getEl("combobox").focus();
        });
    },
    setSelectedIndex(index) {
        if (index !== this.state.selectedIndex) {
            const el = this.getEls("options")[index];
            this.state.selectedIndex = index;
            elementScroll.scroll(el);
            this.emit('combobox-change', {
                index,
                selected: [this.input.options[index].value],
                el
            });
        }
    },

    onCreate(input) {
        input.options = input.options || [];
        this.state = {
            selectedIndex: Math.max(
                0,
                findIndex(input.options, option => option.selected)
            )
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

    _setupMakeup() {
        if (this.input.options.length > 0) {
            this.expander = new Expander(this.el, {
                autoCollapse: true,
                expandOnClick: !this.input.disabled,
                contentSelector: '[role="listbox"]',
                hostSelector: '[role="combobox"]',
                expandedClass: 'combobox--expanded',
                simulateSpacebarClick: true
            });

            scrollKeyPreventer.add(this.getEl("combobox"));
            scrollKeyPreventer.add(this.getEl("listbox"));
        }
    },

    _cleanupMakeup() {
        if (this.expander) {
            this.expander.cancelAsync();
            this.expander = null;

            scrollKeyPreventer.remove(this.getEl("combobox"));
            scrollKeyPreventer.remove(this.getEl("listbox"));
        }
    }
};
