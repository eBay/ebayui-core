const Expander = require('makeup-expander');
const assign = require('core-js-pure/features/object/assign');
const indexOf = require('core-js-pure/features/array/index-of');
const findIndex = require('core-js-pure/features/array/find-index');
const eventUtils = require('../../common/event-utils');
const NodeListUtils = require('../../common/nodelist-utils');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return assign({}, input, {
            items: (input.items || []).map(item => assign({}, item))
        });
    },
    onRender() {
        this.expander = new Expander(this.el, {
            hostSelector: '.expand-btn',
            contentSelector: '.menu-button__menu, .fake-menu-button__menu',
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true
        });
    },
    onBeforeUpdate() {},
    onDestroy() {},
    _handleDestroy() {},
    handleItemClick(e, itemEl) {
        const itemElIndex = getItemElementIndex(itemEl);
        if (this.getCheckedList().indexOf(itemElIndex) === -1) {
            this.setCheckedItem(itemElIndex, true);
        } else if (this.state.isCheckbox) {
            this.setCheckedItem(itemElIndex, true);
        }
    },
    handleItemKeydown(e, itemEl) {
        eventUtils.handleActionKeydown(e, () => {
            this.handleItemClick(e, itemEl);
        });

        eventUtils.handleEscapeKeydown(e, () => {
            this.buttonEl.focus();
            this.setState('expanded', false);
        });
    },
    handleItemKeypress(e) {
        const itemIndex = NodeListUtils.findNodeWithFirstChar(this.itemEls, e.key);

        if (itemIndex !== -1) {
            this.rovingTabindex.index = itemIndex;
        }
    },
    handleButtonEscape() {
        this.expander.collapse();
    },
    handleExpand() {
        this.emit('menu-expand');
    },
    handleCollapse() {
        this.emit('menu-collapse');
    }
});
