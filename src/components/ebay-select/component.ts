import FloatingLabel from 'makeup-floating-label';

export interface Option extends Omit<Marko.Input<'option'>, `on${string}`> {
    optgroup?: string;
    text?: string;
}

export interface Input extends Omit<Marko.Input<'select'>, `on${string}`> {
    options?: Marko.RepeatableAttrTag<Option>;
    floatingLabel?: string;
    isLarge?: boolean;
    borderless?: boolean;
    'on-change'?: (event: { index: number; selected: string[]; el: HTMLOptionElement }) => void;
    onChange?: this['on-change'];
    'on-floating-label-init'?: () => void;
    'onFloating-label-init'?: this['on-floating-label-init'];
}

export interface State {
    selectedIndex: number;
}

export default class extends Marko.Component<Input, State> {
    declare _floatingLabel: FloatingLabel;

    get selectId() {
        return this.input.id || this.getElId('select');
    }

    handleChange(event: Event | { target: { selectedIndex: number } }) {
        const { selectedIndex } = event.target as HTMLSelectElement;
        const el = this.getEls('option')[selectedIndex];
        const option = this.input.options![selectedIndex];

        this.state.selectedIndex = selectedIndex;

        // TODO: we should not cast the selected value to a string here, but this is a breaking change.
        this.emit('change', {
            index: selectedIndex,
            selected: [String(option.value)],
            el,
        });
    }

    handleFloatingLabelInit() {
        this.emit('floating-label-init');
    }

    onCreate() {
        this.state = { selectedIndex: 0 };
    }

    onInput(input: Input) {
        const { state } = this;
        (input.options as any) = input.options || [];
        state.selectedIndex = Math.max(
            0,
            (input.options as Option[]).findIndex((option) => option.selected)
        );
    }

    onMount() {
        this._setupMakeup();

        const parentForm = this.el!.closest('form');
        if (parentForm) {
            const { selectedIndex } = document.getElementById(this.selectId) as HTMLSelectElement;
            this.subscribeTo(parentForm).on('reset', () => {
                this.handleChange({ target: { selectedIndex } });
            });
        }
    }

    onUpdate() {
        this._setupMakeup();
    }

    _setupMakeup() {
        // TODO: makeup-floating-label should be updated so that we can remove the event listeners.
        // It probably makes more sense to just move this functionality into Marko though.
        if (this.input.floatingLabel) {
            if (this._floatingLabel) {
                this._floatingLabel.refresh();
                this.handleFloatingLabelInit();
            } else if (document.readyState === 'complete') {
                if (this.el) {
                    this._floatingLabel = new FloatingLabel(this.el);
                    this.handleFloatingLabelInit();
                }
            } else {
                this.subscribeTo(window).once('load', this._setupMakeup.bind(this));
            }
        }
    }
}
