const markoWidgets = require('marko-widgets');
const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const rovingTabindex = require('makeup-roving-tabindex');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const NodeListUtils = require('../../common/nodelist-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const mainButtonClass = 'expand-btn';
const buttonSelector = `.${mainButtonClass}`;
const contentClass = 'expander__content';
const contentSelector = `.${contentClass}`;
const checkedItemSelector = '.menu__item[role^=menuitem][aria-checked=true]';

function getInitialState(input) {
    const type = input.type;
    const isRadio = type === 'radio';
    const isCheckbox = type === 'checkbox';
    const isFake = type === 'fake';
    let checkedItems = [];

    const items = (input.items || []).map((item, i) => {
        const classes = [item.class];
        const href = item.href;
        const itemType = item.type; // for button menu item in fake menu
        const checked = item.checked;
        const current = item.current; // only for fake menu items
        let role;
        let tag;

        if (isFake) {
            classes.push('fake-menu__item');
            if (itemType === 'button') {
                tag = 'button';
            } else {
                tag = 'a';
            }
        } else {
            tag = 'div';
            classes.push('menu__item');
        }

        if (isRadio) {
            role = 'menuitemradio';
        } else if (isCheckbox) {
            role = 'menuitemcheckbox';
        } else if (!isFake) {
            role = 'menuitem';
        }

        if (isCheckbox && item.checked) {
            checkedItems.push(i);
        } else if (isRadio && item.checked) {
            checkedItems = i;
        }

        return {
            htmlAttributes: processHtmlAttributes(item),
            classes,
            style: item.style,
            renderBody: item.renderBody,
            tag,
            role,
            href,
            useCheckIcon: isRadio || isCheckbox,
            checked: (!isRadio && !isCheckbox) ? false : Boolean(checked),
            current: Boolean(current),
            badgeNumber: item.badgeNumber,
            badgeAriaLabel: item.badgeAriaLabel
        };
    });

    return {
        htmlAttributes: processHtmlAttributes(input),
        class: input.class,
        style: input.style,
        type,
        isRadio,
        isCheckbox,
        isFake,
        text: input.text,
        icon: input.icon,
        iconTag: input.iconTag && input.iconTag.renderBody,
        a11yText: input.a11yText,
        noToggleIcon: input.noToggleIcon,
        reverse: Boolean(input.reverse),
        fixWidth: Boolean(input.fixWidth),
        borderless: Boolean(input.borderless),
        size: input.size,
        priority: input.priority,
        expanded: false,
        items,
        checked: checkedItems,
        customLabel: input.label,
        disabled: input.disabled || false
    };
}

function getTemplateData(state) {
    const menuClass = [state.class, 'expander'];
    const itemsClass = [contentClass];

    if (state.isFake) {
        menuClass.push('fake-menu');
        itemsClass.push('fake-menu__items');
        if (state.reverse) {
            itemsClass.push('fake-menu__items--reverse');
        }
        if (state.fixWidth) {
            itemsClass.push('fake-menu__items--fix-width');
        }
    } else {
        menuClass.push('menu');
        itemsClass.push('menu__items');
        if (state.reverse) {
            itemsClass.push('menu__items--reverse');
        }
        if (state.fixWidth) {
            itemsClass.push('menu__items--fix-width');
        }
    }

    return {
        htmlAttributes: state.htmlAttributes,
        menuClass,
        style: state.style,
        type: state.type,
        isRadio: state.isRadio,
        isCheckbox: state.isCheckbox,
        isNotCheckable: !state.isRadio && !state.isCheckbox,
        text: state.text,
        icon: state.icon,
        iconTag: state.iconTag,
        a11yText: state.a11yText,
        noToggleIcon: state.noToggleIcon,
        expanded: state.expanded,
        size: state.size,
        priority: state.priority,
        noText: !state.text && !state.icon,
        buttonClass: state.borderless && 'expand-btn--borderless',
        itemsClass,
        role: !state.isFake ? 'menu' : null,
        items: state.items,
        customLabel: state.customLabel,
        disabled: state.disabled
    };
}

function onRender(event) {
    this.buttonEl = this.el.querySelector(buttonSelector);
    this.contentEl = this.el.querySelector(contentSelector);
    this.itemEls = this.el.querySelectorAll('.menu__item, .fake-menu__item');

    if (event.firstRender) {
        if (this.state.isCheckbox) {
            this.el.setCheckedList = setCheckedList.bind(this);
            this.el.getCheckedList = getCheckedList.bind(this);
        }
        observer.observeRoot(this, ['text', 'expanded']);
        if (this.state.isRadio) {
            observer.observeRoot(this, ['checked'], itemIndex => {
                if (itemIndex >= 0 && itemIndex < (this.state.items.length)) {
                    this.setCheckedItem(itemIndex);
                } else if (itemIndex < 0) {
                    this.setState('checked', 0);
                } else if (itemIndex > (this.state.items.length - 1)) {
                    console.warn('Index out of bounds. Select an available item index.');
                }
            });
        }

        // FIXME: should be outside of firstRender, but only if observers haven't been attached yet
        const checkedObserverCallback = itemEl => this.processAfterStateChange([getItemElementIndex(itemEl)]);
        this.itemEls.forEach((itemEl, i) => {
            observer.observeInner(this, itemEl, 'checked', `items[${i}]`, 'items', checkedObserverCallback);
        });

        const expander = new Expander(this.el, { // eslint-disable-line no-unused-vars
            hostSelector: buttonSelector,
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true
        });

        // FIXME: should be outside of firstRender, but only when itemEls changes
        if (!this.state.isFake) {
            this.rovingTabindex = rovingTabindex.createLinear(this.contentEl, 'div', { index: 0, autoReset: 0 });
        }
    }
}

/**
 * Internal marko function, can be triggered from both makeup and API
 * http://v3.markojs.com/docs/marko-widgets/javascript-api/#setstatedirtyname-value
 * @param {Boolean} expanded
 */
function update_expanded(expanded) { // eslint-disable-line camelcase
    if ((expanded && this.buttonEl.getAttribute('aria-expanded') === 'false') ||
        (!expanded && this.buttonEl.getAttribute('aria-expanded') === 'true')) {
        this.buttonEl.click();
    }
}

/**
 * Common processing after data change via both UI and API
 * @param {Array} itemIndexes
 */
function processAfterStateChange(itemIndexes) {
    const itemIndex = itemIndexes[(itemIndexes.length - 1)];
    const itemEl = this.itemEls[itemIndex];

    // enforce single selection on radio items
    if (this.state.isRadio) {
        this.state.items.forEach((eachItem, i) => {
            if (i !== itemIndex) {
                eachItem.checked = false;
            }
        });
    }

    if (this.state.isRadio || this.state.isCheckbox) {
        elementScroll.scroll(itemEl);
    }

    if (this.state.isCheckbox && itemIndexes.length > 1) {
        // only calling via API can have multiple item indexes
        this.setState('checked', this.getCheckedList());
        emitAndFire(this, 'menu-change', { indexes: itemIndexes, checked: this.getCheckedList(), el: null });
    } else if (this.state.isCheckbox) {
        this.setState('checked', this.getCheckedList());
        emitAndFire(this, 'menu-change', { index: itemIndex, checked: this.getCheckedList(), el: itemEl });
    } else if (this.state.isRadio) {
        this.setState('checked', itemIndex);
        emitAndFire(this, 'menu-change', { index: itemIndex, checked: [itemIndex], el: itemEl });
    } else {
        this.setState('checked', itemIndex);
        emitAndFire(this, 'menu-select', { index: itemIndex, checked: [itemIndex], el: itemEl });
    }
}

/**
 * Handle normal mouse click for item
 * @param {MouseEvent} e
 */
function handleItemClick(e) {
    let itemEl = e.target;
    const parentEl = itemEl.closest('.menu__item, .fake-menu__item');

    if (parentEl) { // nested click inside menu_item
        itemEl = parentEl;
    }

    this.setCheckedItem(getItemElementIndex(itemEl), true);
}

/**
 * Set the checked item based on the index
 * @param {Integer} itemIndex
 * @param {Boolean} toggle
 */
function setCheckedItem(itemIndex, toggle) {
    const item = this.state.items[itemIndex];

    if (item) {
        if (this.state.isCheckbox && !toggle) {
            item.checked = true;
        } else if (this.state.isCheckbox && toggle) {
            item.checked = !item.checked;
        } else if (this.state.isRadio) {
            this.state.items[itemIndex].checked = true;
        }

        if (this.state.isCheckbox || this.state.isRadio) {
            this.setStateDirty('items');
        }

        if (this.state.isRadio || toggle) {
            this.processAfterStateChange([itemIndex]);
        }
    }
}

/**
 * Handle a11y for item (is not handled by makeup)
 * https://ebay.gitbooks.io/mindpatterns/content/input/menu.html#keyboard
 * @param {KeyboardEvent} e
 */
function handleItemKeydown(e) {
    eventUtils.handleActionKeydown(e, () => {
        this.handleItemClick(e);
    });

    eventUtils.handleEscapeKeydown(e, () => {
        this.buttonEl.focus();
        this.setState('expanded', false);
    });
}

/**
 * For any key that corresponds to a printable character, move focus to
 * the first menu item whose label begins with that character.
 * https://www.w3.org/TR/wai-aria-practices-1.1/#menu
 * @param {KeyboardEvent} e
 */
function handleItemKeypress(e) {
    const itemIndex = NodeListUtils.findNodeWithFirstChar(this.itemEls, e.key);

    if (itemIndex !== -1) {
        this.rovingTabindex.index = itemIndex;
    }
}

function handleButtonEscape() {
    this.setState('expanded', false);
}

function handleExpand() {
    elementScroll.scroll(this.el.querySelector(checkedItemSelector));
    this.setState('expanded', true);
    emitAndFire(this, 'menu-expand');
    scrollKeyPreventer.add(this.contentEl);
}

function handleCollapse() {
    this.setState('expanded', false);
    emitAndFire(this, 'menu-collapse');
    scrollKeyPreventer.remove(this.contentEl);
}

/**
 * Determine currently checked items (for checkbox case)
 * @returns {Array} checked indexes
 */
function getCheckedList() {
    const checked = [];
    this.state.items.forEach((item, i) => {
        if (item.checked) {
            checked.push(i);
        }
    });
    return checked;
}

function getItemElementIndex(itemEl) {
    return Array.prototype.slice.call(itemEl.parentNode.children).indexOf(itemEl);
}

/**
 * Set the list of options by their index
 * @param {Array} indexArray
 */
function setCheckedList(indexArray) {
    if (indexArray) {
        this.state.items.forEach((item) => {
            item.checked = false;
        });

        indexArray.forEach((index) => {
            this.setCheckedItem(index);
        });

        this.processAfterStateChange(indexArray);
    }
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    onRender,
    update_expanded,
    handleItemClick,
    handleItemKeydown,
    handleItemKeypress,
    handleButtonEscape,
    handleExpand,
    handleCollapse,
    setCheckedItem,
    getCheckedList,
    setCheckedList,
    getItemElementIndex,
    processAfterStateChange
});
