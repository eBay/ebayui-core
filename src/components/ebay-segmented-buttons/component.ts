export interface SegmentedButtonsEvent {
    originalEvent: PointerEvent;
    index: number;
    value?: string;
}

export interface SegmentedButton
    extends Omit<Marko.Input<"button">, `on${string}`> {
    selected?: boolean;
    icon?: Marko.Renderable;
}

export interface Input extends Omit<Marko.Input<"div">, `on${string}`> {
    buttons?: Marko.RepeatableAttrTag<SegmentedButton>;
    "on-change"?: (event: SegmentedButtonsEvent) => void;
    onChange?: this["on-change"];
}

interface State {
    selectedIndex: number;
}

export default class extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            selectedIndex: 0,
        };
    }

    onInput(input: Input) {
        let selectedIndex = (
            (input.buttons || []) as SegmentedButton[]
        ).findIndex((button) => button.selected);
        if (selectedIndex === -1) {
            selectedIndex = 0;
        }
        this.state.selectedIndex = selectedIndex;
    }

    onButtonClick(index: number, ev: PointerEvent) {
        if (index !== this.state.selectedIndex) {
            this.state.selectedIndex = index;
            this.emit("change", {
                index,
                value:
                    ((this.input.buttons as SegmentedButton[])[index] || {})
                        .value || undefined,
                originalEvent: ev,
            } satisfies SegmentedButtonsEvent);
        }
    }
}
