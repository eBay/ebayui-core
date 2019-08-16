const assign = require('core-js-pure/features/object/assign');
const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
const eventUtils = require('../../common/event-utils');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return assign({}, input, {
            pressed: input.pressed || false,
            expanded: false
        });
    },
    onRender(event) {
        this.contentEl = this.el.querySelector('.filter-menu-button__menu');
        this.buttonEl = this.el.querySelector('button.filter-menu-button__button');

        if (event.firstRender) {
            // FIX ME: this should be synced with the expanded state instead of using the `update_expanded` api below.
            this.expander = new Expander(this.el, {
                hostSelector: '.filter-menu-button__button',
                contentSelector: '.filter-menu-button__menu',
                focusManagement: 'focusable',
                expandOnClick: true,
                autoCollapse: true,
                alwaysDoFocusManagement: true
            });

            // FIXME: should be outside of firstRender, but only when itemEls changes
            this.rovingTabindex = rovingTabindex.createLinear(this.contentEl.querySelector('[role="menu"]'), 'div', {
                index: 0,
                autoReset: 0
            });
        }
    },
    update_expanded(expanded) { // eslint-disable-line camelcase
        if ((expanded && this.buttonEl.getAttribute('aria-expanded') === 'false') ||
            (!expanded && this.buttonEl.getAttribute('aria-expanded') === 'true')) {
            this.buttonEl.click();
        }
    },
    setCheckedItem(itemIndex, itemEl) {
        const item = this.state.items[itemIndex];

        if (item) {
            this.state.items[itemIndex].checked = !item.checked;
            this.setStateDirty('items');
            this.emitComponentEvent('change', itemEl);
        }
    },
    getCheckedItems() {
        return this.state.items
            .filter(item => item.checked)
            .map((item, i) => ({
                index: i,
                value: item.value
            }));
    },
    handleItemClick(e, itemEl) {
        this.setCheckedItem(this.getItemElementIndex(itemEl), itemEl);
    },
    handleItemKeydown(e, itemEl) {
        eventUtils.handleActionKeydown(e, () => {
            this.setCheckedItem(this.getItemElementIndex(itemEl), itemEl);
        });
    },
    handleFooterButtonClick() {
        this.emitComponentEvent('footer-click');
        this.setState('expanded', false);
        this.buttonEl.setAttribute('aria-expanded', false);
        this.buttonEl.setAttribute('aria-pressed', (this.getCheckedItems().length > 0));
    },
    handleExpand() {
        scrollKeyPreventer.add(this.contentEl);
        this.emitComponentEvent('expand');
    },
    handleCollapse() {
        scrollKeyPreventer.remove(this.contentEl);
        this.emitComponentEvent('collapse');
    },
    getItemElementIndex(itemEl) {
        return Array.prototype.slice.call(itemEl.parentNode.children).indexOf(itemEl);
    },
    emitComponentEvent(eventType, itemEl) {
        switch (eventType) {
            case 'expand':
                this.emit(`filter-menu-button-${eventType}`, {});
                break;
            case 'collapse':
            case 'change':
            case 'footer-click':
            default:
                this.emit(`filter-menu-button-${eventType}`, {
                    el: itemEl,
                    checkedItems: this.getCheckedItems()
                });
                break;
        }
    }
});
