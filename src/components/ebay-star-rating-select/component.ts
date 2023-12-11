export interface StarRatingEvent<T extends Event> {
    originalEvent: T;
    value: number;
}

interface StarRatingSelectInput
    extends Omit<Marko.Input<"div">, `on${string}`> {
    value?: string | number;
    "a11y-star-text"?: string;
    "a11y-text"?: string;
    disabled?: boolean;
    "on-change"?: (event: StarRatingEvent<PointerEvent>) => void;
    "on-focus"?: (event: StarRatingEvent<FocusEvent>) => void;
    "on-keydown"?: (event: StarRatingEvent<KeyboardEvent>) => void;
}

export interface Input extends WithNormalizedProps<StarRatingSelectInput> {}

export interface State {
    value: number;
}

class StarRating extends Marko.Component<Input, State> {
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
        el: HTMLInputElement,
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

export default StarRating;
