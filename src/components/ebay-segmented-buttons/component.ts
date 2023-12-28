export const validSizes = ["large"] as const;

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

interface SegmentedButtonsInput
    extends Omit<Marko.Input<"div">, `on${string}`> {
    buttons?: Marko.RepeatableAttrTag<SegmentedButton>;
    size?: (typeof validSizes)[number];
    "on-change"?: (event: SegmentedButtonsEvent) => void;
}

export interface Input extends WithNormalizedProps<SegmentedButtonsInput> {}

interface State {
    selectedIndex: number;
}

class SegmentedButtons extends Marko.Component<Input, State> {
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

export default SegmentedButtons;
