import Expander from 'makeup-expander';
import * as scrollKeyPreventer from 'makeup-prevent-scroll-keys';
import { Input as ListboxInput } from '../ebay-listbox/component';
import type Listbox from '../ebay-listbox/component';
import type { Option, ChangeEvent } from '../ebay-listbox/component';

export interface Input extends Omit<Marko.Input<'div'>, `on${string}`> {
    options?: ListboxInput['options'];
    name?: ListboxInput['name'];
    listSelection?: ListboxInput['listSelection'];
    prefixId?: string;
    unselectedText?: string;
    variant?: 'standard' | 'form';
    truncate?: boolean;
    fluid?: boolean;
    borderless?: boolean;
    floatingLabel?: boolean;
    disabled?: boolean;
    buttonName?: string;
    invalid?: boolean;
    prefixLabel?: string;
    collapseOnSelect?: boolean;
    'on-expand'?: () => void;
    onExpand?: this['on-expand'];
    'on-collapse'?: () => void;
    onCollapse?: this['on-collapse'];
    'on-change'?: (event: ChangeEvent) => void;
    onChange?: this['on-change'];
}

interface State {
    selectedIndex: number;
}

export default class extends Marko.Component<Input, State> {
    declare _expander: Expander;

    handleExpand() {
        (this.getComponent('options') as Listbox).elementScroll();
        this.emit('expand');
    }

    handleCollapse() {
        (this.getEl('button') as HTMLButtonElement).focus();
        this.emit('collapse');
    }

    handleListboxChange: Listbox['input']['onChange'] = (event) => {
        if (this.input.collapseOnSelect) {
            this._expander.expanded = false;
        }
        const selectedIndex = event.index;
        this.state.selectedIndex = selectedIndex;
        this.emit('change', event);
    };

    handleListboxEscape() {
        this._expander.expanded = false;
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
        input.collapseOnSelect = input.collapseOnSelect !== false;
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
        const { input } = this;

        if ((input.options as Option[]).length && !input.disabled) {
            const container = this.getEl('container');

            this._expander = new Expander(container, {
                autoCollapse: true,
                expandOnClick: true,
                simulateSpacebarClick: true,
                contentSelector: '.listbox-button__listbox',
                hostSelector: '.listbox-button__control',
                expandedClass: 'listbox-button--expanded',
                focusManagement: 'content',
            });

            scrollKeyPreventer.add(this.getEl('button'));
        }
    }

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.destroy();
            this._expander = undefined;
        }
    }
}
