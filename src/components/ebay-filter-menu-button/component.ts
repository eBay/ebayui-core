import Expander from 'makeup-expander';
import { AttrClass, AttrStyle } from 'marko/tags-html';
import * as eventUtils from '../../common/event-utils';
import menuUtils from '../../common/menu-utils';
import setupMenu, { MenuUtils, type MenuInput, type MenuState } from '../../common/menu-utils';
import { FilterMenuEvent } from '../ebay-filter-menu/component';

export interface FilterMenuButtonEvent {
    el?: Element;
    checked: string[];
    originalEvent?: Event;
    index?: number;
    currentChecked?: boolean;
}

export interface Input extends MenuInput, Omit<Marko.Input<'span'>, `on${string}`> {
    text?: string;
    footerText?: string;
    a11yFooterText?: string;
    footer?: Marko.Input<'button'> & {
        a11yFooterText?: string;
    };
    variant?: 'form';
    formName?: string;
    formAction?: string;
    formMethod?: string;
    disabled?: boolean;
    a11yText?: string;
    'on-expand'?: () => void;
    onExpand?: this['on-expand'];
    'on-change'?: (event: FilterMenuButtonEvent) => void;
    onChange?: this['on-change'];
    'on-collapse'?: (event: FilterMenuButtonEvent) => void;
    onCollapse?: this['on-collapse'];
    'on-footer-click'?: (event: FilterMenuButtonEvent) => void;
    'onFooter-click'?: this['on-footer-click'];
    'on-form-submit'?: (event: FilterMenuButtonEvent) => void;
    'onForm-submit'?: this['on-form-submit'];
}

export default class extends MenuUtils<Input, MenuState> {
    declare _expander: Expander;

    onCreate() {
        setupMenu(this);
    }

    handleMenuKeydown({ originalEvent }: FilterMenuEvent<KeyboardEvent>) {
        eventUtils.handleEscapeKeydown(originalEvent, () => (this._expander.expanded = false));
    }

    handleMenuChange({ checkedIndex, el, originalEvent, index, currentChecked }: FilterMenuEvent) {
        // TODO: the event data from the filter-menu should probably
        // change to include which items are checked not just the values.
        if (checkedIndex !== undefined) this.toggleChecked(checkedIndex);
        this._emitComponentEvent('change', originalEvent, { el, index, currentChecked });
    }

    handleFooterButtonClick() {
        this._emitComponentEvent('footer-click');
        this._expander.expanded = false;
    }

    handleFormSubmit({ originalEvent }: FilterMenuEvent) {
        this._emitComponentEvent('form-submit', originalEvent);
    }

    handleExpand({ originalEvent }: FilterMenuEvent) {
        this._emitComponentEvent('expand', originalEvent);
    }

    handleCollapse({ originalEvent }: FilterMenuEvent) {
        (this.getEl('button') as HTMLElement).focus();
        this._emitComponentEvent('collapse', originalEvent);
    }

    onInput(input: Input) {
        input.items = input.items || ([] as any);
        this.state = this.getInputState(input);
    }

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _emitComponentEvent(
        eventType: string,
        originalEvent?: Event,
        args?: { el?: Element; index?: number; currentChecked?: boolean }
    ) {
        const { el, index, currentChecked } = args || {};
        switch (eventType) {
            case 'expand':
                this.emit(eventType);
                break;
            case 'change':
            case 'collapse':
            case 'form-submit':
            case 'footer-click': {
                const checked = this.getCheckedValues();
                this.emit(eventType, {
                    el,
                    checked,
                    originalEvent,
                    index,
                    currentChecked,
                } satisfies FilterMenuButtonEvent);
                break;
            }
            default:
                break;
        }
    }

    _setupMakeup() {
        this._expander = new Expander(this.getEl('container'), {
            hostSelector: '.filter-menu-button__button',
            contentSelector: '.filter-menu-button__menu',
            focusManagement: 'interactive',
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        });
    }

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.destroy();
            this._expander = undefined;
        }
    }
}
