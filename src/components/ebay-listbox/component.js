import { createLinear } from 'makeup-active-descendant';
import { scroll } from '../../common/element-scroll';
import * as eventUtils from '../../common/event-utils';

export default class {
    get isAutoSelection() {
        return this.input.listSelection === 'auto';
    }

    elementScroll() {
        scroll(this.getEls('option')[this.state.selectedIndex]);
    }

    handleChange(index, wasClicked) {
        if (this.state.selectedIndex !== index) {
            const option = this.input.options[index];
            if (option.disabled) {
                return;
            }
            this.state.selectedIndex = index;
            this.once('update', () => {
                this.emit('change', {
                    index,
                    wasClicked,
                    selected: [option.value],
                    el: this.getEls('option')[index],
                });
            });
        }
    }

    handleClick(index) {
        this.handleChange(index, true);
    }

    handleMouseDown() {
        this.wasClicked = true;
    }

    handleKeyDown(originalEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emit('escape');
        });

        eventUtils.handleActionKeydown(originalEvent, () =>
            this.handleChange(this._activeDescendant.index, false)
        );
    }

    handleListboxChange(event) {
        const selectedIndex = parseInt(event.detail.toIndex, 10);
        const el = this.getEls('option')[selectedIndex];
        const wasClicked = this.wasClicked;

        scroll(el);

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

    onInput(input) {
        const { state } = this;
        input.options = input.options || [];
        state.selectedIndex = Math.max(
            -1,
            input.options.findIndex((option) => option.selected)
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

        if (input.options.length && !input.disabled) {
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
