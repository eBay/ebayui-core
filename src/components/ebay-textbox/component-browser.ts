import FloatingLabel from 'makeup-floating-label';

export interface TextboxEvent {
    originalEvent: Event;
    value: string;
}

export interface Input extends Omit<Marko.Input<'textarea'>, `on${string}`> {
    toJSON?: any;
    multiline?: boolean;
    type?: Marko.Input<'input'>['type'];
    inputSize?: 'regular' | 'large';
    fluid?: boolean;
    opaqueLabel?: boolean;
    floatingLabel?: string;
    prefixIcon?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    postfixIcon?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    invalid?: boolean;
    buttonAriaLabel?: string;
    'on-floating-label-init'?: () => void;
    'onFloating-label-init'?: this['on-floating-label-init'];
    'on-keydown'?: (event: TextboxEvent) => void;
    onKeydown?: this['on-keydown'];
    'on-keypress'?: (event: TextboxEvent) => void;
    onKeypress?: this['on-keypress'];
    'on-keyup'?: (event: TextboxEvent) => void;
    onKeyup?: this['on-keyup'];
    'on-change'?: (event: TextboxEvent) => void;
    onChange?: this['on-change'];
    'on-input-change'?: (event: TextboxEvent) => void;
    'onInput-change'?: this['on-input-change'];
    'on-focus'?: (event: TextboxEvent) => void;
    onFocus?: this['on-focus'];
    'on-blur'?: (event: TextboxEvent) => void;
    onBlur?: this['on-blur'];
    'on-invalid'?: (event: TextboxEvent) => void;
    onInvalid?: this['on-invalid'];
    'on-button-click'?: (event: TextboxEvent) => void;
    'onButton-click'?: this['on-button-click'];
}

export default class extends Marko.Component<Input> {
    declare _floatingLabel: FloatingLabel;

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    focus() {
        (this.getEl('input') as HTMLInputElement).focus();
    }

    _setupMakeup() {
        // TODO: makeup-floating-label should be updated so that we can remove the event listeners.
        // It probably makes more sense to just move this functionality into Marko though.
        if (this.input.floatingLabel) {
            if (this._floatingLabel) {
                this._floatingLabel.refresh();
                this.emit('floating-label-init');
            } else if (document.readyState === 'complete') {
                if (this.el) {
                    this._floatingLabel = new FloatingLabel(this.el);
                    this.emit('floating-label-init');
                }
            } else {
                this.subscribeTo(window).once('load', this._setupMakeup.bind(this));
            }
        }
    }

    forwardEvent(
        eventName: string,
        originalEvent: Event,
        el: HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    ) {
        this.emit(eventName, {
            originalEvent,
            value: (el || this.el?.querySelector('input, textarea'))?.value,
        } satisfies TextboxEvent);
    }
}
