import * as scrollKeyPreventer from 'makeup-prevent-scroll-keys';
import { createLinear } from 'makeup-roving-tabindex';
import * as eventUtils from '../../common/event-utils';
import setupMenu, { MenuUtils, type MenuInput, type MenuState } from '../../common/menu-utils';

export interface FilterMenuEvent<T extends Event = Event> {
    el?: Element;
    checked?: string[];
    checkedIndex?: number[];
    originalEvent: T;
    index?: number;
    currentChecked?: boolean;
}

export interface Input extends MenuInput, Omit<Marko.Input<'span'>, `on${string}`> {
    variant?: 'form';
    classPrefix?: string;
    formName?: string;
    formAction?: string;
    formMethod?: string;
    footerText?: string;
    a11yFooterText?: string;
    footer?: Marko.Input<'button'> & {
        a11yFooterText?: string;
    };
    renderBody?: Marko.Body;
    'on-footer-click'?: (event: FilterMenuEvent) => void;
    'onFooter-click'?: this['on-footer-click'];
    'on-form-submit'?: (event: FilterMenuEvent) => void;
    'onForm-submit'?: this['on-form-submit'];
    'on-change'?: (event: FilterMenuEvent) => void;
    onChange?: this['on-change'];
    'on-keydown'?: (event: FilterMenuEvent) => void;
    onKeydown?: this['on-keydown'];
}

export default class extends MenuUtils<Input, MenuState> {
    declare _rovingTabIndex: ReturnType<typeof createLinear>;
    declare lastTabIndexPosition: number;

    onCreate() {
        setupMenu(this);
    }

    resetIndex() {
        this._rovingTabIndex.index = 0;
        this.lastTabIndexPosition = 0;
    }

    handleRadioClick(index: number, ev: MouseEvent, itemEl: Element) {
        this._toggleItemChecked(index, ev, itemEl);
    }

    handleItemClick(index: number, ev: MouseEvent, itemEl: Element) {
        const targetEv = (ev as any).originalEvent || ev;
        if (this.input.variant !== 'form' || targetEv.target.tagName !== 'INPUT') {
            this._toggleItemChecked(index, ev, itemEl);
        }
    }

    handleItemKeydown(index: number, ev: KeyboardEvent, itemEl: Element) {
        eventUtils.handleEscapeKeydown(ev, () => {
            // TODO: this event is not documented.
            // Do we need it? (it is only used by the filter-menu-button)
            this._emitComponentEvent('keydown', ev, { index });
        });

        if (this.input.variant !== 'form') {
            eventUtils.handleActionKeydown(ev, () => {
                this._toggleItemChecked(index, ev, itemEl);
            });
        }
    }

    handleFooterButtonClick(originalEvent) {
        this._emitComponentEvent('footer-click', originalEvent);
    }

    handleFormSubmit(originalEvent) {
        this._emitComponentEvent('form-submit', originalEvent);
    }

    onInput(input: Input) {
        this.state = super.getInputState(input);
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

    _toggleItemChecked(index: number, originalEvent: Event, el: Element) {
        if (this.isDisabled(index)) {
            return;
        }
        this.toggleChecked(index);
        this._emitComponentEvent('change', originalEvent, { el, index });
    }

    _emitComponentEvent(
        eventType: string,
        originalEvent: Event,
        args?: { el?: Element; index?: number }
    ) {
        const { el, index } = args || {};
        const checked = this.getCheckedValues();
        const checkedIndex = this.getCheckedIndexes();
        const currentChecked = index === undefined ? undefined : this.isChecked(index);

        this.emit(`${eventType}`, {
            el,
            checked,
            checkedIndex,
            originalEvent,
            index,
            currentChecked,
        } satisfies FilterMenuEvent);
    }

    _setupMakeup() {
        if (this.input.variant !== 'form') {
            this._rovingTabIndex = createLinear(this.getEl('menu'), 'div', {
                autoInit: this.lastTabIndexPosition || 'interactive',
            });

            scrollKeyPreventer.add(this.getEl('container'));
        }
    }

    _cleanupMakeup() {
        if (this._rovingTabIndex) {
            this.lastTabIndexPosition = this._rovingTabIndex.index;
            this._rovingTabIndex.destroy();
            this._rovingTabIndex = undefined;
            scrollKeyPreventer.remove(this.getEl('container'));
        }
    }
}
