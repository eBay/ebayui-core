import { createLinear } from 'makeup-active-descendant';
import { AttrStringOrNumber } from 'marko/tags-html';
import { scroll } from '../../common/element-scroll';
import * as eventUtils from '../../common/event-utils';

interface ChangeEvent {
    index: number;
    wasClicked: boolean;
    selected: AttrStringOrNumber[];
    el: HTMLOptionElement;
}

export interface Option extends Omit<Marko.Input<'option'>, `on${string}`> {
    disabled?: boolean;
    text?: string;
}

export interface Input extends Omit<Marko.Input<'div'>, `on${string}`> {
    listSelection?: 'auto' | 'manual';
    options?: Marko.RepeatableAttrTag<Option>;
    name?: string;
    disabled?: boolean;
    'on-change'?: (event: ChangeEvent) => void;
    onChange?: this['on-change'];
    'on-escape'?: () => void;
    onEscape?: this['on-escape'];
}

interface State {
    selectedIndex: number;
}

export default class extends Marko.Component<Input, State> {
    declare wasClicked: boolean;
    declare _activeDescendant: ReturnType<typeof createLinear>;

    get isAutoSelection() {
        return this.input.listSelection === 'auto';
    }

    elementScroll() {
        scroll(this.getEls('option')[this.state.selectedIndex] as HTMLElement);
    }

    handleChange(index: number, wasClicked: boolean) {
        if (this.state.selectedIndex !== index) {
            const option = (this.input.options as Option[])?.[index];
            if (option.disabled) {
                return;
            }
            this.state.selectedIndex = index;
            this.once('update', () => {
                this.emit('change', {
                    index,
                    wasClicked,
                    selected: [option.value],
                    el: this.getEls('option')[index] as HTMLOptionElement,
                } satisfies ChangeEvent);
            });
        }
    }

    handleClick(index: number) {
        this.handleChange(index, true);
    }

    handleMouseDown() {
        this.wasClicked = true;
    }

    handleKeyDown(originalEvent: KeyboardEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emit('escape');
        });

        eventUtils.handleActionKeydown(originalEvent, () =>
            this.handleChange(this._activeDescendant.index, false)
        );
    }

    handleListboxChange(event: CustomEvent) {
        const selectedIndex = parseInt(event.detail.toIndex, 10);
        const el = this.getEls('option')[selectedIndex];
        const wasClicked = this.wasClicked;

        scroll(el as HTMLElement);

        if (this.wasClicked) {
            this.wasClicked = false;
        }
        this.handleChange(selectedIndex, wasClicked);
    }

    onCreate() {
        this.state = {
            selectedIndex: -1,
        };
    }

    onInput(input: Input) {
        const { state } = this;
        input.options = input.options || ([] as any);
        state.selectedIndex = Math.max(
            -1,
            (input.options as Option[]).findIndex((option) => option.selected)
        );
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

    _setupMakeup() {
        const { input, state } = this;

        if ((input.options as Option[]).length && !input.disabled) {
            const container = this.getEl('options');
            const optionsContainer = this.getEl('options');
            this._activeDescendant = createLinear(
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
    }

    _cleanupMakeup() {
        if (this._activeDescendant) {
            this._activeDescendant.destroy();
            this._activeDescendant = undefined;
        }
    }
}
