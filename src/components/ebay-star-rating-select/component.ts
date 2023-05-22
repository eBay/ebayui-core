export interface StarRatingEvent<T extends Event> {
    originalEvent: T;
    value: number;
}

export interface Input extends Omit<Marko.Input<"div">, `on${string}`> {
    value?: string | number;
    a11yStarText?: string;
    a11yText?: string;
    disabled?: boolean;
    "on-change"?: (event: StarRatingEvent<PointerEvent>) => void;
    onChange?: this["on-change"];
    "on-focus"?: (event: StarRatingEvent<FocusEvent>) => void;
    onFocus?: this["on-focus"];
    "on-keydown"?: (event: StarRatingEvent<KeyboardEvent>) => void;
    onKeydown?: this["on-keydown"];
}

export interface State {
    value: number;
}

export default class extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            value: 0,
        };
    }
    onInput(input: Input) {
        let value = parseInt(input.value as string) || 0;
        if (value > 5) {
            value = 0;
        }
        this.state.value = value;
    }
    emitEvent<T extends Event>(
        name: string,
        value: number,
        originalEvent: T,
        el: HTMLInputElement
    ) {
        if (!el.disabled) {
            this.state.value = value;
            this.emit(name, {
                originalEvent,
                value: value,
            } satisfies StarRatingEvent<T>);
        }
    }
}
