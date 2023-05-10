import Expander from 'makeup-expander';
import * as eventUtils from '../../common/event-utils';
import setupMenu, { MenuUtils, type MenuInput, type MenuState } from '../../common/menu-utils';
import { MenuEvent } from '../ebay-menu/component';
import { Input as EbayButtonInput } from '../ebay-button/component-browser';

export interface MenuButtonEvent {
    el?: Element;
    originalEvent?: Event;
    indexes?: number[];
    checked?: number[];
    checkedValues?: string[];
    /** @deprecated in v5 */
    index?: number;
}

export interface Input extends MenuInput, Omit<Marko.Input<'span'>, `on${string}`> {
    collapseOnSelect?: boolean;
    prefixId?: string;
    variant?: 'overflow' | 'form' | 'button' | 'icon';
    borderless?: boolean;
    priority?: 'primary' | 'secondary' | 'tertiary' | 'delete' | 'none';
    size?: EbayButtonInput['size'];
    transparent?: boolean;
    a11yText?: string;
    disabled?: boolean;
    split?: string;
    noToggleIcon?: boolean;
    label?: {
        renderBody?: Marko.Body;
    };
    prefixLabel?: string;
    icon?: Marko.Component;
    text?: string;
    reverse?: boolean;
    fixWidth?: boolean;
    'on-expand'?: (event: MenuButtonEvent) => void;
    onExpand?: this['on-expand'];
    'on-collapse'?: (event: MenuButtonEvent) => void;
    onCollapse?: this['on-collapse'];
    'on-change'?: (event: MenuButtonEvent) => void;
    onChange?: this['on-change'];
    'on-select'?: (event: MenuButtonEvent) => void;
    onSelect?: this['on-select'];
    'on-mousedown'?: (event: MenuButtonEvent) => void;
    onMousedown?: this['on-mousedown'];
}

export default class extends MenuUtils<Input, MenuState> {
    declare expander: Expander;

    onCreate() {
        setupMenu(this);
    }

    toggleItemChecked(index: number, itemEl: Element | undefined, originalEvent: Event) {
        // This needs to be at start since toggleChecked swaps the checkedIndex
        // and then the right events will not fire correctly
        const shouldEmitRadio = this.isRadio() && index !== this.state.checkedIndex;
        this.toggleChecked(index);

        if (shouldEmitRadio) {
            if (this.input.collapseOnSelect) {
                this.expander.expanded = false;
            }
            this.emitComponentEvent({
                index,
                eventType: 'change',
                el: itemEl,
                originalEvent,
            });
        } else if (this.type !== 'radio') {
            if (this.input.collapseOnSelect) {
                this.expander.expanded = false;
            }
            this.emitComponentEvent({
                index,
                eventType: !this.type ? 'select' : 'change',
                el: itemEl,
                originalEvent,
            });
        }
    }

    handleItemClick(index: number, e: Event, itemEl?: Element) {
        this.toggleItemChecked(index, itemEl, e);
    }

    handleMenuKeydown({ el, originalEvent, index }: MenuEvent<KeyboardEvent>) {
        eventUtils.handleActionKeydown(originalEvent, () => {
            this.handleItemClick(index ?? 0, originalEvent, el);
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.expanded = false;
            this.focus();
        });
    }

    focus() {
        ((this.getComponent('button') as Marko.Component).el as HTMLElement).focus();
    }

    handleButtonEscape() {
        this.expander.expanded = false;
    }

    handleExpand() {
        this.emitComponentEvent({ eventType: 'expand' });
    }

    handleCollapse() {
        this.emitComponentEvent({ eventType: 'collapse' });
    }

    handleMenuChange({ el, originalEvent, index }: MenuEvent) {
        this.toggleItemChecked(index ?? 0, el, originalEvent);
    }

    handleMenuSelect({ el, originalEvent, index }: MenuEvent) {
        if (this.input.collapseOnSelect) {
            this.expander.expanded = false;
        }

        this.emitComponentEvent({ eventType: 'select', el, originalEvent, index });
    }
    handleMousedown(originalEvent: MouseEvent, el: HTMLSpanElement) {
        this.emitComponentEvent({ eventType: 'mousedown', el, originalEvent });
    }
    emitComponentEvent({
        eventType,
        el,
        originalEvent,
        index,
    }: {
        eventType: string;
        el?: Element;
        originalEvent?: Event;
        index?: number;
    }) {
        const checkedIndexes = this.getCheckedIndexes();
        const isCheckbox = this.type === 'checkbox';

        const eventObj = {
            el,
            originalEvent,
        } satisfies MenuButtonEvent;

        if (isCheckbox && checkedIndexes && checkedIndexes.length > 1) {
            Object.assign(eventObj, {
                indexes: this.getCheckedIndexes(), // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues(), // DEPRECATED in v5
            });
        } else if (isCheckbox || this.isRadio()) {
            Object.assign(eventObj, {
                index, // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues(), // DEPRECATED in v5
            });
        } else if (eventType !== 'expand' && eventType !== 'collapse') {
            Object.assign(eventObj, {
                index, // DEPRECATED in v5
                checked: [index], // DEPRECATED in v5 (keep but change from indexes to values)
            });
        }

        this.emit(`${eventType}`, eventObj);
    }

    onInput(input: Input) {
        this.state = this.getInputState(input);
    }

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    }

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _setupMakeup() {
        this.expander = new Expander(this.el, {
            hostSelector: '.menu-button__button',
            contentSelector: '.menu-button__menu',
            focusManagement: 'focusable',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        });
    }

    _cleanupMakeup() {
        if (this.expander) {
            this.expander.destroy();
        }
    }
}
